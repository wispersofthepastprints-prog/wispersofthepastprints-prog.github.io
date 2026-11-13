document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open')));

document.querySelectorAll('a[href*="play.google.com/store/apps/details?id=com.wispersofthepast.ivoryos"]').forEach(link => {
  link.addEventListener('click', () => {
    if (window.goatcounter && typeof window.goatcounter.count === 'function') {
      window.goatcounter.count({
        path: 'outbound/ivoryos-google-play',
        title: `IvoryOS Google Play — ${window.location.pathname}`,
        event: true,
      });
    }
  });
});
