---
layout: post
title: ANSI Escape Codes
published: true
hn: false
tags: 
    - ansi
    - color
    - terminal
    - programming
---

### Background

Recentlty while working on a project I figured I should prettify my ouput a little bit.
I tried to implement something that works with the python logging module. Since I personally think
former is to complicated for simple printing output to the screen I wrote a simple module myself.
After all this I looked around the web, I found a bunch of scripts and alike that implemented it but nothing that gave a nice and simple explanations.

## What are ANSI Codes?

ANSI (American national standard institute) codes, or escape sequences are codes, meaning characters, that are part of the printed text. Instead of being displayed like every other characters they are being recognzied by termainals and used to change formatting.

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

	BOLD = '1;%s'
	FAINT = '2;%s' # Not widely supported
	ITALIC = '3;%s'
	UNDERLINE = '4;%s'
	SLOW_BLINK = '5;%s'
	FAST_BLINK = '6;%s' # Not widely supported

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

	@classmethod
	def decorate(cls, format, msg):
		return '%s%s%s' % (format, msg, cls.ENDC)
	
	 ### EXAMPLE USE ###

	 @classmethod
	 def white_bold_underlined(cls, msg)
	 	return cls.decorate(cls.ESCAPE % cls.BOLD % cls.UNDERLINE % cls.COLOR['white'] ,msg)

{% endhighlight %}

## Explanation

{% highlight python %}
ESCAPE = '\033[%sm'
ENDC = ESCAPE % '0'
{% endhighlight %}

This is the core of everything. The Escape Sequence introduces the new formatting and the `ENDC` resets everything again.

{% highlight python %}
@classmethod
def decorate(cls, format, msg):
	return '%s%s%s' % (format, msg, cls.ENDC)
{% endhighlight %}

Here we simple join all the parts together:

- Formatting Sequence
- Actual Text
- Reseting Sequence

{% highlight python %}
BOLD = '1;%s'
FAINT = '2;%s' # Not widely supported
ITALIC = '3;%s'
UNDERLINE = '4;%s'
SLOW_BLINK = '5;%s'
FAST_BLINK = '6;%s' # Not widely supported
{% endhighlight %}

Here we set up all the different options that we can reuse later.
Note that some of them aren't supported very well since its always to the terminal application developers to implement such features.

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

This is just a simple dictinoary containing the color names and the codes that belong to them.

## Usage

In the end the usage is pretty simple after the setup done before.

{% highlight python %}
@classmethod
def white_bold_underlined(cls, msg)
 	return cls.decorate(cls.ESCAPE % cls.BOLD % cls.UNDERLINE % cls.COLOR['white'] ,msg)
{% endhighlight %}

This function can be used to print a bold white and underlined text to the terminal other formatting options can be achieved exactly in the same way.
