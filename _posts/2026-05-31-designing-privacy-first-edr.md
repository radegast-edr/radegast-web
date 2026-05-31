---
layout: post
title: "Designing a Privacy-First EDR Platform"
date: 2026-05-31 00:00:00 +0000
author: "Adam Hlaváček"
---

For a long time, we've felt like there is something missing in the antivirus/EDR software market. If you are running Windows, you have (at least) Microsoft Defender installed and running. If you are running Linux, you may have ClamAV -- but good luck getting it to work properly without spending at least a day figuring out how to integrate it with your Downloads folder. If you are running macOS, you most likely have nothing.

But even having an antivirus running today may not be enough. It is great that it will stop you from running your `fortnite-money-hack.exe` file, but it won't be as helpful when a [ClickFix attack](https://www.microsoft.com/en-us/security/blog/2025/08/21/think-before-you-clickfix-analyzing-the-clickfix-social-engineering-technique/) makes you execute a malicious command on your own. This is where EDR comes in! Let's start by looking at our options.

## Current EDR Options

Before designing a new EDR platform, it is best to ask if somebody hasn't done it already -- maybe they did, and maybe they did it better than you ever could. So what can you get today for your EDR?

### Enterprise-Level Commercial EDR

Big names like [CrowdStrike Falcon](https://www.crowdstrike.com/en-us/platform/), [Microsoft Defender for Endpoint](https://www.microsoft.com/en-us/security/business/endpoint-security/microsoft-defender-endpoint), or SentinelOne's [Singularity Endpoint](https://www.sentinelone.com/platform/singularity-endpoint/) are the best things money can buy! But who among us, individually, has the money to buy an entire enterprise license for these tools? They offer great capabilities, detailed telemetry, and long-term storage with super-fast search. But they also cost what they are worth, which rules them out for individuals to buy and use.

### Wazuh XDR and SIEM

If you want to go the fully open-source route, you can deploy your own state-of-the-art [Wazuh](https://wazuh.com/) platform. You can deploy the server, connect your clients/agents to it, and control everything from one place. This is great for any company or startup that wants to avoid spending a large portion of their limited budget on an EDR solution. However, the limiting factor is the technical knowledge required to deploy and maintain the solution long-term. Sure, you can ask somebody else to maintain the Wazuh instance for you, but then you are sending them a lot of private telemetry from your device that you may not want to share.

### Velociraptor Threat Hunting

Let's say that you don't want to share *every* command you executed or file you opened on your machine all the time. Instead, you would like to be able to just search for threats in your environment on demand. If this is what you are looking for, then [Velociraptor](https://docs.velociraptor.app/) is the right tool for you. With it, you are able to query all your clients on demand with the powerful Velociraptor Query Language. This is great for monitoring, but it lacks the response part. You will know that somebody started encrypting your family photos, but you will have no way to stop it.

## What Radegast Does Differently

Radegast is built on a few foundational ideas:

* **Easy to deploy:** Knowing how to run a single command in the CLI must be enough to get your device onboarded into the system.
* **Always private:** Only the data that is *absolutely necessary* should be sent over the network, and even then, *only you* should be able to see it.
* **Fully transparent & free:** How can you trust that a piece of software is not doing anything other than what it promised? By letting you look under the hood. Everything must be open-source with a permissive license.

Basically, what we lacked personally (and wanted to build) was a platform that would allow anybody to onboard their personal computers and servers, as well as those of their family, friends, or small team. There is always a tradeoff between privacy, required maintenance time, and capabilities. From a regular user's perspective, the tools we have today require sacrificing either privacy or maintenance time. Radegast decided to sacrifice a little of the last factor -- capabilities.

However, we strongly believe it is a worthy tradeoff because it allowed us to maximize privacy and ease of use instead. So, how does Radegast work exactly? Radegast operates on a classical server/client architecture. The server is a central console platform to which all clients connect and send telemetry. But the catch is that all detections (and responses) run fully locally on your machine. The only telemetry sent is when a local detection actually triggers a rule, and even then, the telemetry is fully end-to-end encrypted using the user's public key. This means that nobody, not even server administrators, can see any details about what happened. On the other hand, nothing that the local agent is set to detect is *ever* sent to the server. So, for the cost of privacy, you are sacrificing some visibility (and investigation capability).

This tradeoff means you may not spot the newest state-level attackers targeting your multi-billion-dollar company, but that is not who Radegast is targeting. Radegast's target user base is primarily smaller user groups, families, and teams that currently do not have any other EDR installed. They will most likely not face an APT-level advesary, but they may very well be targeted by the newest supply-chain attack. For this user group (of which the Radegast founders are members), having *some* visibility is infinitely better than having *no* visibility at all.

## Radegast Tech Stack

We want onboarding to Radegast to be as simple as possible. You can either use our public [Console instance](https://console.radegast.app/), or simply spin up your own via our official [Docker image](https://hub.docker.com/r/radegastedr/console) and a few environment variables. The Radegast platform is divided into four main components. Starting from your endpoint device, these are:

* EDR Agent
* EDR Agent Connector
* Console Backend & Database
* Console Web UI

Let's look at each of them in detail.

### EDR Agent

The EDR agent is probably the most important part of the stack because it is the part running all the detections and executing responses. For the detections to be useful, it must have high privileges within the system. Because of that, it needs to be trusted. In our stack, the software that plays this part is the amazing [Rustinel](https://github.com/Karib0u/rustinel) -- a single binary written in Rust and running as root that takes a folder with Sigma/YARA rules or IoCs, with hot-reloading enabled. It uses its high privileges to hook into system events and monitors for anything that matches any known detection. If it finds something, it records an event into a JSONL file and optionally kills the process that caused the detection to trigger. Notice that there is no communication with our backend at this stage -- this is an intentional decision to minimize the attack surface against this highly privileged piece of software.

### EDR Agent Connector

The defining feature of the [EDR agent connector](https://github.com/radegast-edr/radegast-agent-python) is that it has write access to the agent's rules and read-only access to the detection alert logs, and nothing else. Running on your computer, it periodically connects to the Console to check if there are any detection rule updates that should be downloaded. If yes, it fetches them for Rustinel to use. It also checks for new alerts in Rustinel's log files, and if there are any, it:

* Encrypts the alert using the user's public keys
* Signs it using its own private key
* Sends the encrypted alert to the console

It is currently written in Python, with a planned rewrite in Rust for the future. Because it is the only piece of the stack running on the user's device with network access, it has the least privileges possible. The encryption part is handled using [age](https://age-encryption.org/) because of its ease of use and wide platform support.

### Console Backend & Database

The [backend](https://github.com/radegast-edr/radegast-console-backend) uses FastAPI together with asyncio SQLAlchemy over an SQLite database. This is great for fast deployment and API access, as everything can be bundled inside a single Docker image. FastAPI also provides automatic OpenAPI specs and allows for clearly defined dependencies for server workers. Asyncio allows for better resource allocation. Other than that, there is nothing unexpected going on with the backend. As the platform is E2EE, the encryption is handled at the endpoints, and the backend only provides mindless storage of the encrypted data.

### Console Web UI

The [web UI](https://github.com/radegast-edr/radegast-console-web) is written in the Svelte framework, as it is the fastest to pick up with a batteries-included approach. To be able to decrypt the data sent from the EDR, upon first login, the browser generates a pair of age private keys -- one for regular usage and a second one for recovery. The one for regular usage is stored encrypted at rest via a [CryptoKey with disabled exporting](https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey/extractable) inside the browser's IndexedDB. The second recovery key has its private key encrypted using AES-256-GCM with a randomly generated key and is saved in the backend database. The AES key is then shown to the user and can be used to recover the private key in case the primary private key is deleted along with the browser session. If you log in from a new web browser, you will be prompted to copy the private key to the new browser with the actuall transfer being done with the help of ephemeral age keys.

## Current Project Status & Where to Go Next

At the moment, the Console is running as an MVP. It has some demo detections that allow you to test out the functionality on Windows and Linux (and macOS, [hopefully soon](https://github.com/Karib0u/rustinel/pull/42)). The next step is to create a reliable process for testing real-world detections and subsequently publishing them for anybody to use via the Console. If you want to stay updated, consider:

* Saving this blog's [RSS feed](https://radegast.app/rss.xml) in your reader
* Following us on Mastodon (link soon, pending approval)
* Trying out the [Console](https://console.radegast.app/) to see what it already does
