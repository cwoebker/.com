---
layout: article
title: Laplace Transform
external:
published: 2012-02-17
edited: 2011-02-17
---

The Laplace Transform is a widely used integral transform.
One of its properties is that it can simplify an original equation since it divides an equation into its moments.

The Laplace Transform is related to the [Fourier Transform](/scientia/math/fourier-transform)

## Background

* Pierre-Simon Laplace:
  * Born 23 March 1749
    * Beaumont-en-Auge, Nomandy, France
  * Death 5 March 1827 (aged 77)
    * Paris, France
  * French mathematician and astronomer
  * Many contributions to:
    * Mathematical Astronomy
    * Statistics
  * Formulation of Laplace's equations (Laplace Operator)
  * Pioneering of the Laplace transform

## The Idea

The Laplace transform of a function `\(f(t)\)`, defined for all real numbers `\(t\)` ≥ 0, is the function `\(F(s)\)`, defined by:

`\[
F(s) = \mathcal{L} 
\left\{ f(t) \right\}= \int_0^{\infty} e^{-st} f(t) \,dt
\]`

The parameter `\(s\)` is a complex number: `\( s = \sigma + i \omega, \, \)` with real numbers σ and ω.

## Examples

### `\(\mathcal{L}\left\{ 1 \right\}\)`

`\[
F(s) = \mathcal{L}
\left\{ f(t) \right\}= \int_0^{\infty} e^{-st} f(t) \,dt
\]`

`\[
F(s) = \mathcal{L}
\left\{ 1 \right\}= \int_0^{\infty} e^{-st} \,dt= \lim_{A \to \infty} \int_0^A e^{-st} dt
\]`

`\[
\lim_{A \to \infty} \int_0^A e^{-st} dt = \lim_{A \to \infty} \left[ -\frac{1}{s} e^{-st} \right]_0^A = \lim_{A \to \infty} \left[ -\frac{1}{s} e^{-sA} - \left(-\frac{1}{s}\right) \right] = \lim_{A \to \infty} \left[ -\frac{1}{s} e^{-sA} + \frac{1}{s} \right]
\]`

`\[
\lim_{A \to \infty} \left[ -\frac{1}{s} e^{-sA} + \frac{1}{s} \right] = \frac{1}{s}
\]`

### `\(\mathcal{L}\left\{ e^{at} \right\}\)`

`\[
F(s) = \mathcal{L}
\left\{ f(t) \right\}= \int_0^{\infty} e^{-st} f(t) \,dt
\]`

`\[
F(s) = \mathcal{L}
\left\{ e^{at} \right\}= \int_0^{\infty} e^{-st} * e^{at} \,dt = \int_0^{\infty} e^{(a-s)t} \,dt
\]`

`\[
\int_0^{\infty} e^{(a-s)t} \,dt = \frac{1}{a-s} \left[ e^{(a-s)t} \right]_0^{\infty} = \frac{1}{a-s} \left[ 0-1 \right] = -\frac{1}{a-s} = \frac{1}{s-a}
\]`

  * `\(a-s > 0\)` or `\(a>s\)` -> No Limit
  * `\(a-s < 0\)` or `\(a<s\)` -> Need to make this assumption

### `\(\mathcal{L}\left\{ \sin{at} \right\}\)`

`\[
F(s) = \mathcal{L}
\left\{ f(t) \right\}= \int_0^{\infty} e^{-st} f(t) \,dt
\]`

`\[
F(s) = \mathcal{L}
\left\{ \sin{at} \right\}= \int_0^{\infty} e^{-st} * \sin{at} \,dt
\]`

Here we have to use integration by parts since this integral is not easy to solve otherwise:

`\[
u' = e^{-st}
u = -\frac{1}{s} e^{-st}
v = \sin{at}
v' = \cos{at} * a
\]`

`\[
\int_0^{\infty} e^{-st} * \sin{at} \,dt = y
\]`

`\[
y = -\frac{1}{s} e^{-st} \sin{at} - \int_0^{\infty} - \frac{1}{s} e^{-st} a \cos{at} dt = -\frac{e^{-st} }{s} \sin{at} + \frac{a}{s} \int_0^{\infty} e^{-st} \cos{at} dt
\]`

Another integration by parts:

`\[
u' = e^{-st}
u = -\frac{1}{s} e^{-st}
v = \cos{at}
v' = -\sin{at} * a
\]`

`\[
y = -\frac{e^{-st} }{s} \sin{at} + \frac{a}{s} \int_0^{\infty} e^{-st} \cos{at} dt =-\frac{e^{-st} }{s} \sin{at} + \frac{a}{s} 
\left[
-\frac{1}{s} e^{-st} \cos{at} - \int_0^{\infty} - \frac{1}{s} e^{-st} (-\sin{at}*a) dt
\right]
\]`

`\[
y=-\frac{e^{-st} }{s} \sin{at} - \frac{a}{s^2} e^{-st} \cos{at} - \frac{a^2}{s^2} \int_0^{\infty} e^{-st} \sin{at} dt
\]`

Watch out here since `\(\int_0^{\infty} e^{-st} \sin{at} dt\)` actually equals `\(y\)`:

`\[
y + \frac{a^2}{s^2} y = \frac{s^2 + a^2}{s^2} y = -e^{-st} (\frac{1}{s} \sin{at} + \frac{a}{s^2} \cos{at} )
\]`

Now evaluate around the boundaries from `\(0 \to \infty\)`:

`\[
\frac{s^2 + a^2}{s^2} y = \frac{s^2 + a^2}{s^2} y = \left[ -e^{-st} (\frac{1}{s} \sin{at} + \frac{a}{s^2} \cos{at} ) \right]_0^{\infty} = 0 - (-1 ( 0 + \frac{a}{s^2} )) = \frac{a}{s^2}
\]`

`\[
\frac{s^2 + a^2}{s^2} y = \frac{a}{s^2}
\]`

`\[
y = \frac{a}{s^2} * \frac{s^2}{s^2+a^2} = \frac{a}{s^2 + a^2}
\]`


## Laplace Transform Table

<table style="margin-left: auto; margin-right: auto;">
  <tr style="border-bottom: thin single black collapse;">
    <td>f(t)</td>
    <td>\(\mathcal{L}\left\{ f(t) \right\}\)</td>
  </tr>
  <tr>
    <td>\(1\)</td>
    <td>\(\frac{1}{s}\)</td>
  </tr>
  <tr>
    <td>\(e^{at}\)</td>
    <td>\(\frac{1}{s-a}\)</td>
  </tr>
  <tr>
    <td>\(\sin{at}\)</td>
    <td>\(\frac{a}{s^2+a^2}\)</td>
  </tr>
  <tr>
    <td>\( \)</td>
    <td>\( \)</td>
  </tr>
</table>

## Interesting properties

### Linearity



## Sources

* Weisstein, Eric W. "Laplace Transform." From MathWorld--A Wolfram Web Resource. [mathworld.wolfram.com/LaplaceTransform.html](http://mathworld.wolfram.com/LaplaceTransform.html)
