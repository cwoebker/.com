---
layout: post
title: LaTeX Math Magic
published: true
hn: http://news.ycombinator.com/item?id=3431867
external: [latex]
tags:
    - jekyll
    - latex
---

So here comes, as [promised](/posts/jekyll-blogging/#n7), my tutorial to using LaTeX in your awesome jekyll-powered blog.

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
2. The next layer is Liquid which is part of Jekyll itself. It allows you to put fancy tags into your code for example: `{ { post.title } }` this would take the current's post title and just display it. Nice and simple.
3. And know we are in plain html and css that can be interpreted by most browsers. This is where the `MathJax` comes into play.

## So what's the problem?

All these parts work pretty nicely together, except that **Markdown messes up MathJax!**

The main problem here is that some of the Latex would be interpreted as Markdown. This means that in the end we wouldn't get our normal LaTeX output. The markdown interprets the LaTeX before MathJax can do that.

## So how can I fix this?

The most obvious way to fix this is probably to tell markdown not to interpret the latex with some kind of `raw` tag. This is the nicest solution I could think of at that point.

You could use: `[](raw: put latex here)`
But this only works partly.

The problem with this solution is that the markdown will interpret the first `)` as the closing tag for our raw-statement. So unless you promise to never ever use `)` in your LaTeX this is not going to be the best solution.

Another idea is to use code blocks. So either using at least 4 spaces before you write something or using the `acute` symbol: \`.

This works way better except that MathJax is skipping `<code>` tags by default since it doesn't want to convert code that it shouldn't.

### This is where we start fixing stuff

**Yes, you could have skipped everything before this**

So somewhere in your main layout file you have to add a little javascript code bounded by the usual `<script>` tag:

{% highlight javascript %}
    MathJax.Hub.Config({
      tex2jax: {
        skipTags: ['script', 'noscript', 'style', 'textarea', 'pre']
      }
    });
{% endhighlight %}

Additionally we have to tell MathJax to ignore non-latex code-blocks or normal code blocks:

{% highlight javascript %}
    MathJax.Hub.Queue(function() {
        var all = MathJax.Hub.getAllJax(), i;
        for(i=0; i < all.length; i += 1) {
            all[i].SourceElement().parentNode.className += ' has-jax';
        }
    });
{% endhighlight %}

At his point all our latex code blocks are going to have the `has-jax` string in their class name. Therefore we can apply some simple styling to remove the changes that markdown automatically makes to it:

{% highlight css %}
code.has-jax {font: inherit; font-size: 100%; background: inherit; border: inherit;}
{% endhighlight %}

### Examples

These examples have been taken from the MathJax [Demo Page](http://mathjax.org/demos/tex-samples/)
And voilà they all work!

#### The Lorentz Equations

`\[
\begin{aligned}
\dot{x} & = \sigma(y-x) \\
\dot{y} & = \rho x - y - xz \\
\dot{z} & = -\beta z + xy
\end{aligned}
\]`

#### The Cauchy-Schwarz Inequality

`\[
\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
\]`

#### A Cross Product Formula

`\[
\mathbf{V}_1 \times \mathbf{V}_2 =  \begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{\partial X}{\partial u} &  \frac{\partial Y}{\partial u} & 0 \\
\frac{\partial X}{\partial v} &  \frac{\partial Y}{\partial v} & 0
\end{vmatrix}
\]`

#### The probability of getting k heads when flipping n coins is

`\[
P(E)   = {n \choose k} p^k (1-p)^{ n-k}
\]`

#### An Identity of Ramanujan

`\[
\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} =
1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}}
{1+\frac{e^{-8\pi}} {1+\ldots} } } }
\]`

#### A Rogers-Ramanujan Identity

`\[
1 +  \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots =
\prod_{j=0}^{\infty}\frac{1}{(1-q^{5j+2})(1-q^{5j+3})},
\quad\quad \text{for $|q|<1$}.
\]`

#### Maxwell's Equations

`\[
\begin{aligned}
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} & = \frac{4\pi}{c}\vec{\mathbf{j}} \\   \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\
\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\
\nabla \cdot \vec{\mathbf{B}} & = 0 \end{aligned}
\]`

## Is this it?

Although I have this really bad feeling that I forgot something essential I think this should be it. At least I can't remember having made any other changes to my files.

### It doesn't work yet ?!?

Triple check the code.

Otherwise just send me an email, maybe I can help.

[Markdown]: http://daringfireball.net/projects/markdown/
[MathJax]: http://www.mathjax.org/
[Github Pages]: http://pages.github.com/
[Jekyll]: https://github.com/mojombo/jekyll
[rdiscount]: https://github.com/rtomayko/rdiscount
