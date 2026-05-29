---
layout: page
title: "Team"
description: "The people behind Radegast EDR."
permalink: /team/
---

<div class="section-header" style="margin-bottom:0.5rem;">
  <span class="section-eyebrow">// the people</span>
</div>

We're a small team of security engineers and open-source contributors building transparent, privacy-first endpoint detection tooling. We believe defenders deserve the same quality of tooling that's historically been locked behind enterprise price tags.

<div class="team-grid">
  {% for member in site.data.team %}
    {% include team-card.html member=member %}
  {% endfor %}
</div>

<div style="margin-top:4rem; padding:2rem; border:1px solid #1e2330; border-left:3px solid #00ff88; border-radius:6px; background:#0f1117;">
  <h3 style="margin-bottom:0.5rem;">Want to join?</h3>
  <p style="margin-bottom:1rem;">Radegast EDR is open-source and community-driven. If you're passionate about detection engineering, blue team tooling, or Rust systems programming — we'd love your contribution.</p>
  <a href="{{ site.github_org }}" class="btn btn-ghost" target="_blank" rel="noopener noreferrer">Explore the GitHub org &rarr;</a>
</div>
