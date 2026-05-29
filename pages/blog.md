---
layout: page
title: "Blog"
description: "Updates, detection engineering insights, and release notes from the Radegast EDR team."
permalink: /blog/
---

<div class="section-header" style="margin-bottom:1.5rem;">
  <span class="section-eyebrow">// latest posts</span>
</div>

<div style="display:flex; align-items:center; gap:0.75rem; padding:0.9rem 1.25rem; background:#0f1117; border:1px solid #1e2330; border-left:3px solid #00ff88; border-radius:6px; margin-bottom:2rem; font-family:'JetBrains Mono',monospace; font-size:0.82rem;">
  <span style="color:#00ff88;">&#9656; RSS</span>
  <span style="color:#8892a4;">Subscribe to stay up to date:</span>
  <a href="/rss.xml" style="color:#00d4ff;" target="_blank" rel="noopener noreferrer">radegast.app/rss.xml</a>
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
<p style="color:#4a5568; font-family:'JetBrains Mono', monospace; padding:2rem 0;">// no posts yet — check back soon.</p>
{% endif %}
