/* ==========================================================================
   OPTIMED Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Language Translation Dictionary
  const translations = {
    ID: {
      heroTitle: "SELAMAT DATANG DI OPTIMED",
      heroDesc: "Di OPTIMED, kami percaya bahwa kesehatan maksimal bukanlah tujuan akhir, melainkan sebuah perjalanan yang berkelanjutan. Kami hadir untuk menjembatani jarak antara keinginanmu untuk hidup prima dengan cara yang cerdas, personal, dan terukur. Kami tidak hanya memberikan informasi, kami memberikan solusi yang dirancang khusus untuk kebutuhan unik tubuh dan gaya hidupmu.",
      btnMulai: "MULAI",
      btnWa: "KONTAK DENGAN WA",
      trustBadgeNum: "500+",
      trustBadgeDesc: "ORANG PERCAYA DENGAN RUMAH SAKIT KAMI",
      floatingTitle: "Respon Cepat",
      floatingDesc: "< 20 Menit Sampai Vila",
      
      serviceSecTitle: "PELAYANAN YANG KAMI SEDIAKAN",
      s1Title: "Konsultasikan keluhanmu di sini.",
      s1Desc: "Ceritakan keluhanmu dan dapatkan saran medis akurat langsung dari ahlinya tanpa ribet.",
      s2Title: "Panggil dokter ke lokasi kamu",
      s2Desc: "Tim medis kami siap datang ke vila atau hotelmu dalam hitungan menit untuk penanganan langsung.",
      s3Title: "Dapatkan perlindungan vaksinasi.",
      s3Desc: "Lindungi dirimu dari risiko gigitan atau cakaran hewan dengan tindakan vaksinasi yang cepat dan steril.",
      s4Title: "Pilih booster favoritmu.",
      s4Desc: "Kembalikan stamina dan vitalitas tubuhmu secara instan dengan booster vitamin yang dirancang khusus.",
      s5Title: "Obati lukamu dengan cara yang benar.",
      s5Desc: "Rawat lukamu dengan prosedur higienis oleh dokter kami agar proses penyembuhan lebih cepat dan aman.",
      s6Title: "Cek kesehatanmu sekarang.",
      s6Desc: "Pantau kondisi tubuhmu dengan hasil lab yang valid untuk langkah perawatan yang lebih terarah.",

      ratingSecTitle: "APA PENDAPAT ORANG LAIN TENTANG RUMAH SAKIT INI",
      t1Text: "\"Lagi liburan di Ubud tapi tiba-tiba kondisi badan drop, untungnya nemu OPTIMED. Dokter datang ke vila kurang dari 20 menit, penanganannya gercep dan super profesional. Sangat ngebantu banget pas lagi jauh dari rumah!\"",
      t2Text: "\"Suka banget sama interface OPTIMED yang simpel. Konsultasi dokter bahasa Inggrisnya bener-bener ngebantu buat temen saya yang turis. Semuanya jelas, transparan, dan bikin tenang. Recommended buat yang butuh layanan medis darurat atau sekadar cek kesehatan.\"",

      mapsSecTitle: "LOKASI",
      mapsSecSubtitle: "Lihat lokasi layanan OPTIMED di peta dan buka Google Maps untuk petunjuk arah.",
      mapBtnText: "Buka di Google Maps",

      navHome: "BERANDA",
      navService: "SERVICE",
      navRating: "RATING",
      navMaps: "MAPS",
      searchPlaceholder: "APA YANG INGIN ANDA CARI?",

      // Modal translations
      modalHeader: "Pesan Layanan Kesehatan",
      modalSubtitle: "Silakan isi detail kunjungan Anda untuk terhubung ke tim WhatsApp kami.",
      labelName: "Nama Lengkap",
      labelPhone: "Nomor WhatsApp",
      labelLocation: "Lokasi Villa / Hotel / Alamat di Bali",
      labelDate: "Tanggal Kunjungan",
      labelTime: "Waktu Kunjungan",
      labelNotes: "Detail Keluhan Medis",
      placeholderName: "Masukkan nama lengkap Anda",
      placeholderPhone: "Contoh: 08123456789",
      placeholderLocation: "Nama villa/hotel & nomor kamar",
      placeholderNotes: "Jelaskan secara singkat gejala atau kebutuhan medis Anda",
      btnSubmitBooking: "Kirim Pemesanan via WhatsApp",
      btnCard: "Pesan Sekarang",

      // Footer translations
      footerTagline: "pelayanan dokter yang bagus dan pastinya terpercaya",
      footerTentang: "TENTANG",
      footerSupport: "SUPPORT",
      footerTerms: "Syarat Penggunaan"
    },
    EN: {
      heroTitle: "WELCOME TO OPTIMED",
      heroDesc: "At OPTIMED, we believe that peak health is not a final destination, but a continuous journey. We are here to bridge the gap between your desire to live optimally in a smart, personal, and measurable way. We don't just provide information; we deliver custom solutions designed specifically for your body's unique needs and lifestyle.",
      btnMulai: "GET STARTED",
      btnWa: "CONTACT VIA WHATSAPP",
      trustBadgeNum: "500+",
      trustBadgeDesc: "PEOPLE TRUST OUR HOSPITAL SERVICES",
      floatingTitle: "Fast Response",
      floatingDesc: "< 20 Mins Arrival at Villa",
      
      serviceSecTitle: "OUR HEALTHCARE SERVICES",
      s1Title: "Consult your health complaints here.",
      s1Desc: "Share your health concerns and get accurate medical advice directly from our specialists hassle-free.",
      s2Title: "Call a doctor to your location",
      s2Desc: "Our medical team is ready to arrive at your villa or hotel room in minutes for on-the-spot treatment.",
      s3Title: "Get vaccine immunization.",
      s3Desc: "Protect yourself from rabies or animal scratch risks with our sterile, immediate vaccination services.",
      s4Title: "Choose your favorite booster.",
      s4Desc: "Restore your physical stamina and vitality instantly with custom-formulated vitamin IV drips.",
      s5Title: "Treat wounds the proper way.",
      s5Desc: "Heal your cuts or burns through professional hygienic procedures by our physicians for faster recovery.",
      s6Title: "Check your health status today.",
      s6Desc: "Monitor your body indicators with valid lab test outcomes to direct your treatment steps accurately.",

      ratingSecTitle: "WHAT OTHERS SAY ABOUT THIS HOSPITAL",
      t1Text: "\"Was vacationing in Ubud when suddenly my physical state crashed, thankfully found OPTIMED. The doctor came to the villa in under 20 minutes; response was lightning fast and super professional. So helpful when far from home!\"",
      t2Text: "\"Absolutely love the simple OPTIMED interface. Doctor consultation in English really helped my tourist friends. Everything is clear, transparent, and reassuring. Recommended for urgent care or routine health screenings.\"",

      mapsSecTitle: "LOCATION",
      mapsSecSubtitle: "View OPTIMED service locations on the map, then open Google Maps for directions.",
      mapBtnText: "Open in Google Maps",

      navHome: "HOME",
      navService: "SERVICES",
      navRating: "REVIEWS",
      navMaps: "MAPS",
      searchPlaceholder: "WHAT ARE YOU LOOKING FOR?",

      // Modal translations
      modalHeader: "Book Medical Service",
      modalSubtitle: "Please fill in your visit details to connect with our WhatsApp team.",
      labelName: "Full Name",
      labelPhone: "WhatsApp Number",
      labelLocation: "Villa / Hotel / Address in Bali",
      labelDate: "Visit Date",
      labelTime: "Visit Time",
      labelNotes: "Medical Complaint Details",
      placeholderName: "Enter your full name",
      placeholderPhone: "Example: 08123456789",
      placeholderLocation: "Hotel/villa name & room number",
      placeholderNotes: "Briefly explain your symptoms or medical needs",
      btnSubmitBooking: "Send Booking via WhatsApp",
      btnCard: "Book Now",

      // Footer translations
      footerTagline: "excellent doctor service and certainly trusted",
      footerTentang: "ABOUT",
      footerSupport: "SUPPORT",
      footerTerms: "Terms of Use"
    }
  };

  // 2. Language Toggle Logic
  const btnEn = document.getElementById('lang-en');
  const btnId = document.getElementById('lang-id');
  let currentLanguage = 'ID';

  function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Toggle active state in buttons
    if (lang === 'EN') {
      btnEn.classList.add('active');
      btnId.classList.remove('active');
    } else {
      btnId.classList.add('active');
      btnEn.classList.remove('active');
    }

    const dict = translations[lang];

    // Header Links translation
    const links = document.querySelectorAll('.nav-link, .mobile-nav-link');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === '#beranda') link.textContent = dict.navHome;
      if (href === '#service') link.textContent = dict.navService;
      if (href === '#rating') link.textContent = dict.navRating;
      if (href === '#maps') link.textContent = dict.navMaps;
    });

    // Search bar translation
    document.getElementById('search-input').placeholder = dict.searchPlaceholder;

    // Hero Section Translation
    document.querySelector('.hero-title').textContent = dict.heroTitle;
    document.querySelector('.hero-description').textContent = dict.heroDesc;
    document.querySelector('.btn-outline').textContent = dict.btnMulai;
    
    // WhatsApp button text (retain the SVG and replace text node)
    const waBtn = document.querySelector('.btn-solid-teal');
    waBtn.innerHTML = `
      <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.99 11.45.99c-5.438 0-9.863 4.373-9.867 9.801-.001 1.968.515 3.89 1.498 5.606l-.993 3.624 3.71-.977zm11.587-6.845c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
      ${dict.btnWa}
    `;

    document.querySelector('.badge-number').textContent = dict.trustBadgeNum;
    document.querySelector('.badge-desc').textContent = dict.trustBadgeDesc;
    document.querySelector('.speed-badge h4').textContent = dict.floatingTitle;
    document.querySelector('.speed-badge p').textContent = dict.floatingDesc;

    // Services translation
    document.querySelector('.services-section .section-title').textContent = dict.serviceSecTitle;
    const sCards = document.querySelectorAll('.service-card');
    
    // Service 1
    sCards[0].querySelector('.service-title').textContent = dict.s1Title;
    sCards[0].querySelector('.service-description').textContent = dict.s1Desc;
    // Service 2
    sCards[1].querySelector('.service-title').textContent = dict.s2Title;
    sCards[1].querySelector('.service-description').textContent = dict.s2Desc;
    // Service 3
    sCards[2].querySelector('.service-title').textContent = dict.s3Title;
    sCards[2].querySelector('.service-description').textContent = dict.s3Desc;
    // Service 4
    sCards[3].querySelector('.service-title').textContent = dict.s4Title;
    sCards[3].querySelector('.service-description').textContent = dict.s4Desc;
    // Service 5
    sCards[4].querySelector('.service-title').textContent = dict.s5Title;
    sCards[4].querySelector('.service-description').textContent = dict.s5Desc;
    // Service 6
    sCards[5].querySelector('.service-title').textContent = dict.s6Title;
    sCards[5].querySelector('.service-description').textContent = dict.s6Desc;

    // Service buttons translation
    const cardBtns = document.querySelectorAll('.btn-order-service');
    cardBtns.forEach(btn => {
      btn.textContent = dict.btnCard;
    });

    // Rating translation
    document.querySelector('.rating-section .section-title').textContent = dict.ratingSecTitle;
    const tCards = document.querySelectorAll('.testimonial-card');
    tCards[0].querySelector('.testimonial-text').textContent = dict.t1Text;
    tCards[1].querySelector('.testimonial-text').textContent = dict.t2Text;

    // Maps translation
    document.querySelector('.maps-section .section-title').textContent = dict.mapsSecTitle;
    document.querySelector('.maps-section .section-subtitle').textContent = dict.mapsSecSubtitle;
    
    // Map button translation (keep icon and replace text)
    const mapBtn = document.getElementById('gmaps-link');
    mapBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
      ${dict.mapBtnText}
    `;

    // Modal Translation
    const modalTitle = document.getElementById('modal-service-title');
    const modalSubtitle = document.getElementById('modal-service-subtitle');
    if (modalTitle) {
      if (selectedService) {
        modalTitle.textContent = `${dict.modalHeader}: ${selectedService}`;
      } else {
        modalTitle.textContent = dict.modalHeader;
      }
    }
    if (modalSubtitle) modalSubtitle.textContent = dict.modalSubtitle;

    const lblName = document.getElementById('label-name');
    const lblPhone = document.getElementById('label-phone');
    const lblLocation = document.getElementById('label-location');
    const lblDate = document.getElementById('label-date');
    const lblTime = document.getElementById('label-time');
    const lblNotes = document.getElementById('label-notes');

    if (lblName) lblName.textContent = dict.labelName;
    if (lblPhone) lblPhone.textContent = dict.labelPhone;
    if (lblLocation) lblLocation.textContent = dict.labelLocation;
    if (lblDate) lblDate.textContent = dict.labelDate;
    if (lblTime) lblTime.textContent = dict.labelTime;
    if (lblNotes) lblNotes.textContent = dict.labelNotes;

    const inpName = document.getElementById('booking-name');
    const inpPhone = document.getElementById('booking-phone');
    const inpLocation = document.getElementById('booking-location');
    const inpNotes = document.getElementById('booking-notes');

    if (inpName) inpName.placeholder = dict.placeholderName;
    if (inpPhone) inpPhone.placeholder = dict.placeholderPhone;
    if (inpLocation) inpLocation.placeholder = dict.placeholderLocation;
    if (inpNotes) inpNotes.placeholder = dict.placeholderNotes;

    const btnSubmit = document.getElementById('btn-submit-booking');
    if (btnSubmit) btnSubmit.textContent = dict.btnSubmitBooking;

    // Footer translations
    const ftTagline = document.getElementById('footer-tagline');
    const ftTentang = document.getElementById('footer-title-tentang');
    const ftSupport = document.getElementById('footer-title-support');
    const ftTerms = document.getElementById('footer-link-terms');

    if (ftTagline) ftTagline.textContent = dict.footerTagline;
    if (ftTentang) ftTentang.textContent = dict.footerTentang;
    if (ftSupport) ftSupport.textContent = dict.footerSupport;
    if (ftTerms) ftTerms.textContent = dict.footerTerms;

    // Footer nav links translation
    const ftHome = document.querySelector('.nav-link-home');
    const ftService = document.querySelector('.nav-link-service');
    const ftRating = document.querySelector('.nav-link-rating');
    const ftMaps = document.querySelector('.nav-link-maps');

    if (ftHome) ftHome.textContent = dict.navHome;
    if (ftService) ftService.textContent = dict.navService;
    if (ftRating) ftRating.textContent = dict.navRating;
    if (ftMaps) ftMaps.textContent = dict.navMaps;

    // Re-initialize searchable data for search index update
    initializeSearchIndex();
  }

  btnEn.addEventListener('click', () => changeLanguage('EN'));
  btnId.addEventListener('click', () => changeLanguage('ID'));


  // 3. Header Shrink on Scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


  // 4. Mobile Navigation Drawer Controls
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });


  // 5. Scroll Spy: Highlight Navbar Links dynamically
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function scrollSpy() {
    const scrollPosition = window.scrollY + 120; // offset for sticky header

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        // Desktop nav
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });

        // Mobile nav
        mobileNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', scrollSpy);


  // 6. Scroll Reveal Observer
  const scrollElements = document.querySelectorAll('.scroll-reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve to keep active style loaded
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  scrollElements.forEach(el => revealObserver.observe(el));


  // 7. Interactive Search System
  let searchIndex = [];

  function initializeSearchIndex() {
    const dict = translations[currentLanguage];
    searchIndex = [
      { key: "beranda", term: dict.navHome.toLowerCase(), targetId: "beranda", displayTitle: dict.navHome, section: "Home" },
      { key: "whatsapp", term: "whatsapp wa kontak hubungi", targetId: "beranda", action: "whatsapp", displayTitle: dict.btnWa, section: "Kontak" },
      { key: "konsultasi", term: dict.s1Title.toLowerCase() + " " + dict.s1Desc.toLowerCase() + " consultation chat tanya", targetId: "service", cardIndex: 0, displayTitle: dict.s1Title, section: dict.navService },
      { key: "panggil", term: dict.s2Title.toLowerCase() + " " + dict.s2Desc.toLowerCase() + " homecall hotel villa visit datang", targetId: "service", cardIndex: 1, displayTitle: dict.s2Title, section: dict.navService },
      { key: "vaksin", term: dict.s3Title.toLowerCase() + " " + dict.s3Desc.toLowerCase() + " vaccine rabies gigit anjing", targetId: "service", cardIndex: 2, displayTitle: dict.s3Title, section: dict.navService },
      { key: "booster", term: dict.s4Title.toLowerCase() + " " + dict.s4Desc.toLowerCase() + " booster vitamin iv drip stamina infus", targetId: "service", cardIndex: 3, displayTitle: dict.s4Title, section: dict.navService },
      { key: "luka", term: dict.s5Title.toLowerCase() + " " + dict.s5Desc.toLowerCase() + " wound care perban dokter luka sembuh", targetId: "service", cardIndex: 4, displayTitle: dict.s5Title, section: dict.navService },
      { key: "lab", term: dict.s6Title.toLowerCase() + " " + dict.s6Desc.toLowerCase() + " lab checkup medical tes darah kolesterol", targetId: "service", cardIndex: 5, displayTitle: dict.s6Title, section: dict.navService },
      { key: "rating", term: dict.navRating.toLowerCase() + " testimoni review ulasan alok aleksander", targetId: "rating", displayTitle: dict.navRating, section: "Reviews" },
      { key: "lokasi", term: dict.navMaps.toLowerCase() + " google maps hospital denpasar bali", targetId: "maps", displayTitle: dict.navMaps, section: dict.navMaps }
    ];
  }

  initializeSearchIndex();

  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase().trim();
    searchResults.innerHTML = '';
    
    if (value.length === 0) {
      searchResults.classList.remove('active');
      return;
    }

    const filtered = searchIndex.filter(item => item.term.includes(value) || item.displayTitle.toLowerCase().includes(value));

    if (filtered.length === 0) {
      const noResultsDiv = document.createElement('div');
      noResultsDiv.className = 'search-no-results';
      noResultsDiv.textContent = currentLanguage === 'ID' ? 'Tidak ada hasil ditemukan' : 'No results found';
      searchResults.appendChild(noResultsDiv);
    } else {
      filtered.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'search-item';
        itemDiv.innerHTML = `
          <span class="search-item-title">${item.displayTitle}</span>
          <span class="search-item-section">${item.section}</span>
        `;
        
        itemDiv.addEventListener('click', () => {
          searchInput.value = '';
          searchResults.classList.remove('active');
          
          if (item.action === 'whatsapp') {
            window.open('https://wa.me/628123456789', '_blank');
            return;
          }

          // Smooth Scroll to section
          const sectionEl = document.getElementById(item.targetId);
          if (sectionEl) {
            const headerHeight = header.offsetHeight;
            const topOffset = sectionEl.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
            
            window.scrollTo({
              top: topOffset,
              behavior: 'smooth'
            });

            // Highlight element if it targets a specific card
            if (item.cardIndex !== undefined) {
              const cards = sectionEl.querySelectorAll('.service-card');
              const card = cards[item.cardIndex];
              if (card) {
                setTimeout(() => {
                  card.style.transform = 'scale(1.05) translateY(-10px)';
                  card.style.boxShadow = '0 10px 25px rgba(74, 180, 182, 0.4)';
                  card.style.borderColor = 'var(--color-primary)';
                  
                  setTimeout(() => {
                    card.style.transform = '';
                    card.style.boxShadow = '';
                    card.style.borderColor = '';
                  }, 2000); // highlight for 2s
                }, 850);
              }
            }
          }
        });
        
        searchResults.appendChild(itemDiv);
      });
    }

    searchResults.classList.add('active');
  });

  // Close search dropdown on click outside
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.classList.remove('active');
    }
  });


  // 8. Leaflet Map Setup with Markers in Bali
  const defaultCenter = [-8.6705, 115.2126]; // Denpasar
  const map = L.map('map', {
    center: defaultCenter,
    zoom: 12,
    scrollWheelZoom: false // disable scrolling map zoom while scrolling the page
  });

  // OpenStreetMap tiles do not require a Google Maps API key.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  // Custom SVG Medical Pin icon
  const medicalIcon = L.divIcon({
    className: 'custom-leaflet-marker',
    html: `
      <div style="background-color: var(--color-primary); width: 34px; height: 34px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(74, 180, 182, 0.4); border: 2px solid white;">
        <svg viewBox="0 0 24 24" style="width: 16px; height: 16px; transform: rotate(45deg); color: white;" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>
    `,
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -34]
  });

  const locations = [
    {
      name: "OPTIMED Central Denpasar",
      lat: -8.6705,
      lng: 115.2126,
      desc: "Kantor Pusat Layanan & Apotek Utama. Jam Layanan: 24 Jam.",
      gmaps: "https://maps.google.com/?q=-8.6705,115.2126"
    },
    {
      name: "OPTIMED Seminyak Emergency Point",
      lat: -8.6913,
      lng: 115.1682,
      desc: "Pos Siaga Darurat Seminyak & Canggu. Hub Utama Villa Call.",
      gmaps: "https://maps.google.com/?q=-8.6913,115.1682"
    },
    {
      name: "OPTIMED Sanur Station",
      lat: -8.6872,
      lng: 115.2575,
      desc: "Klinik Pendukung Wisata & Layanan Booster Vitamin.",
      gmaps: "https://maps.google.com/?q=-8.6872,115.2575"
    },
    {
      name: "OPTIMED Ubud Station",
      lat: -8.5069,
      lng: 115.2625,
      desc: "Pos Utama Layanan Ubud, Gianyar, dan sekitarnya.",
      gmaps: "https://maps.google.com/?q=-8.5069,115.2625"
    }
  ];

  locations.forEach(loc => {
    const marker = L.marker([loc.lat, loc.lng], { icon: medicalIcon }).addTo(map);
    
    // Custom Styled Popup inside Map
    const popupContent = `
      <div class="map-popup">
        <h4>${loc.name}</h4>
        <p>${loc.desc}</p>
        <a href="${loc.gmaps}" target="_blank" rel="noopener noreferrer" class="map-popup-btn">
          Rute Google Maps
        </a>
      </div>
    `;
    
    marker.bindPopup(popupContent);
  });

  // Adjust Google Maps button href to center location when clicking map wrapper
  const gmapsBtn = document.getElementById('gmaps-link');
  map.on('popupopen', (e) => {
    const popupLat = e.popup.getLatLng().lat;
    const popupLng = e.popup.getLatLng().lng;
    gmapsBtn.href = `https://www.google.com/maps/dir/?api=1&destination=${popupLat},${popupLng}`;
  });

  // 9. Booking Modal Interaction Logic
  const bookingModal = document.getElementById('booking-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const bookingForm = document.getElementById('booking-form');
  let selectedService = '';

  // Open modal when clicking a service card booking button
  document.querySelectorAll('.btn-order-service').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent card container highlights if nested
      selectedService = btn.getAttribute('data-service');
      
      // Update modal title
      const modalTitle = document.getElementById('modal-service-title');
      const dict = translations[currentLanguage];
      modalTitle.textContent = `${dict.modalHeader}: ${selectedService}`;

      // Open Modal
      bookingModal.classList.add('open');
      
      // Focus on name input
      setTimeout(() => {
        document.getElementById('booking-name').focus();
      }, 300);
    });
  });

  // Close modal functions
  function closeModal() {
    bookingModal.classList.remove('open');
    bookingForm.reset();
  }

  closeBtn.addEventListener('click', closeModal);
  
  // Close when clicking outside modal container
  bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
      closeModal();
    }
  });

  // Close when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bookingModal.classList.contains('open')) {
      closeModal();
    }
  });

  // Handle Form Submission and Redirect to WhatsApp
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('booking-name').value.trim();
    const phone = document.getElementById('booking-phone').value.trim();
    const location = document.getElementById('booking-location').value.trim();
    const date = document.getElementById('booking-date').value;
    const time = document.getElementById('booking-time').value;
    const notes = document.getElementById('booking-notes').value.trim();

    // Format fields for WhatsApp message
    const formattedNotes = notes ? notes : '-';
    
    // Create WhatsApp text query
    let waMessage = '';
    if (currentLanguage === 'ID') {
      waMessage = `*PEMESANAN LAYANAN KESEHATAN OPTIMED*
--------------------------------------------
*Layanan:* ${selectedService}
*Nama Pasien:* ${name}
*No. WhatsApp:* ${phone}
*Lokasi/Villa/Kamar:* ${location}
*Tanggal Kunjungan:* ${date}
*Jam Kunjungan:* ${time} WITA
*Detail Keluhan:* ${formattedNotes}

Mohon konfirmasi ketersediaan dokter, terima kasih.`;
    } else {
      waMessage = `*OPTIMED HEALTHCARE SERVICE BOOKING*
--------------------------------------------
*Service:* ${selectedService}
*Patient Name:* ${name}
*WhatsApp No.:* ${phone}
*Location/Villa/Room:* ${location}
*Visit Date:* ${date}
*Visit Time:* ${time} WITA
*Symptom Details:* ${formattedNotes}

Please confirm doctor availability, thank you.`;
    }

    // WhatsApp API URL (uses target phone from WA button)
    const waUrl = `https://wa.me/628123456789?text=${encodeURIComponent(waMessage)}`;
    
    // Open in new tab
    window.open(waUrl, '_blank');

    // Close Modal after booking
    closeModal();
  });


  // ============================================================
  // 10. Profile Dropdown — Click Toggle (not hover on mobile)
  // ============================================================
  const profileAvatarBtn  = document.getElementById('profile-avatar-btn');
  const profileDropdownMenu = document.getElementById('profile-dropdown-menu');

  profileAvatarBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = profileDropdownMenu.style.opacity === '1';
    if (isOpen) {
      profileDropdownMenu.style.opacity = '0';
      profileDropdownMenu.style.visibility = 'hidden';
      profileDropdownMenu.style.transform = 'translateY(10px)';
    } else {
      profileDropdownMenu.style.opacity = '1';
      profileDropdownMenu.style.visibility = 'visible';
      profileDropdownMenu.style.transform = 'translateY(0)';
    }
  });

  // Close dropdown when clicking anywhere else
  document.addEventListener('click', () => {
    profileDropdownMenu.style.opacity = '0';
    profileDropdownMenu.style.visibility = 'hidden';
    profileDropdownMenu.style.transform = 'translateY(10px)';
  });

  profileDropdownMenu.addEventListener('click', (e) => e.stopPropagation());


  // ============================================================
  // 11. Profil Saya Modal
  // ============================================================
  const profilModal       = document.getElementById('profil-modal');
  const profilModalClose  = document.getElementById('profil-modal-close');
  const profilModalCancel = document.getElementById('profil-modal-cancel');
  const btnOpenProfil     = document.getElementById('btn-open-profil');
  const profileEditForm   = document.getElementById('profile-edit-form');

  function openProfilModal() {
    // close dropdown first
    profileDropdownMenu.style.opacity = '0';
    profileDropdownMenu.style.visibility = 'hidden';
    profileDropdownMenu.style.transform = 'translateY(10px)';
    profilModal.classList.add('open');
  }

  function closeProfilModal() {
    profilModal.classList.remove('open');
  }

  btnOpenProfil.addEventListener('click', openProfilModal);
  profilModalClose.addEventListener('click', closeProfilModal);
  profilModalCancel.addEventListener('click', closeProfilModal);
  profilModal.addEventListener('click', (e) => { if (e.target === profilModal) closeProfilModal(); });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && profilModal.classList.contains('open')) closeProfilModal();
  });

  profileEditForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Show brief success feedback on the save button
    const saveBtn = profileEditForm.querySelector('[type="submit"]');
    const original = saveBtn.textContent;
    saveBtn.textContent = '✓ Tersimpan!';
    saveBtn.style.background = '#48bb78';
    setTimeout(() => {
      saveBtn.textContent = original;
      saveBtn.style.background = '';
      closeProfilModal();
    }, 1400);
  });


  // ============================================================
  // 12. Riwayat Janji Modal
  // ============================================================
  const riwayatModal      = document.getElementById('riwayat-modal');
  const riwayatModalClose = document.getElementById('riwayat-modal-close');
  const btnOpenRiwayat    = document.getElementById('btn-open-riwayat');

  function openRiwayatModal() {
    profileDropdownMenu.style.opacity = '0';
    profileDropdownMenu.style.visibility = 'hidden';
    profileDropdownMenu.style.transform = 'translateY(10px)';
    riwayatModal.classList.add('open');
  }

  function closeRiwayatModal() {
    riwayatModal.classList.remove('open');
  }

  btnOpenRiwayat.addEventListener('click', openRiwayatModal);
  riwayatModalClose.addEventListener('click', closeRiwayatModal);
  riwayatModal.addEventListener('click', (e) => { if (e.target === riwayatModal) closeRiwayatModal(); });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && riwayatModal.classList.contains('open')) closeRiwayatModal();
  });

  // Tab filter logic
  const riwayatTabs  = document.querySelectorAll('.riwayat-tab');
  const riwayatCards = document.querySelectorAll('.riwayat-card');

  riwayatTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      riwayatTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-tab');
      riwayatCards.forEach(card => {
        if (filter === 'semua' || card.getAttribute('data-status') === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // "Batalkan" button — mark card as dibatalkan with confirmation
  document.querySelectorAll('.btn-cancel-apt').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.riwayat-card');
      const confirmed = confirm('Apakah Anda yakin ingin membatalkan janji ini?');
      if (confirmed) {
        card.setAttribute('data-status', 'dibatalkan');
        card.querySelector('.riwayat-status-badge').textContent = 'Dibatalkan';
        card.querySelector('.riwayat-status-badge').className = 'riwayat-status-badge badge-dibatalkan';
        btn.textContent = 'Pesan Lagi';
        btn.className = 'btn-riwayat-action btn-pesan-lagi';
        card.style.borderLeftColor = '#fc8181';
        card.style.opacity = '0.85';
      }
    });
  });

  // "Pesan Lagi" button — open booking modal with the service name pre-filled
  document.querySelectorAll('.btn-pesan-lagi').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.riwayat-card');
      const serviceName = card.querySelector('h4').textContent;
      closeRiwayatModal();

      // Short delay then open booking modal
      setTimeout(() => {
        selectedService = serviceName;
        const dict = translations[currentLanguage];
        document.getElementById('modal-service-title').textContent = `${dict.modalHeader}: ${serviceName}`;
        bookingModal.classList.add('open');
        setTimeout(() => document.getElementById('booking-name').focus(), 300);
      }, 300);
    });
  });

});
