---
layout: page
title: "Team"
description: "The people behind Radegast EDR."
permalink: /team/
---

We're a small team of security engineers and open-source contributors building transparent, privacy-first endpoint detection tooling. We believe defenders deserve the same quality of tooling that's historically been locked behind enterprise price tags.

<div class="team-grid">
  {% for member in site.data.team %}
    {% include team-card.html member=member %}
  {% endfor %}
</div>

<div class="cta-panel">
  <h3>Want to join?</h3>
  <p>Radegast EDR is open-source and community-driven. If you're passionate about detection engineering, blue team tooling, privacy, or accessible security, we'd love your contribution.</p>
  <a href="{{ site.github_org }}" class="btn btn-ghost" target="_blank" rel="noopener noreferrer">Explore the GitHub org &rarr;</a>
</div>
