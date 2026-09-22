---
layout: page
title: "Blog"
description: "Updates, detection engineering insights, and release notes from the Radegast EDR team."
permalink: /blog/
---

<div class="rss-note">
  <strong>Follow every article</strong>
  <span>Subscribe with your feed reader:</span>
  <a href="{{ '/rss.xml' | relative_url }}" target="_blank" rel="noopener noreferrer">RSS feed &rarr;</a>
</div>

{% if site.posts.size > 0 %}
<ul class="post-list">
  {% for post in site.posts %}
  <li>
    <article class="post-preview">
      <h2 class="post-preview-title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h2>
      <p class="post-preview-meta">{{ post.date | date: "%B %-d, %Y" }}{% if post.author %} &mdash; {{ post.author }}{% endif %}</p>
      {% if post.excerpt %}
      <p class="post-preview-excerpt">{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
      {% endif %}
      <a href="{{ post.url | relative_url }}" class="btn btn-ghost">Read more &rarr;</a>
    </article>
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No posts yet. Check back soon.</p>
{% endif %}
