---
layout: post
title: Tic Tac Toe
published: false
hn: false
tags:
    - code
    - python
    - abstract game
    - ai
---

### An Introduction to Artificial Intelligence ###

## What is Tic Tac Toe? ##

Tic Tac Toe is simply an awesome game. (Although I do have to say that I really think its original name - **noughts and crosses** - is a whole lot cooler). It is simple and easy to play wherever you are. The success of this simple but yet intriguing game is quite staggering and even let to some scientists looking at it. Who knew that those 4 lines that people draw on a piece of paper would gather such an international attention.

There is some debate on where this game originated; theories are ranging from ancient Egypt to the Roman Empire. Luckily the guy decided not to patent it.

### The Stats ###

One could assume that there are `9!` different possible game states for Tic Tac Toe. Players would stop playing after there would be a winner so we have to discard those states. Instead of the full `9! = 362,880` states we therefore only have 255,168 possible game states. 

- 91 (player 1)
- 44 (player 2)
- 3 (tie)

If we assume symmetries (discarding states already present by rotations or reflections) this changes slightly:

- 131,184 (1st player)
- 77,904 (2nd player)
- 46,080 (tie)

This might seem like a lot but for a Computer this is a joke.

## A little bit of Game Theory ##

Mathematics has a really interesting branch called Game Theory. This is defined as the study of "strategic decision making". It even plays a very important role in economics, since that too is often about making different decisions. Some of you might have seen the movie [A Beautiful Mind](sdfd) about the Life of the schizophrenic John Nash who ended up winning a Noble Prize regarding his work in the field of Game Theory. 

### So how is this important for Tic Tac Toe? ###

Tic Tac Toe is something called a zero-sum game. A game where the outcome always sums up to zero in the end. This is furthermore a game of perfect information where the game state is completely open to the player meaning he knows everything about it, no hidden cards nothing like that. Therefore there is a way that a player can play it perfectly since no luck is involved. (Note although he can play perfectly does not mean in general he can win). For this purpose this means there will always be a tie. 

## Perfect Play ##

To develop an AI for Tic Tac Toe it has to be able to decide what to do next. It has to know how to play perfectly. We don't want the computer to just play randomly after all do we?

<img src="http://imgs.xkcd.com/comics/tic_tac_toe.png" alt="">

*[The famous Tic Tac Toe xkcd. (#832)](http://xkcd.com/832/)*

## Artificial Intelligence 101 ##

### What would a human do? ###

When every single one of us plays Tic Tac Toe it is easy to say what goes on in our minds:
**We look at the board and try to predict the future. We try to find the move that will be best for us and worst for our opponent.**

Essentially the computer does the exact same thing. It has one important advantage though it can see further into the future given enough computing power. We could make the computer look far enough so it could see every possible move. This is how the computer can play perfectly and this is how many AI's related to abstract games (chess, connect four, …) are implemented.

### The Setup ###

First of all we need to represent the current game state.
I created a simple python class for this purpose. It basically follows the following outline:

- `available_moves()`: all empty spaces
- `availbale_combos()`: all the spaces not taken by the opponent
- `complete()`: is the game over
- `winner()`: is there a winner
- `get_squares(player)`: all squares of a player
- `make_move(position, player)`: place a mark on the board
- `get_enemy(player)`: get the opponent player marker

{% highlight python tabsize=2 %}
class Tic(object):
    winning_combos = (
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6])

    winners = ('X-win', 'Draw', 'O-win')

    def __init__(self, squares={}):
        self.squares = squares
        for i in range(9):
            if self.squares.get(i) is None:
                self.squares[i] = None

    def available_moves(self):
        return [k for k, v in self.squares.iteritems() if v is None]

    def available_combos(self, player):
        return self.available_moves() + self.get_squares(player)

    def complete(self):
        if None not in [v for v in self.squares.itervalues()]:
            return True
        if self.winner() != None:
            return True
        return False

    def X_won(self):
        return self.winner() == 'X'

    def O_won(self):
        return self.winner() == 'O'

    def tied(self):
        return self.complete() == True and self.winner() is None

    def winner(self):
        for player in ('X', 'O'):
            positions = self.get_squares(player)
            for combo in self.winning_combos:
                win = True
                for pos in combo:
                    if pos not in positions:
                        win = False
                if win:
                    return player
        return None

    def get_squares(self, player):
        return [k for k, v in self.squares.iteritems() if v == player]

    def make_move(self, position, player):
        self.squares[position] = player

def get_enemy(player):
    if player == 'X':
        return 'O'
    return 'X'
{% endhighlight %}

### The Algorithm ###

So here comes what this whole article is all about. Creating an algorithm that is perfect and will never loose. This algorithm will walk through all the different game states. We have to carefully craft it so it always selects the best move regardless of whether the AI or the opponent is placing his mark.

#### Minimax ####

The Minimax algorithm follows a simple rule:

> Minimizing the possible loss in a worst case scenario.

Or in everyday language: making the best next move.
This algorithm is especially helpful in zero-sum games like Tic Tac Toe.

Minimax basically recursively steps through all the steps. Each of the states that is being traversed is going to receive a value based on how good or bad this state is for the player. In case of Tic Tac Toe there aren't many possibilities so we can just iterate through all the possibility and see whether a chain of steps lead to a win, a tie or a loss of the player. All the different states are going to be the nodes in our game tree.

{% highlight python tabsize=2 %}
def minimax(node, player):
  if node.complete():
    if node.X_won():
      return -1
    elif node.tied():
      return 0
    elif node.O_won():
      return 1
		best = None
  for move in node.available_moves():
    node.make_move(move, player)
    val = self.minimax(node, get_enemy(player), alpha, beta)
    node.make_move(move, None)
  	if player == 'O':
  		if val > best:
  			best = val
  	else:
  		if val < best:
  			best = val
  	return best
{% endhighlight %}

The idea is pretty simple. The algorithm evaluates the current position and processes it step by step:

1. Check if the node is completed. If yes, return the winner.
2. Recursively call minimax with all possible moves.
3. If it is the computer's turn return the highest result, otherwise the lowest.

And that is all there is to it. The Minimax algorithm is one of the most straightforward algorithm and sometimes it is implemented in two different functions. One of these would do the minimizing and the other one would do the maximizing. 

#### Alpha-Beta Pruning ####

Alpha-Beta Pruning is a simple but significant expansion of the minimax algorithm that can sometimes drastically improve performance. This might not be a big problem with Tic Tac Toe cause of the small searchspace but I will dive into it anyway since this is a easy example.

The basic idea behind both algorithms is the same. The game states are being recursivly iterated and the best state is found. The Advantage is that branches of the search tree can be eliminated and valuable comuting power could be saved. The algorithm will focus on the *better* parts of the tree. If one move is worse than a previous one the algorithm is going to simply break. Therefore there need to be two variables that keep constant track of the upper and lower cutoff limits: Alpha and Beta in this case.

{% highlight python tabsize=2 %}
def alphabeta(node, player, alpha, beta):
  if node.complete():
    if node.X_won():
        return -1
    elif node.tied():
        return 0
    elif node.O_won():
        return 1
  for move in node.available_moves():
      node.make_move(move, player)
      val = self.alphabeta(node, get_enemy(player), alpha, beta)
      node.make_move(move, None)
      if player == 'O':
          if val > alpha:
              alpha = val
          if alpha >= beta:
             return beta
      else:
          if val < beta:
              beta = val
          if beta <= alpha:
              return alpha
  if player == 'O':
      return alpha
  else:
      return beta
{% endhighlight %}

## [The Website](http://tic.cwoebker.com) ##



## The Result ##



## Post Scriptum ##

Feel free to `<iframe>` this whereever you want.
Everyone should play some Tic Tac Toe from day to day.