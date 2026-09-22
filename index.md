---
layout: default
title: "Privacy-first endpoint detection for small teams"
description: "Open-source EDR with a straightforward device management console. End-to-end encrypted, built for small teams and home labs."
---

<section class="hero">
  <div class="container"><div class="hero-inner">
    <span class="eyebrow">Open-source EDR for small teams and home labs</span>
    <h1>Your endpoints.<br>Your data.</h1>
    <p class="hero-lede">Radegast EDR brings device management, detection packs, and alert review into one straightforward console. <strong>End-to-end encrypted</strong>, keeping privacy at the heart of your setup.</p>
    <div class="hero-actions">
      <a href="{{ site.console_url }}" class="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Open Console &rarr;</a>
      <a href="{{ site.github_org }}" class="text-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
    {% include eu-provenance.html %}
  </div></div>
</section>

<section class="section"><div class="container">
  <div class="section-header">
    <span class="section-eyebrow">The console</span>
    <h2>Your devices, in one place</h2>
    <p>See your enrolled devices and recent alerts, then move from overview to investigation without maintaining a separate management server.</p>
  </div>
  <figure class="product-shot">
    <a href="{{ '/assets/screenshots/dashboard.png' | relative_url }}" class="modal-trigger" data-caption="Radegast EDR device management dashboard"><img src="{{ '/assets/screenshots/dashboard.png' | relative_url }}" alt="Radegast EDR dashboard showing enrolled devices and recent alerts" width="1920" height="965"></a>
    <figcaption><span>Device status and recent alerts at a glance.</span><a href="{{ '/screenshots/' | relative_url }}">Explore the console &rarr;</a></figcaption>
  </figure>
</div></section>

<section class="section"><div class="container">
  <div class="section-header"><span class="section-eyebrow">Built around your environment</span><h2>Security without giving up privacy</h2></div>
  <div class="benefit-grid">
    <article class="benefit"><span class="benefit-label">01 / PRIVATE</span><h3>Privacy by design</h3><p>End-to-end encrypted. Alert details are encrypted on your endpoints and decrypted in your browser, keeping sensitive security data out of the service&rsquo;s view.</p></article>
    <article class="benefit"><span class="benefit-label">02 / PRACTICAL</span><h3>Made for smaller setups</h3><p>Use the hosted console or spin up the Podman compose infrastructure. Radegast is shaped for small teams, families, and home labs.</p></article>
    <article class="benefit"><span class="benefit-label">03 / MANAGED</span><h3>Devices and detections</h3><p>Organize devices into groups, assign detection packs, and review alerts from one focused device management console.</p></article>
  </div>
  <div class="section-actions"><a href="{{ '/features/' | relative_url }}">See all features &rarr;</a></div>
</div></section>

<section class="section"><div class="container">
  <div class="section-header"><span class="section-eyebrow">Getting started</span><h2>From account to protected endpoint</h2></div>
  <div class="steps-list">
    <div class="step"><span class="step-number">01</span><div><h3>Add a device</h3><p>Create an account, name your device, and place it in a group.</p></div></div>
    <div class="step"><span class="step-number">02</span><div><h3>Install the agent</h3><p>Follow the operating-system-specific instructions provided by the console.</p></div></div>
    <div class="step"><span class="step-number">03</span><div><h3>Choose detections</h3><p>Assign detection packs to the group and review encrypted alerts as they arrive.</p></div></div>
  </div>
  <div class="section-actions"><a href="{{ '/blog/2026/06/16/first-steps-with-radegast/' | relative_url }}">Read the setup guide &rarr;</a><a href="{{ site.console_url }}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Open Console</a></div>
  <div class="engine-note"><span class="engine-note-label">Detection engine</span><p><strong>Endpoint detection powered by Rustinel.</strong> Rustinel is the independent open-source engine that evaluates endpoint activity with Sigma, YARA, and IOC matching. <a href="{{ site.rustinel_url }}" target="_blank" rel="noopener noreferrer">Explore Rustinel on GitHub &rarr;</a></p></div>
</div></section>
