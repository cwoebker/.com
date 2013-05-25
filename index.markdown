---
layout: default
title: "cwoebker"
---

<div class="content" id="page">
    <div itemscope itemtype="http://data-vocabulary.org/Person" class="intro">
        <h1>Hi</h1>
        <p>My name is <a href="/colophon"><span itemprop="name">Cecil Woebker</span></a>. I am a high school <span itemprop="title">Student</span>. I live in <span itemprop="address" itemscope itemtype="http://data-vocabulary.org/Address">
            <span itemprop="locality">Boston</span>,
            <span itemprop="region">MA</span>.
        </span></p>
        <p>I have a passion for technology and <a href="/scientia">science</a>.
        <p>I write about education, science and technology and occasionally some philosophy.</p>

    </div>
    <div class="posts">
        <h2>Posts</h2>
        <ul>
        {% for post in site.posts %}
            <li>
            <span class="date">{{ post.date | date: "%B %e, %Y" }}</span> - <a href="{{ post.url }}">{{ post.title }}</a>
            </li>
        {% endfor %}
        </ul>
    </div>
</div>