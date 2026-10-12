/**
 * AVTOBAZAR PRO - Desktop Car Dealership & Marketplace OS
 * Complete Interactive Application Core
 */

(function () {
  'use strict';

  // ==========================================
  // 1. STATE & INITIAL DATABASE
  // ==========================================

  const EXCHANGE_RATE_USD_UZS = 12850;

  const DEFAULT_CARS = [
    {
      id: 'car-bmw-m5',
      brand: 'BMW',
      model: 'M5 Competition F90 LCI',
      year: 2023,
      body: 'Sedan',
      priceUSD: 118000,
      mileage: 12000,
      fuel: 'Benzin',
      transmission: 'Avtomat',
      powerHP: 625,
      accel0100: 3.3,
      city: 'Toshkent',
      color: 'Frozen Deep Grey Metallic',
      image: 'assets/images/bmw_m5.png',
      badge: 'luxury',
      badgeText: 'M POWER VIP',
      sellerName: 'Bavaria Motors Tashkent',
      sellerPhone: '+998 90 911 00 55',
      isSold: false,
      dateAdded: '2026-10-08',
      desc: 'Avtomobil ideal holatda. M Driver paketi, Akrapovic titan glushitel, keramika tormozlar, zavod boyog\'ida. Garajda saqlangan, kafolat mavjud.'
    },
    {
      id: 'car-byd-song',
      brand: 'BYD',
      model: 'Song Plus Champion EV Flagship',
      year: 2024,
      body: 'SUV',
      priceUSD: 31500,
      mileage: 0,
      fuel: 'Elektr',
      transmission: 'Reduktor / EV',
      powerHP: 218,
      accel0100: 7.9,
      city: 'Toshkent',
      color: 'Pearl White Crystal',
      image: 'assets/images/byd_song_plus.png',
      badge: 'electric',
      badgeText: 'YANGI (0 KM)',
      sellerName: 'BYD Official Center Sergeli',
      sellerPhone: '+998 71 200 44 88',
      isSold: false,
      dateAdded: '2026-10-10',
      desc: 'Yangi 2024-yilgi Champion Flagship komplektatsiya. 605 km yurish masofasi (CLTC), DiLink 15.6 dyuymli ekran, 360 kamera, zaryadka stansiyasi sovg\'a qilinadi.'
    },
    {
      id: 'car-chevrolet-malibu',
      brand: 'Chevrolet',
      model: 'Malibu 2 Premier 2.0 Turbo XL',
      year: 2023,
      body: 'Sedan',
      priceUSD: 28900,
      mileage: 18500,
      fuel: 'Benzin',
      transmission: 'Avtomat',
      powerHP: 253,
      accel0100: 6.7,
      city: 'Samarqand',
      color: 'Jet Black Metallic',
      image: 'assets/images/chevrolet_malibu.png',
      badge: 'national',
      badgeText: 'TURBO PREMIER',
      sellerName: 'Samarqand Avto Markazi',
      sellerPhone: '+998 93 333 44 22',
      isSold: false,
      dateAdded: '2026-10-05',
      desc: 'Ideal holatdagi Malibu 2 Premier. Panoramali lyuk, ventilyatsiyali charm o\'rindiqlar, Bose audio tizimi, yangi Michelin balonlar. Kraskasi 100% toza.'
    },
    {
      id: 'car-mercedes-amg',
      brand: 'Mercedes-Benz',
      model: 'AMG GT 63 Coupe V8 BiTurbo',
      year: 2024,
      body: 'Kupe',
      priceUSD: 175000,
      mileage: 4200,
      fuel: 'Benzin',
      transmission: 'Avtomat',
      powerHP: 585,
      accel0100: 3.2,
      city: 'Toshkent',
      color: 'Emerald Green Magno',
      image: 'assets/images/mercedes_amg.png',
      badge: 'luxury',
      badgeText: 'SUPERKAR',
      sellerName: 'Star Motors Tashkent',
      sellerPhone: '+998 97 700 88 00',
      isSold: false,
      dateAdded: '2026-10-11',
      desc: 'Noyob rangdagi AMG GT. 4.0L V8 BiTurbo dvigatel, 4MATIC+ to\'liq privod, keramik tormoz tizimi, Burmester 3D Surround sound. Faqat 98/100 benzin quyilgan.'
    },
    {
      id: 'car-porsche-gt3',
      brand: 'Porsche',
      model: '911 GT3 RS Weissach Package',
      year: 2024,
      body: 'Kupe',
      priceUSD: 340000,
      mileage: 1500,
      fuel: 'Benzin',
      transmission: 'Avtomat',
      powerHP: 525,
      accel0100: 3.2,
      city: 'Toshkent',
      color: 'Lava Orange Carbon',
      image: 'assets/images/porsche_gt3.png',
      badge: 'luxury',
      badgeText: 'TRACK MONSTER',
      sellerName: 'Apex Club Tashkent',
      sellerPhone: '+998 99 888 77 11',
      isSold: false,
      dateAdded: '2026-10-09',
      desc: 'Weissach sport paketi, karbon tolali kapot va qanot, magniy disklari, DRS aerodinamik qanot tizimi. Poyga treki va shahar uchun moslangan eksklyuziv avtomobil.'
    },
    {
      id: 'car-chevrolet-tahoe',
      brand: 'Chevrolet',
      model: 'Tahoe Premier 6.2L EcoTec3 V8',
      year: 2023,
      body: 'SUV',
      priceUSD: 86000,
      mileage: 24000,
      fuel: 'Benzin',
      transmission: 'Avtomat',
      powerHP: 420,
      accel0100: 6.4,
      city: 'Buxoro',
      color: 'Black Shadow',
      image: 'assets/images/chevrolet_tahoe.png',
      badge: 'national',
      badgeText: 'V8 LUXURY SUV',
      sellerName: 'Buxoro Premium Avto',
      sellerPhone: '+998 91 444 55 66',
      isSold: false,
      dateAdded: '2026-10-02',
      desc: 'Katta oilaviy va hashamatli 7 o\'rindiqli yo\'ltanlamas. Magnitli adaptiv podveska (Magnetic Ride Control), orqa qatordagi multimedia monitorlari, 4x4 privod.'
    },
    {
      id: 'car-chevrolet-tracker',
      brand: 'Chevrolet',
      model: 'Tracker RS Turbo Crossover',
      year: 2024,
      body: 'SUV',
      priceUSD: 20800,
      mileage: 6500,
      fuel: 'Benzin',
      transmission: 'Avtomat',
      powerHP: 132,
      accel0100: 9.2,
      city: 'Andijon',
      color: 'Crimson Red Redline',
      image: 'assets/images/chevrolet_tracker.png',
      badge: 'national',
      badgeText: 'RS REDLINE',
      sellerName: 'Andijon Avto Diler',
      sellerPhone: '+998 90 555 12 34',
      isSold: false,
      dateAdded: '2026-10-07',
      desc: 'Zamonaviy Tracker RS Redline. Qora disklar va qizil chiziqlar, panorama lyuk, LED faralar, qulay iqtisodiy 1.2 Turbo motor (6.5 litr/100 km sarf).'
    },
    {
      id: 'car-tesla-model-s',
      brand: 'Tesla',
      model: 'Model S Plaid Tri-Motor AWD',
      year: 2024,
      body: 'Sedan',
      priceUSD: 98500,
      mileage: 8000,
      fuel: 'Elektr',
      transmission: 'Reduktor / EV',
      powerHP: 1020,
      accel0100: 2.1,
      city: 'Toshkent',
      color: 'Deep Midnight Metallic Blue',
      image: 'assets/images/tesla_model_s.png',
      badge: 'electric',
      badgeText: 'PLAID 1020 HP',
      sellerName: 'EV Motors Uzbekistan',
      sellerPhone: '+998 90 777 99 00',
      isSold: false,
      dateAdded: '2026-10-06',
      desc: 'Dunyodagi eng tezkor seriyali sedan. 1020 ot kuchi, 0 dan 100 km/s gacha atigi 2.1 soniya! Full Self-Driving (FSD) kompyuteri, Yoke sport ruli, 600 km zaxira.'
    }
  ];

  // Application State
  const state = {
    cars: [],
    currency: 'USD', // 'USD' or 'UZS'
    activeView: 'marketplace',
    wishlist: new Set(),
    compareList: new Set(),
    soundEnabled: true,
    filters: {
      search: '',
      brand: 'all',
      body: 'all',
      fuel: 'all',
      maxPrice: 400000,
      city: 'all',
      sort: 'newest',
      quickChip: 'all'
    },
    currentCalcCarId: null
  };

  // ==========================================
  // 2. AUDIO SYNTHESIZER (Web Audio API)
  // ==========================================
  class AudioEngine {
    constructor() {
      this.ctx = null;
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playEngineRev() {
      if (!state.soundEnabled) return;
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // Dual oscillator engine growl simulation
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc1.type = 'sawtooth';
      osc2.type = 'triangle';

      // Engine rev frequency pitch sweep
      osc1.frequency.setValueAtTime(65, now);
      osc1.frequency.exponentialRampToValueAtTime(240, now + 0.35);
      osc1.frequency.exponentialRampToValueAtTime(80, now + 1.2);

      osc2.frequency.setValueAtTime(32, now);
      osc2.frequency.exponentialRampToValueAtTime(120, now + 0.35);
      osc2.frequency.exponentialRampToValueAtTime(40, now + 1.2);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(300, now);
      filter.frequency.exponentialRampToValueAtTime(1400, now + 0.35);
      filter.frequency.exponentialRampToValueAtTime(250, now + 1.2);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.3, now + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.3);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 1.3);
      osc2.stop(now + 1.3);
    }

    playSuccessChime() {
      if (!state.soundEnabled) return;
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.2); // G5

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.6);
    }

    playClick() {
      if (!state.soundEnabled) return;
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    }
  }

  const audio = new AudioEngine();

  // ==========================================
  // 3. STORAGE & PERSISTENCE
  // ==========================================
  function loadPersistedData() {
    try {
      const savedCars = localStorage.getItem('avtobazar_cars_v1');
      if (savedCars) {
        state.cars = JSON.parse(savedCars);
      } else {
        state.cars = [...DEFAULT_CARS];
        saveCars();
      }

      const savedWishlist = localStorage.getItem('avtobazar_wishlist_v1');
      if (savedWishlist) {
        state.wishlist = new Set(JSON.parse(savedWishlist));
      }

      const savedCurrency = localStorage.getItem('avtobazar_currency_v1');
      if (savedCurrency) {
        state.currency = savedCurrency;
      }
    } catch (err) {
      console.warn('LocalStorage error:', err);
      state.cars = [...DEFAULT_CARS];
    }
  }

  function saveCars() {
    try {
      localStorage.setItem('avtobazar_cars_v1', JSON.stringify(state.cars));
    } catch (err) {
      console.warn('Could not save cars to storage:', err);
    }
  }

  function saveWishlist() {
    try {
      localStorage.setItem('avtobazar_wishlist_v1', JSON.stringify(Array.from(state.wishlist)));
    } catch (err) {
      console.warn('Could not save wishlist:', err);
    }
  }

  // ==========================================
  // 4. FORMATTING & CURRENCY HELPERS
  // ==========================================
  function formatMoney(amountUSD, forceCurrency = null) {
    const cur = forceCurrency || state.currency;
    if (cur === 'UZS') {
      const valUZS = Math.round(amountUSD * EXCHANGE_RATE_USD_UZS);
      return valUZS.toLocaleString('uz-UZ') + " so'm";
    } else {
      return '$' + Math.round(amountUSD).toLocaleString('en-US');
    }
  }

  function formatAltMoney(amountUSD) {
    if (state.currency === 'USD') {
      const valUZS = Math.round(amountUSD * EXCHANGE_RATE_USD_UZS);
      return '~ ' + valUZS.toLocaleString('uz-UZ') + " so'm";
    } else {
      return '~ $' + Math.round(amountUSD).toLocaleString('en-US');
    }
  }

  function showToast(message, type = 'info', icon = 'fa-circle-info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <i class="fa-solid ${icon}"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    audio.playClick();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  // ==========================================
  // 5. VIEW NAVIGATION & ROUTER
  // ==========================================
  function navigateTo(viewName) {
    state.activeView = viewName;
    audio.playClick();

    // Update sidebar nav items
    document.querySelectorAll('.sidebar-nav-item').forEach(btn => {
      if (btn.dataset.view === viewName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update active view panel
    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.classList.remove('active');
    });

    const targetPanel = document.getElementById(`view-${viewName}`);
    if (targetPanel) {
      targetPanel.classList.add('active');
    }

    // Scroll workspace to top smoothly
    const workspace = document.getElementById('desktop-workspace');
    if (workspace) workspace.scrollTop = 0;

    // View specific hooks
    if (viewName === 'marketplace') {
      renderCarsGrid();
    } else if (viewName === 'dashboard') {
      renderDashboard();
    } else if (viewName === 'calculator') {
      populateCalculatorSelect();
      recalculateLoan();
    } else if (viewName === 'compare') {
      renderCompareView();
    } else if (viewName === 'wishlist') {
      renderWishlistGrid();
    }
  }

  // ==========================================
  // 6. CARS RENDERING & MARKETPLACE
  // ==========================================
  function getFilteredCars() {
    return state.cars.filter(car => {
      // Search query
      if (state.filters.search) {
        const query = state.filters.search.toLowerCase();
        const fullString = `${car.brand} ${car.model} ${car.city} ${car.fuel} ${car.year}`.toLowerCase();
        if (!fullString.includes(query)) return false;
      }

      // Brand filter
      if (state.filters.brand !== 'all' && car.brand !== state.filters.brand) {
        return false;
      }

      // Body filter
      if (state.filters.body !== 'all' && car.body !== state.filters.body) {
        return false;
      }

      // Fuel filter
      if (state.filters.fuel !== 'all' && car.fuel !== state.filters.fuel) {
        return false;
      }

      // Max price filter
      if (car.priceUSD > state.filters.maxPrice) {
        return false;
      }

      // City filter
      if (state.filters.city !== 'all' && car.city !== state.filters.city) {
        return false;
      }

      // Quick category chip
      if (state.filters.quickChip === 'new' && car.mileage > 500) {
        return false;
      }
      if (state.filters.quickChip === 'electric' && car.fuel !== 'Elektr' && car.fuel !== 'Gibrid') {
        return false;
      }
      if (state.filters.quickChip === 'national' && car.brand !== 'Chevrolet') {
        return false;
      }
      if (state.filters.quickChip === 'luxury' && (car.priceUSD < 90000 && car.badge !== 'luxury')) {
        return false;
      }
      if (state.filters.quickChip === 'suv' && car.body !== 'SUV') {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (state.filters.sort === 'price-asc') return a.priceUSD - b.priceUSD;
      if (state.filters.sort === 'price-desc') return b.priceUSD - a.priceUSD;
      if (state.filters.sort === 'year-desc') return b.year - a.year;
      if (state.filters.sort === 'power-desc') return (b.powerHP || 0) - (a.powerHP || 0);
      return new Date(b.dateAdded) - new Date(a.dateAdded);
    });
  }

  function renderCarsGrid() {
    const grid = document.getElementById('cars-grid');
    const emptyState = document.getElementById('empty-cars-state');
    const countDisplay = document.getElementById('filter-results-count');
    if (!grid) return;

    const filtered = getFilteredCars();
    if (countDisplay) countDisplay.textContent = filtered.length;

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    grid.innerHTML = filtered.map(car => {
      const isFav = state.wishlist.has(car.id);
      const isComp = state.compareList.has(car.id);

      // Badge style
      let badgeClass = 'badge-luxury';
      if (car.fuel === 'Elektr') badgeClass = 'badge-electric';
      if (car.isSold) badgeClass = 'badge-sold';

      const badgeLabel = car.isSold ? 'SOTILDI' : (car.badgeText || car.badge || 'VIP');

      return `
        <article class="car-card ${car.isSold ? 'card-sold' : ''}" data-id="${car.id}">
          <div class="car-card-media">
            <img src="${car.image}" alt="${car.brand} ${car.model}" class="car-card-img" loading="lazy" onerror="this.src='assets/images/hero_showroom.png'">
            <div class="car-badge-pill ${badgeClass}">
              <i class="fa-solid fa-certificate"></i> ${badgeLabel}
            </div>
            <div class="car-quick-actions">
              <button class="action-icon-btn ${isComp ? 'active-compare' : ''}" onclick="window.AvtoBazar.toggleCompare('${car.id}')" title="Taqqoslashga qo'shish">
                <i class="fa-solid fa-scale-balanced"></i>
              </button>
              <button class="action-icon-btn ${isFav ? 'active-favorite' : ''}" onclick="window.AvtoBazar.toggleFavorite('${car.id}')" title="Saralanganlarga saqlash">
                <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
              </button>
            </div>
          </div>

          <div class="car-card-body">
            <div class="car-meta-top">
              <span class="car-year-badge">${car.year}-YIL</span>
              <span class="car-location"><i class="fa-solid fa-location-dot"></i> ${car.city}</span>
            </div>

            <h3 class="car-title">${car.brand} ${car.model}</h3>

            <div class="car-specs-grid">
              <div class="spec-cell">
                <span class="spec-val">${car.powerHP || '---'} HP</span>
                <span class="spec-lbl">Quvvat</span>
              </div>
              <div class="spec-cell">
                <span class="spec-val">${car.accel0100 || '---'} s</span>
                <span class="spec-lbl">0-100 km/s</span>
              </div>
              <div class="spec-cell">
                <span class="spec-val">${car.mileage === 0 ? '0 km (Yangi)' : car.mileage.toLocaleString() + ' km'}</span>
                <span class="spec-lbl">Probeg</span>
              </div>
            </div>

            <div class="car-card-footer">
              <div class="car-price-box">
                <span class="price-primary">${formatMoney(car.priceUSD)}</span>
                <span class="price-secondary">${formatAltMoney(car.priceUSD)}</span>
              </div>

              <div class="card-btn-group">
                <button class="btn-card-details" onclick="window.AvtoBazar.openCarDetails('${car.id}')">
                  <i class="fa-solid fa-eye"></i> Ko'rish
                </button>
                <button class="btn-card-buy" onclick="window.AvtoBazar.openMakeOffer('${car.id}')">
                  <i class="fa-solid fa-tag"></i> Savdolashish
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    updateTopBadges();
  }

  function updateTopBadges() {
    const compareBadge = document.getElementById('compare-count-badge');
    const wishlistBadge = document.getElementById('wishlist-count-badge');
    const sidebarCompare = document.getElementById('sidebar-compare-badge');
    const sidebarWishlist = document.getElementById('sidebar-wishlist-badge');
    const totalCarsBadge = document.getElementById('total-cars-badge');
    const statTotalListings = document.getElementById('stat-total-listings');

    const totalActive = state.cars.filter(c => !c.isSold).length;

    if (compareBadge) compareBadge.textContent = state.compareList.size;
    if (sidebarCompare) sidebarCompare.textContent = state.compareList.size;
    if (wishlistBadge) wishlistBadge.textContent = state.wishlist.size;
    if (sidebarWishlist) sidebarWishlist.textContent = state.wishlist.size;
    if (totalCarsBadge) totalCarsBadge.textContent = totalActive;
    if (statTotalListings) statTotalListings.textContent = totalActive;
  }

  // ==========================================
  // 7. CAR DETAILS MODAL
  // ==========================================
  function openCarDetails(carId) {
    const car = state.cars.find(c => c.id === carId);
    if (!car) return;

    audio.playClick();
    const modal = document.getElementById('car-details-modal');
    const container = document.getElementById('car-modal-content');
    if (!modal || !container) return;

    container.innerHTML = `
      <div class="car-modal-gallery">
        <div class="modal-main-img-wrap">
          <img src="${car.image}" alt="${car.brand} ${car.model}" onerror="this.src='assets/images/hero_showroom.png'">
        </div>
        <div class="seller-card-box glass-card" style="padding:16px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <div>
              <strong style="color:#fff; font-size:1rem;">${car.sellerName}</strong>
              <div style="color:var(--text-muted); font-size:0.75rem;"><i class="fa-solid fa-shield-check" style="color:var(--accent-emerald);"></i> Rasmiy Dilerlik Kafolati</div>
            </div>
            <a href="tel:${car.sellerPhone}" class="btn-primary btn-sm"><i class="fa-solid fa-phone"></i> Qo'ng'iroq</a>
          </div>
          <div style="font-size:0.85rem; color:var(--accent-cyan); font-family:var(--font-mono);">${car.sellerPhone}</div>
        </div>
      </div>

      <div class="car-modal-details-info">
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <div>
            <span class="car-year-badge">${car.year}-YIL | ${car.body.toUpperCase()}</span>
            <h2 style="font-family:var(--font-heading); font-size:1.6rem; color:#fff; margin:4px 0 10px;">${car.brand} ${car.model}</h2>
          </div>
          <div style="text-align:right;">
            <div style="font-family:var(--font-mono); font-size:1.8rem; font-weight:800; color:var(--accent-cyan);">${formatMoney(car.priceUSD)}</div>
            <small style="color:var(--text-muted);">${formatAltMoney(car.priceUSD)}</small>
          </div>
        </div>

        <p style="color:var(--text-secondary); font-size:0.88rem; line-height:1.45; margin-bottom:14px;">${car.desc}</p>

        <h4 style="color:#fff; font-size:0.95rem; border-bottom:1px solid var(--border-subtle); padding-bottom:6px; margin-bottom:8px;">
          <i class="fa-solid fa-clipboard-list" style="color:var(--accent-cyan);"></i> Texnik Pasport & Xususiyatlar
        </h4>

        <table class="modal-specs-table">
          <tbody>
            <tr><td>Marka va Model</td><td>${car.brand} ${car.model}</td></tr>
            <tr><td>Ishlab chiqarilgan yili</td><td>${car.year}</td></tr>
            <tr><td>Kuzov turi</td><td>${car.body}</td></tr>
            <tr><td>Yurgan masofasi (Probeg)</td><td>${car.mileage.toLocaleString()} km</td></tr>
            <tr><td>Dvigatel / Yoqilg'i</td><td>${car.fuel}</td></tr>
            <tr><td>Uzatma qutisi</td><td>${car.transmission}</td></tr>
            <tr><td>Quvvati (Ot kuchi)</td><td>${car.powerHP || '---'} HP</td></tr>
            <tr><td>0 dan 100 km/s gacha tezlanish</td><td>${car.accel0100 || '---'} soniya</td></tr>
            <tr><td>Rangi</td><td>${car.color}</td></tr>
            <tr><td>Joylashgan shahar</td><td>${car.city}</td></tr>
            <tr><td>Yuridik holati</td><td>100% Notarial toza, xatlov yo'q</td></tr>
          </tbody>
        </table>

        <div class="modal-cta-box">
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
            <button class="btn-primary" onclick="window.AvtoBazar.openTestDriveModal('${car.id}')">
              <i class="fa-solid fa-gauge-high"></i> Test-Drayv Band Qilish
            </button>
            <button class="btn-secondary" onclick="window.AvtoBazar.transferToCalculator('${car.id}')">
              <i class="fa-solid fa-calculator"></i> Lizing / Kredit Hisobi
            </button>
          </div>
          <button class="btn-ghost" onclick="window.AvtoBazar.openMakeOffer('${car.id}')">
            <i class="fa-solid fa-handshake"></i> Narx Savdolashish (Taklif yuborish)
          </button>
        </div>
      </div>
    `;

    modal.style.display = 'flex';
  }

  function closeCarDetails() {
    const modal = document.getElementById('car-details-modal');
    if (modal) modal.style.display = 'none';
  }

  // ==========================================
  // 8. TEST DRIVE & MAKE OFFER MODALS
  // ==========================================
  function openTestDriveModal(carId) {
    closeCarDetails();
    const car = state.cars.find(c => c.id === carId);
    if (!car) return;

    const modal = document.getElementById('test-drive-modal');
    const label = document.getElementById('test-drive-car-name');
    if (label) label.textContent = `${car.brand} ${car.model} (${car.year})`;

    const dateInput = document.getElementById('td-date');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.value = today;
      dateInput.min = today;
    }

    if (modal) modal.style.display = 'flex';
  }

  function openMakeOffer(carId) {
    closeCarDetails();
    const car = state.cars.find(c => c.id === carId);
    if (!car) return;

    const modal = document.getElementById('make-offer-modal');
    const title = document.getElementById('offer-car-title');
    const origPrice = document.getElementById('offer-original-price');
    const amountInput = document.getElementById('offer-amount-input');

    if (title) title.textContent = `${car.brand} ${car.model}`;
    if (origPrice) origPrice.textContent = formatMoney(car.priceUSD);
    if (amountInput) amountInput.value = Math.round(car.priceUSD * 0.95);

    if (modal) modal.style.display = 'flex';
  }

  // ==========================================
  // 9. AI PRICE ESTIMATOR & SELL CAR FORM
  // ==========================================
  function updateAIEstimator() {
    const brand = document.getElementById('form-car-brand').value || 'Chevrolet';
    const year = parseInt(document.getElementById('form-car-year').value) || 2023;
    const mileage = parseInt(document.getElementById('form-car-mileage').value) || 15000;
    const power = parseInt(document.getElementById('form-car-power').value) || 200;

    // AI Pricing algorithm simulation based on vehicle age, mileage & power
    let basePrice = 28000;
    if (brand === 'Porsche') basePrice = 280000;
    else if (brand === 'Mercedes-Benz') basePrice = 140000;
    else if (brand === 'BMW') basePrice = 95000;
    else if (brand === 'Tesla') basePrice = 75000;
    else if (brand === 'BYD') basePrice = 32000;
    else if (brand === 'Chevrolet') basePrice = 26000;
    else basePrice = 25000;

    // Adjust for year (approx 6% per year age)
    const currentYear = 2026;
    const age = Math.max(0, currentYear - year);
    let depreciation = age * 0.06;

    // Adjust for mileage (approx 2% per 15,000 km)
    const mileageFactor = (mileage / 15000) * 0.02;

    let estimatedMid = Math.round(basePrice * (1 - depreciation - mileageFactor));
    if (estimatedMid < 5000) estimatedMid = 5000;

    const minEst = Math.round(estimatedMid * 0.95);
    const maxEst = Math.round(estimatedMid * 1.05);

    // Selling probability calculation
    let sellChance = Math.min(96, Math.max(65, Math.round(92 - (age * 3) - (mileage / 30000))));

    const estPriceElem = document.getElementById('ai-est-price');
    const estUzsElem = document.getElementById('ai-est-uzs');
    const sellChanceElem = document.getElementById('ai-sell-chance');
    const sellProgress = document.getElementById('ai-sell-progress');
    const recTextElem = document.getElementById('ai-recommendation-text');
    const priceHintUzs = document.getElementById('form-price-uzs-hint');

    if (estPriceElem) estPriceElem.textContent = `$${minEst.toLocaleString()} - $${maxEst.toLocaleString()}`;
    if (estUzsElem) {
      const minUZS = Math.round(minEst * EXCHANGE_RATE_USD_UZS).toLocaleString();
      const maxUZS = Math.round(maxEst * EXCHANGE_RATE_USD_UZS).toLocaleString();
      estUzsElem.textContent = `~ ${minUZS} - ${maxUZS} UZS`;
    }
    if (sellChanceElem) sellChanceElem.textContent = `${sellChance}%`;
    if (sellProgress) sellProgress.style.width = `${sellChance}%`;

    const userPrice = parseInt(document.getElementById('form-car-price').value) || estimatedMid;
    if (priceHintUzs) {
      priceHintUzs.textContent = (userPrice * EXCHANGE_RATE_USD_UZS).toLocaleString();
    }

    if (recTextElem) {
      if (userPrice > maxEst) {
        recTextElem.textContent = `Diqqat: Siz kiritgan narx ($${userPrice.toLocaleString()}) tavsiya qilingan narxdan yuqoriroq. Xaridorni topish odatdagidan ko'proq vaqt olishi mumkin.`;
      } else {
        recTextElem.textContent = `Ajoyib narx taklifi! Ushbu narx oralig'ida avtomobilingiz Toshkent va viloyatlarda 1-2 hafta ichida o'z xaridorini topadi.`;
      }
    }

    return { minEst, maxEst, estimatedMid };
  }

  function handleSellCarSubmit(e) {
    e.preventDefault();

    const brand = document.getElementById('form-car-brand').value;
    const model = document.getElementById('form-car-model').value.trim();
    const year = parseInt(document.getElementById('form-car-year').value);
    const body = document.getElementById('form-car-body').value;
    const mileage = parseInt(document.getElementById('form-car-mileage').value);
    const fuel = document.getElementById('form-car-fuel').value;
    const transmission = document.getElementById('form-car-transmission').value;
    const powerHP = parseInt(document.getElementById('form-car-power').value) || 200;
    const priceUSD = parseInt(document.getElementById('form-car-price').value);
    const city = document.getElementById('form-car-city').value;
    const sellerPhone = document.getElementById('form-seller-phone').value.trim();
    const sellerName = document.getElementById('form-seller-name').value.trim();
    const desc = document.getElementById('form-car-desc').value.trim() || 'Ideal holatda, yangi egalari uchun tayyor.';

    // Image: active preset or custom url
    let image = 'assets/images/chevrolet_malibu.png';
    const customUrl = document.getElementById('form-car-image-url').value.trim();
    const activePreset = document.querySelector('.preset-option.active');
    if (customUrl) {
      image = customUrl;
    } else if (activePreset && activePreset.dataset.img) {
      image = activePreset.dataset.img;
    }

    const newCar = {
      id: 'car-user-' + Date.now(),
      brand,
      model,
      year,
      body,
      priceUSD,
      mileage,
      fuel,
      transmission,
      powerHP,
      accel0100: (fuel === 'Elektr' ? 5.5 : 7.5),
      city,
      color: 'Katalog tanlovi',
      image,
      badge: (mileage === 0 ? 'electric' : 'national'),
      badgeText: (mileage === 0 ? 'YANGI (0 KM)' : 'E\'LON BOZORI'),
      sellerName,
      sellerPhone,
      isSold: false,
      dateAdded: new Date().toISOString().split('T')[0],
      desc
    };

    state.cars.unshift(newCar);
    saveCars();

    audio.playSuccessChime();
    showToast(`Tabriklaymiz! "${brand} ${model}" e'loni muvaffaqiyatli joylashtirildi.`, 'success', 'fa-circle-check');

    // Reset form
    document.getElementById('sell-car-form').reset();

    // Redirect to marketplace
    navigateTo('marketplace');
  }

  // ==========================================
  // 10. DEALER DASHBOARD & CRM
  // ==========================================
  function renderDashboard() {
    const totalCarsElem = document.getElementById('crm-total-cars');
    const totalValuationElem = document.getElementById('crm-total-valuation');
    const totalValuationUzsElem = document.getElementById('crm-total-valuation-uzs');
    const soldCountElem = document.getElementById('crm-sold-count');
    const tableBody = document.getElementById('crm-inventory-tbody');

    const totalCars = state.cars.length;
    const soldCars = state.cars.filter(c => c.isSold).length;
    const totalValuationUSD = state.cars.reduce((sum, c) => sum + (c.isSold ? 0 : c.priceUSD), 0);

    if (totalCarsElem) totalCarsElem.textContent = `${totalCars} ta`;
    if (soldCountElem) soldCountElem.textContent = `${soldCars + 14} ta`;
    if (totalValuationElem) totalValuationElem.textContent = `$${totalValuationUSD.toLocaleString()}`;
    if (totalValuationUzsElem) {
      const totalUZS = totalValuationUSD * EXCHANGE_RATE_USD_UZS;
      totalValuationUzsElem.textContent = `~ ${totalUZS.toLocaleString()} UZS`;
    }

    if (!tableBody) return;

    tableBody.innerHTML = state.cars.map(car => `
      <tr>
        <td>
          <div class="table-car-cell">
            <img src="${car.image}" alt="${car.brand}" class="table-car-img" onerror="this.src='assets/images/hero_showroom.png'">
            <div>
              <strong>${car.brand} ${car.model}</strong>
              <div style="font-size:0.75rem; color:var(--text-muted);">${car.fuel} | ${car.transmission}</div>
            </div>
          </div>
        </td>
        <td>${car.year} | ${car.body}</td>
        <td>${car.mileage.toLocaleString()} km</td>
        <td>
          <strong style="color:var(--accent-cyan); font-family:var(--font-mono);">${formatMoney(car.priceUSD)}</strong>
        </td>
        <td>
          <span class="sidebar-badge ${car.isSold ? 'pulse-badge' : 'new-badge'}" style="${car.isSold ? 'background:#ef4444; color:#fff;' : ''}">
            ${car.isSold ? 'Sotildi' : 'Faol Savdoda'}
          </span>
        </td>
        <td>${car.city}</td>
        <td>
          <div style="display:flex; gap:6px;">
            <button class="btn-secondary btn-sm" onclick="window.AvtoBazar.toggleSoldStatus('${car.id}')" title="Sotuv holatini o'zgartirish">
              <i class="fa-solid ${car.isSold ? 'fa-rotate-left' : 'fa-check'}"></i> ${car.isSold ? 'Faollashtirish' : 'Sotildi deb belgilash'}
            </button>
            <button class="btn-ghost btn-sm" onclick="window.AvtoBazar.deleteCar('${car.id}')" style="color:#ef4444;" title="E'lonni o'chirish">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  function toggleSoldStatus(carId) {
    const car = state.cars.find(c => c.id === carId);
    if (!car) return;

    car.isSold = !car.isSold;
    saveCars();
    audio.playSuccessChime();
    showToast(`${car.brand} ${car.model} holati o'zgartirildi: ${car.isSold ? 'Sotildi' : 'Faol'}`, 'info', 'fa-receipt');
    renderDashboard();
    updateTopBadges();
  }

  function deleteCar(carId) {
    if (!confirm('Haqiqatan ham ushbu e\'lonni tizimdan o\'chirmoqchimisiz?')) return;

    state.cars = state.cars.filter(c => c.id !== carId);
    state.wishlist.delete(carId);
    state.compareList.delete(carId);
    saveCars();
    saveWishlist();

    audio.playClick();
    showToast("E'lon tizimdan o'chirildi.", 'warning', 'fa-trash');
    renderDashboard();
    updateTopBadges();
  }

  // ==========================================
  // 11. AUTO FINANCE & LOAN CALCULATOR
  // ==========================================
  function populateCalculatorSelect() {
    const select = document.getElementById('calc-select-car');
    if (!select) return;

    select.innerHTML = '<option value="custom">-- Boshqa qiymat / Erkin kiritish --</option>' +
      state.cars.map(c => `<option value="${c.id}" ${state.currentCalcCarId === c.id ? 'selected' : ''}>${c.brand} ${c.model} (${c.year}) - $${c.priceUSD.toLocaleString()}</option>`).join('');
  }

  function transferToCalculator(carId) {
    state.currentCalcCarId = carId;
    closeCarDetails();
    navigateTo('calculator');

    const car = state.cars.find(c => c.id === carId);
    if (car) {
      const priceInput = document.getElementById('calc-price-input');
      if (priceInput) priceInput.value = car.priceUSD;
      recalculateLoan();
      showToast(`${car.brand} ${car.model} lizing kalkulyatoriga o'tkazildi!`, 'info', 'fa-calculator');
    }
  }

  function recalculateLoan() {
    const priceInput = document.getElementById('calc-price-input');
    const downSlider = document.getElementById('calc-down-slider');
    const termSlider = document.getElementById('calc-term-slider');
    const rateSlider = document.getElementById('calc-rate-slider');

    if (!priceInput || !downSlider || !termSlider || !rateSlider) return;

    const totalPrice = parseFloat(priceInput.value) || 28900;
    const downPercent = parseInt(downSlider.value) || 30;
    const months = parseInt(termSlider.value) || 36;
    const annualRate = parseFloat(rateSlider.value) || 20;

    const downPaymentAmount = Math.round(totalPrice * (downPercent / 100));
    const loanPrincipal = totalPrice - downPaymentAmount;

    // Monthly interest calculation (annuity payment formula)
    const monthlyRate = (annualRate / 100) / 12;
    let monthlyPayment = 0;
    if (monthlyRate === 0) {
      monthlyPayment = loanPrincipal / months;
    } else {
      monthlyPayment = loanPrincipal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    }

    const totalPaidOverTerm = (monthlyPayment * months) + downPaymentAmount;
    const totalInterest = totalPaidOverTerm - totalPrice;

    // Update displays
    document.getElementById('calc-price-display').textContent = formatMoney(totalPrice);
    document.getElementById('calc-down-display').textContent = `${downPercent}% (${formatMoney(downPaymentAmount)})`;
    document.getElementById('calc-term-display').textContent = `${months} oy (${Math.round(months / 12 * 10) / 10} yil)`;
    document.getElementById('calc-rate-display').textContent = `${annualRate}%`;

    document.getElementById('calc-monthly-val').innerHTML = `${formatMoney(monthlyPayment)} <small>/ oyiga</small>`;
    document.getElementById('calc-monthly-uzs').textContent = `~ ${(Math.round(monthlyPayment * EXCHANGE_RATE_USD_UZS)).toLocaleString()} UZS / oyiga`;

    document.getElementById('calc-loan-principal').textContent = formatMoney(loanPrincipal);
    document.getElementById('calc-down-sum').textContent = formatMoney(downPaymentAmount);
    document.getElementById('calc-total-interest').textContent = formatMoney(totalInterest);
    document.getElementById('calc-grand-total').textContent = formatMoney(totalPaidOverTerm);

    // Share progress bar
    const principalPct = Math.round((loanPrincipal / (loanPrincipal + totalInterest)) * 100);
    const interestPct = 100 - principalPct;

    const barPrincipal = document.getElementById('bar-principal');
    const barInterest = document.getElementById('bar-interest');
    const sharePrinLabel = document.getElementById('share-principal-pct');
    const shareIntLabel = document.getElementById('share-interest-pct');

    if (barPrincipal) barPrincipal.style.width = `${principalPct}%`;
    if (barInterest) barInterest.style.width = `${interestPct}%`;
    if (sharePrinLabel) sharePrinLabel.textContent = `${principalPct}%`;
    if (shareIntLabel) shareIntLabel.textContent = `${interestPct}%`;
  }

  // ==========================================
  // 12. COMPARISON TOOL
  // ==========================================
  function toggleCompare(carId) {
    audio.playClick();
    if (state.compareList.has(carId)) {
      state.compareList.delete(carId);
      showToast("Mashina taqqoslash ro'yxatidan olib tashlandi.", 'info', 'fa-scale-balanced');
    } else {
      if (state.compareList.size >= 3) {
        showToast("Maksimal 3 ta avtomobilni bir vaqtda taqqoslashingiz mumkin!", 'warning', 'fa-triangle-exclamation');
        return;
      }
      state.compareList.add(carId);
      showToast("Mashina taqqoslashga qo'shildi!", 'success', 'fa-scale-balanced');
    }

    updateTopBadges();
    renderCarsGrid();
    if (state.activeView === 'compare') {
      renderCompareView();
    }
  }

  function renderCompareView() {
    const container = document.getElementById('compare-container');
    if (!container) return;

    const compareCars = state.cars.filter(c => state.compareList.has(c.id));

    if (compareCars.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon"><i class="fa-solid fa-code-compare"></i></div>
          <h3>Taqqoslash uchun hech qanday mashina tanlanmagan</h3>
          <p>Katalogdagi mashina kartochkalaridagi tarozi belgisini bosib, 2 yoki 3 ta mashinani solishtiring.</p>
          <button class="btn-primary" onclick="window.AvtoBazar.navigateTo('marketplace')">Katalogga O'tish</button>
        </div>
      `;
      return;
    }

    // Determine winners for comparison
    const minPrice = Math.min(...compareCars.map(c => c.priceUSD));
    const maxPower = Math.max(...compareCars.map(c => c.powerHP || 0));
    const minAccel = Math.min(...compareCars.map(c => c.accel0100 || 99));

    container.innerHTML = `
      <div class="compare-grid">
        <div class="compare-col compare-label-col">
          <div style="height:140px; display:flex; align-items:flex-end; font-weight:800; font-size:1.1rem; color:#fff;">
            Parametrlar
          </div>
          <div class="compare-row-item compare-label-item">Narxi ($ / UZS)</div>
          <div class="compare-row-item compare-label-item">Ot kuchi (Quvvat)</div>
          <div class="compare-row-item compare-label-item">0-100 km/s tezlanish</div>
          <div class="compare-row-item compare-label-item">Ishlab chiqarilgan yil</div>
          <div class="compare-row-item compare-label-item">Yurgan masofa</div>
          <div class="compare-row-item compare-label-item">Yoqilg'i turi</div>
          <div class="compare-row-item compare-label-item">Uzatma qutisi</div>
          <div class="compare-row-item compare-label-item">Joylashuv</div>
          <div class="compare-row-item compare-label-item">Amallar</div>
        </div>

        ${compareCars.map(car => `
          <div class="compare-col">
            <div style="height:140px; text-align:center;">
              <img src="${car.image}" alt="${car.brand}" style="width:100%; height:90px; object-fit:cover; border-radius:8px; margin-bottom:6px;">
              <strong style="color:#fff; font-size:0.95rem; display:block;">${car.brand} ${car.model}</strong>
            </div>

            <div class="compare-row-item compare-val-item ${car.priceUSD === minPrice ? 'winner' : ''}">
              ${formatMoney(car.priceUSD)} ${car.priceUSD === minPrice ? '⭐ Eng arzon' : ''}
            </div>

            <div class="compare-row-item compare-val-item ${car.powerHP === maxPower ? 'winner' : ''}">
              ${car.powerHP || '---'} HP ${car.powerHP === maxPower ? '⚡ Eng kuchli' : ''}
            </div>

            <div class="compare-row-item compare-val-item ${car.accel0100 === minAccel ? 'winner' : ''}">
              ${car.accel0100 || '---'} s ${car.accel0100 === minAccel ? '🚀 Eng tezkor' : ''}
            </div>

            <div class="compare-row-item compare-val-item">${car.year}-yil</div>
            <div class="compare-row-item compare-val-item">${car.mileage.toLocaleString()} km</div>
            <div class="compare-row-item compare-val-item">${car.fuel}</div>
            <div class="compare-row-item compare-val-item">${car.transmission}</div>
            <div class="compare-row-item compare-val-item">${car.city}</div>

            <div class="compare-row-item">
              <button class="btn-secondary btn-sm" onclick="window.AvtoBazar.openCarDetails('${car.id}')" style="margin-right:6px;">
                Ko'rish
              </button>
              <button class="btn-ghost btn-sm" onclick="window.AvtoBazar.toggleCompare('${car.id}')">
                Olib tashlash
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // ==========================================
  // 13. WISHLIST / FAVORITES
  // ==========================================
  function toggleFavorite(carId) {
    audio.playClick();
    if (state.wishlist.has(carId)) {
      state.wishlist.delete(carId);
      showToast("Mashina sevimlilar ro'yxatidan o'chirildi.", 'info', 'fa-heart');
    } else {
      state.wishlist.add(carId);
      showToast("Mashina sevimlilar ro'yxatiga saqlandi!", 'success', 'fa-heart');
    }

    saveWishlist();
    updateTopBadges();
    renderCarsGrid();
    if (state.activeView === 'wishlist') {
      renderWishlistGrid();
    }
  }

  function renderWishlistGrid() {
    const grid = document.getElementById('wishlist-grid');
    const emptyState = document.getElementById('empty-wishlist-state');
    if (!grid) return;

    const favCars = state.cars.filter(c => state.wishlist.has(c.id));

    if (favCars.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    grid.innerHTML = favCars.map(car => `
      <article class="car-card">
        <div class="car-card-media">
          <img src="${car.image}" alt="${car.brand} ${car.model}" class="car-card-img" onerror="this.src='assets/images/hero_showroom.png'">
          <div class="car-quick-actions">
            <button class="action-icon-btn active-favorite" onclick="window.AvtoBazar.toggleFavorite('${car.id}')" title="Olib tashlash">
              <i class="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
        <div class="car-card-body">
          <div class="car-meta-top">
            <span class="car-year-badge">${car.year}-YIL</span>
            <span class="car-location"><i class="fa-solid fa-location-dot"></i> ${car.city}</span>
          </div>
          <h3 class="car-title">${car.brand} ${car.model}</h3>
          <div class="car-card-footer">
            <div class="car-price-box">
              <span class="price-primary">${formatMoney(car.priceUSD)}</span>
            </div>
            <button class="btn-card-buy" onclick="window.AvtoBazar.openCarDetails('${car.id}')">
              Batafsil
            </button>
          </div>
        </div>
      </article>
    `).join('');
  }

  // ==========================================
  // 14. CHAT & NEGOTIATION SIMULATOR
  // ==========================================
  function initChat() {
    const sendBtn = document.getElementById('chat-send-btn');
    const input = document.getElementById('chat-text-input');
    const messagesBody = document.getElementById('chat-messages-body');

    if (!sendBtn || !input || !messagesBody) return;

    function sendMessage() {
      const text = input.value.trim();
      if (!text) return;

      audio.playClick();
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      // Append outgoing message
      const outMsg = document.createElement('div');
      outMsg.className = 'message outgoing';
      outMsg.innerHTML = `
        <div class="msg-bubble">
          <p>${text}</p>
          <span class="msg-time">${timeStr}</span>
        </div>
      `;
      messagesBody.appendChild(outMsg);
      input.value = '';
      messagesBody.scrollTop = messagesBody.scrollHeight;

      // Realistic delayed auto-reply simulation
      setTimeout(() => {
        const inMsg = document.createElement('div');
        inMsg.className = 'message incoming';
        inMsg.innerHTML = `
          <div class="msg-bubble">
            <p>Rahmat javobingiz uchun! Shartlar ma'qul keldi, bugun kechga borib avtosalonda ko'rishsak bo'ladimi?</p>
            <span class="msg-time">${timeStr}</span>
          </div>
        `;
        messagesBody.appendChild(inMsg);
        messagesBody.scrollTop = messagesBody.scrollHeight;
        audio.playSuccessChime();
      }, 1500);
    }

    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });

    // Make counter offer action
    const counterBtn = document.getElementById('chat-make-counter-btn');
    if (counterBtn) {
      counterBtn.addEventListener('click', () => {
        const offer = prompt('Xaridorga qarshi narx taklifingizni kiriting ($ USD):', '115000');
        if (offer) {
          input.value = `Taklifingizni ko'rib chiqdik. Oxirgi beradigan narximiz: $${parseInt(offer).toLocaleString()} naqdga.`;
          sendMessage();
        }
      });
    }

    // Confirm deal action
    const confirmBtn = document.getElementById('chat-confirm-deal-btn');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => {
        audio.playSuccessChime();
        showToast('Bitim muvaffaqiyatli qabul qilindi! Notarius xujjatlari tayyorlanmoqda.', 'success', 'fa-handshake');
        input.value = `Bitim qabul qilindi! Notarius xodimimiz siz bilan 10 daqiqa ichida bog'lanadi.`;
        sendMessage();
      });
    }
  }

  // ==========================================
  // 15. GLOBAL EVENT LISTENERS & SETUP
  // ==========================================
  function setupEventListeners() {
    // Topbar brand logo click -> return to marketplace
    const brandLogo = document.getElementById('brand-logo-btn');
    if (brandLogo) {
      brandLogo.addEventListener('click', () => navigateTo('marketplace'));
    }

    // Sound toggle button
    const soundToggle = document.getElementById('sound-toggle-btn');
    const soundIcon = document.getElementById('sound-icon');
    if (soundToggle) {
      soundToggle.addEventListener('click', () => {
        state.soundEnabled = !state.soundEnabled;
        if (state.soundEnabled) {
          soundIcon.className = 'fa-solid fa-volume-high';
          showToast('Ovoz effektlari yoqildi', 'info', 'fa-volume-high');
          audio.playClick();
        } else {
          soundIcon.className = 'fa-solid fa-volume-xmark';
          showToast('Ovoz effektlari o\'chirildi', 'info', 'fa-volume-xmark');
        }
      });
    }

    // Engine Rev Button
    const engineBtn = document.getElementById('engine-rev-btn');
    if (engineBtn) {
      engineBtn.addEventListener('click', () => {
        audio.playEngineRev();
        showToast('V8 Twin-Turbo Engine Started! 🚀', 'success', 'fa-bolt');
      });
    }

    // Currency Switcher Widget
    const rateToggle = document.getElementById('rate-toggle-btn');
    const currTag = document.getElementById('currency-mode-tag');
    if (rateToggle) {
      rateToggle.addEventListener('click', () => {
        state.currency = (state.currency === 'USD') ? 'UZS' : 'USD';
        localStorage.setItem('avtobazar_currency_v1', state.currency);
        if (currTag) currTag.textContent = (state.currency === 'USD') ? 'USD ($)' : 'UZS (so\'m)';
        audio.playClick();
        showToast(`Valyuta o'zgartirildi: ${state.currency}`, 'info', 'fa-money-bill-transfer');

        renderCarsGrid();
        if (state.activeView === 'calculator') recalculateLoan();
        if (state.activeView === 'compare') renderCompareView();
        if (state.activeView === 'wishlist') renderWishlistGrid();
        if (state.activeView === 'dashboard') renderDashboard();
      });
    }

    // Quick Topbar Wishlist and Compare Buttons
    document.getElementById('quick-wishlist-btn')?.addEventListener('click', () => navigateTo('wishlist'));
    document.getElementById('quick-compare-btn')?.addEventListener('click', () => navigateTo('compare'));
    document.getElementById('open-add-car-btn')?.addEventListener('click', () => navigateTo('sell-car'));
    document.getElementById('dash-add-car-btn')?.addEventListener('click', () => navigateTo('sell-car'));

    // Hero actions
    document.getElementById('hero-explore-btn')?.addEventListener('click', () => {
      document.querySelector('.filter-dashboard-bar')?.scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('hero-sell-btn')?.addEventListener('click', () => navigateTo('sell-car'));
    document.getElementById('hero-calc-btn')?.addEventListener('click', () => navigateTo('calculator'));

    // Navigation items
    document.querySelectorAll('.sidebar-nav-item[data-view]').forEach(item => {
      item.addEventListener('click', () => {
        const view = item.dataset.view;
        if (view) navigateTo(view);
      });
    });

    // Sidebar quick category filters
    document.querySelectorAll('.quick-cat-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.category;
        state.filters.quickChip = cat;
        navigateTo('marketplace');

        // Update active chip UI
        document.querySelectorAll('.filter-chip').forEach(c => {
          c.classList.toggle('active', c.dataset.chip === cat);
        });
        renderCarsGrid();
      });
    });

    // Global Search input & clear button
    const searchInput = document.getElementById('global-search-input');
    const clearSearchBtn = document.getElementById('clear-search-btn');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.filters.search = e.target.value.trim();
        if (clearSearchBtn) {
          clearSearchBtn.style.display = state.filters.search ? 'block' : 'none';
        }
        if (state.activeView !== 'marketplace') navigateTo('marketplace');
        renderCarsGrid();
      });

      // Keyboard shortcut Ctrl + K
      window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          searchInput.focus();
        }
      });
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        state.filters.search = '';
        clearSearchBtn.style.display = 'none';
        renderCarsGrid();
      });
    }

    // Filter Controls
    document.getElementById('filter-brand')?.addEventListener('change', (e) => {
      state.filters.brand = e.target.value;
      renderCarsGrid();
    });

    document.getElementById('filter-body')?.addEventListener('change', (e) => {
      state.filters.body = e.target.value;
      renderCarsGrid();
    });

    document.getElementById('filter-fuel')?.addEventListener('change', (e) => {
      state.filters.fuel = e.target.value;
      renderCarsGrid();
    });

    document.getElementById('filter-city')?.addEventListener('change', (e) => {
      state.filters.city = e.target.value;
      renderCarsGrid();
    });

    document.getElementById('filter-sort')?.addEventListener('change', (e) => {
      state.filters.sort = e.target.value;
      renderCarsGrid();
    });

    const priceSlider = document.getElementById('filter-price-range');
    const priceSliderLabel = document.getElementById('price-slider-label');
    if (priceSlider && priceSliderLabel) {
      priceSlider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value);
        state.filters.maxPrice = val;
        priceSliderLabel.textContent = formatMoney(val);
        renderCarsGrid();
      });
    }

    // Reset filters
    function resetAllFilters() {
      state.filters = {
        search: '',
        brand: 'all',
        body: 'all',
        fuel: 'all',
        maxPrice: 400000,
        city: 'all',
        sort: 'newest',
        quickChip: 'all'
      };

      if (searchInput) searchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.style.display = 'none';
      if (document.getElementById('filter-brand')) document.getElementById('filter-brand').value = 'all';
      if (document.getElementById('filter-body')) document.getElementById('filter-body').value = 'all';
      if (document.getElementById('filter-fuel')) document.getElementById('filter-fuel').value = 'all';
      if (document.getElementById('filter-city')) document.getElementById('filter-city').value = 'all';
      if (document.getElementById('filter-sort')) document.getElementById('filter-sort').value = 'newest';
      if (priceSlider) priceSlider.value = 400000;
      if (priceSliderLabel) priceSliderLabel.textContent = '$400,000';

      document.querySelectorAll('.filter-chip').forEach(c => {
        c.classList.toggle('active', c.dataset.chip === 'all');
      });

      renderCarsGrid();
    }

    document.getElementById('reset-filters-btn')?.addEventListener('click', resetAllFilters);
    document.getElementById('empty-reset-btn')?.addEventListener('click', resetAllFilters);

    // Quick Category Chips
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.filters.quickChip = chip.dataset.chip;
        renderCarsGrid();
      });
    });

    // Sell Car Form inputs real-time AI valuation
    ['form-car-brand', 'form-car-year', 'form-car-mileage', 'form-car-power', 'form-car-price'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', updateAIEstimator);
    });

    // Image preset picker options
    document.querySelectorAll('.preset-option').forEach(opt => {
      opt.addEventListener('click', () => {
        document.querySelectorAll('.preset-option').forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
        audio.playClick();
      });
    });

    // Apply AI suggested price button
    document.getElementById('apply-ai-price-btn')?.addEventListener('click', () => {
      const estimation = updateAIEstimator();
      const priceInput = document.getElementById('form-car-price');
      if (priceInput && estimation) {
        priceInput.value = estimation.estimatedMid;
        updateAIEstimator();
        audio.playSuccessChime();
        showToast(`AI tavsiya narxi ($${estimation.estimatedMid.toLocaleString()}) kiritildi!`, 'success', 'fa-wand-magic-sparkles');
      }
    });

    // Sell car form submit
    document.getElementById('sell-car-form')?.addEventListener('submit', handleSellCarSubmit);

    // CRM Tabs
    document.querySelectorAll('.crm-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.crm-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.dataset.tab;

        document.querySelectorAll('.crm-tab-content').forEach(c => c.style.display = 'none');
        const content = document.getElementById(`crm-tab-${target}`);
        if (content) content.style.display = 'block';
      });
    });

    // Loan Calculator Controls
    document.getElementById('calc-select-car')?.addEventListener('change', (e) => {
      const carId = e.target.value;
      if (carId !== 'custom') {
        const car = state.cars.find(c => c.id === carId);
        if (car) {
          document.getElementById('calc-price-input').value = car.priceUSD;
        }
      }
      recalculateLoan();
    });

    ['calc-price-input', 'calc-down-slider', 'calc-term-slider', 'calc-rate-slider'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', recalculateLoan);
    });

    document.querySelectorAll('input[name="finance-type"]').forEach(r => {
      r.addEventListener('change', () => {
        document.querySelectorAll('.radio-pill').forEach(p => p.classList.remove('active'));
        r.closest('.radio-pill')?.classList.add('active');

        // Adjust rate preset
        const rateSlider = document.getElementById('calc-rate-slider');
        if (rateSlider) {
          if (r.value === 'leasing') rateSlider.value = 16;
          else if (r.value === 'halal') rateSlider.value = 18;
          else rateSlider.value = 22;
        }
        recalculateLoan();
      });
    });

    document.getElementById('apply-finance-btn')?.addEventListener('click', () => {
      audio.playSuccessChime();
      showToast('Kredit arizasi muvaffaqiyatli qabul qilindi! Bank menejeri 15 daqiqada bog\'lanadi.', 'success', 'fa-file-signature');
    });

    // Comparison actions
    document.getElementById('clear-compare-btn')?.addEventListener('click', () => {
      state.compareList.clear();
      updateTopBadges();
      renderCompareView();
      renderCarsGrid();
      showToast('Taqqoslash ro\'yxati tozalandi.', 'info', 'fa-trash');
    });

    // Wishlist view back to market
    document.getElementById('wishlist-go-market-btn')?.addEventListener('click', () => navigateTo('marketplace'));

    // Modals close buttons
    document.getElementById('modal-close-details-btn')?.addEventListener('click', closeCarDetails);
    document.getElementById('modal-close-test-btn')?.addEventListener('click', () => {
      document.getElementById('test-drive-modal').style.display = 'none';
    });
    document.getElementById('modal-close-offer-btn')?.addEventListener('click', () => {
      document.getElementById('make-offer-modal').style.display = 'none';
    });

    // Close modals on overlay backdrop click
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
      });
    });

    // Test drive form submit
    document.getElementById('test-drive-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('test-drive-modal').style.display = 'none';
      audio.playSuccessChime();
      showToast('Test-drayv muvaffaqiyatli band qilindi! Sizni avtosalonda kutamiz.', 'success', 'fa-calendar-check');
    });

    // Make offer form submit
    document.getElementById('make-offer-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const amount = document.getElementById('offer-amount-input').value;
      document.getElementById('make-offer-modal').style.display = 'none';
      audio.playSuccessChime();
      showToast(`$${parseInt(amount).toLocaleString()} narx taklifingiz sotuvchiga yuborildi!`, 'success', 'fa-paper-plane');
      navigateTo('deals-chat');
    });

    // Initialize chat
    initChat();
  }

  // ==========================================
  // 16. GLOBAL EXPOSURE & INIT
  // ==========================================
  window.AvtoBazar = {
    navigateTo,
    openCarDetails,
    closeCarDetails,
    openTestDriveModal,
    openMakeOffer,
    toggleCompare,
    toggleFavorite,
    toggleSoldStatus,
    deleteCar,
    transferToCalculator
  };

  document.addEventListener('DOMContentLoaded', () => {
    loadPersistedData();
    setupEventListeners();
    updateAIEstimator();
    renderCarsGrid();
    updateTopBadges();

    // Set initial currency tag
    const currTag = document.getElementById('currency-mode-tag');
    if (currTag) currTag.textContent = (state.currency === 'USD') ? 'USD ($)' : 'UZS (so\'m)';
  });

})();
