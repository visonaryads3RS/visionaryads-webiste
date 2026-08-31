// VisionaryAds — shared site behavior.
// Replaces the Claude Design canvas runtime (support.js / image-slot.js) with plain,
// dependency-free JS: no React-from-CDN, no live Unsplash placeholder fetching.

(function () {
  'use strict';

  // --- image-slot: a placeholder box until real photos are dropped in. ---
  // Real photo workflow: put the file in assets/images/, then either add an <img>
  // child inside the matching <image-slot> tag, or set its src="" attribute.
  class ImageSlot extends HTMLElement {
    connectedCallback() {
      this.render();
    }
    static get observedAttributes() { return ['src', 'placeholder']; }
    attributeChangedCallback() { this.render(); }
    render() {
      const src = this.getAttribute('src');
      this.innerHTML = '';
      if (src) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = this.getAttribute('alt') || this.getAttribute('placeholder') || '';
        img.loading = this.hasAttribute('eager') ? 'eager' : 'lazy';
        this.appendChild(img);
      } else {
        const label = document.createElement('div');
        label.className = 'va-slot-label';
        label.textContent = this.getAttribute('placeholder') || 'photo needed';
        this.appendChild(label);
      }
    }
  }
  if (!customElements.get('image-slot')) customElements.define('image-slot', ImageSlot);

  // --- style-hover / style-focus polyfill ---
  // Elements carry a `style-hover="prop:value;..."` (and/or style-focus) attribute
  // authored by Claude Design. Apply those declarations on hover/focus, restore on
  // leave/blur, without needing per-element CSS classes.
  function wireStateStyles(attr, enterEvents, leaveEvents) {
    document.querySelectorAll('[' + attr + ']').forEach((el) => {
      const overrideText = el.getAttribute(attr);
      const baseText = el.getAttribute('style') || '';
      enterEvents.forEach((ev) => el.addEventListener(ev, () => {
        el.setAttribute('style', baseText + ';' + overrideText);
      }));
      leaveEvents.forEach((ev) => el.addEventListener(ev, () => {
        el.setAttribute('style', baseText);
      }));
    });
  }
  wireStateStyles('style-hover', ['mouseenter'], ['mouseleave']);
  wireStateStyles('style-focus', ['focus'], ['blur']);

  // --- Before/after compare slider ---
  // Markup contract: a wrapper with [data-va-compare], containing one element with
  // [data-va-after] that gets clipped to reveal the "before" layer beneath it.
  document.querySelectorAll('[data-va-compare]').forEach((wrap) => {
    const after = wrap.querySelector('[data-va-after]');
    const handle = wrap.querySelector('[data-va-handle]');
    if (!after) return;
    let pct = parseFloat(wrap.getAttribute('data-va-start') || '50');
    let dragging = false;

    function apply() {
      after.style.clipPath = 'inset(0 0 0 ' + pct + '%)';
      if (handle) handle.style.left = pct + '%';
      wrap.setAttribute('aria-valuenow', String(Math.round(pct)));
    }
    function setFromEvent(e) {
      const r = wrap.getBoundingClientRect();
      pct = Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100));
      apply();
    }

    wrap.setAttribute('role', 'slider');
    wrap.setAttribute('tabindex', '0');
    wrap.setAttribute('aria-valuemin', '0');
    wrap.setAttribute('aria-valuemax', '100');
    wrap.setAttribute('aria-label', wrap.getAttribute('aria-label') || 'Before and after comparison');

    wrap.addEventListener('pointerdown', (e) => {
      dragging = true;
      wrap.setPointerCapture && wrap.setPointerCapture(e.pointerId);
      setFromEvent(e);
    });
    wrap.addEventListener('pointermove', (e) => { if (dragging) setFromEvent(e); });
    wrap.addEventListener('pointerup', () => { dragging = false; });
    wrap.addEventListener('pointercancel', () => { dragging = false; });
    wrap.addEventListener('keydown', (e) => {
      const step = e.shiftKey ? 10 : 3;
      if (e.key === 'ArrowLeft') { e.preventDefault(); pct = Math.max(0, pct - step); apply(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); pct = Math.min(100, pct + step); apply(); }
    });
    apply();
  });

  // --- Contact form: submit to the real endpoint (Formspree-style), then show
  // a confirmation state without leaving the page. If action="" is still empty
  // (no endpoint wired yet), it just flips the UI so the flow can be previewed.
  const form = document.querySelector('[data-va-contact-form]');
  if (form) {
    const notSent = document.querySelector('[data-va-contact-notsent]');
    const sent = document.querySelector('[data-va-contact-sent]');
    let error = document.querySelector('[data-va-contact-error]');

    function showSent() {
      if (notSent) notSent.hidden = true;
      if (sent) sent.hidden = false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (typeof window.gtag === 'function') window.gtag('event', 'generate_lead');
      if (typeof window.fbq === 'function') window.fbq('track', 'Lead');
    }
    function showError(message) {
      if (!error) {
        error = document.createElement('p');
        error.setAttribute('data-va-contact-error', '');
        error.style.cssText = 'margin:16px 0 0;color:oklch(0.72 0.16 40);font-size:16px';
        form.appendChild(error);
      }
      error.textContent = message;
    }

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const action = form.getAttribute('action');
      if (!action) { showSent(); return; } // no endpoint yet — preview the flow only

      try {
        const res = await fetch(action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });
        if (res.ok) {
          showSent();
        } else {
          showError("Something didn't go through. Email me directly at visionaryads@yahoo.com and I'll get it from there.");
        }
      } catch (err) {
        showError("Couldn't reach the server. Email me directly at visionaryads@yahoo.com and I'll get it from there.");
      }
    });
  }
})();
