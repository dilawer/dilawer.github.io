// Head scripts: dynamically inject Google Analytics and run initial config.
(function () {
  var GA_ID = 'G-B90NNFGHY7';

  // Inject GA loader script with async attribute
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  var head = document.getElementsByTagName('head')[0] || document.documentElement;
  head.appendChild(s);

  // Setup dataLayer and gtag queuing function
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  gtag('js', new Date());
  gtag('config', GA_ID);
})();
