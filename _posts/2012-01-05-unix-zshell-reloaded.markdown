---
layout: post
title: Unix ZSHell Reloaded
published: true
hn: false
tags:
    - zsh
    - terminal
---

In the good old days, when there were no such things as Graphical User Interfaces a computer could only be used with a Shell command-line interface. This system was intensively refined and even today can still be used really efficiently to accomplish some tasks. One of the major initial shells was the `Bourne-Shell` that uses the short abbreviation `sh`. It was used widely and at one point it received an update called `Bourne-Again Shell` - `bash`. Bash is the standard on many operating systems today. Although it is so popular there have been some other contestants which have even more features. One of them is `zsh` the `Z-Shell`.

**Problem:**

*It is not always easy to tinker around with these shells and set them up as you like them to be.*

## Oh-My-ZSH

[oh-my-zsh] which was written by [Robby Russell] tries to solve this problem and in my opinion, succeeds in doing so. It is easy to install, use and customize and makes everyday working with a shell a charm. Unfortunately

### Installation

Installation is as simple as a one-liner:

{% highlight bash %}
curl -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | sh
{% endhighlight %}

Hopefully you will get to see this awesome piece of ASCII art at one point:

	         __                                     __
 	  ____  / /_     ____ ___  __  __   ____  _____/ /_
 	 / __ \/ __ \   / __ `__ \/ / / /  /_  / / ___/ __ \
	/ /_/ / / / /  / / / / / / /_/ /    / /_(__  ) / / /
	\____/_/ /_/  /_/ /_/ /_/\__, /    /___/____/_/ /_/
	                        /____/

At one point this will ask you for an admin password. It needs that to change your default shell to zsh. If you have a brew version of zsh installed this will not succeed since the chsh (change shell) command only allows system shells. (At least it did so for me.) If you run into the same problem just quickly type this into your current shell.

{% highlight bash %}
chsh /bin/zsh
{% endhighlight %}


And voilà! The next time you start a terminal or open a new tab you are good to go.

### Customization

In your home-folder you will now find your brand-new `.zshrc` configuration file.

{% highlight bash %}
# Path to your oh-my-zsh configuration.
ZSH=$HOME/.oh-my-zsh

# Set name of the theme to load.
# Look in ~/.oh-my-zsh/themes/
# Optionally, if you set this to "random", it'll load a random theme each
# time that oh-my-zsh is loaded.
ZSH_THEME="robbyrussell"

# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

# Set to this to use case-sensitive completion
# CASE_SENSITIVE="true"

# Comment this out to disable weekly auto-update checks
# DISABLE_AUTO_UPDATE="true"

# Uncomment following line if you want to disable colors in ls
# DISABLE_LS_COLORS="true"

# Uncomment following line if you want to disable autosetting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment following line if you want red dots to be displayed while waiting for completion
# COMPLETION_WAITING_DOTS="true"

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
plugins=(git)

source $ZSH/oh-my-zsh.sh

# Customize to your needs...
{% endhighlight %}

This file is pretty self explanatory. Two of the most important customization options are themes and plugins. The creator's theme is the default when first installed and only one plugin is active.

For plugins I suggest you walk through the [plugin directory] or the [plugin wiki] and check out what is available and just add whatever you think is needed to your configuration file.

#### Extending Oh My ZSH

Go to your `~/.oh-my-zsh` directory. Create a new directory inside of the `custom` directory called `plugins`. Here we can create any custom plugins we want. Create a new folder called `test` and inside of it `touch` a new file called `test.plugin.zsh`.

{% highlight bash %}
c() { cd ~/some/important/dir/$1; }
_c() { _files -W ~/some/important/dir -/; }
compdef _c c
{% endhighlight %}

This will add the `c` command that can quickly `cd` into an **important** directory. The second line even makes auto completion possible, it will list all the directories that are so important to you.

#### Theming your ZSHELL

For now lets look at [Robby Russell]'s default theme.

{% highlight bash %}
PROMPT='%{$fg_bold[red]%}-> %{$fg_bold[green]%}%p %{$fg[cyan]%}%c %{$fg_bold[blue]%}$(git_prompt_info)%{$fg_bold[blue]%} % %{$reset_color%}'

ZSH_THEME_GIT_PROMPT_PREFIX="git:(%{$fg[red]%}"
ZSH_THEME_GIT_PROMPT_SUFFIX="%{$reset_color%}"
ZSH_THEME_GIT_PROMPT_DIRTY="%{$fg[blue]%}) %{$fg[yellow]%}x%{$reset_color%}"
ZSH_THEME_GIT_PROMPT_CLEAN="%{$fg[blue]%})"
{% endhighlight %}

It is pretty basic:

<img src="http://img.skitch.com/20091228-qcke3kuenp61cwcnwqcd724pr7.jpg" alt="">

##### Explanation

{% highlight bash %}
%{$fg_bold[red]%} PLACE HOLDER
{% endhighlight %}

This would prompt `PLACE HOLDER` in red.

{% highlight bash %}
%{$fg[cyan]%} %c
{% endhighlight %}

With the `%c` option you can display the current directory. Loot at some of the [Prompt Options] that are available.

{% highlight bash %}
ZSH_THEME_GIT_PROMPT_PREFIX="git:(%{$fg[red]%}"
ZSH_THEME_GIT_PROMPT_SUFFIX="%{$reset_color%}"
ZSH_THEME_GIT_PROMPT_DIRTY="%{$fg[blue]%}) %{$fg[yellow]%}x%{$reset_color%}"
ZSH_THEME_GIT_PROMPT_CLEAN="%{$fg[blue]%})"
{% endhighlight %}

These variables are for the `git_prompt_info` customization. They work exactly like the rest of the Prompt.

Last but not least you can reset everything.

{% highlight bash %}
%{$reset_color%}
{% endhighlight %}

Make sure to check out my post about [ANSI Escape Codes](/posts/ansi-escape-codes)!

#### And now?

In the end you can customize your shell however you want. If you need some inspiration and help look at both the [themes wiki] and the [themes directory]. You can get some ideas of what you want to do and of how to add some other information. Look at some of the [Prompt Options] to add more system info.

### Usage

A quick list of features:

- **Auto completion** everywhere thanks to the many plugins:
	- Just press tab!
- **Double Asterix** for deeply nested search
	- `ls ~/**/*.py` all python files in your home directory
- **Filtered History** for quicker history searching
	- `$ l` pressing the up button now will only result in elements starting with l

## End Note

**This is a call to every shell user: Change now! Because ZSH will make your life a lot easier.**

[oh-my-zsh]: https://github.com/robbyrussell/oh-my-zsh
[Robby Russell]: https://github.com/robbyrussell/
[plugin directory]: https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins
[themes directory]: https://github.com/robbyrussell/oh-my-zsh/tree/master/themes
[themes wiki]: https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
[plugin wiki]: https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins
[Prompt Options]: http://www.acm.uiuc.edu/workshops/zsh/prompt/escapes.html
