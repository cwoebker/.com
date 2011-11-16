---
layout: article
title: Fourier Series
external: [flexnav]
published: 2011-11-14
edited: 2011-11-14
---

Basically the Taylor Series is a function represented as an infinite sum of terms that are ordered like an infinite polynomial.

## Background

Published in 1807 by Joseph Fourier

* [Mémoire sur la propagation de la chaleur dans les corps solides](http://en.wikipedia.org/wiki/Mémoire_sur_la_propagation_de_la_chaleur_dans_les_corps_solides)

* Joseph Fourier:
  * Born 21 March 1768
    * Auxerre, Burgundy, Kingdom of France
    * (now) Yonne, France   
  * Death 16 May 1830 (aged 62)
    * London, England
  * French mathematician and physicist
  * best known for Fourier series
    * applications to heat transfer and vibrations
  * Fourier transform and Fourier's Law honored to him
  * credited with discovery of the greenhouse effect

## The Idea

`\[
\varphi(y)=a\cos\frac{\pi y}{2}+\dot{a}\cos 3\frac{\pi y}{2}+\ddot{a}\cos5\frac{\pi y}{2}+\cdots
\]`

Multiplying both sides by `\(\cos(2k+1)\frac{\pi y}{2}\)`, and then integrating from `\(y=-1\)` to `\(y=+1\)` yields:

`\[
a_k=\int_{-1}^1\varphi(y)\cos(2k+1)\frac{\pi y}{2}\,dy
\]`

* Joseph Fourier, [Mémoire sur la propagation de la chaleur dans les corps solides](http://en.wikipedia.org/wiki/Mémoire_sur_la_propagation_de_la_chaleur_dans_les_corps_solides). (1807)

The core idea here is, just like the Taylor Series, to be able to write all functions in one common, differientiable and generic way.

## The Concept

Using the Fourier Series one can represent complex function as a simple chain of powers, just like in a polynomial.
This can drastically improve the way we handle certain functions.

### Fourier Series

So the Fourier Series is basically this:

`\[
\varphi(x)=\sum_{n=0} ^ {\infty} 
a_n\sin\frac{2\pi x n}{T} + b_n\cos\frac{2\pi x n}{T}
\]`

When writing the function out we can ignore the first `\(sin\)` term since its `\(0\)`. And `\(cos\)` ends up being 1 wherefore we only get the `\(b_0\)` constant.

`\[
\varphi(x)=b_0+ a_1 \sin(\frac{2\pi x}{T}) + b_1 \cos(\frac{2\pi x}{T}) + a_2 \sin(\frac{4\pi x}{T}) + b_2 \cos(\frac{4\pi x}{T}) + \cdots 
\]`

When plugging in `\(0\)` we get an interresting result, that gets rid of many of those terms.

`\[
\varphi(0)=b_0+ a_1 \sin(0) + b_1 \cos(0) + a_2 \sin(0) + b_2 \cos(0) + \cdots 
\]`

`\[
\varphi(0)=b_0 + b_1 + b_2 + \cdots = \sum_{n=0}^{\infty} b_n
\]`

### Orthogonality of periodic functions

See Lebesgue Measure

#### cos(x) * cos(x)

<script type="text/javascript" id="WolframAlphaScript360882f81985e81cb99c1fe7acff4a06" src="http://www.wolframalpha.com/widget/widget.jsp?id=360882f81985e81cb99c1fe7acff4a06"></script>

All the values that can be put in will result in the area under the curve being 0, but when using the same values the area becomes some certain number.

#### sin(x) * cos(x)

<script type="text/javascript" id="WolframAlphaScript9ea68e97266389f3fe227b9c0e0084f3" src="http://www.wolframalpha.com/widget/widget.jsp?id=9ea68e97266389f3fe227b9c0e0084f3"></script>

### Finding the Terms

### Non-Periodic Functions

The Fourier Series, is a series based on preiodic fucntions: `\(\sin\)` and `\(\cos\)`. An interresting idea is that although these function are periodic we can represent non-periodic functions with them. Some might say right now that this is impossible because its composed of functions that repeat and therefore the Fourier Series of a function should repeat too.

The trick is that we can make the fourier series repeat at `\(+\infty\)` and `\(-\infty\)`. Therefore it wouldn't actually repeat. At least kind of. A nice mathematic hack. ;-)

Look in the next section for an example of this.

### Examples

Interresting examples and their real-world application.



## Sources

* http://en.wikipedia.org/wiki/Joseph_Fourier
* http://en.wikipedia.org/wiki/Fourier_series