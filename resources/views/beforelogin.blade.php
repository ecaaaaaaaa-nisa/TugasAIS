<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>SayurKu</title>

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

    <!-- CSS -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>

<!-- SIDE NAVIGATION -->
<div class="sidebar" id="sidebar" aria-hidden="true">
    <button class="close-btn" id="closeSidebar" aria-label="Close menu">
        <i class="fa-solid fa-xmark"></i>
    </button>
</div>

<!-- HEADER -->
<header class="main-header">
    <div class="header-container">

        <div class="header-left">
            

            <div class="logo-box">
                <img src="{{ asset('Gambar/logo.png') }}" class="logo-img" alt="Logo SayurKu">
                <span class="logo-text">SayurKu</span>
            </div>
        </div>

        <div class="header-center">
    <div class="search-box">
        <input type="text" placeholder="Search fresh vegetables...">
        <button class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
</div>

<div class="header-right">
    <button class="icon-btn profile-btn" id="openLoginFromProfile" aria-label="Account">
    <i class="fa-regular fa-user"></i>
</button>

    <button class="icon-btn cart-btn" aria-label="Cart">
        <i class="fa-solid fa-cart-shopping"></i>
        <span class="cart-badge">0</span>
    </button>
</div>

    </div>
</header>

<!-- HERO SECTION -->
<section class="hero-section">
    <div class="hero-grid">

        <div class="hero-large banner-item">
            <img src="{{ asset('Gambar/Baner 1.png') }}" class="hero-img">
            <button class="banner-btn">Shop Now <i class="fa-solid fa-arrow-right"></i></button>
        </div>

        <div class="hero-column">
            <div class="hero-small banner-item">
                <img src="{{ asset('Gambar/Baner 2.png') }}" class="hero-img">
            </div>
            <div class="hero-small banner-item">
                <img src="{{ asset('Gambar/Baner 3.png') }}" class="hero-img">
            </div>
        </div>

    </div>
</section>

<!-- FEATURES -->
<section class="features-section">
    <div class="feature-item">
        <div class="icon"><i class="fa-solid fa-truck"></i></div>
        <h4>Free Shipping</h4>
        <p>Fast &amp; Safe Delivery</p>
    </div>

    <div class="feature-item">
        <div class="icon"><i class="fa-solid fa-shield-halved"></i></div>
        <h4>Secure Payment</h4>
        <p>100% Protected</p>
    </div>

    <div class="feature-item">
        <div class="icon"><i class="fa-solid fa-headset"></i></div>
        <h4>Customer Support</h4>
        <p>24/7 Ready</p>
    </div>

    <div class="feature-item">
        <div class="icon"><i class="fa-solid fa-box"></i></div>
        <h4>Money-Back Guarantee</h4>
        <p>30 Days Guarantee</p>
    </div>
</section>
<!-- Popular Categories Section -->
<section class="categories-section">
  <div class="section-header">
    <h2>Popular Categories</h2>
  </div>
  <div class="categories-grid">
    <div class="category-item">
      <img src="https://i.pinimg.com/1200x/8d/d8/8f/8dd88f2d461d5c769ffc5f8d8354a2d0.jpg" alt="Fresh Fruit">
      <a href="Buah.html">Fresh Fruit</a>
    </div>
    <div class="category-item">
      <img src="https://i.pinimg.com/236x/85/52/db/8552dba99069af774f62877a2077e299.jpg" alt="Fresh Vegetables">
      <a href="Sayuran.html">Fresh Vegetables</a>
    </div>
    <div class="category-item">
      <img src="https://i.pinimg.com/1200x/df/b7/ea/dfb7ea7bd560f593bd788eb865c1f581.jpg" alt="Meat & Fish">
      <a href="Daging.html">Meat & Fish</a>
    </div>
  </div>
</section>
<!-- FLASH SALES -->
<section class="flash-sales-section">

    <div class="sales-header">
        <h2>Flash Sales</h2>
        <div class="countdown">
            <span>03</span> :
            <span>23</span> :
            <span>19</span> :
            <span>56</span>
        </div>
    </div>

    <div class="products-grid">
        <div class="product-item">
      <div class="product-image">
        <img src="https://i.pinimg.com/736x/6a/16/68/6a16689a0ccd7a3377bab677627f5215.jpg" alt="Ayam Utuh Negri">
        <div class="product-actions">
          <button class="action-btn"><i class="fa-regular fa-heart"></i></button>
          <button class="action-btn"><i class="fa-regular fa-eye"></i></button>
        </div>
        <div class="discount-badge">-15%</div>
      </div>
      <p>Ayam Utuh Negri</p>
      <span class="price">Rp. 45,000 <del>Rp. 53,000</del></span>
      <div class="rating">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
      </div>
      <button class="add-to-cart"><i class="fa-solid fa-bag-shopping"></i></button>
    </div>
    <div class="product-item">
      <div class="product-image">
        <img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/101/MTA-109622764/no-brand_anggur-shine-muscat-450gr_full01.jpg" alt="Anggur Hijau">
        <div class="product-actions">
          <button class="action-btn"><i class="fa-regular fa-heart"></i></button>
          <button class="action-btn"><i class="fa-regular fa-eye"></i></button>
        </div>
        <div class="discount-badge">-15%</div>
      </div>
      <p>Anggur Hijau 500g</p>
      <span class="price">Rp. 60,000 <del>Rp. 71,000</del></span>
      <div class="rating">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
      </div>
      <button class="add-to-cart"><i class="fa-solid fa-bag-shopping"></i></button>
    </div>
    <div class="product-item">
      <div class="product-image">
        <img src="https://i.pinimg.com/736x/4a/cc/5f/4acc5f804f89cd17ef7efe9d87c2e37b.jpg" alt="Wortel">
        <div class="product-actions">
          <button class="action-btn"><i class="fa-regular fa-heart"></i></button>
          <button class="action-btn"><i class="fa-regular fa-eye"></i></button>
        </div>
        <div class="discount-badge">-15%</div>
      </div>
      <p>Wortel Organik 500g</p>
      <span class="price">Rp. 39,000 <del>Rp. 46,000</del></span>
      <div class="rating">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
      </div>
      <button class="add-to-cart"><i class="fa-solid fa-bag-shopping"></i></button>
    </div>
    <div class="product-item">
      <div class="product-image">
        <img src="https://solvent-production.s3.amazonaws.com/media/images/products/2021/11/DSC_0231.JPG" alt="Brokoli Segar">
        <div class="product-actions">
          <button class="action-btn"><i class="fa-regular fa-heart"></i></button>
          <button class="action-btn"><i class="fa-regular fa-eye"></i></button>
        </div>
        <div class="discount-badge">-15%</div>
      </div>
      <p>Brokoli Segar 500g</p>
      <span class="price">Rp. 20,000 <del>Rp. 24,000</del></span>
      <div class="rating">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
      </div>
      <button class="add-to-cart"><i class="fa-solid fa-bag-shopping"></i></button>
    </div>
  </div>
</section>
<section class="promo-section">
  <div class="promo-grid">
    <div class="promo-item blue">
      <div class="promo-content">
        <p class="promo-subtitle">BEST DEALS</p>
        <h2 class="promo-title">Sale of the Month</h2>
        <div class="promo-countdown">
          <span>00</span> :
          <span>02</span> :
          <span>18</span> :
          <span>46</span>
        </div>
        <button class="shop-now-btn">Shop Now →</button>
      </div>
      <img src="Gambar/Promosi.png" alt="Best deals promotion" class="promo-img">
    </div>
    <div class="promo-item black">
      <div class="promo-content">
        <p class="promo-subtitle">85% FAT FREE</p>
        <h2 class="promo-title">Low-Fat Meat</h2>
        <p class="promo-price">Started at Rp.99.000</p>
        <button class="shop-now-btn">Shop Now →</button>
      </div>
      <img src="Gambar/Promosi 2.png" alt="Low-fat meat promotion" class="promo-img">
    </div>
    <div class="promo-item yellow">
      <div class="promo-content">
        <p class="promo-subtitle">SUMMER SALE</p>
        <h2 class="promo-title">100% Fresh Fruit</h2>
        <p class="promo-price">Up to 64% OFF</p>
        <button class="shop-now-btn">Shop Now →</button>
      </div>
      <img src="Gambar/Promosi 3.png" alt="Fresh fruit promotion" class="promo-img">
    </div>
  </div>
</section>

<!-- New Ours Products Section (added below promo, matching the layout from the image) -->
<section class="ours-products-section">
  <div class="section-header">
    <h2>Our Products</h2>
    <a href="#" class="view-all">View All →</a>
  </div>
  <div class="products-grid">
    <div class="product-item">
      <div class="product-image">
        <img src="https://i.pinimg.com/1200x/ae/0a/f7/ae0af76977e2e220170d52ea4e508afd.jpg" alt="Bayam Ungu">
        <div class="product-actions">
          <button class="action-btn"><i class="fa-regular fa-heart"></i></button>
          <button class="action-btn"><i class="fa-regular fa-eye"></i></button>
        </div>
        <div class="discount-badge">Sale 50%</div>
      </div>
      <p>Bayam Ungu 500g</p>
      <span class="price">Rp. 12,000 <del>Rp. 24,000</del></span>
      <div class="rating">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
      </div>
      <button class="add-to-cart"><i class="fa-solid fa-bag-shopping"></i></button>
    </div>
    <div class="product-item">
      <div class="product-image">
        <img src="https://i.pinimg.com/736x/42/36/79/423679d25ddeca44934051ea5004e945.jpg" alt="Timun">
        <div class="product-actions">
          <button class="action-btn"><i class="fa-regular fa-heart"></i></button>
          <button class="action-btn"><i class="fa-regular fa-eye"></i></button>
        </div>
      </div>
      <p>Timun Jepang 700gr</p>
      <span class="price">Rp. 13,000</span>
      <div class="rating">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
      </div>
      <button class="add-to-cart"><i class="fa-solid fa-bag-shopping"></i></button>
    </div>
    <div class="product-item">
      <div class="product-image">
        <img src="https://down-id.img.susercontent.com/file/id-11134207-7r98v-ltp4kqt179yb23" alt="Paru">
        <div class="product-actions">
          <button class="action-btn"><i class="fa-regular fa-heart"></i></button>
          <button class="action-btn"><i class="fa-regular fa-eye"></i></button>
        </div>
      </div>
      <p>Paru Sapi 500Gr</p>
      <span class="price">Rp. 55,000</span>
      <div class="rating">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
      </div>
      <button class="add-to-cart"><i class="fa-solid fa-bag-shopping"></i></button>
    </div>
    <div class="product-item">
      <div class="product-image">
        <img src="https://img.freepik.com/premium-photo/fresh-green-lettuce-isolated-white-background_183587-275.jpg" alt="Selada Hijau">
        <div class="product-actions">
          <button class="action-btn"><i class="fa-regular fa-heart"></i></button>
          <button class="action-btn"><i class="fa-regular fa-eye"></i></button>
        </div>
      </div>
      <p>Selada Hijau</p>
      <span class="price">Rp. 9,000</span>
      <div class="rating">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
      </div>
      <button class="add-to-cart"><i class="fa-solid fa-bag-shopping"></i></button>
    </div>
    <div class="product-item">
      <div class="product-image">
        <img src="https://www.pngitem.com/pimgs/m/297-2972590_kiwifruit-packaging-zespri-hd-png-download.png" alt="Kiwi">
        <div class="product-actions">
          <button class="action-btn"><i class="fa-regular fa-heart"></i></button>
          <button class="action-btn"><i class="fa-regular fa-eye"></i></button>
        </div>
      </div>
      <p>Kiwi Segar 454g</p>
      <span class="price">Rp. 34,500</span>
      <div class="rating">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
      </div>
      <button class="add-to-cart"><i class="fa-solid fa-bag-shopping"></i></button>
    </div>
    <div class="product-item">
      <div class="product-image">
        <img src="https://cf.shopee.co.id/file/3d1fd2186e7306fb2b22bb73fb5ca19e" alt="Bawang Merah">
        <div class="product-actions">
          <button class="action-btn"><i class="fa-regular fa-heart"></i></button>
          <button class="action-btn"><i class="fa-regular fa-eye"></i></button>
        </div>
      </div>
      <p>Bawang Merah 500Gr</p>
      <span class="price">Rp. 23,780</span>
      <div class="rating">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
      </div>
      <button class="add-to-cart"><i class="fa-solid fa-bag-shopping"></i></button>
    </div>
    <div class="product-item">
      <div class="product-image">
        <img src="https://img.freepik.com/premium-photo/fresh-corn-isolated-white-background_252965-1183.jpg" alt="Jagung">
        <div class="product-actions">
          <button class="action-btn"><i class="fa-regular fa-heart"></i></button>
          <button class="action-btn"><i class="fa-regular fa-eye"></i></button>
        </div>
      </div>
      <p>Jagung</p>
      <span class="price">Rp. 10,000</span>
      <div class="rating">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
      </div>
      <button class="add-to-cart"><i class="fa-solid fa-bag-shopping"></i></button>
    </div>
    <div class="product-item">
      <div class="product-image">
        <img src="https://vasifood.com.vn/wp-content/uploads/2021/03/5-1.jpg" alt="Cabai">
        <div class="product-actions">
          <button class="action-btn"><i class="fa-regular fa-heart"></i></button>
          <button class="action-btn"><i class="fa-regular fa-eye"></i></button>
        </div>
      </div>
      <p>Cabai Merah</p>
      <span class="price">Rp. 26,378</span>
      <div class="rating">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
      </div>
      <button class="add-to-cart"><i class="fa-solid fa-bag-shopping"></i></button>
    </div>
    <div class="product-item">
      <div class="product-image">
        <img src="https://i.pinimg.com/1200x/f1/b5/ea/f1b5ea6868bac67daf59673933a529ae.jpg" alt="Daun Mint">
        <div class="product-actions">
          <button class="action-btn"><i class="fa-regular fa-heart"></i></button>
          <button class="action-btn"><i class="fa-regular fa-eye"></i></button>
        </div>
        <div class="discount-badge">Sale 50%</div>
      </div>
      <p>Daun Mint </p>
      <span class="price">Rp. 10,000 <del>Rp. 15,000</del></span>
      <div class="rating">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
      </div>
      <button class="add-to-cart"><i class="fa-solid fa-bag-shopping"></i></button>
    </div>
    <div class="product-item">
      <div class="product-image">
        <img src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/1/8/02f7d67a-d4d8-4c10-a614-e379b84b61f1.jpg" alt="Daging Kambing">
        <div class="product-actions">
          <button class="action-btn"><i class="fa-regular fa-heart"></i></button>
          <button class="action-btn"><i class="fa-regular fa-eye"></i></button>
        </div>
      </div>
      <p>Daging Kambing 1Kg</p>
      <span class="price">Rp. 48,970</span>
      <div class="rating">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
      </div>
      <button class="add-to-cart"><i class="fa-solid fa-bag-shopping"></i></button>
    </div>
    </div>
</section>

<!-- REGISTER POPUP -->
<div id="registerPopup" class="popup-overlay ios">
    <div class="ios-card">

        <div class="ios-image">
            <img src="{{ asset('Gambar/PopUp.png') }}">
        </div>

        <div class="ios-body">
            <h2>Create an account<br><span class="muted">with SayurKu</span></h2>

            <form method="POST" action="/register">
    @csrf

    <div class="ios-input-row">
        <input type="text" name="name" placeholder="Nama lengkap" required>
    </div>

    <div class="ios-input-row">
        <input type="email" name="email" placeholder="email@contoh.com" required>
    </div>

    <div class="ios-input-row">
        <input type="password" name="password" placeholder="Masukkan password" required>
    </div>

    <button type="submit" class="ios-cta">
        Register
    </button>
</form>

            <p class="have-account">
                Apakah anda sudah pnya akun?
                <a href="#" class="login-link" id="openLoginPopupLink">Login</a>
            </p>
        </div>

    </div>
</div>
<!-- LOGIN POPUP -->
<div id="loginPopup" class="popup-overlay ios" aria-hidden="true">
    <div class="ios-card">
        <div class="ios-image">
            <img src="{{ asset('Gambar/PopUp.png') }}" alt="Login SayurKu">
        </div>

        <div class="ios-body">
            <h2>Welcome back<br><span class="muted">login to SayurKu</span></h2>

            <form method="POST" action="/login" id="loginForm">
                @csrf

                <div class="ios-input-row">
                    <input type="email" name="email" placeholder="email@contoh.com" required>
                </div>

                <div class="ios-input-row">
                    <input type="password" name="password" placeholder="Masukkan password" required>
                </div>

                <button type="submit" class="ios-cta">
                    Login
                </button>
            </form>

            <p class="have-account">
                Belum punya akun?
                <a href="#" class="login-link" id="backToRegisterLink">Register</a>
            </p>
        </div>
    </div>
</div>
<div id="loginToast" class="login-toast" aria-hidden="true">
    <i class="fa-solid fa-circle-info"></i>
    <span>Silakan login terlebih dahulu</span>
</div>
<!-- JS -->
<script src="{{ asset('js/BeforeLogin.js') }}"></script>

</body>
</html>
