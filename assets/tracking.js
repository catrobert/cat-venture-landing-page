// Meta pixel + UTM capture + lead posting. Shared by every landing page.
(function () {
  const S = window.SITE || {};

  // ---- Meta pixel (loads only once a pixel ID is set in config.js)
  if (S.pixelId) {
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', S.pixelId);
    fbq('track', 'PageView');
  }
  window.track = function (event, params, custom) {
    if (!window.fbq) return;
    const id = 'ev_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
    fbq(custom ? 'trackCustom' : 'track', event, params || {}, { eventID: id });
  };

  // ---- UTM capture (kept for the session so it survives page steps)
  const qs = new URLSearchParams(location.search);
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'fbclid'].forEach(k => {
    if (qs.get(k)) sessionStorageSafe('set', k, qs.get(k));
  });
  function sessionStorageSafe(op, k, v) {
    try { return op === 'set' ? sessionStorage.setItem(k, v) : sessionStorage.getItem(k); } catch (e) { return null; }
  }
  window.campaignTag = function () {
    const c = sessionStorageSafe('get', 'utm_campaign');
    const a = sessionStorageSafe('get', 'utm_content');
    const src = sessionStorageSafe('get', 'utm_source');
    return [src, c, a].filter(Boolean).join(' / ') || 'direct';
  };

})();
