---
layout: post
title: "How We Prioritize Detection Pack Creation"
date: 2026-09-23 00:00:00 +0000
author: "Aris Sarris"
---

MITRE ATT&CK currently lists north of 200 enterprise techniques and sub-techniques, and the Sigma rule ecosystem covers most of them many times over. If we tried to ship a pack with "all of it enabled," we'd be handing users of a device they were promised wouldn't need "a full-time SOC to babysit" a wall of alerts they can't triage. So before a single rule ships in a [Radegast](https://console.radegast.app/) pack, we have to answer a much narrower question: out of everything Sigma could detect, what should actually go in first?

## Starting from a ranked list, not a blank page

Rather than deciding technique-by-technique from scratch, we start from the Center for Threat-Informed Defense's [Top ATT&CK Techniques](https://ctid.mitre.org/projects/top-attack-techniques/) project. CTID scores every enterprise technique on three things: how *prevalent* it is in real intrusions, whether it sits at a *choke point* an adversary can't easily route around, and how *actionable* it is -- meaning decent detection analytics actually exist for it. Those three scores combine into a composite ranking, and CTID ships an interactive calculator so you can re-weight the factors for your own environment instead of taking the generic list at face value.

That composite ranking is our seed pool. It turns "cover ATT&CK" from an unbounded problem into a prioritized backlog, and it means the first rules we write are the ones most likely to catch something that matters, not just the ones that happened to have a public Sigma rule already.

## Turning a ranked list into three packs

A ranking alone doesn't tell you how *confident* a detection needs to be before it's safe to run unattended on someone's laptop. That's what our pack tiers are for. Each OS (right now Windows and Linux, both for standalone hosts) ships three packs that build on each other:

```
windows-hunting
  └─ extends windows-advanced
       └─ extends windows-essential
```

- **essential** -- the highest-ranked, single-event, high-confidence techniques. Low false-positive budget, meant to be safe to enable on day one.
- **advanced** -- pattern and context-based detections: parent-child relationships, path/hash correlation, sequences of events. Medium false-positive budget.
- **hunting** -- subtle, fileless, and living-off-the-land techniques that produce *candidates for review* rather than confident standalone alerts. High false-positive budget, meant for people who actually want to triage.

## Where the ranking needs a human

CTID's list is deliberately generic -- it isn't aware of who Radegast is actually protecting. So we layer three kinds of judgment on top of it before it turns into a pack:

**Audience fit.** Radegast targets standalone machines -- individuals, families, and small teams, not domain-joined fleets (see [why we built it this way](/2026/05/31/designing-privacy-first-edr.html)). So every domain-joined tactic -- lateral movement, Kerberos abuse, AD/LDAP enumeration -- is excluded from all packs, regardless of how high it scores. On Linux specifically, this also drops techniques that only produce signal via SSSD or Winbind. High CTID rank doesn't matter if the telemetry it needs doesn't exist on the target host.

**Platform reality, not just technique ID.** The same technique can deserve a different tier depending on the OS. T1548 (Abuse Elevation Control Mechanism) sits in `linux-essential`, because SUID/SGID misconfiguration and sudo abuse are prevalent and high-confidence on Linux without any behavioral correlation. On Windows, the equivalent detections need enough context that they only belong in `windows-hunting`. A single cross-platform ranking can't capture that, so we re-evaluate per OS rather than copying tier placement across platforms.

**Detection feasibility versus technique importance.** T1078.003 (Local Accounts) is relevant to a standalone host in principle, but reliable detection needs behavioral context that no single event can provide -- so it sits in `hunting`, not `essential`, on both OSes. Conversely, some technique families need to be pulled apart entirely: T1204 (User Execution) includes ClickFix/FileFix rules that live in their own dedicated `windows-clickfix` pack rather than the general packs, because a blanket technique filter would prefix-match those sub-techniques and duplicate rules that are really targeting one specific campaign, not general ATT&CK coverage. Those handful of rules get added individually by description rather than by technique ID.

We also keep the packs current with how ATT&CK itself evolves -- for instance, both OS packs use T1685 in place of the now-retired T1562 for Disable/Impair Defenses.

## The actual tooling

Once a technique's tier is decided, adding it to a pack is one command against our internal `populate_pack.py` tool, filtering the shared Sigma corpus by OS, severity, and technique ID:

```bash
python tools/populate_pack.py \
  --os windows \
  --pack essential \
  --level critical high \
  --technique T1059 T1547 T1053 T1543 T1082 T1685 T1003 T1105
```

Severity is filtered independently of technique -- Windows packs only include critical/high rules, keeping tier placement and rule quality as separate knobs. Appending `--sync` to any of these commands prunes rules that no longer match the current filter, so as the underlying Sigma corpus changes, packs don't quietly accumulate rules that were never a deliberate choice.

## What this gets us

The net effect is a rollout path we can defend line by line: every technique in a pack traces back to a CTID score, a deliberate tier placement, and (for the handful of exceptions) a documented reason it deviates from the mechanical filter. If a rule turns out to be too noisy, or ATT&CK adds a new sub-technique, or CID re-ranks something, we re-run the populate command and `--sync` takes care of the rest -- the pack always reflects a decision we can point to, not just whatever happened to accumulate over time.

If you want to stay updated about what is happening with Radegast EDR, consider:

* Saving this blog's [RSS feed](https://radegast.app/rss.xml) in your reader
* Following us on [Mastodon](https://infosec.exchange/@radegast_edr) and [BlueSky](https://bsky.app/profile/radegast-edr.bsky.social)
* Trying out the [Console](https://console.radegast.app/) to see it in action
