document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Translations Dictionary
  const translations = {
    sr: {
      "nav.about": "O nama",
      "nav.menu": "Jelovnik",
      "nav.reviews": "Utisci",
      "nav.contact": "Kontakt",
      "nav.call": "Pozovite",
      
      "hero.reviews_count": "400+ utisaka",
      "hero.title": "Miris vode, dodir vetra i sveža rečna riba.",
      "hero.subtitle": "Sveža riba i autentični domaći specijaliteti na samoj obali Skadarskog jezera.",
      "hero.btn_menu": "Pogledajte Jelovnik",
      "hero.btn_call": "Rezervišite Sto",
      
      "story.tag": "Atmosfera",
      "story.cap1": "Lagani letnji povetarac i miris tradicije",
      "story.subheading": "Dobrodošli u Lesendro",
      "story.title": "Tradicija koja spaja miris vode i autentične ukuse",
      "story.desc": "Smešten u srcu Vranjine, Lesendro pruža jedinstven doživljaj domaće kuhinje tik uz jezero. Naša drvena terasa, bele zavese i sveže pripremljena riba pružaju spokoj i ukuse koje ćete dugo pamtiti.",
      "story.hl1_title": "Dnevni ulov",
      "story.hl1_desc": "Sveža riba iz lokalnih voda spremljena po tradicionalnoj recepturi.",
      "story.hl2_title": "Terasa na samoj obali",
      "story.hl2_desc": "Jedinstven pogled na jezero i osvežavajući povetarac tokom čitavog dana.",
      
      "banner.quote": "\"Neka domaćini preuzmu brigu o vama, a vi se samo prepustite uživanju.\"",
      
      "menu.subheading": "Gastronomija",
      "menu.title": "Naš Jelovnik",
      "menu.subtitle": "Sveža rečna riba, roštilj i autentični domaći prilozi",
      "menu.featured_badge": "Preporuka kuće",
      "menu.featured_title": "Riblji Specijalitet Miks za Dvoje",
      "menu.featured_desc": "Raznovrsni odabir najsvežije ribe sa roštilja, serviran uz sos od limuna, domaćeg bilja i topli domaći hleb.",
      "menu.cat_fish": "Riba i Specijaliteti",
      "menu.item_krap_title": "Skadarski Krap",
      "menu.item_krap_desc": "Tradicionalno pripremljen krap sa roštilja ili pržen po receptu staraca.",
      "menu.item_eel_title": "Jezerska Jegulja",
      "menu.item_eel_desc": "Sveža jegulja pečena na žaru, sočna i bogata autentičnim ukusom.",
      "menu.item_trout_title": "Rečna Pastrmka",
      "menu.item_trout_desc": "Lagana i sočna pastrmka pripremljena sa svežim limunom i mediteranskim biljem.",
      "menu.item_salmon_title": "Sveži Losos",
      "menu.item_salmon_desc": "Obilna porcija pažljivo grilovanog lososa sa sočnim prilozima.",
      "menu.item_mix_title": "Riblji Miks za 2 Osobe",
      "menu.item_mix_desc": "Bogat odabir specijaliteta kuće sa prelivom od limuna i svežih začina.",
      "menu.cat_sides": "Prilozi i Predjela",
      "menu.item_cheese_title": "Domaći Sir",
      "menu.item_cheese_desc": "Autentični lokalni sir punog ukusa, idealan uz čašu rashlađenog vina.",
      "menu.item_veg_title": "Povrće na Žaru",
      "menu.item_veg_desc": "Sveže sezonsko povrće pečeno na roštilju sa maslinovim uljem.",
      "menu.item_bread_title": "Domaći Sveži Hleb",
      "menu.item_bread_desc": "Topao domaći hleb, nezamenljiv za umaakanje u aromatične sosove.",
      
      "reviews.subheading": "Gostoprimstvo",
      "reviews.title": "Šta Kažu Naši Gosti",
      "reviews.google_text": "na osnovu 400+ utisaka",
      "reviews.r1": "Lesendro je jedno od najboljih mesta koje smo posetili u Crnoj Gori za svežu ribu. Probali smo jegulju i pastrmku, i obe su bile izvanredne. Terasa tik uz jezero krasi neverovatan pogled koji iskustvo čini nezaboravnim. Svesrdno preporučujem!",
      "reviews.r2": "Apsolutno izvanredno. Jedno od najboljih ribljih jela koja sam ikada jeo. Uzeli smo miks ribljih specijaliteta za dvoje. Ukus je bio vrhunski uz odličan odnos cene i kvaliteta. Obavezno uzmite hleb da umočite u sos od limuna i začinskog bilja!",
      "reviews.r3": "Divno iskustvo! Usluga je bila predivna, a hrana sveža i ukusna. Uzeli smo lososa, povrće na žaru, hleb i sir. Porcija lososa je bila ogromna — izuzetno pošteno i ukusno!",
      "reviews.r4": "Ako želite da doživite autentičnu domaću tradicionalnu kuhinju, samo dođite ovde, prepustite se domaćinima i uživajte! Posebno preporučujem krapa!",
      
      "contact.subheading": "Posetite Nas",
      "contact.title": "Lokacija i Radno Vreme",
      "contact.address_title": "Adresa",
      "contact.hours_title": "Radno vreme",
      "contact.hours_val": "Ponedeljak – Nedelja: 12:00 – 22:00",
      "contact.phone_title": "Telefon za rezervacije",
      "contact.btn_call_now": "Pozovite i Rezervišite",
      "contact.open_maps": "Otvorite u Google Maps",
      
      "footer.tagline": "Autentična domaća riblja kuhinja na obali Skadarskog jezera."
    },
    en: {
      "nav.about": "About Us",
      "nav.menu": "Menu",
      "nav.reviews": "Reviews",
      "nav.contact": "Contact",
      "nav.call": "Call Now",
      
      "hero.reviews_count": "400+ reviews",
      "hero.title": "The breeze, Lake Skadar, and fresh catch of the day.",
      "hero.subtitle": "Authentic local fish cuisine right on the water's edge in Montenegro.",
      "hero.btn_menu": "View Menu",
      "hero.btn_call": "Reserve a Table",
      
      "story.tag": "Atmosphere",
      "story.cap1": "Gentle breeze and authentic flavors",
      "story.subheading": "Welcome to Lesendro",
      "story.title": "Where lake traditions meet memorable local dining",
      "story.desc": "Located in Vranjina, Lesendro Fish Restaurant offers an unhurried waterfront experience. Our wooden terrace, soft white curtains, and fresh fish cooked to perfection create unforgettable moments.",
      "story.hl1_title": "Fresh Catch",
      "story.hl1_desc": "Locally sourced lake fish prepared according to traditional recipes.",
      "story.hl2_title": "Waterfront Terrace",
      "story.hl2_desc": "Panoramic views of Skadar Lake with a cooling breeze all day long.",
      
      "banner.quote": "\"Just come to this place, let the hosts take care of you, and enjoy!\"",
      
      "menu.subheading": "Gastronomy",
      "menu.title": "Our Menu",
      "menu.subtitle": "Fresh lake fish, grilled specialties, and homemade sides",
      "menu.featured_badge": "Chef's Special",
      "menu.featured_title": "Fish Specialty Mix for Two",
      "menu.featured_desc": "A generous platter of freshly grilled fish served with lemon, herb sauce, and warm homemade bread.",
      "menu.cat_fish": "Fish & Specialties",
      "menu.item_krap_title": "Skadar Carp (Krap)",
      "menu.item_krap_desc": "Traditionally prepared lake carp, grilled or fried to perfection.",
      "menu.item_eel_title": "Lake Eel",
      "menu.item_eel_desc": "Fresh grilled eel, tender and rich in flavor.",
      "menu.item_trout_title": "River Trout",
      "menu.item_trout_desc": "Delicate trout grilled with fresh lemon and Mediterranean herbs.",
      "menu.item_salmon_title": "Fresh Grilled Salmon",
      "menu.item_salmon_desc": "Generous salmon fillet cooked over open flames with aromatic seasoning.",
      "menu.item_mix_title": "Fish Specialty Mix for Two",
      "menu.item_mix_desc": "Selection of local fish served with signature lemon-herb oil.",
      "menu.cat_sides": "Starters & Sides",
      "menu.item_cheese_title": "Homemade Local Cheese",
      "menu.item_cheese_desc": "Authentic regional cheese, perfect as a starter with white wine.",
      "menu.item_veg_title": "Grilled Vegetables",
      "menu.item_veg_desc": "Seasonal fresh vegetables grilled with extra virgin olive oil.",
      "menu.item_bread_title": "Freshly Baked Bread",
      "menu.item_bread_desc": "Warm artisanal bread, ideal for soaking up lemon and herb sauces.",
      
      "reviews.subheading": "Hospitality",
      "reviews.title": "What Guests Say",
      "reviews.google_text": "based on 400+ reviews",
      "reviews.r1": "Lesendro Fish Restaurant was one of the best places we visited in Montenegro for fresh fish. We tried the eel and trout, and both were excellent — easily among the best around Skadar. The terrace right in front of the lake offered an amazing view!",
      "reviews.r2": "Absolutely outstanding. One of the best fish dishes I have ever had. We had the fish specialty mix for two. It tasted superb and was excellent value for money. Make sure you get some bread to soak up the lemon and herb sauce!",
      "reviews.r3": "Absolutely wonderful! The service was lovely, and the food was fresh and delicious. We had the salmon, grilled vegetables, bread, and cheese. Amazing value for money!",
      "reviews.r4": "If you want to experience authentic homemade traditional cuisine, just come to this place, let the hosts take care of you, and enjoy! I would recommend Krap!",
      
      "contact.subheading": "Visit Us",
      "contact.title": "Location & Hours",
      "contact.address_title": "Address",
      "contact.hours_title": "Opening Hours",
      "contact.hours_val": "Monday – Sunday: 12:00 PM – 10:00 PM",
      "contact.phone_title": "Reservations Phone",
      "contact.btn_call_now": "Call to Reserve",
      "contact.open_maps": "Open in Google Maps",
      
      "footer.tagline": "Authentic local fish cuisine right on the shore of Lake Skadar."
    },
    ru: {
      "nav.about": "О нас",
      "nav.menu": "Меню",
      "nav.reviews": "Отзывы",
      "nav.contact": "Контакты",
      "nav.call": "Позвонить",
      
      "hero.reviews_count": "400+ отзывов",
      "hero.title": "Шум волн, свежий бриз и лучшая рыба на гриле.",
      "hero.subtitle": "Свежайшая озерная рыба и традиционная домашняя кухня прямо у воды.",
      "hero.btn_menu": "Посмотреть Меню",
      "hero.btn_call": "Забронировать Стол",
      
      "story.tag": "Атмосфера",
      "story.cap1": "Морской бриз и традиционные рецепты",
      "story.subheading": "Добро пожаловать в Lesendro",
      "story.title": "Место, где встречаются уют, вид на озеро и традиции",
      "story.desc": "Расположенный в Враньине, ресторан Lesendro предлагает блюда домашней кухни у самой воды. Деревянная веранда, белые шторы и свежеприготовленная рыба создают неповторимый уют.",
      "story.hl1_title": "Свежий улов",
      "story.hl1_desc": "Озерная и речная рыба, приготовленная по старинным местным рецептам.",
      "story.hl2_title": "Веранда у самой воды",
      "story.hl2_desc": "Потрясающий панорамный вид на Скадарское озеро и прохладный бриз.",
      
      "banner.quote": "«Просто придите сюда, доверьтесь хозяевам и наслаждайтесь!»",
      
      "menu.subheading": "Гастрономия",
      "menu.title": "Наше Меню",
      "menu.subtitle": "Свежая рыба на гриле, озерные фирменные блюда и домашние закуски",
      "menu.featured_badge": "Выбор шефа",
      "menu.featured_title": "Рыбное Ассорти на 2 Персоны",
      "menu.featured_desc": "Ассорти из свежайшей рыбы на гриле, подается с лимонно-травяным соусом и горячим домашним хлебом.",
      "menu.cat_fish": "Рыба и Фирменные Блюда",
      "menu.item_krap_title": "Скадарский Карп (Krap)",
      "menu.item_krap_desc": "Традиционно приготовленный карп на гриле или обжаренный по местному рецепту.",
      "menu.item_eel_title": "Озерный Угорь",
      "menu.item_eel_desc": "Свежий угорь на углях, сочный и обладающий глубоким вкусом.",
      "menu.item_trout_title": "Речная Форель",
      "menu.item_trout_desc": "Нежнейшая форель с лимоном и ароматом средиземноморских трав.",
      "menu.item_salmon_title": "Свежий Лосось",
      "menu.item_salmon_desc": "Сочный запеченный или обжаренный стейк лосося со свежим гарниром.",
      "menu.item_mix_title": "Рыбный Микс на Двоих",
      "menu.item_mix_desc": "Богатый выбор озерной рыбы с фирменной заправкой из лимона и зелени.",
      "menu.cat_sides": "Закуски и Гарниры",
      "menu.item_cheese_title": "Домашний Местный Сыр",
      "menu.item_cheese_desc": "Аутентичный фермерский сыр, идеален к бокалу прохладного белого вина.",
      "menu.item_veg_title": "Овощи на Гриле",
      "menu.item_veg_desc": "Сочные сезонные овощи, обжаренные на углях с оливковым маслом.",
      "menu.item_bread_title": "Свежевыпеченный Хлеб",
      "menu.item_bread_desc": "Горячий домашний хлеб, идеально подходящий к соусам.",
      
      "reviews.subheading": "Гостеприимство",
      "reviews.title": "Отзывы Наших Гостей",
      "reviews.google_text": "на основе 400+ отзывов",
      "reviews.r1": "Lesendro — одно из лучших мест в Черногории, где мы пробовали свежую рыбу. Мы заказали угря и форель, и оба блюда были превосходны. Терраса прямо у озера с потрясающим видом делает это место незабываемым!",
      "reviews.r2": "Абсолютно потрясающе. Одно из лучших рыбных блюд, что я пробовал. Мы брали рыбное ассорти на двоих — вкус превосходный и отличная цена. Обязательно возьмите свежий хлеб, чтобы обмакивать его в лимонный соус!",
      "reviews.r3": "Замечательное место! Очень приятный сервис, а еда свежая и вкусная. Мы заказывали лосося, овощи на гриле, хлеб и сыр. Порции огромные, вышло невероятно вкусно!",
      "reviews.r4": "Если вы хотите попробовать аутентичную домашнюю традиционную кухню, просто придите сюда, доверьтесь хозяевам и наслаждайтесь! Особенно рекомендую карпа!",
      
      "contact.subheading": "Заезжайте в гости",
      "contact.title": "Локация и Часы Работы",
      "contact.address_title": "Адрес",
      "contact.hours_title": "Часы работы",
      "contact.hours_val": "Понедельник – Воскресенье: 12:00 – 22:00",
      "contact.phone_title": "Телефон для брони",
      "contact.btn_call_now": "Позвонить и Забронировать",
      "contact.open_maps": "Открыть в Google Maps",
      
      "footer.tagline": "Аутентичная домашняя рыбная кухня на берегу Скадарского озера."
    }
  };

  // Language Switcher Function
  function setLanguage(lang) {
    if (!translations[lang]) return;

    // Save language preference
    localStorage.setItem('lesendro_lang', lang);
    document.documentElement.lang = lang;

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Translate elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  // Setup Lang Buttons Click
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // Load Initial Language
  const savedLang = localStorage.getItem('lesendro_lang') || 'sr';
  setLanguage(savedLang);

  // 3. Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 4. Mobile Menu Drawer Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // 5. Scroll Reveal Intersection Observer
  const revealElements = document.querySelectorAll('[data-reveal]');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach(el => revealObserver.observe(el));
});