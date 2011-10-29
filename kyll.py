#!/usr/bin/env python
#encoding: utf-8
#
# A Python script/library for easily using the jekyll
# static site generator.
#
# by cwoebker
#

import os, sys, datetime, argparse, re

POSTDIR = '_posts'
TEMPLATE = 'template.md'

HELP = \
"""Usage: ./kyll.py

Arguments:

    - create: creates a post with given title and tags

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

class Post(object):
    def __init__(self):
        self.title = ""
        self.date = datetime.date.today()
        self.tags = []
        self.layout = "post"
        
        raw = open(TEMPLATE, "r")

        self.template = raw.read()
    def create(self):
        self.content = self.template.replace('%%TITLE%%', self.title, 1)
        self.simple_title = simplify(self.title)
        self.date = str(self.date)

        template_tags = ""
        for tag in self.tags:
            template_tags += "\n    - %s" % tag

        self.content = self.content.replace('%%TAGS%%', template_tags, 1)

        self.fname = "%s-%s.markdown" % (self.date, self.simple_title)
        self.fpath = os.path.join(POSTDIR, self.fname)
        self.write()

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

def main(argv):
    """
    parses the arguments and starts the application
    """
    if len(argv) == 0:
        print HELP
        return 0
    if argv[0] == 'create':
        createPost(argv[1:])
    return 1
    
if __name__ == "__main__":
    if main(sys.argv[1:]):
        print "Succeed"
    else:
        print "Failure"
