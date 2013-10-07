---
published: false
layout: post
title: Public Python Keys
hn: false
tags:
  - python
  - security

For a small project of mine I needed to learn a bit about public & private key pairs. These keys are very important in many cryptographic areas. It took me a little to figure out which type of key is being used for what and how each task can be accomplished securely and easily.
After I figured it out myself I figured I'll share a few simple basics.

## The Keys ##

The private key of the pair is what lies at the center of everything. One can generate the public part of the pair from the private key. As the name suggests anyone can have the public key, its public after all, but only you should have access to the private key.

PyCrypto is a library for the Python Programming language that can create and work with private and public keys. It can also provide random values that are needed. (like for most things in cryptography)

{% highlight python %}
>>> from Crypto.PublicKey import RSA
>>> from Crypto import Random
>>> rand = Random.new().read
>>> private_key = RSA.generate(1024, rand)
>>> private_key
{% endhighlight %}