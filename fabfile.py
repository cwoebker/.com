from fabric.api import *
from fabric.contrib.console import confirm


def test():
    local("jekyll")


def commit():
    local("git add -A")
    local("git commit")


def prepare_deploy():
    test()
    commit()


def push():
    local("git push origin master")


def deploy():
    if confirm("Ready. Deploy?"):
        local("git push heroku master")
        local("open http://cwoebker.com")
        local("heroku logs --tail")
