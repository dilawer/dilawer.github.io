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
  });
})();
