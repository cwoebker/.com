---
layout: post
title: ANSI Escape Codes
published: true
hn: false
tags:
    - ANSI
    - color
    - terminal
    - programming
---

### Background

Recently while working on a project I figured I should prettify my output a little bit. I tried to implement something that works with the python logging module. Since I personally think
former is to complicated for simple printing output to the screen I wrote a simple module myself. After all this I looked around the web, I found a bunch of scripts and alike that implemented it but nothing that gave a nice and simple explanation.

## What are ANSI Codes?

ANSI (American national standard institute) codes, or escape sequences are codes, meaning characters, that are part of the printed text. Instead of being displayed like every other characters they are being recognized by terminals and used to change formatting.

Some options include:

- Bold/Faint
- Italics
- Underline
- Blink
- Fonts
- Color
- Background Color

## What to do

This is going to be really basic for easy formatting.
I am going to cover SGR, Select Graphic Rendition.
Initially you need to tell the terminal that you are going to use an ANSI Escape Code.

- CSI n [;k] m

So here comes a small python module that implements all of this.

{% highlight python %}
class ANSIEscapeCodes(object):
    ESCAPE = '\033[%sm'
    ENDC = ESCAPE % '0'

    BOLD = '1;'
    FAINT = '2;' # Not widely supported
    ITALIC = '3;'
    UNDERLINE = '4;'
    SLOW_BLINK = '5;'
    FAST_BLINK = '6;' # Not widely supported

    COLORS = {
        'black': '30',
        'red': '31',
        'green': '32',
        'yellow': '33',
        'blue': '34',
        'magenta': '35',
        'cyan': '36',
        'white': '37',
    }

    def decorate(self, format, msg):
        format_sequence = self.ESCAPE % format
        return format_sequence + msg + self.ENDC

    ### EXAMPLE USE ###

    def white_bold_underlined(self, msg):
        return self.decorate(self.BOLD + self.UNDERLINE + self.COLOR['white'], msg)

{% endhighlight %}

## Explanation

{% highlight python %}
ESCAPE = '\033[%sm'
ENDC = ESCAPE % '0'
{% endhighlight %}

This is the core of everything. The Escape Sequence introduces the new formatting and the `ENDC` resets everything again.

{% highlight python %}
def decorate(self, format, msg):
    format_sequence = self.ESCAPE % format
    return format_sequence + msg + self.ENDC
{% endhighlight %}

Here we simple join all the parts together:

- Formatting Sequence
- Actual Text
- Reseting Sequence

{% highlight python %}
BOLD = '1;'
FAINT = '2;' # Not widely supported
ITALIC = '3;'
UNDERLINE = '4;'
SLOW_BLINK = '5;'
FAST_BLINK = '6;' # Not widely supported
{% endhighlight %}

Here we set up all the different options that we can reuse later.
Note that some of them aren't supported very well since its always up to the terminal application to implement these features.

{% highlight python %}
COLORS = {
    'black': 30,
    'red': 31,
    'green': 32,
    'yellow': 33,
    'blue': 34,
    'magenta': 35,
    'cyan': 36,
    'white': 37,
}
{% endhighlight %}

This is just a simple dictionary object containing the color names and the codes that are associated to them.

## Usage

In the end the usage is pretty simple after the setup from before.

{% highlight python %}
def white_bold_underlined(self, msg):
    return self.decorate(self.BOLD + self.UNDERLINE + self.COLOR['white'], msg)
{% endhighlight %}

This function can be used to print bold, white and underlined text in the terminal. Additional formatting options can be achieved exactly in the same way.

# Why use them?

Shells don't have to be plain white and black.
ANSI Formatting can help command line applications to display information better and more efficiently.

# And now? #

If you want to know more than this Google is your friend. I hope this gives you a background on the topic. There is a lot of material out there and a lot to learn.

