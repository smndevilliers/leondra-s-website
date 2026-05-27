/* Leondra's Wolkaboutertjes - UI script */

(function () {
  'use strict';

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // Contact form submission (Web3Forms)
  const form = document.querySelector('#contact-form');
  if (form) {
    const status = document.querySelector('#form-status');

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      status.className = 'form-status';
      status.textContent = '';

      const formData = new FormData(form);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        const data = await response.json();

        if (data.success) {
          status.className = 'form-status success';
          status.textContent = 'Thank you for your enquiry. We will be in touch shortly.';
          form.reset();
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      } catch (err) {
        status.className = 'form-status error';
        status.textContent = 'Sorry, something went wrong. Please email info@leondras.com.au directly.';
      } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }
    });
  }
})();
