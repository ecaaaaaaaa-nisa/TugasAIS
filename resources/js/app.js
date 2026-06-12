import './bootstrap';

document.addEventListener('DOMContentLoaded', () => {
  // Sidebar
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.getElementById('menu-toggle');
  const closeSidebar = document.getElementById('closeSidebar');

  if (sidebar && menuBtn) {
    menuBtn.addEventListener('click', () => {
      sidebar.classList.add('active');
      sidebar.setAttribute('aria-hidden', 'false');
    });
  }

  if (sidebar && closeSidebar) {
    closeSidebar.addEventListener('click', () => {
      sidebar.classList.remove('active');
      sidebar.setAttribute('aria-hidden', 'true');
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar && sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
      sidebar.setAttribute('aria-hidden', 'true');
    }
  });

  document.addEventListener('click', (e) => {
    if (
      sidebar &&
      menuBtn &&
      !sidebar.contains(e.target) &&
      !menuBtn.contains(e.target) &&
      sidebar.classList.contains('active')
    ) {
      sidebar.classList.remove('active');
      sidebar.setAttribute('aria-hidden', 'true');
    }
  });

  const menuLinks = document.querySelectorAll('.sidebar-menu a');
  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Page load animation
  setTimeout(() => document.body.classList.add('loaded'), 80);

  // Countdown Timer
  const countdownElement = document.querySelector('.countdown');
  if (countdownElement) {
    let timeLeft = 3 * 86400 + 23 * 3600 + 19 * 60 + 56;

    const updateCountdown = () => {
      if (timeLeft <= 0) {
        countdownElement.innerHTML = '<span>00</span> : <span>00</span> : <span>00</span> : <span>00</span>';
        return;
      }

      const days = Math.floor(timeLeft / 86400);
      const hours = Math.floor((timeLeft % 86400) / 3600);
      const minutes = Math.floor((timeLeft % 3600) / 60);
      const seconds = timeLeft % 60;

      countdownElement.innerHTML = `
        <span>${days.toString().padStart(2, '0')}</span> :
        <span>${hours.toString().padStart(2, '0')}</span> :
        <span>${minutes.toString().padStart(2, '0')}</span> :
        <span>${seconds.toString().padStart(2, '0')}</span>
      `;

      timeLeft--;
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // Promo Countdown Timer
  const promoCountdownElement = document.querySelector('.promo-countdown');
  if (promoCountdownElement) {
    let promoTimeLeft = 2 * 3600 + 18 * 60 + 46;

    const updatePromoCountdown = () => {
      if (promoTimeLeft <= 0) {
        promoCountdownElement.innerHTML = '<span>00</span> : <span>00</span> : <span>00</span> : <span>00</span>';
        return;
      }

      const days = Math.floor(promoTimeLeft / 86400);
      const hours = Math.floor((promoTimeLeft % 86400) / 3600);
      const minutes = Math.floor((promoTimeLeft % 3600) / 60);
      const seconds = promoTimeLeft % 60;

      promoCountdownElement.innerHTML = `
        <span>${days.toString().padStart(2, '0')}</span> :
        <span>${hours.toString().padStart(2, '0')}</span> :
        <span>${minutes.toString().padStart(2, '0')}</span> :
        <span>${seconds.toString().padStart(2, '0')}</span>
      `;

      promoTimeLeft--;
    };

    updatePromoCountdown();
    setInterval(updatePromoCountdown, 1000);
  }

  // Popup register & login
const registerOverlay = document.getElementById('registerPopup');
const loginOverlay = document.getElementById('loginPopup');

const openLoginPopupLink = document.getElementById('openLoginPopupLink');
const backToRegisterLink = document.getElementById('backToRegisterLink');

const openLoginFromProfile = document.getElementById('openLoginFromProfile');
const loginToast = document.getElementById('loginToast');

  function openPopup(overlay) {
    if (!overlay) return;
    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('popup-open');

    const firstInput = overlay.querySelector('input');
    if (firstInput) setTimeout(() => firstInput.focus(), 80);
  }

  function closePopup(overlay) {
    if (!overlay) return;
    overlay.classList.remove('show');
    overlay.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('popup-open');
  }

  function openRegisterPopup() {
    openPopup(registerOverlay);
  }

  function closeRegisterPopup() {
    closePopup(registerOverlay);
  }

  function openLoginPopup() {
    openPopup(loginOverlay);
  }

  function closeLoginPopup() {
    closePopup(loginOverlay);
  }
function showLoginToast() {
  if (!loginToast) return;

  loginToast.classList.add('show');

  clearTimeout(window.loginToastTimer);

  window.loginToastTimer = setTimeout(() => {
    loginToast.classList.remove('show');
  }, 1800);
}
  // tombol yang membuka register popup
  const triggers = document.querySelectorAll('.banner-btn, .shop-now-btn, .add-to-cart');
  triggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openRegisterPopup();
    });
  });
// Profile icon -> login popup
if (openLoginFromProfile) {
  openLoginFromProfile.addEventListener('click', (e) => {
    e.preventDefault();

    showLoginToast();

    setTimeout(() => {
      openLoginPopup();
    }, 250);
  });
}
  // link Login di popup register -> buka popup login, bukan pindah page
  if (openLoginPopupLink) {
    openLoginPopupLink.addEventListener('click', (e) => {
      e.preventDefault();
      closeRegisterPopup();
      openLoginPopup();
    });
  }

  // link Register di popup login -> balik ke popup register
  if (backToRegisterLink) {
    backToRegisterLink.addEventListener('click', (e) => {
      e.preventDefault();
      closeLoginPopup();
      openRegisterPopup();
    });
  }

  // close kalau klik area luar popup
  [registerOverlay, loginOverlay].forEach((overlay) => {
    if (!overlay) return;
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closePopup(overlay);
    });
  });

  // close pakai ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (loginOverlay && loginOverlay.classList.contains('show')) closeLoginPopup();
      if (registerOverlay && registerOverlay.classList.contains('show')) closeRegisterPopup();
    }
  });

  // REGISTER: submit AJAX supaya setelah sukses tetap di page yang sama lalu pindah ke login popup
  const registerForm = registerOverlay?.querySelector('form[action="/register"]');
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      try {
        const formData = new FormData(registerForm);

        const response = await fetch(registerForm.action, {
          method: 'POST',
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': 'application/json',
          },
          body: formData,
        });

        if (response.ok) {
          registerForm.reset();
          closeRegisterPopup();
          openLoginPopup();
          return;
        }

        let message = 'Registrasi gagal. Cek input kembali.';
        try {
          const data = await response.json();
          if (data?.message) message = data.message;
          if (data?.errors) {
            const firstError = Object.values(data.errors).flat()[0];
            if (firstError) message = firstError;
          }
        } catch (_) {}

        alert(message);
      } catch (error) {
        alert('Koneksi error. Coba lagi.');
      }
    });
  }

  // LOGIN: submit normal ke /login lalu controller redirect ke /dashboard
  const loginForm = loginOverlay?.querySelector('form[action="/login"]');
  if (loginForm) {
    loginForm.addEventListener('submit', () => {
      closeLoginPopup();
    });
  }
});