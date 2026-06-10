(function () {
  'use strict';

  var phrases = [
    'Detect threats. Keep your data.',
    'Open-source endpoint detection for everyone.',
    'ETW + eBPF. Sigma + YARA. Zero lock-in.',
    'Your telemetry, end-to-end encrypted.',
    'Built for small teams, families, and home labbers.',
  ];

  var TYPING_SPEED = 45;    // ms per character
  var ERASING_SPEED = 22;   // ms per character
  var PAUSE_AFTER_TYPE = 2400;  // ms to pause after full phrase
  var PAUSE_AFTER_ERASE = 400;  // ms to pause before next phrase

  function startTypewriter(el) {
    var phraseIndex = 0;
    var charIndex = 0;
    var erasing = false;

    function tick() {
      var phrase = phrases[phraseIndex];

      if (!erasing) {
        charIndex++;
        el.textContent = phrase.slice(0, charIndex);
        if (charIndex === phrase.length) {
          erasing = true;
          setTimeout(tick, PAUSE_AFTER_TYPE);
          return;
        }
        setTimeout(tick, TYPING_SPEED);
      } else {
        charIndex--;
        el.textContent = phrase.slice(0, charIndex);
        if (charIndex === 0) {
          erasing = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(tick, PAUSE_AFTER_ERASE);
          return;
        }
        setTimeout(tick, ERASING_SPEED);
      }
    }

    tick();
  }

  document.addEventListener('DOMContentLoaded', function () {
    var el = document.getElementById('typewriter-target');
    if (el) startTypewriter(el);
  });
})();
