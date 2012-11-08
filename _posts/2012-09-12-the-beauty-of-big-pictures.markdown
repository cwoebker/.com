---
layout: post
title: The Beauty of Big Pictures
published: true
hn: false
tags:
    - util
    - python
    - download
---

### An example-based introduction to specialized crawling ###

There are big pictures out there, those ones that you don't forget.
Due to that the German channel ["Pro Sieben"](www.prosieben.de) started having a whole show
called ["Galileo Big Pictures"](www.prosieben.de/tv/galileo/big-pictures/) every couple months.

Since some time now the Boston Globe does something similar. It curates the ["Boston Globe: Big Picture"](www.boston.com/bigpicture).

About 15 times a month the Boston Globe posts an album of photography related to current events.
Most of these images are in high quality and sometimes make great wallpapers.

<img src="http://cache.boston.com/universal/site_graphics/blogs/bigpicture/saturn_05_30/cassini1.jpg" alt="">

*The back side of Saturn with a solar eclipse.*

I am a big fan and I always wanted to have all these beautiful Pictures on my computer
so that I could use them as wallpapers easily and also just cause I can.

So I went ahead and looked at the site and started figuring out how I should go about
achieving my goal.
I thought it might be a good idea to share my experience with writing this simple web crawler
and mass download script.

## Tools

I decided to use the following tools:

- [Python](http://www.python.org) - my programming language of choice
- [BeautifulSoup](http://www.crummy.com/software/BeautifulSoup/) - a library that makes working with html easily
- [multiprocessing](http://docs.python.org/library/multiprocessing.html) - as part of python standard library for having concurrent downloads
- [clint](http://github.com/kennethreitz/clint) - for some pretty printing :-)

## Outline

The first step was to figure out what steps are involved in getting to the actual images. This process is very much like an individual actually browsing the website.
The website keeps an archive of all old pictures.
This is how the archive looks:

- List of all months from previous years.
  - Example: September 2011
- For each month a list of all the albums.
- For each album all the pictures.

Therefore we can deduce multiple steps in finding these pictures.

1. Finding all the months that are available. Our master **url** list.
2. Finding all the albums for each month.
3. Finding all the pictures for each album. Our final **download** list.

## The Archive

Next up: How are we going to solve the problems from our outline?
The Boston Globe has a small little archive box, but unfortunately it only goes back to about a year ago.

<img src="/assets/images/posts/bigpicture1.jpeg" alt="archive" title="Big Picture 1" />

Luckily when looking at the source code I found out, that they actually have the complete archive there but in form of commented out HTML code. Therefore my browser wouldn't pick it up at first.

<img src="/assets/images/posts/bigpicture2.jpeg" alt="hidden archive" title="Big Picture 2" />

I started with the `getArchive()` function.

### Step 1: Getting the archive list

The beginning is simple downloading the page and creating a
corresponding `BeautifulSoup` object.

{% highlight python %}
import urllib2
from BeautifulSoup import BeautifulSoup


def getArchive():
    data = urllib2.urlopen('http://www.boston.com/bigpicture').read()
    soup = BeautifulSoup(data)
{% endhighlight %}

From here I need to analyze the page to get a list of all the
archive pages.

Turns out with the power of BeautifulSoup this is pretty simple.
The archive dropdown menus inside of a `<td>` tag with class `drp`.

{% highlight python %}
...
def getArchive():
    ...
    results = soup.findAll('td', {"class", "drp"})
{% endhighlight %}

Next up, accessing the Comment which turns out to be a little tricky.
Luckily I found this little [part](http://www.crummy.com/software/BeautifulSoup/bs3/documentation.html#Removing%20elements) of the `BeautifulSoup` documentation that explains how to extract comments.

{% highlight python %}
...
from BeautifulSoup import Comment
def getArchive():
    ...
    results = results[0].findAll(text=lambda text: isinstance(text, Comment))
{% endhighlight %}

From here we just extract all the option elements, remove the first
one which was just a sample and return all the links (`value` fields).

{% highlight python %}
...
def getArchive():
    urlList = []
    ...
    results = BeautifulSoup(results[0]).findAll('option')
    del results[0]
    for item in results:
        urlList.append(item['value'])
    puts(colored.green("Found %d links." % len(urlList)))
    return urlList
{% endhighlight %}

### Step 2: Locating albums ###

Given an urlList I need to locate all the albums on each page.

After looking at the source of the album page.
I went the easy way and just use the styling information
for the `<td>` tags, since there was no class associated this time.
I used the same strategy to find the link inside of those elements.

{% highlight python %}
def getAlbums(urlList):
    albums = []
    for url in urlList:
        data = urllib2.urlopen(url).read()
        soup = BeautifulSoup(data)
        results = soup.findAll('td', style="padding-top:18px;")
        for item in results:
            albums.append(item.find('a', style="font-size:14px;font-weight:bold;")['href'])
    return albums
{% endhighlight %}

### Step 3: Locating photos ###

Given a list of albums I want to return a list of lists of photos.
I can `zip` them back together later.

This one was really straightforward.
Every picture had the class `bpImage` and could easily be identified

The rest is the same as before.

{% highlight python %}
def getPhotos(albums):
    result = []
    for album in albums:
        photos = []
        data = urllib2.urlopen(album).read()
        soup = BeautifulSoup(data)
        results = soup.findAll('img', {"class": "bpImage"})
        for item in results:
            photos.append(item['src'])
        result.append(photos)
    return result
{% endhighlight %}

For ease of use I am going to zip the albums and the lists of photos
into one dictionary.

{% highlight python %}
urls = dict(zip(albums, photos))
{% endhighlight %}

### Step 4: Downloading photos ###

Finally, we are going to download all of the available big pictures
right to our hard drives.

First a simple downloader.

{% highlight python %}
import os
...
def downloadPhoto(folder, photo):
    u = urllib2.urlopen(photo)
    localFile = open(os.path.join(folder, photo.split('/')[-1]), "wb")
    localFile.write(u.read())
    localFile.close()
    u.close()
{% endhighlight %}

Now the actual code to initiate the downloads.

{% highlight python %}
for key in urls.keys():
    splitted = key.split('/')
    folder = os.path.join(splitted[-3], splitted[-2], splitted[-1].split('.')[0])
    if not os.path.exists(folder):
        os.makedirs(folder)
    for item in urls[key]:
        downloadPhoto(folder, item)
{% endhighlight %}

## Done ##

This is it.
All the pictures are going to be on your computer now.
Sorted by year, month and name.

## The Result ##

I added some nice output that tells you about the current status thanks to [clint](http://github.com/kennethreitz/clint)

<script src="https://gist.github.com/3695461.js"> </script>
