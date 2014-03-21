---
layout: article
title: Taylor Series
external:
published: 2011-11-14
edited: 2011-11-24
---

Basically the Taylor Series is a function represented as an infinite sum of terms that are ordered like an infinite polynomial.

## Background

Introduced in 1715 by Brook Taylor

* Brook Taylor:
  * Born 18 August 1685
    * Edmonton, Middlesex, England
  * Death 30 November 1731 (aged 46)
    * London, England
  * English mathematician
  * best known for Taylor's theorem and Taylor series
  * attended St. John's College
* Colin Maclaurin:
  * Born February, 1698
    * Kilmodan, Cowall, Argyll, Scotland
  * Death 14 June 1746
    * Edinburgh, Scotland
  * Scottish mathematician
  * Maclaurin Series
    * special case of Taylor Series

## The Idea

`\[
f(a)+\frac {f'(a)}{1!} (x-a)+ \frac{f''(a)}{2!} (x-a)^2+\frac{f'''(a)}{3!}(x-a)^3+ \cdots
\]`

or for fans of the sigma notation:

`\[
\sum_{n=0} ^ {\infty } \frac {f^{(n)}(a)}{n!} \, (x-a)^{n}
\]`

The core idea here is to be able to write all functions in one common, differientiable and generic way.

## The Concept

Using the Power Series (or the more specific Taylor Series) one can represent complex function as a simple chain of powers, just like in a polynomial.
This can drastically improve the way we handle certain functions.

### Power Series

A power series is a simple infinite polynomial:

`\[
f(x) = a_0+a_1 (x-a)+a_2 (x-a)^2+a_3 (x-a)^3 \cdots
\hspace{10pt}or\hspace{10pt}
\sum_{n=0} ^ {\infty} a_n (x-a)^n
\]`

The power series is very simple. Every term in the function has some arbitrary coefficient in front that could be anything.

### Taylor Series

Brook Taylor furthermore said that most(every?) functions could be represented as such an power series.

Lets make two assumptions.

1. f(x) does in fact have a power representation about x = a
2. f(x) has derivatives of every order and we can find them all

At this point we need to find the coefficients `\(
a_0, a_1, a_2, a_3, …, a_{\infty}
\)`

Looking back at the original function (`\(a_0+a_1 (x-a)+a_2 (x-a)^2+a_3 (x-a)^3 \cdots\)`) we can try evaluating it at: `\(a\)`

`\[
f(a) = a_0
\]`

Every term will end up going to zero except for the first coefficient.

We can reapply the same idea to the derivatives of the power series.

`\[
\dot{f}(x) = 0+a_1+a_2 2(x-a)+a_3 3(x-a)^2 \cdots\
\]`

Therefore when plugging in a again: `\(f'(a)=a_1\)`

For the second derivative: `\(
\ddot{f}(x) = 0+0+2a_2+a_3 6(x-a) \cdots\
\)`

A pattern is starting to form here:

`\(
f^{n}(x) = n!a_n \rightarrow a_n = \frac{f^{(n)}(a)}{n!}
\)`

**Taylor Series for** `\(f\(x\)\)` **about** `\(x=a\)`

`\[
f(x) = f(a)+\frac {\dot{f}(a)}{1!} (x-a)+ \frac{\ddot{f}(a)}{2!} (x-a)^2+\frac{\dddot{f}(a)}{3!}(x-a)^3+ \cdots =  \sum_{n=0} ^ {\infty } \frac {f^{(n)}(a)}{n!} \, (x-a)^{n}
\]`

### Maclaurin Series

If we use `\(a = 0\)`, so we are talking about the Taylor Series about x = 0, we call the series a **Maclaurin Series** for f(x):

`\[
f(x) = f(0)+\frac {\dot{f}(0)}{1!} x+ \frac{\ddot{f}(0)}{2!} (x)^2+\frac{\dddot{f}(0)}{3!}(x)^3+ \cdots =  \sum_{n=0} ^ {\infty } \frac {f^{(n)}(0)}{n!} \, (x)^{n}
\]`

### Examples

**__PLACEHOLDER__**

## Sources

* http://en.wikipedia.org/wiki/Brook_Taylor
* http://en.wikipedia.org/wiki/Colin_Maclaurin
* http://en.wikipedia.org/wiki/Taylor_series
