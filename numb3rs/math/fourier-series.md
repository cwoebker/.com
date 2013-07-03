---
layout: article
title: Fourier Series
external:
published: 2011-11-14
edited: 2012-01-26
---

Basically the Fourier Series is a function represented as an infinite sum of sine and cosine terms.

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
\varphi(x)=
\sum_{n=0} ^ {\infty} a_n\cos (nx) + b_n\sin (nx)
\]`

When writing the function out we can ignore the first `\(sin\)` term since its `\(0\)`. And `\(cos\)` ends up being 1 wherefore we only get the `\(a_0\)` constant.

`\[
\varphi(x)=a_0 + a_1 \cos(x) + b_1 \sin(x) + a_2 \cos(2x) + b_2 \sin(2x) + \cdots
\]`

When plugging in `\(0\)` we get an interresting result, that gets rid of many of those terms.

`\[
\varphi(0)=a_0 + a_1 \cos(0) + b_1 \sin(0) + a_2 \cos(0) + b_2 \sin(0) \cdots
\]`

`\[
\varphi(0)=a_0 + a_1 + a_2 + \cdots = \sum_{n=0}^{\infty} a_n
\]`

### Orthogonality of periodic functions

See Lebesgue Measure

#### sin(x) * cos(x)

<script type="text/javascript" id="WolframAlphaScript9ea68e97266389f3fe227b9c0e0084f3" src="http://www.wolframalpha.com/widget/widget.jsp?id=9ea68e97266389f3fe227b9c0e0084f3"></script>

Note that what ever integers you plug in the result will always be 0.

`\[
\int_{-\pi}^{\pi} \cos(nx) sin(mx)dx = 0
\]`

#### cos(x) * cos(x)

<script type="text/javascript" id="WolframAlphaScript360882f81985e81cb99c1fe7acff4a06" src="http://www.wolframalpha.com/widget/widget.jsp?id=360882f81985e81cb99c1fe7acff4a06"></script>

All the values that can be put in will result in the area under the curve being 0, but when using the same values the area becomes some certain number.

`\[
\int_{-\pi}^{\pi} \cos(nx) cos(mx)dx = 0
\]`
`\[
\int_{-\pi}^{\pi} \cos(nx)^2dx = \pi
\]`

#### sin(x) * sin(x)

<script type="text/javascript" id="WolframAlphaScript360882f81985e81cb99c1fe7acff4a06" src="http://www.wolframalpha.com/widget/widget.jsp?id=360882f81985e81cb99c1fe7acff4a06"></script>

<!--**Change widget and table!!!**-->

All the values that can be put in will result in the area under the curve being 0, but when using the same values the area becomes some certain number, again.

`\[
\int_{-\pi}^{\pi} \sin(nx) sin(mx)dx = 0
\]`
`\[
\int_{-\pi}^{\pi} \sin(nx)^2dx = \pi
\]`

### Finding the Terms

Alright so how does this help us? We will see that soon! We now have to figure out how to find `\(a_0 \to a_\infty\)` and `\(b_0 \to b_\infty\)`...

From the equations above we can now say `\(\cdots\)`

`\[
F_n(x)= a_0 +
\sum_{k=1} ^ {k=n} a_k\cos (kx) + b_k\sin (kx)
\]`

With the attributes of the trigonometric functions above we can derive the following theoretical expressions of the terms:

`\[
\left\{\begin{array}{lclr}
a_0 &=&\displaystyle  \frac{1}{2\pi} \int_{-\pi}^{\pi} F_n(x) dx,& \\
&&&\\
a_k &=&\displaystyle  \frac{1}{\pi} \int_{-\pi}^{\pi} F_n(x) \cos(kx)dx,\hspace{6pt}& 1 \leq k \leq n\\
&&&\\
b_k &=&\displaystyle \frac{1}{\pi} \int_{-\pi}^{\pi} F_n(x) \sin(kx)dx,\hspace{6pt}& 1 \leq k \leq n\\
\end{array}\right.
\]`

Therefore we can now define for a `\(2\pi\)`-periodic function:

`\[
\left\{\begin{array}{lclr}
a_0 &=&\displaystyle  \frac{1}{2\pi} \int_{-\pi}^{\pi} \varphi(x) dx,& \\
&&&\\
a_n &=&\displaystyle  \frac{1}{\pi} \int_{-\pi}^{\pi} \varphi(x) \cos(nx)dx,\hspace{6pt}& 1 \leq n\\
&&&\\
b_n &=&\displaystyle \frac{1}{\pi} \int_{-\pi}^{\pi} \varphi(x) \sin(nx)dx,\hspace{6pt} & 1 \leq n\\
\end{array}\right.
\]`

## Euler's Simplicity

Leonhard [Euler's formula](/scientia/math/eulers-formula)  has often been stated as the most beautiful formulas in the world and its usage with the Fourier Series is quite important.

### Euler and Fourier

Since the Fourier series is build out of `\(sin\)` and `\(cos\)` functions we should be able to represent it with a complex expontial, shouldn't we?

Lets define some things for the series: `\(w_0 = \frac{2\pi}{T}\)` (angular frequency) and `\(j=sqrt(-1)\)`. We are going to use j cause i is sometimes already used for other things in physics. Therefore we can write the Fourier Series:

`\[
\varphi (t) = \frac{a_0}{2} +
\sum_{n=1}^{\infty} a_n \cos(w_0 n t) +
\sum_{n=1}^{\infty} b_n \sin(w_0 n t)
\]`

Thanks to Euler we have this:

`\[
e^{jwt} = \cos(wt) + j \sin(wt) \quad \text{&} \quad e^{-jwt} = \cos(wt) - j \sin(wt)
\]`
`\[
\cos(wt) = \frac{e^{jwt}+e^{-jwt}}{2} \quad \text{&} \quad \sin(wt) = \frac{e^{jwt}-e^{-jwt}}{2j}
\]`

We can now take both statements and write:

`\[
\varphi (t) = \frac{a_0}{2} +
\sum_{n=1}^{\infty} a_n \frac{e^{jwt}+e^{-jwt}}{2} +
\sum_{n=1}^{\infty} b_n \frac{e^{jwt}-e^{-jwt}}{2j}
\]`

For simplification reasons we are going to group similiar terms:

`\[
\varphi (t) = \frac{a_0}{2} +
\sum_{n=1}^{\infty} \frac{a_n - j b_n}{2} e^{jwt} +
\sum_{n=1}^{\infty} \frac{a_n + j b_n}{2} e^{-jwt}
\]`

Furthermore we can use new coefficients for this complex exponential function:

`\[
c_0 = \frac{a_0}{2} \quad \text{&} \quad c_n = \frac{a_n - j b_n}{2} \quad \text{&} \quad c_{-n} = \frac{a_n + j b_n}{2}
\]`

The new series therefore looks like this now:

`\[
\varphi (t) = c_0 +
\sum_{n=1}^{\infty} c_n e^{jwt} + c_{-n} e^{-jwt}
\]`

This representation can be made even more compact when increasing the range from `\(-\infty\)` to `\(\infty\)` including `\(0\)`:

`\[
\varphi (t) = \sum_{n=-\infty}^{\infty} c_n e^{jwt}
\]`

Now the coefficient `\(c_0\)` has to be obtained.
Remember:

`\[
c_n = \frac{a_n - j b_n}{2}
\]`

`\(a_n\)` and `\(b_n\)` are already known from earlier:

`\[
a_n = \frac{2}{T} \int_{-\frac{T}{2}}^{\frac{T}{2}} \varphi(t) \cos(n w_0 t)dt
\]`
`\[
b_n = \frac{2}{T} \int_{-\frac{T}{2}}^{\frac{T}{2}} \varphi(t) \sin(n w_0 t)dt
\]`

Now we can plug and play a little...

`\[
c_n = \frac{
\frac{2}{T} \int_{-\frac{T}{2}}^{\frac{T}{2}} ( \varphi(t) \cos(n w_0 t)dt )
- j
\frac{2}{T} \int_{-\frac{T}{2}}^{\frac{T}{2}} ( \varphi(t) \sin(n w_0 t)dt )
}{2}
\]`

Now just some distributing etc...

`\[
c_n = \frac{1}{T}
\int_{-\frac{T}{2}}^{\frac{T}{2}} \varphi(t)
( \cos(n w_0 t) - j \sin(n w_0 t) )dt
\]`

And again Euler's formula can be applied:

`\[
c_n = \frac{1}{T}
\int_{-\frac{T}{2}}^{\frac{T}{2}} \varphi(t) e^{-j w_0 nt} dt
\]`

### Non-Periodic Functions

The Fourier Series, is a series based on preiodic fucntions: `\(\sin\)` and `\(\cos\)`. An interresting idea is that although these function are periodic we can represent non-periodic functions with them. Some might say right now that this is impossible because its composed of functions that repeat and therefore the Fourier Series of a function should repeat too.

The trick is that we can make the fourier series repeat at `\(+\infty\)` and `\(-\infty\)`. Therefore it wouldn't actually repeat. At least kind of. A nice mathematic hack. ;-)

Look in the next section for an example of this.

### Examples

Interresting examples and their real-world application.

Check back soon!

## Sources

* http://en.wikipedia.org/wiki/Joseph_Fourier
* http://en.wikipedia.org/wiki/Fourier_series