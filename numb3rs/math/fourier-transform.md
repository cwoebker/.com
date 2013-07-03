---
layout: article
title: Fourier Transform
external:
published: 2011-11-14
edited: 2011-11-24
---

The Fourier Transform, which is highly related to the same-named series, is used to decompose a function into its constituent frequencies.
A frequency spectrum.

I will assume some knowledge of the [Fourier Series](/scientia/math/fourier-series) for this article.

## The Idea

The Fourier Transform is defined as `\(hut{f}\)` of an integrable function. We will use this definition:

`\[
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(t)\ e^{- 2\pi j t \xi}\,dt\, \text{, for every real number } \xi.
\]`

The independent variable `\(t\)` represents time (in seconds).
The transform variable `\(\xi\)` represents frequency (in hertz).

Under some condtitions, `\(f\)` can be reconstructed from `\(hut{f}\)` by the **inverse transform**:

`\[
f(t) = \int_{-\infty}^{\infty} \hat{f}(\xi)\ e^{2\pi j t \xi}\, d\xi\, \text{, for every real number } t.
\]`

## The Concept

The Fourier transform was born from the study of the [Fourier series](/scientia/math/fourier-series).

Suppose that `\(T\)` is large enough so that the interval `\(\left[ -\frac{T}{2} , \frac{T}{2}\right]\)` contains the interval on which `\(f\)` is not identically zero.
Then the n-th series coefficient `\(c_n\)` is given by:

`\[
c_n = \int_{-\frac{T}{2}}^{\frac{T}{2}} f(x) e^{-2\pi j \left(\frac{n}{T}\right) x} dx.
\]`

While the Fourier Transform is given by:

`\[
f(t) = \int_{-\infty}^{\infty} \hat{f}(\xi)\ e^{2\pi j t \xi}\, d\xi
\]`

When comparing these two it follows that `\(c_n = \hat{f}\left(\frac{n}{T}\right)\)` since `\(f(x)\)` is zero outside `\(\left[ -\frac{T}{2} , \frac{T}{2} \right]\)`.

Therefore the Fourier coefficients represent the Fourier transform more closely the bigger `\(T\)` gets.

Under some conditions the sum of the Fourier series of `\(f\)` will equal the function `\(f\)`. In other words `\(f\)` can be written:

`\[
f(x) = \frac{1}{T} \sum_{n=-\infty}^{\infty} \hat{f}\left(\frac{n}{T}\right) e^{2\pi j \left(\frac{n}{T}\right) x} = \sum_{n=-\infty}^{\infty} \hat{f}(\xi_n) e^{2\pi j \xi_n x} \Delta \xi
\]`

where the last sum is simply the first sum rewritten using the definitions `\(\xi_n = \frac{n}{T}\)`, and `\(\Delta \xi = \frac{n+1}{T} - \frac{n}{T} = \frac{1}{T}\)`.

The second sum is a Riemann sum: by letting `\(T \to \infty\)` it will converge to the integral of the inverse Fourier transform given in the idea section.

## Applications

## Video Notes

as a limiting case a Fourier series is concerned with the analysis of non-periodic phenomena

some ideas carry easily back and forth between the two

some don't

two inverse problems

analysis:

  taking a signal or function breaking it up in its parts
    should be simpler than its original
    simpler parts

synthesis:

  reassembling a function or signal from its constituent parts, anti-analysis^^

they go together
one doesnt go without the other

both fourier analysis and synthesis
  by linear operations
  integrals... series... etc...

not all phenomena are periodic
  even if they seem they are they might not be

Force periodicity:
  repeating the pattern
  periodization of a signal
    it is used to study signals that are not periodic
  no restrictions
  study can be pretty general

fix period for discussion
  - period: 1
functions f(t) satisfying f(t+1)=f(t) for all t

sin 2pi t
cos 2pi t

if we know the function on any interval of length 1, than we know it everywhere

sin 2pi t + sin 4pi t + sin 6pi t

3 frequencies in a sum
but only one period in the sum
the slowest one is the new one
  you have to wait fro all the componentes to go through

sum of k=1 to n: a_k sin(2pi k t + phi_k)
whole pattern cant repeat til the longest one is

MATLAB PROGRAM:
    shows you hgow complicated they can be

    sinesum2

    to plot these sums
    wolfram alpha?!?

sin 2pi k t cos phi_k + cos 2pi k t sin phi_k

thus can write todays form of series 26:56,
 phi_k now represented in coefficients
 but equivalent
 latter more common

linear combination of basic building block

to exponential form: from -n to n
exponential int e^-2pin e^2pim
m=n -> 1
m not n -> 0
prooved again

TRANSFORM of f(t):

f hut (k) = int from 0 to 1 e^-2pi i k t f(t) dt
kth fourier coefficient

fourier transform:

hut sum -n to n of f hut (k) e^2pi i k t



## Sources

* http://en.wikipedia.org/wiki/Fourier_transform
* http://www.youtube.com/view_play_list?p=B24BC7956EE040CD
* http://mathworld.wolfram.com/FourierTransform.html
* http://mathworld.wolfram.com/FourierTransformSine.html