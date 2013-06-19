---
layout: default
title: cwoebker
published: true
---

<div class="content" id="page">
    <div class="posts">
        <ul>
        {% for post in site.posts %}
            <li>
            <span class="date">{{ post.date | date: "%B %e, %Y" }}</span><a href="{{ post.url }}">{{ post.title }}</a>
            </li>
        {% endfor %}
        </ul>
    </div>
</div>
