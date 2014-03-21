---
layout: article
title: Laplace Transform
external: [flexnav]
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

<!--
  ####################
  ####################
  ####################
  ####################
-->

## Interesting properties

Remember

`\[
F(s) = \mathcal{L}
\left\{ f(t) \right\}= \int_0^{\infty} e^{-st} f(t) \,dt
\]`

### Linearity

The Laplace transform is a linear operator.
Transform of the weighted sum of two function.

`\[
\mathcal{L}
\left\{ c_1 f(t) + c_2 g(t) \right\} = \int_0^{\infty} e^{-st} (c_1 f(t) + c_2 g(t)) \,dt = \int_0^{\infty} e^{-st} c_1 f(t) + e^{-st} c_2 g(t) \,dt
\]`

`\[
c_1 \int_0^{\infty} e^{-st} f(t) \,dt + c_2 \int_0^{\infty} e^{-st} g(t) \,dt
\]`

In the end this means:


`\[
\mathcal{L}
\left\{ c_1 f(t) + c_2 g(t) \right\} = c_1 \mathcal{L}
\left\{ f(t) \right\} + c_2 \mathcal{L}
\left\{ g(t) \right\}
\]`

<!--
  ####################
  ####################
  ####################
  ####################
-->

### Transform of derivative

`\[
\mathcal{L}
\left\{ f'(t) \right\} = \int_0^{\infty} e^{-st} f'(t) \,dt
\]`

For this one we need integration by parts again:

`\[
u = e^{-st}
u' = -se^{-st}
v' = f'(t)
v = f(t)
\]`

This, `\(\int_0^{\infty} e^{-st} f'(t) \,dt\)` will therefore turn into this:

`\[
\left[ e^{-st} f(t) \right]_0^{\infty} - \int_0^{\infty} -se^{-st} f(t) \,dt
\]`

`\[
\left[ e^{-st} f(t) \right]_0^{\infty} + s \int_0^{\infty} e^{-st} f(t) \,dt
\]`

Note that `\(\int_0^{\infty} e^{-st} f(t) \,dt\)` is the Laplace transform of a function `\(f(t)\)`:

`\[
\left[ e^{-st} f(t) \right]_0^{\infty} + s \mathcal{L}\left\{f(t)\right\}
\]`

Evaluating the first part of this formula is quite hard since we cannot be sure of what `\(f(t)\)` approaches as `\(t \to \infty\)`.
For now lets assume that it will go to infinity slower than `\(e^{-st}\)` will go to `\(0\)`.
Therefore we can rewrite the first part as:

`\[
0 - f(0) + s \mathcal{L}\left\{f(t)\right\}
\]`

In the end we now:

`\[
\mathcal{L}\left\{f'(t)\right\} = s \mathcal{L}\left\{f(t)\right\} - f_0
\]`

With some pattern finding we can also figure out `\(\mathcal{L}\left\{f''(t)\right\}\)`:

`\[
\mathcal{L}\left\{f''(t)\right\} = s \mathcal{L}\left\{f'(t)\right\} - f'(0)
\]`

`\[
\mathcal{L}\left\{f''(t)\right\} = s \left(s \mathcal{L}\left\{f(t)\right\} - f(0) \right) - f'(0)
\]`

`\[
\mathcal{L}\left\{f''(t)\right\} = s^2 \mathcal{L}\left\{f(t)\right\} - sf(0) - f'(0)
\]`

The Laplace Transform therefore is able to turn derivatives in simple multiplications with the complex variable `\(s\)`.

<!--
  ####################
  ####################
  ####################
  ####################
-->

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

<!--
  ####################
  ####################
  ####################
  ####################
-->

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

<!--
  ####################
  ####################
  ####################
  ####################
-->

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

<!--
  ####################
  ####################
  ####################
  ####################
-->

### `\(\mathcal{L}\left\{ \cos{at} \right\}\)`

First we take these two equations as given:

`\[
\mathcal{L}\left\{f'(t)\right\} = s \mathcal{L}\left\{f(t)\right\} - f_0
\]`

`\[
\mathcal{L}
\left\{ \sin{at} \right\}= \frac{a}{s^2+a^2}
\]`

From here we can derive `\(\mathcal{L}\left\{ \cos{at} \right\}\)`:

`\[
f'(t) = \cos{at}
f(t) = \frac{1}{a}\sin{at}
\]`

`\[
\mathcal{L}\left\{ \cos{at} \right\} = s \mathcal{L}\left\{ \frac{1}{a} \sin{at} \right\} - \frac{1}{a} \sin{a * 0}
\]`

The sin part goes away since `\(\sin{0} = 0\)`:

`\[
s \mathcal{L}\left\{ \frac{1}{a} \sin{at} \right\}
\]`

`\[
\frac{s}{a} \mathcal{L}\left\{ \sin{at} \right\}
\]`

`\[
\frac{s}{a} \frac{a}{s^2+a^2} = \frac{s}{s^2+a^2}
\]`

So in the end we have:

`\[
\mathcal{L}\left\{ \cos{at} \right\} = \frac{s}{s^2+a^2}
\]`

<!--
  ####################
  ####################
  ####################
  ####################
-->

### Laplace Transform of polynomials

Remember from earlier:

`\[
\mathcal{L}\left\{1\right\} = \frac{1}{s}
\]`

`\[
\mathcal{L}\left\{f'(t)\right\} = s \mathcal{L}\left\{f(t)\right\} - f_0
\]`

We can take the latter and rewrite it so we can get the Laplace Transform of `\(\mathcal{L}\left\{f(t)\right\}\)`

`\[
\mathcal{L}\left\{f(t)\right\} = \frac{1}{s} \left( \mathcal{L}\left\{f'(t)\right\} + f_0 \right)
\]`

**Now a first oder polynomial:**

`\[
\mathcal{L}\left\{t\right\} = \frac{1}{s} \mathcal{L}\left\{1\right\} - 0
\]`

`\[
\mathcal{L}\left\{t\right\} = \frac{1}{s^2}
\]`

**Now for a second order polynomial:**

`\[
\mathcal{L}\left\{t^2\right\} = \frac{1}{s} \mathcal{L}\left\{2t\right\} - 0 = \frac{2}{s} \mathcal{L}\left\{t\right\}
\]`

Plugging in from earlier we get

`\[
\mathcal{L}\left\{t^2\right\} = \frac{2}{s} \frac{1}{s^2} = \frac{2}{s^3}
\]`

**Now for a third order polynomial:**

`\[
\mathcal{L}\left\{t^3\right\} = \frac{1}{s} \mathcal{L}\left\{3t^2\right\} - 0 = \frac{3}{s} \mathcal{L}\left\{t^2\right\}
\]`

Plugging in from earlier we get

`\[
\frac{3}{s} \mathcal{L}\left\{t^2\right\} = \frac{3*2}{s^4}
\]`

**A pattern is emerging:**

`\[
\mathcal{L}\left\{t^n\right\} = \frac{n!}{s^{n+1}}
\]`

<!--
  ####################
  ####################
  ####################
  ####################
-->

## Laplace Transform Table

<table style="margin-left: auto; margin-right: auto;">
  <tr style="border-bottom: thin single black collapse;">
    <td>\(f(t)\)</td>
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
    <td>\(\cos{at}\)</td>
    <td>\(\frac{s}{s^2+a^2}\)</td>
  </tr>
  <tr>
    <td>\(t^n\)</td>
    <td>\(\frac{n!}{s^{n+1}}\)</td>
  </tr>
  <tr>
    <td>\(f'(t)\)</td>
    <td>\(s \mathcal{L}\left\{f(t)\right\} - f_0\)</td>
  </tr>
  <tr>
    <td>\(f''(t)\)</td>
    <td>\(s^2 \mathcal{L}\left\{f(t)\right\} - sf(0) - f'(0)\)</td>
  </tr>
  <tr>
    <td>\( \)</td>
    <td>\( \)</td>
  </tr>
</table>

## Applications

### Solving differential equations

As noted earlier, the Laplace Transform is really good as turning difficult derivatives in simples algebra multiplication systems.
For some equations this approach might seem like it is harder than actually solving old-school but as problems get more complex this Transform is pure gold.

Keep these to equations in mind while doing this:

`\[
\mathcal{L}\left\{f'(t)\right\} = s \mathcal{L}\left\{f(t)\right\} - f_0 \, \, \, \left(1\right)
\]`

`\[
\mathcal{L}\left\{f''(t)\right\} = s^2 \mathcal{L}\left\{f(t)\right\} - sf(0) - f'(0) \, \, \, \left(2\right)
\]`

`\[
y'' + 5y' + 6y = 0
\]`

`\[
y(0) = 2 \, y'(0) = 3
\]`

Due to the Linearity:

`\[
\mathcal{L}\left\{y''\right\} + 5 \mathcal{L}\left\{y'\right\} + 6 \mathcal{L}\left\{y\right\} = 0
\]`

**Note:** Laplace Transform of `\(\mathcal{L}\left\{0\right\}\)` just equals `\(0\)`!


First we can use equation `\(\left(2\right)\)`:

`\[
s \mathcal{L}\left\{y'\right\} - y'(0) + 5 \mathcal{L}\left\{y'\right\} + 6 \mathcal{L}\left\{y\right\} = 0
\]`

Then equation `\(\left(1\right)\)`:

`\[
s \left[ s \mathcal{L}\left\{y\right\} - y(0) \right] - y'(0) + 5 \left[ s \mathcal{L}\left\{y\right\} - y(0) \right] + 6 \mathcal{L}\left\{y\right\} = 0
\]`

Now with simplification and substitution:

`\[
s^2 \mathcal{L}\left\{y\right\} - 2s - 3 + 5s \mathcal{L}\left\{y\right\} - 5*2 + 6 \mathcal{L}\left\{y\right\} = 0
\]`

Lets group our Laplace Transform terms:

`\[
\mathcal{L}\left\{y\right\} * \left( s^2 + 5s + 6 \right) - 2s - 3 - 10 = 0
\]`

**Note:** The `\(s\)`-based polynomial equation look just like our original differential equation.

`\[
\mathcal{L}\left\{y\right\} = \frac{2s+13}{s^2+5s+6}
\]`

`\[
y = \mathcal{L}^-1\left\{ \frac{2s+13}{s^2+5s+6} \right\}
\]`

Now that we figured out what the Laplace transform of `\(y\)` is we can look into our table to find an answer, but as of now none of those entries match the expression that we have here.
The only thing left to do is to manipulate this expression a bit so that it matches one of the entries in our Laplace Transform table.

`\[
\frac{2s+13}{(s+2)(s+3)}
\]`

This means we need something like the following since we now how to solve the inverse Laplace transform of such expressions:

`\[
\frac{A}{s+2} + \frac{B}{s+3}
\]`

Now lets work backwards:

`\[
\frac{(As + 3A)+(Bs + 2B)}{(s+2)(s+3)}
\]`

For our purposes lets try to figure out what A and B are:

`\[
\frac{(As + 3A)+(Bs + 2B)}{(s+2)(s+3)} = \frac{2s+13}{(s+2)(s+3)}
\]`

`\[
(A+B)s + 3A + 2B = 2s + 13
\]`

Therefore we get:

`\[
A+B=2
\]`

`\[
3A + 2B = 13
\]`

After Solving we have:
  * `\(A=9\)`
  * `\(B=-7\)`

Now we can rewrite our original equation:

`\[
\mathcal{L}\left\{y\right\} = \frac{9}{s+2} - \frac{7}{s+3} = 9 \frac{1}{s+2} - 7 \frac{1}{s+3}
\]`

Now when looking into our table:

`\[
\mathcal{L}\left\{e^{at}\right\} = \frac{1}{s-a}
\]`

Therefore:

`\[
\mathcal{L}\left\{y\right\} = 9 \mathcal{L}\left\{e^{-2t}\right\} - 7 \mathcal{L}\left\{e^{-3t}\right\}
\]`

`\[
\mathcal{L}\left\{y\right\} = \mathcal{L}\left\{9 e^{-2t} - 7e^{-3t}\right\}
\]`

Luckily the inverse Laplace transform is a one-to-one function. One function has only one transform and the other way around.

`\[
y=9 e^{-2t} - 7e^{-3t}
\]`

## Sources

* Weisstein, Eric W. "Laplace Transform." From MathWorld--A Wolfram Web Resource. [mathworld.wolfram.com/LaplaceTransform.html](http://mathworld.wolfram.com/LaplaceTransform.html)
