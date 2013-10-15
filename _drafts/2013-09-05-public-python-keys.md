---
published: false
layout: post
title: Public Python Keys
hn: false
tags: 
  - python
  - security
---


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

This private_key has several properties. 
- Decrypting
- Signing
- Can be used to create a public key.

{% highlight python %}
>>> public_key = key.publickey()
>>> enc_data = public_key.encrypt('abcdefgh', 32)
>>> enc_data
{% endhighlight %}

The public_key also has some properties.
- Encrypting
- Verifying
- But it cannot be used to recreate the private key!

## Encryption & Decryption

Encrypting with the public key can be done relatively easily. Since the public key is by definition public to the world anyone can use it to encrypt messages.

{% highlight python %}
>>> secret = public_key.encrypt(raw_text, 32) # 32 is a random parameter for RSA encryption
>>> secret
blah blah blah
{% endhighlight %}

On the other hand can we than use the private key to decrypt this message. Therefore anyone can use this set of key pairs to send secure messages to the owner of the private key.

{% highlight python %}
>>> raw_text = private_key.decrypt(secret)
{% endhighlight %}

## Singing & Verifying

{% highlight python %}
>>> hash = MD5.new(raw_text).digest()
>>> signature = key.sign(hash, '')
{% endhighlight %}

This time around everyone can verify this message with the public key and therefore assure that the original message came from the owner of the private key.

{% highlight python %}
>>> hash = MD5.new(raw_text).digest() # raw_text is the message received
>>> public_key.verify(hash, signature) # signature is received alongside the message
{% endhighlight %}

This basically allows you to use private/public key pairs in python with ease. Not however that cryptography is quite a complex topic and there are many ways to mistakes. If you want something to be truely secure make sure to check out much more, maybe even an online cryptography course at Coursera, Udacity or EDx.

Let me know if you have questions or find a mistake.