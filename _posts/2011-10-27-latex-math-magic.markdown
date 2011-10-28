---
layout: post
title: LaTeX Math Magic
tags:
    - jekyll
    - latex
    - MathJax
    - markdown
---

So here comes, as promised, my tutorial to using LaTeX in your awesome jekyll-powered blog. 

Since many people started using Jekyll to power there blogs recently I figured it might be a good idea to share how I got my `\( \LaTeX \)`, which some of you  might want, to work.

## My Setup

For this blog I am using:

* [Github Pages]
* [Jekyll]
* [Markdown]
* [rdiscount]
* [Markdown]

As far as the normal Jekyll setup goes you can read my earlier [post](/posts/jekyll-blogging).

The approach I am taking to solving the LaTeX & Markdown problem is highlt based on another [post](http://doswa.com/2011/07/20/mathjax-in-markdown.html).

## So how does this work?

This post basically works with multiple layers:

1. Right now I am using [rdiscount] which is an implementation for [John Gruber's markdown][Markdown]. For the ones interrested I am writing this with [Mou](http://mouapp.com/) which is an amazing Mac markdown editor. So all the normal markdown rules apply. In the end markdown is going to transform this text into valid html code.
2. The next layer is Liquid which is part of Jekyll itself. It allows you to put fancy tags into your code for example: `{{ post.title }}` this would take the current's post title and just display it. Nice and simple.
3. And know we are in plain html and css that can be interpreted by most browsers. This is where the `MathJax` comes into play.

## So what's the problem?

All these parts work pretty nicely together, except…

**Markdown messes up MathJax**

or as the original author of this problem said.

> The main issue stemmed from Markdown not providing a way to temporarily escape from its text transformations, so some LATEX would get interpreted as Markdown.

This means that in the end we wouldn't get our normal LaTeX output. The markdown interprets the LaTeX before MathJax can do that.

## So how can I fix this?

The most obvious way to fix this is probaly to *tell markdown not to interpret the latex* with some kind of `raw` tag. This would probaly be the nicest solution. 

Unfortunately as far as I know this is not possible.

##### ok that was a lie

You could use: `[](raw: put latex here)`
and this even works… partly…

the problem with this solution is that the markdown will interpret the first `)` as the closing tag for our raw-statement. So unless you promise to never ever use `)` in your LaTeX this is probaly not the best idea.

Another idea is to use code blocks. So either using the 4+spaces before what you write or using `acute` symbols: `.

This works way better except that MathJax is skipping `<code>` tags by default since it doesn't want to convert code that it shouldn't.

## This is where we start fixing stuff

**Yes, you could have skipped everyting before this**

So somewhere in your main layout file you have to add a little javascript bounded by the usual `<script>…</script>` tags:

{% highlight javascript %}
    MathJax.Hub.Config({
      tex2jax: {
        skipTags: ['script', 'noscript', 'style', 'textarea', 'pre']
      }
    });
{% endhighlight %}

Additionally we have to tell MathJax to ignore non-latex code-bloks or normal code blocks:

{% highlight javascript %}
    MathJax.Hub.Queue(function() {
        var all = MathJax.Hub.getAllJax(), i;
        for(i=0; i < all.length; i += 1) {
            all[i].SourceElement().parentNode.className += ' has-jax';
        }
    });
{% endhighlight %}




[Markdown]: http://daringfireball.net/projects/markdown/
[MathJax]: http://www.mathjax.org/
[Github Pages]: http://pages.github.com/
[Jekyll]: https://github.com/mojombo/jekyll
[rdiscount]: https://github.com/rtomayko/rdiscount