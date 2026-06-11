---
layout: page
title: "Screenshots"
description: "Explore the Radegast EDR Console interface through detailed screenshots."
permalink: /screenshots/
---

<section class="section">
  <div class="container">
    <div class="section-header">
      <span class="section-eyebrow">// interface tour</span>
      <h1>Screenshots</h1>
      <p>Get a detailed look at the Radegast EDR Console interface. Click on any screenshot to view it in full size.</p>
    </div>

    <div class="screenshots-grid screenshots-grid-lg">
      <div class="screenshot-card screenshot-card-lg">
        <a href="{{ '/assets/screenshots/dashboard.png' | relative_url }}" class="modal-trigger" data-caption="Dashboard - Overview">
          <img src="{{ '/assets/screenshots/dashboard.png' | relative_url }}" alt="Radegast Dashboard - Overview of your endpoints and recent alerts" class="screenshot-image">
        </a>
        <div class="screenshot-caption-lg">
          <h3>Dashboard</h3>
          <p>Dashboard provides a quick overview of current device stats and also alerts that were not yet seen or resolved.</p>
        </div>
      </div>

      <div class="screenshot-card screenshot-card-lg">
        <a href="{{ '/assets/screenshots/alert.png' | relative_url }}" class="modal-trigger" data-caption="Alert - Threat Detection">
          <img src="{{ '/assets/screenshots/alert.png' | relative_url }}" alt="Radegast Alert - Detailed threat detection information" class="screenshot-image">
        </a>
        <div class="screenshot-caption-lg">
          <h3>Alert</h3>
          <p>Alert's content is only decrypted within the browser using user's public key E2EE and shows the full data sent from the agent. If you find the alert to be a false-positive, you can create a new exclusion using <a href="https://jsonata.org/" target="_blank">JSONata</a>.</p>
        </div>
      </div>

      <div class="screenshot-card screenshot-card-lg">
        <a href="{{ '/assets/screenshots/packs.png' | relative_url }}" class="modal-trigger" data-caption="Packs - Detection Management">
          <img src="{{ '/assets/screenshots/packs.png' | relative_url }}" alt="Radegast Packs - Manage detection rules and packs" class="screenshot-image">
        </a>
        <div class="screenshot-caption-lg">
          <h3>Packs</h3>
          <p>Your devices only detect what you tell them to do. You can select from a range of prepared packs that check for both common and novel attack patterns.</p>
        </div>
      </div>
    </div>
  </div>
</section>
