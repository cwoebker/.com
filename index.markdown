---
layout: default
title: cwoebker
hero: /assets/img/boston.jpg
---

<div class="content">
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
