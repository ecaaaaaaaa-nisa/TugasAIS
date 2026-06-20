import './bootstrap';

document.addEventListener('DOMContentLoaded', () => {
  const isLoggedIn = Boolean(window.isLoggedIn);
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content || '';

  // =========================
  // Sidebar
  // =========================
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

  // =========================
  // Page load animation
  // =========================
  setTimeout(() => document.body.classList.add('loaded'), 80);

  // =========================
  // Countdown Timer
  // =========================
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

  // =========================
  // Promo Countdown Timer
  // =========================
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

  // =========================
  // Popup register & login
  // =========================
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
    loginToast.setAttribute('aria-hidden', 'false');

    clearTimeout(window.loginToastTimer);

    window.loginToastTimer = setTimeout(() => {
      loginToast.classList.remove('show');
      loginToast.setAttribute('aria-hidden', 'true');
    }, 1800);
  }

  function promptLogin() {
    showLoginToast();
    setTimeout(() => {
      openLoginPopup();
    }, 250);
  }

  // =========================
  // PRODUCT VIEW / MATA
  // =========================
  const viewOverlay = document.getElementById('viewPopup');
  const closeViewPopup = document.getElementById('closeViewPopup');
  const viewMainImage = document.getElementById('viewMainImage');
  const viewTitle = document.getElementById('viewTitle');
  const viewDesc = document.getElementById('viewDesc');
  const viewPrice = document.getElementById('viewPrice');
  const viewNewPrice = document.getElementById('viewNewPrice');
  const viewOldPrice = document.getElementById('viewOldPrice');
  const viewDiscount = document.getElementById('viewDiscount');
  const viewRating = document.getElementById('viewRating');
  const viewMoreInfo = document.getElementById('viewMoreInfo');
  const viewCartBtn = document.getElementById('viewCartBtn');
  const viewBuyBtn = document.getElementById('viewBuyBtn');

  let currentViewedCard = null;

  function openViewPopup(card) {
    if (!viewOverlay || !card) return;

    currentViewedCard = card;

    const img = card.querySelector('.product-image img');
    const titleEl = card.querySelector('p');
    const priceEl = card.querySelector('.price');
    const discountEl = card.querySelector('.discount-badge');
    const ratingEl = card.querySelector('.rating');

    const title = titleEl ? titleEl.textContent.trim() : 'Detail Produk';
    const priceText = priceEl?.firstChild?.textContent?.trim() || priceEl?.textContent?.trim() || 'Rp. 0';
    const oldPrice = priceEl && priceEl.querySelector('del')
      ? priceEl.querySelector('del').textContent.trim()
      : '';
    const discount = discountEl ? discountEl.textContent.trim() : 'Produk segar';
    const rating = ratingEl ? ratingEl.innerHTML : '★★★★★';

    viewMainImage.src = img ? img.src : '';
    viewMainImage.alt = title;
    viewTitle.textContent = title;
    viewDesc.textContent = `${title} adalah produk pilihan yang ditampilkan di katalog SayurKu dengan kualitas segar dan cocok untuk kebutuhan harian.`;
    viewPrice.textContent = priceText;
    viewNewPrice.textContent = priceText;
    viewOldPrice.textContent = oldPrice;
    viewDiscount.textContent = discount;
    viewRating.innerHTML = rating;
    viewMoreInfo.textContent = 'Produk ini dapat dipilih setelah login. Untuk menambahkan ke keranjang atau membeli, silakan login terlebih dahulu.';

    viewOverlay.classList.add('show');
    viewOverlay.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('popup-open');
  }

  function closeView() {
    if (!viewOverlay) return;
    viewOverlay.classList.remove('show');
    viewOverlay.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('popup-open');
    currentViewedCard = null;
  }

  document.addEventListener('click', (e) => {
    const eyeBtn = e.target.closest('.product-actions .action-btn');
    if (!eyeBtn) return;

    const icon = eyeBtn.querySelector('i');
    if (!icon || !icon.classList.contains('fa-eye')) return;

    e.preventDefault();
    const card = eyeBtn.closest('.product-item');
    openViewPopup(card);
  });

  if (closeViewPopup) {
    closeViewPopup.addEventListener('click', closeView);
  }

  if (viewOverlay) {
    viewOverlay.addEventListener('click', (e) => {
      if (e.target === viewOverlay) closeView();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && viewOverlay && viewOverlay.classList.contains('show')) {
      closeView();
    }
  });

  if (viewCartBtn) {
    viewCartBtn.addEventListener('click', async () => {
      if (!isLoggedIn) {
        promptLogin();
        return;
      }
      if (currentViewedCard) {
        await addProductToCart(currentViewedCard, true);
      }
    });
  }

  if (viewBuyBtn) {
    viewBuyBtn.addEventListener('click', async () => {
      if (!isLoggedIn) {
        promptLogin();
        return;
      }
      if (currentViewedCard) {
        await addProductToCart(currentViewedCard, true);
      }
    });
  }

  // tombol yang membuka register popup
  const triggers = document.querySelectorAll('.banner-btn, .shop-now-btn');
  triggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!isLoggedIn) {
        openRegisterPopup();
      }
    });
  });

  // =========================
  // CART UI
  // =========================
  const cartOverlay = document.getElementById('cartPopup');
  const closeCartPopup = document.getElementById('closeCartPopup');
  const backFromCartBtn = document.getElementById('backFromCartBtn');
  const checkoutCartBtn = document.getElementById('checkoutCartBtn');
  const cartItemsEl = document.getElementById('cartItems');
  const cartCountLabel = document.getElementById('cartCountLabel');
  const cartSummaryText = document.getElementById('cartSummaryText');
  const cartTotalText = document.getElementById('cartTotalText');

  function formatIDR(value) {
    return `Rp. ${Number(value || 0).toLocaleString('id-ID')}`;
  }

  function requireLogin() {
    if (!isLoggedIn) {
      promptLogin();
      return true;
    }
    return false;
  }

  function getProductPayload(card) {
    const name = card.querySelector('p')?.textContent.trim() || 'Produk';
    const image = card.querySelector('.product-image img')?.src || '';
    const priceText = card.querySelector('.price')?.firstChild?.textContent?.trim() || 'Rp. 0';
    const price = Number(priceText.replace(/[^\d]/g, '')) || 0;

    return {
      product_name: name,
      product_image: image,
      price: price,
      qty: 1,
    };
  }

  function normalizeCartData(data) {
    const items = Array.isArray(data?.items) ? data.items : [];
    const count = Number(
      data?.count ??
      items.reduce((sum, item) => sum + Number(item.qty || 1), 0)
    );
    const total = Number(
      data?.total ??
      items.reduce((sum, item) => sum + Number(item.subtotal ?? (Number(item.price || 0) * Number(item.qty || 1))), 0)
    );

    return { items, count, total };
  }

  function updateCartBadge(count) {
    const badge = document.querySelector('.cart-badge');
    if (badge) badge.textContent = String(count ?? 0);
    if (cartCountLabel) cartCountLabel.textContent = String(count ?? 0);
  }

  function renderCart(data) {
    const { items, count, total } = normalizeCartData(data);

    updateCartBadge(count);
    if (cartSummaryText) cartSummaryText.textContent = `${count} Product`;
    if (cartTotalText) cartTotalText.textContent = formatIDR(total);

    if (!cartItemsEl) return;

    if (!items.length) {
      cartItemsEl.innerHTML = `
        <div class="cart-empty">
          <i class="fa-solid fa-cart-shopping"></i>
          <h3>Keranjang masih kosong</h3>
          <p>Tambahkan produk dulu supaya bisa checkout.</p>
        </div>
      `;
      return;
    }

    cartItemsEl.innerHTML = items.map((item) => {
      const id = item.id ?? item.cart_item_id ?? item.product_id ?? '';
      const name = item.product_name || item.name || 'Produk';
      const image = item.product_image || item.image || '';
      const qty = Number(item.qty || 1);
      const price = Number(item.price || 0);
      const subtotal = Number(item.subtotal ?? price * qty);

      return `
        <div class="cart-item" data-id="${id}">
          <img class="cart-thumb" src="${image}" alt="${name}">
          <div class="cart-meta">
            <h4>${name}</h4>
            <div class="cart-sub">${qty} x ${formatIDR(price)}</div>
            <div class="cart-row">
              <div class="cart-qty">
                <button type="button" class="qty-btn" data-qty="dec" data-id="${id}">−</button>
                <span>${qty}</span>
                <button type="button" class="qty-btn" data-qty="inc" data-id="${id}">+</button>
              </div>
              <div class="cart-price">${formatIDR(subtotal)}</div>
            </div>
          </div>
          <button type="button" class="cart-remove" data-remove="${id}" aria-label="Hapus">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      `;
    }).join('');
  }

  async function cartRequest(url, options = {}) {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-TOKEN': csrfToken,
        ...(options.headers || {}),
      },
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.message || 'Terjadi kesalahan');
    return data;
  }

  async function fetchCart() {
    const res = await fetch('/cart/items', {
      headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.message || 'Gagal memuat keranjang');

    renderCart(data);
    return normalizeCartData(data);
  }

  async function openCartModal() {
    if (requireLogin()) return;
    await fetchCart();
    openPopup(cartOverlay);
  }

  async function addProductToCart(card, openCartAfterAdd = true) {
    if (requireLogin()) return null;

    const payload = getProductPayload(card);

    try {
      const res = await fetch('/cart/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-TOKEN': csrfToken,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        alert(data.message || 'Gagal menambahkan produk ke keranjang');
        return null;
      }

      renderCart(data);
      if (openCartAfterAdd) {
        openPopup(cartOverlay);
      }

      return data;
    } catch (error) {
      alert('Koneksi error. Coba lagi.');
      return null;
    }
  }

  async function refreshCartAndOpen() {
    if (requireLogin()) return;
    await fetchCart();
    openPopup(cartOverlay);
  }

  if (closeCartPopup) {
    closeCartPopup.addEventListener('click', () => closePopup(cartOverlay));
  }

  if (backFromCartBtn) {
    backFromCartBtn.addEventListener('click', () => closePopup(cartOverlay));
  }

  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) closePopup(cartOverlay);
    });
  }

  if (cartItemsEl) {
  cartItemsEl.addEventListener('click', async (e) => {
  const removeBtn = e.target.closest('[data-remove]');
  const qtyBtn = e.target.closest('[data-qty]');

  try {
    if (removeBtn) {
      const id = removeBtn.dataset.remove;
      await cartRequest(`/cart/items/${id}`, { method: 'DELETE' });
      await fetchCart();
      return;
    }

    if (qtyBtn) {
      const id = qtyBtn.dataset.id;
      const action = qtyBtn.dataset.qty;

      const cartItem = qtyBtn.closest('.cart-item');
      const qtyText = cartItem?.querySelector('.cart-qty span')?.textContent || '1';
      const currentQty = Number(qtyText) || 1;

      const nextQty = action === 'inc'
        ? currentQty + 1
        : currentQty - 1;

      if (nextQty <= 0) {
        await cartRequest(`/cart/items/${id}`, { method: 'DELETE' });
      } else {
        await cartRequest(`/cart/items/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ qty: nextQty }),
        });
      }

      await fetchCart();
    }
  } catch (error) {
    alert(error.message || 'Gagal memperbarui keranjang');
  }
});
  }

  if (checkoutCartBtn) {
    checkoutCartBtn.addEventListener('click', async () => {
      if (requireLogin()) return;

      try {
        const data = await cartRequest('/cart/checkout', { method: 'POST' });

        if (data.redirect_url) {
          window.location.href = data.redirect_url;
          return;
        }

        if (data.checkout_url) {
          window.location.href = data.checkout_url;
          return;
        }

        await fetchCart();
        alert(data.message || 'Checkout berhasil');
      } catch (error) {
        alert(error.message || 'Checkout gagal');
      }
    });
  }

  // =========================
  // Global click handlers
  // =========================
  document.addEventListener('click', async (e) => {
    // Profile icon
    if (e.target.closest('#openLoginFromProfile')) {
      e.preventDefault();

      if (!isLoggedIn) {
        promptLogin();
      } else {
        alert(`Halo, ${window.authUserName || 'User'}`);
      }
      return;
    }

    // Cart icon
    if (e.target.closest('.cart-btn')) {
      e.preventDefault();
      if (!isLoggedIn) {
        promptLogin();
      } else {
        await refreshCartAndOpen();
      }
      return;
    }

    // Add to cart buttons
    const addBtn = e.target.closest('.add-to-cart');
    if (addBtn) {
      e.preventDefault();
      const card = addBtn.closest('.product-item');
      if (card) {
        await addProductToCart(card, true);
      }
      return;
    }

    // Heart/favorite buttons
    const heartBtn = e.target.closest('.product-actions .action-btn');
    if (heartBtn) {
      const icon = heartBtn.querySelector('i');
      if (icon && icon.classList.contains('fa-heart')) {
        e.preventDefault();

        if (requireLogin()) return;

        alert('Produk disimpan ke favorit. Fitur favorit bisa disambungkan berikutnya.');
      }
    }
  });

  // =========================
  // Popup link handlers
  // =========================
  if (openLoginPopupLink) {
    openLoginPopupLink.addEventListener('click', (e) => {
      e.preventDefault();
      closeRegisterPopup();
      openLoginPopup();
    });
  }

  if (backToRegisterLink) {
    backToRegisterLink.addEventListener('click', (e) => {
      e.preventDefault();
      closeLoginPopup();
      openRegisterPopup();
    });
  }

  // close kalau klik area luar popup
  [registerOverlay, loginOverlay, viewOverlay, cartOverlay].forEach((overlay) => {
    if (!overlay) return;
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closePopup(overlay);
    });
  });

  // close pakai ESC
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;

    if (cartOverlay && cartOverlay.classList.contains('show')) closePopup(cartOverlay);
    if (viewOverlay && viewOverlay.classList.contains('show')) closeView();
    if (loginOverlay && loginOverlay.classList.contains('show')) closeLoginPopup();
    if (registerOverlay && registerOverlay.classList.contains('show')) closeRegisterPopup();
  });

  // =========================
  // REGISTER: submit AJAX
  // =========================
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

  // =========================
  // LOGIN: submit normal
  // =========================
  const loginForm = loginOverlay?.querySelector('form[action="/login"]');
  if (loginForm) {
    loginForm.addEventListener('submit', () => {
      closeLoginPopup();
    });
  }

  // =========================
  // Search mode: halaman utama disembunyikan, tampil hanya hasil pencarian
  // =========================
  const searchInput = document.querySelector('.search-box input');
  const searchButton = document.querySelector('.search-btn');

  const homeSections = document.querySelectorAll(
    '.hero-section, .features-section, .categories-section, .flash-sales-section, .promo-section, .ours-products-section'
  );

  let searchResultsSection = document.getElementById('searchResultsSection');

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (m) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m]));
  }

  function ensureSearchResultsSection() {
    if (searchResultsSection) return searchResultsSection;

    searchResultsSection = document.createElement('section');
    searchResultsSection.id = 'searchResultsSection';
    searchResultsSection.className = 'search-results-section';
    searchResultsSection.hidden = true;

    const header = document.querySelector('.main-header');
    if (header) {
      header.insertAdjacentElement('afterend', searchResultsSection);
    } else {
      document.body.insertBefore(searchResultsSection, document.body.firstChild);
    }

    return searchResultsSection;
  }

  function setHomeVisible(isVisible) {
    homeSections.forEach((section) => {
      section.style.display = isVisible ? '' : 'none';
    });
  }

  function runProductSearch() {
    if (!searchInput) return;

    const keyword = searchInput.value.toLowerCase().trim();
    const resultsSection = ensureSearchResultsSection();

    const originalCards = Array.from(
      document.querySelectorAll('.flash-sales-section .product-item, .ours-products-section .product-item')
    );

    if (!keyword) {
      resultsSection.hidden = true;
      resultsSection.innerHTML = '';
      setHomeVisible(true);
      document.body.classList.remove('search-mode');
      return;
    }

    document.body.classList.add('search-mode');
    setHomeVisible(false);
    resultsSection.hidden = false;

    const matches = originalCards.filter((card) =>
      card.innerText.toLowerCase().includes(keyword)
    );

    resultsSection.innerHTML = `
      <div class="search-results-header">
        <h2>Hasil Pencarian</h2>
        <p>Untuk: "<strong>${escapeHtml(searchInput.value.trim())}</strong>"</p>
      </div>
      <div class="products-grid search-results-grid"></div>
    `;

    const grid = resultsSection.querySelector('.search-results-grid');

    if (!matches.length) {
      grid.innerHTML = `<div class="no-search-result">Produk tidak ditemukan</div>`;
      return;
    }

    matches.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.classList.add('search-result-card');
      grid.appendChild(clone);
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', runProductSearch);
  }

  if (searchButton) {
    searchButton.addEventListener('click', (e) => {
      e.preventDefault();
      runProductSearch();
    });
  }

  // =========================
  // Initial cart sync for logged in user
  // =========================
  if (isLoggedIn) {
    fetchCart().catch(() => {});
  } else {
    updateCartBadge(0);
  }
});