---
layout: post
title: Pen&#58; Terminal Notes
published: true
hn: false
tags:
    - terminal
    - notes
---

[`pen`](https://github.com/cwoebker/pen) is a minimalistic not taking app for the command line.

## What is this? ##

With pen you can have notes everywhere. At least on every unix machine. What makes it special is that it is 'only' a command line application. Therefore you can even run it on a server. Pen has a minimalistic interface and notes can be added and grouped in a simple manner.

<img src="/assets/img/posts/pen.jpg" alt="pen preview" title="Pen" />

## Installation

It's as simple as that:

`$ pip install penpal`

Unfortunately pen was already taken.

## Usage

`pen all` - List all notes recursively.

`pen create <list>` - Create a list.

`pen delete <list> (<note>)` - Delete a list or note.

`pen help` - Displays pen help

`pen help <command>` - Displays help for a command.

## Advanced

`pen` stores all its data (with zlib compression) in the file `~/.pen`. You are free to do whatever you want with the data in that file, its yours after all.

You can also change the path of the storage file:

`pen path <new_path>` - Either prints the current storage path or sets a new one.

So go out there and hack some code!

## Features ##

- Minimalistic and simple note editor.
- Automatic saving when closed.
- Create lists to group notes.
- Put the storage file wherever you want. (Supports Dropbox & co)

## Source Code ##

[![Status unavailable](https://secure.travis-ci.org/cwoebker/pen.png?branch=master)](http://travis-ci.org/cwoebker/pen)

**Pen** is open source. BSD licensed. Check out the [code](http://github.com/cwoebker/pen) and contribute.
