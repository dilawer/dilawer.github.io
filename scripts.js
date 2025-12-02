// Sticky header: move this out of index.html to keep scripts separate
(function() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Adjust threshold here if needed
  const THRESHOLD = 150;

  window.addEventListener('scroll', function() {
    if (window.scrollY > THRESHOLD) {
      hero.classList.add('sticky');
    } else {
      hero.classList.remove('sticky');
    }
    updateNavPosition();
  });
  // ensure correct placement on load
  window.addEventListener('load', updateNavPosition);
  window.addEventListener('resize', updateNavPosition);

  function updateNavPosition() {
    const nav = document.querySelector('.site-nav');
    const heroInner = document.querySelector('.hero .hero-inner');
    if (!nav || !heroInner) return;

    if (hero.classList.contains('sticky')) {
      // center nav vertically relative to the sticky header (hero-inner)
      const rect = heroInner.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      // compute top so nav is vertically centered inside hero-inner
      const top = rect.top + rect.height / 2 - navRect.height / 2;
      // set directly (pixels) — keep a minimum of 4px from top of viewport
      const value = Math.max(4, Math.round(top));
      nav.style.top = value + 'px';
    } else {
      // non-sticky: keep nav near top with 12px padding
      nav.style.top = '12px';
    }
  }
})();

// Navigation toggle for mobile
(function() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function() {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close menu when a link is clicked
  links.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// (animation toggle removed) 
