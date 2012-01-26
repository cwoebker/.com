---
layout: article
title: Euler's Formula
external:
published: 2012-01-26
edited: 2012-01-26
---

Euler's Formula is one of the most important formula's in mathematics since it allows the simplification of many different ideas.

## Background

Named after Leonhard Euler:

* Born 15 April 1707
  * Basel, Switzerland
* Death 18 September 1783 (aged 76)
  * St. Petersburg, Russia
* Swiss mathematician and physicist
* Many important discoveries from infintesimal calculus to graph theory
  * Especially in mathematical analysis - Euler's formula
  * Furthermore in many different physics and astronomy related topics

## The Idea

For any real number x:

`\[
e^{i x} = \cos{c} + i \sin{x}
\]`

It established a connection between the complex exponential function and the trigonometric funtions.

## The Proof

The Maclaurin Series (A special case of the [Taylor Series](/scientia/math/taylor-series)) of the exponential function is:

`\[
e^{x} = \sum^{\infty}_{n=0} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots\text{ for all } x\!
\]`

With the basic facts about different powers of i:

`\[
\begin{align}
i^0 &{}= 1, \quad &
i^1 &{}= i, \quad &
i^2 &{}= -1, \quad &
i^3 &{}= -i, \\
i^4 &={} 1, \quad &
i^5 &={} i, \quad &
i^6 &{}= -1, \quad &
i^7 &{}= -i,
\end{align}
\]`

And the [Taylor Series](/scientia/math/taylor-series) of `\(\sin\)` and `\(\cos\)`:

`\[
\sin x = \sum^{\infty}_{n=0} \frac{(-1)^n}{(2n+1)!} x^{2n+1} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots\text{ for all } x\
\]`

`\[
\cos x = \sum^{\infty}_{n=0} \frac{(-1)^n}{(2n)!} x^{2n} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots\text{ for all } x\!
\]`

We can proove:

`\[\begin{align}
e^{ix} &{}= 1 + ix + \frac{(ix)^2}{2!} + \frac{(ix)^3}{3!} + \frac{(ix)^4}{4!} + \frac{(ix)^5}{5!} + \frac{(ix)^6}{6!} + \frac{(ix)^7}{7!} + \frac{(ix)^8}{8!} + \cdots \\
&{}= 1 + ix - \frac{x^2}{2!} - \frac{ix^3}{3!} + \frac{x^4}{4!} + \frac{ix^5}{5!} - \frac{x^6}{6!} - \frac{ix^7}{7!} + \frac{x^8}{8!} + \cdots \\
&{}= \left( 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \frac{x^8}{8!} - \cdots \right) + i\left( x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots \right) \\ &{}= \cos x + i\sin x \ .
\end{align}\]`

## Applications

One of the best examples of this connection being used is the [Fourier Series](/scientia/math/fourier-series)

## Sources

* http://www.gap-system.org/~history/Biographies/Euler.html
* http://books.google.com/books?id=PjK0F0T3NBoC&pg=PA428
