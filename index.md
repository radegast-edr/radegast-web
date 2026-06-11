---
layout: default
title: "Radegast EDR — Open-source Endpoint Detection & Response"
---

<section class="hero">
  <div class="hex-bg"></div>
  <div class="container">
    <span class="hero-eyebrow">endpoint detection &amp; response</span>

    <h1 class="hero-title">
      <span class="title-accent">Radegast</span> EDR
    </h1>

    <p class="hero-tagline">
      <span class="prompt-prefix"></span><span class="typewriter-text" id="typewriter-target">Detect threats. Respond fast. Trust your data.</span><span class="typewriter-cursor"></span>
    </p>

    <div class="hero-actions">
      <a href="{{ site.console_url }}" class="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
        <span class="status-dot"></span>
        Open Console &rarr;
      </a>
      <a href="{{ site.github_org }}" class="btn btn-secondary btn-lg" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>

    <div class="hero-stats">
      <div class="stat">
        <span class="stat-value">100 %</span>
        <span class="stat-label">Open-source</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-value">Free</span>
        <span class="stat-label">Forever</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-value">E2E</span>
        <span class="stat-label">Encrypted</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-value">1-Click</span>
        <span class="stat-label">Deployment</span>
      </div>
    </div>
  </div>
</section>

<div class="construction-banner">
  <div class="container">
    <span class="construction-icon">🚧</span>
    <span>Radegast EDR is currently under heavy construction &mdash; expect rough edges and missing pieces. <a href="/rss.xml">Subscribe to the RSS feed</a> to follow progress.</span>
  </div>
</div>

<section class="section-sm">
  <div class="container">
    <div class="props-strip">
      <div class="prop-item">
        <span class="prop-icon">🔓</span>
        <span class="prop-title">Open-source</span>
        <p>Every line of code is public. Inspect it, fork it, contribute to it. No black boxes.</p>
      </div>
      <div class="prop-item">
        <span class="prop-icon">🔐</span>
        <span class="prop-title">Privacy-first</span>
        <p>All your EDR telemetry is end-to-end encrypted. Your data is yours — always.</p>
      </div>
      <div class="prop-item">
        <span class="prop-icon">🏠</span>
        <span class="prop-title">Small-scale friendly</span>
        <p>Lightweight, easy to deploy, no infrastructure needed. Perfect for small teams, families, and home labs.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-header">
      <span class="section-eyebrow">// detection capabilities</span>
      <h2>Multi-layer endpoint detection</h2>
      <p>Radegast EDR combines proven detection approaches on a single cross-platform agent.</p>
    </div>

    <div class="features-grid">
      <div class="feature-card">
        <span class="feature-icon">📡</span>
        <h3>Native Telemetry</h3>
        <p>ETW on Windows and eBPF on Linux — native kernel-level event streams for process, network, file, DNS, and registry activity.</p>
        <div class="feature-tags">
          <span class="badge badge-cyan">ETW</span>
          <span class="badge badge-cyan">eBPF</span>
          <span class="badge badge-muted">Windows</span>
          <span class="badge badge-muted">Linux</span>
        </div>
      </div>

      <div class="feature-card">
        <span class="feature-icon">🔍</span>
        <h3>Sigma Detection</h3>
        <p>Evaluate community Sigma rules for behavioral detections — PowerShell abuse, WMI execution, suspicious process chains, and more.</p>
        <div class="feature-tags">
          <span class="badge badge-green">Sigma</span>
          <span class="badge badge-muted">Behavioral</span>
        </div>
      </div>

      <div class="feature-card">
        <span class="feature-icon">🧬</span>
        <h3>YARA Scanning</h3>
        <p>Scan executables at process creation and private memory regions for packed, obfuscated, or runtime-unpacked malware.</p>
        <div class="feature-tags">
          <span class="badge badge-green">YARA</span>
          <span class="badge badge-muted">Memory</span>
          <span class="badge badge-muted">Files</span>
        </div>
      </div>

      <div class="feature-card">
        <span class="feature-icon">🗂️</span>
        <h3>IOC Matching</h3>
        <p>Fast deterministic checks against file hashes, IP addresses, domains, and path regexes for threat intel and IR workflows.</p>
        <div class="feature-tags">
          <span class="badge badge-cyan">Hashes</span>
          <span class="badge badge-cyan">IPs</span>
          <span class="badge badge-cyan">Domains</span>
        </div>
      </div>

      <div class="feature-card">
        <span class="feature-icon">📤</span>
        <h3>SIEM-ready Output</h3>
        <p>Alerts are written as ECS 9.3.0 NDJSON — drop them straight into Elastic, Splunk, or any log pipeline without transformation.</p>
        <div class="feature-tags">
          <span class="badge badge-green">ECS NDJSON</span>
          <span class="badge badge-muted">SIEM</span>
        </div>
      </div>

      <div class="feature-card">
        <span class="feature-icon">🦀</span>
        <h3>Built in Rust</h3>
        <p>Memory-safe, zero garbage-collection pauses, minimal footprint. The agent stays out of your way while staying in the fight.</p>
        <div class="feature-tags">
          <span class="badge badge-cyan">Rust</span>
          <span class="badge badge-muted">Memory-safe</span>
          <span class="badge badge-muted">Fast</span>
        </div>
      </div>
    </div>

    <div style="text-align:center; margin-top: 2.5rem;">
      <a href="{{ '/features/' | relative_url }}" class="btn btn-ghost">Full feature breakdown &rarr;</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-header">
      <span class="section-eyebrow">// screenshots</span>
      <h2>See it in action</h2>
      <p>Get a glimpse of the Radegast EDR Console interface.</p>
    </div>

    <div class="screenshots-grid">
      <div class="screenshot-card">
        <a href="{{ '/assets/screenshots/dashboard.png' | relative_url }}" class="modal-trigger" data-caption="Dashboard">
          <img src="{{ '/assets/screenshots/dashboard.png' | relative_url }}" alt="Radegast Dashboard" class="screenshot-image">
        </a>
        <div class="screenshot-caption">Dashboard</div>
      </div>
      <div class="screenshot-card">
        <a href="{{ '/assets/screenshots/alert.png' | relative_url }}" class="modal-trigger" data-caption="Alert">
          <img src="{{ '/assets/screenshots/alert.png' | relative_url }}" alt="Radegast Alert" class="screenshot-image">
        </a>
        <div class="screenshot-caption">Alert</div>
      </div>
      <div class="screenshot-card">
        <a href="{{ '/assets/screenshots/packs.png' | relative_url }}" class="modal-trigger" data-caption="Packs">
          <img src="{{ '/assets/screenshots/packs.png' | relative_url }}" alt="Radegast Packs" class="screenshot-image">
        </a>
        <div class="screenshot-caption">Packs</div>
      </div>
    </div>

    <div style="text-align:center; margin-top: 2.5rem;">
      <a href="{{ '/screenshots/' | relative_url }}" class="btn btn-ghost">View all screenshots &rarr;</a>
    </div>
  </div>
</section>

<section class="section" style="border-top: 1px solid #1e2330;">
  <div class="container">
    <div class="section-header">
      <span class="section-eyebrow">// how it works</span>
      <h2>Up and running in four steps</h2>
    </div>

    <div class="steps-list">
      <div class="step">
        <span class="step-number">01</span>
        <div class="step-body">
          <h3>Register at the Console</h3>
          <p>Create your free Radegast account at <a href="{{ site.console_url }}" target="_blank" rel="noopener noreferrer">console.radegast.app</a>. No credit card, no commitment.</p>
        </div>
      </div>
      <div class="step">
        <span class="step-number">02</span>
        <div class="step-body">
          <h3>Create a new device</h3>
          <p>Add a device from the Console dashboard. You'll get a unique agent configuration tied to that endpoint.</p>
        </div>
      </div>
      <div class="step">
        <span class="step-number">03</span>
        <div class="step-body">
          <h3>Select your detections</h3>
          <p>Choose which detection layers to enable — Sigma behavioral rules, YARA scanning, IOC matching, or all three.</p>
        </div>
      </div>
      <div class="step">
        <span class="step-number">04</span>
        <div class="step-body">
          <h3>Deploy the agent &amp; watch telemetry roll in</h3>
          <p>Drop the agent binary on your device and start it. Alerts appear in the Console in real time, end-to-end encrypted.</p>
        </div>
      </div>
    </div>

    <div style="text-align:center; margin-top:2.5rem;">
      <a href="{{ site.console_url }}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
        <span class="status-dot"></span> Get started &rarr;
      </a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="rustinel-callout">
      <div class="rustinel-logo">rustinel</div>
      <div class="rustinel-text">
        <h3>Powered by Rustinel</h3>
        <p>The detection engine behind Radegast EDR is <strong>Rustinel</strong> — an open-source endpoint detection project combining ETW, eBPF, Sigma, YARA, and IOC matching in a single Rust binary. 321 stars on GitHub and growing.</p>
        <a href="{{ site.rustinel_url }}" class="btn btn-ghost" target="_blank" rel="noopener noreferrer">Explore Rustinel on GitHub &rarr;</a>
      </div>
    </div>
  </div>
</section>

<section class="section-sm" style="text-align:center; border-top: 1px solid #1e2330;">
  <div class="container">
    <h2 style="margin-bottom:1rem;">Ready to protect your endpoints?</h2>
    <p style="max-width:520px; margin:0 auto 2rem;">Open-source, free, and privacy-first. Your telemetry stays encrypted. No vendor lock-in, ever. <strong>Built for small teams, families, and home labbers.</strong></p>
    <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
      <a href="{{ site.console_url }}" class="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
        <span class="status-dot"></span>
        Open Console &rarr;
      </a>
      <a href="{{ site.github_org }}" class="btn btn-secondary btn-lg" target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  </div>
</section>
