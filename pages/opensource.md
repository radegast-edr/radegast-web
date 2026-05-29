---
layout: page
title: "Open Source"
description: "Radegast EDR is built on open-source foundations. Inspect the code, contribute, and own your security stack."
permalink: /opensource/
---

<div class="section-header" style="margin-bottom:0.5rem;">
  <span class="section-eyebrow">// open source</span>
</div>

Radegast EDR is free, open-source, and licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). Every component is inspectable, forkable, and community-improvable.

We believe security software should be transparent by design. You should be able to verify exactly what telemetry is collected, how detections work, and what the agent can and cannot do on your systems.

---

## GitHub Organization

<div class="feature-card" style="margin-bottom:2rem;">
  <span class="feature-icon">🏢</span>
  <h3>radegast-edr</h3>
  <p>The official GitHub organization for Radegast EDR. Repositories, issues, roadmaps, and release artifacts live here.</p>
  <a href="{{ site.github_org }}" class="btn btn-primary" target="_blank" rel="noopener noreferrer" style="margin-top:1rem;">
    github.com/radegast-edr &rarr;
  </a>
</div>

## The Detection Engine: Rustinel

<div class="rustinel-callout" style="margin-bottom:2rem;">
  <div class="rustinel-logo">rustinel</div>
  <div class="rustinel-text">
    <h3>Open-source endpoint detection engine</h3>
    <p>The core agent powering Radegast EDR is <strong>Rustinel</strong> — an independent open-source project by <a href="https://github.com/Karib0u" target="_blank" rel="noopener noreferrer">@Karib0u</a>. It combines ETW, eBPF, Sigma, YARA, IOC matching, and ECS NDJSON alert output in a single Rust binary for Windows and Linux.</p>
    <div style="display:flex; gap:0.75rem; flex-wrap:wrap; margin-top:0.5rem;">
      <a href="{{ site.rustinel_url }}" class="btn btn-ghost" target="_blank" rel="noopener noreferrer">View Rustinel on GitHub &rarr;</a>
      <a href="{{ site.rustinel_url }}/releases" class="btn btn-ghost" target="_blank" rel="noopener noreferrer">Releases ↗</a>
      <a href="https://karib0u.github.io/rustinel/" class="btn btn-ghost" target="_blank" rel="noopener noreferrer">Documentation ↗</a>
    </div>
  </div>
</div>

## License

Radegast EDR and Rustinel are both released under the **Apache License 2.0** — a permissive open-source license that lets you use, modify, and distribute the software freely, even in commercial contexts, with attribution.

```
Copyright 2026 Radegast EDR Contributors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0
```

---

## Contributing

We welcome contributions of all kinds:

- **Detection rules** — Sigma and YARA rules for new threat patterns
- **Bug reports and fixes** — issues and PRs on GitHub
- **Platform support** — new OS/architecture coverage
- **Documentation** — guides, examples, and translations
- **Testing** — lab deployments, feedback, and edge cases

See [CONTRIBUTING.md]({{ site.rustinel_url }}/blob/main/CONTRIBUTING.md){:target="_blank" rel="noopener noreferrer"} in the Rustinel repo to get started.

---

## Security

Please report vulnerabilities through the appropriate channel depending on which component is affected.

**Radegast EDR platform** (console, web, infrastructure) &mdash; follow the [security.txt](/.well-known/security.txt) for this site, or email [security@radegast.app](mailto:security@radegast.app). Do not open public issues.

**Rustinel agent engine** &mdash; follow the [SECURITY.md]({{ site.rustinel_url }}/blob/main/SECURITY.md){:target="_blank" rel="noopener noreferrer"} in the Rustinel repository.
