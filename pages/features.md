---
layout: page
title: "Features"
description: "Privacy-first EDR with a focused device management console and endpoint detection powered by Rustinel."
permalink: /features/
---

## Privacy and end-to-end encryption

Radegast is designed to reveal as little sensitive information to the hosted service as possible. End-to-end encrypted, including alert details and detection exclusions. Alert content is encrypted on the endpoint and decrypted in your browser.

<div class="feature-list wide">
  <div class="feature-row"><h3>Transparent by default</h3><p>Radegast is open source and Apache 2.0 licensed, so you can inspect how data is collected, encrypted, stored, and displayed.</p></div>
  <div class="feature-row"><h3>European operation</h3><p>{% include eu-provenance.html %}</p></div>
</div>

## Device management console

The hosted console keeps administration approachable for small teams and home labs. It guides enrollment and gives you one place to manage the parts of your EDR setup you use most often.

<div class="feature-list wide">
  <div class="feature-row"><h3>Devices and groups</h3><p>Enroll Windows, Linux or mac devices, organize them into groups, and see device status from a central dashboard.</p></div>
  <div class="feature-row"><h3>Detection packs</h3><p>Choose prepared detection packs and assign them by group, so each device receives the detections appropriate for its environment.</p></div>
  <div class="feature-row"><h3>Alert review</h3><p>Review decrypted details in the browser, track context, and create exclusions when a detection is a false positive.</p></div>
  <div class="feature-row"><h3>Guided installation</h3><p>After you add a device, the console provides installation instructions for its operating system and confirms when enrollment succeeds.</p></div>
</div>

## Detection powered by Rustinel

[Rustinel]({{ site.rustinel_url }}){:target="_blank" rel="noopener noreferrer"} is the independent open-source endpoint detection engine used by Radegast.

<div class="feature-list wide">
  <div class="feature-row"><h3>Native telemetry</h3><p>Rustinel uses ETW on Windows and eBPF on Linux for process, network, file, registry, and DNS activity supported by each platform.</p></div>
  <div class="feature-row"><h3>Sigma detections</h3><p>Evaluate community Sigma rules against normalized events to identify suspicious behavior such as PowerShell abuse, WMI execution, and unusual process chains.</p></div>
  <div class="feature-row"><h3>YARA scanning</h3><p>Inspect executables at process creation and scan private executable memory regions for packed, obfuscated, or runtime-unpacked malware.</p></div>
  <div class="feature-row"><h3>IOC matching</h3><p>Match file hashes, IP addresses, domains, and path patterns for threat hunting and incident response.</p></div>
</div>

<div class="cta-panel wide"><h3>Protect your endpoints without surrendering your data.</h3><p>Start with the hosted console, or inspect the engine and platform source code first.</p><div class="section-actions"><a href="{{ site.console_url }}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Open Console</a></div></div>
