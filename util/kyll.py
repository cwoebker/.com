#!/usr/bin/env python
#encoding: utf-8
#
# A Python script/library for easily using the jekyll
# static site generator.
#
# by cwoebker
#

import os, sys, datetime, re

POSTDIR = '../_posts'
TEMPLATE = 'template.md'

HELP = \
"""Usage: ./kyll.py

Arguments:

    - create: creates a post with given title and tags
    - info: prints out post meta info
    - read: prints out the contents of a post
    - list: lists all posts

    future:

    - destroy: destorys a post, by deleting it from the POSTDIR
    - update: updates a post with time, title or tags
"""

simple_re = re.compile(r'[^\w\s-]')
simple_hyphen = re.compile(r'[-\s]+')


def simplify(value):
    import unicodedata
    if not isinstance(value, unicode):
        value = unicode(value)
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore')
    value = unicode(simple_re.sub('', value).strip().lower())
    return simple_hyphen.sub('-', value)


class Jekyll(object):
    pass


class Tag(object):
    def __init__(self):
        pass

    def load(self):
        pass

    def list(self):
        pass


class Post(object):
    def __init__(self):
        self.title = ""
        self.date = None
        self.tags = []
        self.layout = "post"

    def load(self, slug):
        self.slug = slug
        self.title = ""
        self.date = None
        self.tags = []
        self.layout = "post"
        self.fname = ""
        self.fpath = ""

        # DO STUFF HERE

        self.loaded = True

    def create(self):
        raw = open(TEMPLATE, "r")

        template = raw.read()
        raw.close()
        self.content = template.replace('%%TITLE%%', self.title, 1)
        self.slug = simplify(self.title)
        self.date = str(datetime.date.today())

        template_tags = ""
        for tag in self.tags:
            template_tags += "\n    - %s" % tag

        self.content = self.content.replace('%%TAGS%%', template_tags, 1)

        self.fname = "../drafts/%s-%s.markdown" % (self.date, self.slug)
        self.fpath = os.path.join(POSTDIR, self.fname)
        self.write()

    def read(self):
        postList = os.listdir(POSTDIR)
        for post in postList:
            if self.slug in post:
                self.fpath = os.path.join(POSTDIR, post)
        post_file = open(self.fpath, "r")
        self.content = post_file.read()
        post_file.close()

    def info(self):
        if not self.loaded:
            print 'ERROR: Not loaded yet!'
            return False
        print "Slug: " + self.slug
        print "Title: " + self.title
        print "Date: " + str(self.date)
        print "Tags: " + str(self.tags)
        print "Layout: " + self.layout
        print "Filename: " + self.fname
        print "Path: " + self.fpath

    def write(self):
        post_file = open(self.fpath, "w")
        post_file.writelines(self.content)
        post_file.close()

    def destroy(self):
        pass


def createPost(argv):
    #if len(argv) > 0:
    #    title = argv[0]
    #else:
    title = raw_input("Title:   > ")

    #if len(argv) > 1:
    #    for arg in argv[1:]:
    #        tags.append(arg)
    #else:
    tag_str = raw_input("Tags:    > ")
    tags = tag_str.split()

    post = Post()
    post.title = title
    post.tags = tags

    post.create()


def readPost(argv):
    print '\n----------Post----------\n'
    slug = argv[0]
    post = Post()
    post.slug = slug
    post.read()
    print post.content


def infoPost(argv):
    print '\n----------Post Info----------\n'
    slug = argv[0]
    post = Post()
    post.load(slug)
    post.info()


def listPosts(argv):
    print '\n----------Jekyll Posts----------\n'
    postList = os.listdir(POSTDIR)
    for file in postList:
        file = file.rstrip('.markdown')
        print ' - ' + file[11:]
    print ''


def main(argv):
    """
    parses the arguments and starts the application
    """
    if len(argv) == 0:
        print HELP
        return 0
    elif argv[0] == 'create':
        createPost(argv[1:])
    elif argv[0] == 'list':
        listPosts(argv[1:])
    elif argv[0] == 'read':
        readPost(argv[1:])
    elif argv[0] == 'info':
        infoPost(argv[1:])
    else:
        print HELP
        return 0
    return 1

if __name__ == "__main__":
    main(sys.argv[1:])
