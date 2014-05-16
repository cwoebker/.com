---
layout: post
title: On Git &amp; Dropbox
published: true
hn: false
tags:
    - git
    - dropbox
    - sync
---

## How not to do it... ##

Up until a couple of weeks ago I stored all my Code in a single directory:

`~/Dropbox/Code`

This carries the benefit of me being able to code anywhere but also kind of defeats the purpose of having a nice decentralized version control like git in the first place. Furthermore the Dropbox sync can mess with the git repositories themselves if edits are made on multiple machines at the same time or simply synced later.

## How to actually make it work! ##

Git already comes with all the things needed to keep your code in sync so I figured that I can just use it from now own to do exactly that.

The idea originally taken from
[this](http://stackoverflow.com/questions/1960799/using-git-and-dropbox-together-effectively) Stackoverflow question is to use Dropbox as your central bare repository. This almost completelz removes the Dropbox sync issue described before. Instead of editing at the same time this now just affects pushing to the bare repository at the same time. Since this is rather rare to happen - especially in a single user setup like mine - it was good enough for me.

## Lets get to it! ##

I basically just started with moving my code from its original location `~/Dropbox/Code` to the new and cleaner location `~/Code`. Naturally this broke a bunch of stuff like my Source Tree bookmarks and even worse my [dotfiles](https://github.com/cwoebker/dotfiles). This led to some spring-cleaning that was long overdue anyways.

All it takes to create this bare repository and "set it up" is one single command:

{% highlight bash %}
~/Dropbox/Git $ git init --bare YOUR_PROJECT.git
{% endhighlight %}

The remaining commands all happen in the git repository of your project.

{% highlight bash %}
~/Code/YOUR_PROJECT $ git remote add dropbox ~/Dropbox/git/YOUR_PROJECT.git
~/Code/YOUR_PROJECT $ git push dropbox master
{% endhighlight %}

Done.

## What now? ##

Now you can share your Dropbox folder with anyone or just keep it to yourself. Whenever someone wants to contribute to your code he can simply `git clone ~/Dropbox/Git/YOUR_PROJECT.git` and start working. Your new central Dropbox repository is basically comparable to running your own dedicated git server. Just cheaper.

## Post Scriptum ##

I actually switched away from storing my `origin` repositories in my Dropbox folder. I now store all my code on my local NAS which I can access form anywhere with a little VPN magic.
