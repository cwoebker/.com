---
layout: article
title: Capacitance
external:
published: 2012-01-19
edited: 2012-01-19
---

Capacitance is the ability of a Capacitor to store charge.

## Capacitor

<img src="http://upload.wikimedia.org/wikipedia/commons/c/cd/Capacitor_schematic_with_dielectric.svg" align="left" style="margin-right: 10px;"/>

A Capacitor is an electrical component that can store energy in an electric field. They consist at least of two electrical conductors separated by a dielectric (insulator), although many variations can be found.

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

A potential voltage difference between the two fields will create a static electric field develops across the dielectric. Positive charge will collect on one of the plates and negative charge on the other one.



## Charge

`\[
q = C * V
\]`

the charge stored equals to the Capacitance of the object and the Voltage across the object.

## Energy

To derive an expression for how much energy is stored in a capacitor we consider the infinitesimal small voltage due to the infinitesimal little charge `\(y\)`

`\[
C * dV = dq
\]`

Energy is defined as:

`\[
E = q * V
\]`

The Energy for every small amount of voltage can therefore be expressed as:

`\[
dE = q * dV
\]`

At this point we can take our Capacitance expression and plug it in.

`\[
dE = q  \frac{dq}{C}
\]`

Then we can add all these infinitesimal small Energies up to get the total amount of energy:

`\[
\int dE = \int q  \frac{dq}{C}
\]`

`\[
E = \frac{1}{2}  \frac{q^2}{C} = \frac{1}{2} \frac{(C V)^2}{C} = \frac{1}{2} C V^2
\]`

## Capacitance

The Capacitance between two plates can be derived as followed

### Electric Field

The Electric Field between two plates:

`\[
E = \frac{\sigma}{\epsilon_0} = \frac{q}{A} \frac{1}{\epsilon}
\]`

### Voltage

The Voltage between two plates:

`\[
V = E * d = \frac{d * q}{A\epsilon_0}
\]`

### Capacitance

<img src="http://upload.wikimedia.org/wikipedia/commons/3/35/Parallel_plate_capacitor.svg" align="left" style="margin-right: 10px;"/>

`\[
q = CV
\]`

`\[
C = \frac{q}{V} = \frac{A \epsilon_0}{d*q} q = \frac{A \epsilon_0}{d}
\]`

The Capacitance between two plates:

`\[
C = \frac{\epsilon_0 A}{d}
\]`

## Examples

In these examples we are trying to find:

- `\(E\)`, the Electric Field
- `\(\Delta V = \int_A^B E(r) dr\)`, the difference in Voltage
- `\(C = \frac{q}{V}\)`, the Capacitance

### Cylinder

**__IMAGE_PLACEHOLDER__**

#### Electric Field

`\[
\Phi = \oint \vec{E} d\vec{A} = \frac{Q_{enc}}{\epsilon_0}
\]`

`\[
\oint \left| \vec{E} \right| * \left| d\vec{A} \right| * \cos (\theta i) = \frac{Q_{enc}}{\epsilon_0}
\]`

The `\(\cos\)` term will fall away since the Field is perpendicular to the area.

`\[
\oint \left| \vec{E} \right| * \left| d\vec{A} \right| = \frac{Q_{enc}}{\epsilon_0}
\]`

The Area will just add up to the total Area since again all the small Area's are at the same angle to the Electric Field.

`\[
A \oint \left| \vec{E} \right| = \frac{Q_{enc}}{\epsilon_0}
\]`

`\[
2 \pi r l * \oint \left| \vec{E} \right| = \frac{Q_{enc}}{\epsilon_0}
\]`

Therefore the Electric Field will be:

`\[
 \oint \left| \vec{E} \right| = \frac{Q_{enc}}{\epsilon_0 2 \pi r l}
\]`

#### Voltage Difference

Voltage is defined as:

`\[
V = E * d
\]`

Therefore we can define the change in Voltage as

`\[
\Delta V = \int_A^B E dr
\]`

We can plug in our result from earlier to get

`\[
\Delta V = \int_A^B \frac{Q_{enc}}{\epsilon_0 2 \pi r l} dr
\]`

We can factor out all the constants to get

`\[
\Delta V = \frac{Q_{enc}}{\epsilon_0 2 \pi l} \int_A^B \frac{1}{r} dr
\]`

`\[
\Delta V = \frac{Q_{enc}}{\epsilon_0 2 \pi l} \left( \ln{B} - \ln{A} \right)
\]`

`\[
\Delta V = \frac{Q_{enc} \ln{\frac{B}{A}} }{\epsilon_0 2 \pi l}
\]`

#### Capacitance

Capacitance is defined as

`\[
C = \frac{Q}{V}
\]`

Plug and play

`\[
C = \frac{Q_{enc}}{ \frac{Q_{enc} \ln{\frac{B}{A}} }{\epsilon_0 2 \pi l} }
\]`

Solving Magic

`\[
C = \frac{\epsilon_0 2 \pi l}{ \ln{\frac{B}{A}} }
\]`

### Sphere

**__IMAGE_PLACEHOLDER__**

#### Electric Field

`\[
\Phi = \oint \vec{E} d\vec{A} = \frac{Q_{enc}}{\epsilon_0}
\]`

`\[
E(r) * 4 \pi r^2 = \frac{Q_{enc}}{\epsilon_0}
\]`

Therefore the Electric Field will be:

`\[
E(r) = \frac{Q_{enc}}{\epsilon_0 * 4 \pi r^2}
\]`

#### Voltage Difference

Same steps as for the cylinder can be applied:

`\[
\Delta V = \frac{Q_{enc}}{\epsilon_0 * 4 \pi} * \int_A^B \frac{1}{r^2}
\]`

The integral can simply be solved by usage of the power rule on `\(r^{-2}\)`.

`\[
\Delta V = \frac{Q_{enc}}{\epsilon_0 * 4 \pi} * \left( \frac{1}{A} - \frac{1}{B} \right)
\]`

#### Capacitance

Capacitance is defined as

`\[
C = \frac{Q}{V}
\]`

Plug and play

`\[
C = \frac{Q_{enc}}
{\frac{ Q_{enc} \left( \frac{1}{A} - \frac{1}{B} \right) }
{\epsilon_0 4 \pi}
} = \frac{\epsilon_0 4 \pi}{ \left( \frac{1}{A} - \frac{1}{B} \right) } =
\frac{\epsilon_0 4 \pi}{ \left( \frac{B-A}{AB} \right) } =
\frac{\epsilon_0 4 \pi \left( AB \right) }{ B-A }
\]`

## Sources

* My Notes