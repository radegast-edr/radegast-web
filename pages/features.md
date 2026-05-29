---
layout: page
title: "Features"
description: "Multi-layer endpoint detection combining ETW, eBPF, Sigma, YARA, and IOC matching — all in a single privacy-first agent."
permalink: /features/
---

<div class="section-header" style="margin-bottom:2rem;">
  <span class="section-eyebrow">// detection layers</span>
</div>

## Telemetry Collection

Radegast EDR collects native host telemetry from the kernel, not from user-space hooks. This means higher fidelity and harder to bypass.

<div class="features-grid" style="margin-bottom:3rem;">
  <div class="feature-card">
    <span class="feature-icon">🪟</span>
    <h3>Windows — ETW</h3>
    <p>Event Tracing for Windows (ETW) provides native kernel-level telemetry covering process creation, image load, network connections, file activity, registry changes, DNS queries, PowerShell script blocks, WMI events, service creation, and scheduled tasks.</p>
    <div class="feature-tags">
      <span class="badge badge-muted">Windows 10/11</span>
      <span class="badge badge-muted">Server 2016+</span>
    </div>
  </div>

  <div class="feature-card">
    <span class="feature-icon">🐧</span>
    <h3>Linux — eBPF</h3>
    <p>Extended Berkeley Packet Filter (eBPF) provides kernel-level observability on Linux 5.8+ with BTF. Collects process execution, network connections, file activity, and outbound DNS queries parsed from raw payloads.</p>
    <div class="feature-tags">
      <span class="badge badge-muted">Linux 5.8+ BTF</span>
      <span class="badge badge-muted">x86_64</span>
      <span class="badge badge-muted">aarch64</span>
    </div>
  </div>
</div>

## Detection Layers

Three complementary detection approaches run in parallel on every normalized event.

<div class="features-grid" style="margin-bottom:3rem;">
  <div class="feature-card">
    <span class="feature-icon">🔍</span>
    <h3>Sigma — Behavioral Detection</h3>
    <p>Sigma is the community standard for behavioral detections. Radegast EDR evaluates Sigma rules on normalized events, letting detection engineers reuse thousands of existing community rules without rewriting them into a proprietary format.</p>
    <p>Example detections: suspicious PowerShell activity, WMI execution, service creation, scheduled task creation, Linux process/network/DNS anomalies.</p>
    <div class="feature-tags">
      <span class="badge badge-green">Sigma</span>
      <span class="badge badge-muted">Community rules</span>
      <span class="badge badge-muted">Hot reload</span>
    </div>
  </div>

  <div class="feature-card">
    <span class="feature-icon">🧬</span>
    <h3>YARA — File & Memory Scanning</h3>
    <p>YARA rules are evaluated at process creation for executable scanning. Memory scanning targets private executable regions to detect packed, obfuscated, or runtime-unpacked payloads without scanning every file on disk.</p>
    <div class="feature-tags">
      <span class="badge badge-green">YARA</span>
      <span class="badge badge-muted">Process creation</span>
      <span class="badge badge-muted">Memory regions</span>
      <span class="badge badge-muted">Hot reload</span>
    </div>
  </div>

  <div class="feature-card">
    <span class="feature-icon">🗂️</span>
    <h3>IOC Matching</h3>
    <p>Fast deterministic indicator matching against threat intelligence feeds. Useful for threat hunting and incident response, strongest when combined with behavioral and YARA layers.</p>
    <ul>
      <li>File hashes (MD5, SHA-1, SHA-256)</li>
      <li>IP addresses</li>
      <li>Domains (including DNS QueryName on both Windows and Linux)</li>
      <li>Path regexes</li>
    </ul>
    <div class="feature-tags">
      <span class="badge badge-cyan">Hashes</span>
      <span class="badge badge-cyan">IPs</span>
      <span class="badge badge-cyan">Domains</span>
      <span class="badge badge-cyan">Paths</span>
    </div>
  </div>
</div>

## Output & Integration

<div class="features-grid" style="margin-bottom:3rem;">
  <div class="feature-card">
    <span class="feature-icon">📤</span>
    <h3>ECS NDJSON Alerts</h3>
    <p>All alerts are written as Elastic Common Schema (ECS) 9.3.0 NDJSON files. Drop them directly into Elastic Stack, Splunk, or any log ingestion pipeline with no transformation required.</p>
    <div class="terminal-block" style="margin-top:1rem;">
      <div class="terminal-bar">
        <span class="dot"></span><span class="dot"></span><span class="dot"></span>
        <span class="terminal-title">logs/alerts.json.*</span>
      </div>
      <div class="terminal-body">
        <span class="output">{"@timestamp":"2026-05-29T...","event.kind":"alert",</span>
        <span class="output"> "rule.name":"Suspicious PowerShell...",</span>
        <span class="output"> "process.name":"powershell.exe", ...}</span>
      </div>
    </div>
    <div class="feature-tags">
      <span class="badge badge-green">ECS 9.3.0</span>
      <span class="badge badge-muted">NDJSON</span>
      <span class="badge badge-muted">SIEM-ready</span>
    </div>
  </div>

  <div class="feature-card">
    <span class="feature-icon">🔄</span>
    <h3>Hot Reload</h3>
    <p>Rules and IOC indicator files are hot-reloaded without restarting the agent. Update your detection pack and the agent picks it up immediately — no downtime, no gaps in coverage.</p>
    <div class="feature-tags">
      <span class="badge badge-green">Zero downtime</span>
      <span class="badge badge-muted">Rules</span>
      <span class="badge badge-muted">IOC files</span>
    </div>
  </div>

  <div class="feature-card">
    <span class="feature-icon">🛡️</span>
    <h3>Active Response</h3>
    <p>Optionally terminate malicious processes on detection. Supports dry-run mode and allowlists to tune response actions before going live.</p>
    <div class="feature-tags">
      <span class="badge badge-cyan">Optional</span>
      <span class="badge badge-muted">Dry-run mode</span>
      <span class="badge badge-muted">Allowlists</span>
    </div>
  </div>
</div>

## Privacy & Security

<div class="features-grid">
  <div class="feature-card">
    <span class="feature-icon">🔐</span>
    <h3>End-to-end Encryption</h3>
    <p>All EDR data flowing through the Radegast platform is end-to-end encrypted. Your telemetry is yours — not readable by anyone except you, not even by Radegast.</p>
    <div class="feature-tags">
      <span class="badge badge-green">E2E encrypted</span>
      <span class="badge badge-green">Zero-knowledge</span>
    </div>
  </div>

  <div class="feature-card">
    <span class="feature-icon">🦀</span>
    <h3>Memory-safe by Design</h3>
    <p>Written entirely in Rust. No null pointer dereferences, no buffer overflows, no use-after-free bugs by construction. The agent is as trustworthy as the language that built it.</p>
    <div class="feature-tags">
      <span class="badge badge-cyan">Rust</span>
      <span class="badge badge-muted">Memory-safe</span>
      <span class="badge badge-muted">No GC pauses</span>
    </div>
  </div>

  <div class="feature-card">
    <span class="feature-icon">🔓</span>
    <h3>Fully Transparent</h3>
    <p>You can inspect exactly what telemetry is collected, how detections are evaluated, and what active response actions can be taken. No black boxes. Apache 2.0 licensed.</p>
    <div class="feature-tags">
      <span class="badge badge-green">Apache 2.0</span>
      <span class="badge badge-muted">Open-source</span>
      <span class="badge badge-muted">Auditable</span>
    </div>
  </div>
</div>

<div style="margin-top:3rem; text-align:center; padding:2rem; border:1px solid #1e2330; border-radius:8px; background:#0f1117;">
  <h3 style="margin-bottom:0.75rem;">Ready to deploy?</h3>
  <p style="max-width:480px; margin:0 auto 1.5rem;">Get started in 60 seconds with the Radegast console, or run the agent standalone from the Rustinel releases.</p>
  <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
    <a href="{{ site.console_url }}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
      <span class="status-dot"></span> Open Console &rarr;
    </a>
    <a href="{{ site.rustinel_url }}/releases" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Download Rustinel ↗</a>
  </div>
</div>
