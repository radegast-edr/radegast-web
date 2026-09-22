(function () {
  'use strict';

  var modalOverlay = null;
  var modal = null;
  var modalImage = null;
  var modalCaption = null;
  var modalClose = null;
  var modalPrev = null;
  var modalNext = null;
  var triggers = [];
  var currentIndex = 0;
  var activeTrigger = null;

  function initModal() {
    // Create modal elements
    modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';

    modal = document.createElement('div');
    modal.className = 'modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'screenshot-modal-caption');

    modalImage = document.createElement('img');
    modalImage.className = 'modal-image';

    modalCaption = document.createElement('div');
    modalCaption.className = 'modal-caption';
    modalCaption.id = 'screenshot-modal-caption';

    modalClose = document.createElement('button');
    modalClose.className = 'modal-close';
    modalClose.setAttribute('aria-label', 'Close');

    modalPrev = document.createElement('button');
    modalPrev.className = 'modal-prev';
    modalPrev.setAttribute('aria-label', 'Previous');

    modalNext = document.createElement('button');
    modalNext.className = 'modal-next';
    modalNext.setAttribute('aria-label', 'Next');

    // Build modal structure
    modal.appendChild(modalImage);
    modal.appendChild(modalCaption);
    modal.appendChild(modalClose);
    modal.appendChild(modalPrev);
    modal.appendChild(modalNext);
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);

    // Event listeners
    modalClose.addEventListener('click', closeModal);
    modalPrev.addEventListener('click', showPrev);
    modalNext.addEventListener('click', showNext);
    modalOverlay.addEventListener('click', function(e) {
      if (e.target === modalOverlay) closeModal();
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (!modalOverlay.classList.contains('active')) return;
      switch (e.key) {
        case 'Escape': closeModal(); break;
        case 'ArrowLeft': showPrev(); break;
        case 'ArrowRight': showNext(); break;
        case 'Tab':
          var controls = [modalClose, modalPrev, modalNext].filter(function(control) {
            return !control.disabled;
          });
          var first = controls[0];
          var last = controls[controls.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
          break;
      }
    });

    // Collect all triggers
    triggers = Array.from(document.querySelectorAll('.modal-trigger'));

    // Add click handlers
    triggers.forEach(function(trigger, index) {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        openModal(index);
      });
    });

    // Prevent body scroll when modal is open
    modalOverlay.addEventListener('transitionend', function() {
      if (modalOverlay.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
  }

  function openModal(index) {
    activeTrigger = triggers[index];
    currentIndex = index;
    updateModalContent();
    modalOverlay.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if (activeTrigger) activeTrigger.focus();
  }

  function updateModalContent() {
    var trigger = triggers[currentIndex];
    var href = trigger.getAttribute('href');
    var caption = trigger.getAttribute('data-caption') || '';

    modalImage.src = href;
    modalImage.alt = trigger.querySelector('img').alt || caption;
    modalCaption.textContent = caption;

    // Update navigation buttons
    modalPrev.disabled = currentIndex === 0;
    modalNext.disabled = currentIndex === triggers.length - 1;
  }

  function showPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      updateModalContent();
    }
  }

  function showNext() {
    if (currentIndex < triggers.length - 1) {
      currentIndex++;
      updateModalContent();
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModal);
  } else {
    initModal();
  }
})();
