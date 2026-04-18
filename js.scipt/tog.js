// Side Nav Toggle
const navOpen = document.getElementById('navOpen');
const navClose = document.getElementById('navClose');
const navOverlay = document.getElementById('navOverlay');

function openNav() {
  document.body.classList.add('nav-open');
}

function closeNav() {
  document.body.classList.remove('nav-open');
}

navOpen?.addEventListener('click', openNav);
navClose?.addEventListener('click', closeNav);
navOverlay?.addEventListener('click', closeNav);

// Close on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeNav();
});

// Highlight active page in side nav
document.querySelectorAll('.side-nav-links a').forEach(link => {
  if (link.href === window.location.href) {
    link.style.background = 'var(--bg, #f8f9fa)';
    link.style.fontWeight = '600';
  }
});


    