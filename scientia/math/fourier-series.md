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
\varphi(y)=a\cos\frac{\pi y}{2}+a'\cos 3\frac{\pi y}{2}+a''\cos5\frac{\pi y}{2}+\cdots
\]`

Multiplying both sides by `\(\cos(2k+1)\frac{\pi y}{2}\)`, and then integrating from `\(y=-1\)` to `\(y=+1\)` yields:

`\[
a_k=\int_{-1}^1\varphi(y)\cos(2k+1)\frac{\pi y}{2}\,dy
\]`

* Joseph Fourier, [Mémoire sur la propagation de la chaleur dans les corps solides](http://en.wikipedia.org/wiki/Mémoire_sur_la_propagation_de_la_chaleur_dans_les_corps_solides). (1807)

The core idea here is, just like the Taylor Series, to be able to write all functions in one common, differientiable and generic way.

## The Concept

Using the Power Series one can represent complex function as a simple chain of powers, just like in a polynomial.
This can drastically improve the way we handle certain functions.

### Fourier Series

PLACEHOLDER

### Examples

Interresting examples and their real-world application.



## Sources

* http://en.wikipedia.org/wiki/Joseph_Fourier
* http://en.wikipedia.org/wiki/Fourier_series