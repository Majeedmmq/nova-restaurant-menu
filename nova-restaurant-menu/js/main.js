// ==============================
// NAVIGATION
// ==============================

const quickMenuButton = document.getElementById("quick-menu-button");
if (quickMenuButton) {
    quickMenuButton.addEventListener("click", function () {
        window.location.href = "quick-menu.html";
    });
}

const searchButton = document.getElementById("search-button");
if (searchButton) {
    searchButton.addEventListener("click", function () {
        window.location.href = "search.html";
    });
}

// ==============================
// LANGUAGE
// ==============================

const languageButtons = document.querySelectorAll(".language-button");

const translations = {
    ar: {
        "quick-label": "سريع وسهل",
        "quick-title": "القائمة السريعة",
        "quick-description": "تصفح قائمتنا بسرعة واعثر على أطباقك المفضلة.",
        "view-quick-menu": "عرض القائمة السريعة",
        "view-visual-menu": "عرض القائمة المصورة",
        "offers-label": "عروض خاصة لك",
        "offers-title": "العروض",
        "offers-description": "اكتشف أحدث عروضنا الخاصة واستمتع بالمزيد بسعر أقل.",
        "restaurant-back": "رجوع",
        "restaurant-label": "زورونا",
        "restaurant-title": "معلومات المطعم",
        "restaurant-description": "كل ما تحتاج معرفته عن مطعم ومطبخ  برق الكواكب.",
        "footer-brand-subtitle": "مطعم ومطبخ",
        "footer-hours": "يوميًا: 8:00 صباحًا – 11:00 مساءً",
        "footer-instagram": "إنستغرام",
        "footer-whatsapp": "واتساب",
        "footer-copyright": "© 2026 مطعم ومطبخ برق الكواكب. جميع الحقوق محفوظة.",
        "footer-address": "شارع الأمير حمود، العقربية، الخبر 34445",
        "restaurant-visit": "زورونا",
        "restaurant-info-title": "معلومات المطعم",
        "restaurant-info-description": "كل ما تحتاج معرفته عن مطعم ومطبخ برق الكواكب.",
        "home-greeting": "مساء الخير",
        "home-title": "مرحبًا بكم في برق الكواكب",
        "home-description": "اكتشف قائمتنا واستمتع بتجربة شهية.",
        "search-button": "بحث",
        "search-placeholder": "ابحث في القائمة...",
        "categories-label": "استكشف",
        "categories-title": "الأصناف",
        "popular-label": "اختياراتنا",
        "popular-title": "الأطباق الأكثر شعبية",
        "specials-label": "مميز اليوم",
        "specials-title": "عروض اليوم",
        "header-brand-name": "برق الكواكب",
        "brand-name": "برق الكواكب",
"header-brand-subtitle": "مطعم ومطبخ",

"footer-snapchat": "سناب شات",
"footer-facebook": "فيسبوك",
"footer-tiktok": "تيك توك",


        "view-all-offers": "عرض جميع العروض"
    },
    en: {
        "quick-label": "Quick & Easy",
        "quick-title": "Quick Menu",
        "quick-description": "Browse our menu quickly and find your favorite dishes.",
        "view-quick-menu": "View Quick Menu",
        "view-visual-menu": "View Visual Menu",
        "offers-label": "Special For You",
        "offers-title": "Offers",
        "offers-description": "Discover our latest special offers and enjoy more for less.",
        "restaurant-back": "Back",
        "restaurant-label": "Visit Us",
        "restaurant-title": "Restaurant Information",
        "restaurant-description": "Everything you need to know about Barq AlKawakib.",
        "footer-brand-subtitle": "Restaurant & Kitchen",
        "footer-hours": "Daily: 8:00 AM – 11:00 PM",
        "footer-instagram": "Instagram",
        "footer-whatsapp": "WhatsApp",
        "footer-copyright": "© 2026 Barq AlKawakib Restaurant & Kitchen. All rights reserved.",
        "footer-address": "Prince Hamoud Street, Al-Aqrabiyah, Al-Khobar 34445",
        "restaurant-visit": "Visit Us",
        "restaurant-info-title": "Restaurant Information",
        "restaurant-info-description": "Everything you need to know about Barq AlKawakib.",
        "home-greeting": "Good Evening",
            "home-title": "Welcome to Barq AlKawakib",
            "home-description": "Discover our menu and explore something delicious.",
        "search-button": "Search",
        "search-placeholder": "Search the menu...",
        "categories-label": "Explore",
        "categories-title": "Categories",
        "popular-label": "Our Favorites",
        "popular-title": "Popular Dishes",
        "specials-label": "Special Today",
        "specials-title": "Today's Specials",
        "header-brand-name": "Barq AlKawakib",
"header-brand-subtitle": "Restaurant & Kitchen",
"brand-name": "Barq AlKawakib",

"footer-snapchat": "Snapchat",
"footer-facebook": "Facebook",
"footer-tiktok": "TikTok",

        "view-all-offers": "View All Offers"
    }
};

function getText(arabicText, englishText) {
    return document.documentElement.lang === "ar"
        ? arabicText
        : englishText;
}

function applyTranslations() {
    const currentLanguage = document.documentElement.lang;
    const currentTranslations = translations[currentLanguage];

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
        const key = element.getAttribute("data-i18n");
        if (currentTranslations[key]) {
            element.textContent = currentTranslations[key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
        const key = element.getAttribute("data-i18n-placeholder");
        if (currentTranslations[key]) {
            element.placeholder = currentTranslations[key];
        }
    });
}

// Prevent overlapping Visual Menu renders.
let visualMenuRenderId = 0;

function setLanguage(language, renderPage) {
    if (language === "ar") {
        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";
        localStorage.setItem("nova-language", "ar");

        languageButtons.forEach(function (button) {
            button.textContent = "English";
        });
    } else {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
        localStorage.setItem("nova-language", "en");

        languageButtons.forEach(function (button) {
            button.textContent = "العربية";
        });
    }

    applyTranslations();

   

renderFooter();

    // On initial startup we only set the language here.
    // Page rendering is performed once at the bottom of the file.
    if (renderPage === false) {
        return;
    }

    if (document.getElementById("quick-menu-category-list")) {
        renderQuickMenuCategories();
        renderQuickMenu();
    }

    if (document.getElementById("visual-menu-products-list")) {
        renderVisualMenu();
    }

    if (document.getElementById("visual-menu-category-list")) {
        renderVisualMenuCategories();
    }

    if (document.getElementById("home-categories-list")) {
        renderHomeCategories();
    }

    if (document.getElementById("home-popular-products")) {
        renderHomePopularProducts();
    }

    if (document.getElementById("home-specials-list")) {
        renderHomeSpecials();
    }

    if (document.getElementById("restaurant-page-grid")) {
        renderRestaurantPage();
    }

    if (document.querySelector(".product-details-content")) {
        renderProductDetails();
    }

    if (document.getElementById("search-results-list")) {
        renderSearchResults();
    }

    if (document.getElementById("offers-list")) {
        renderOffersPage();
    }

    if (document.getElementById("home-restaurant-info")) {
        renderHomeRestaurantInfo();
    }
}

languageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const currentLanguage = document.documentElement.lang;
        setLanguage(currentLanguage === "en" ? "ar" : "en", true);
    });
});

// ==============================
// DATA LOADING
// ==============================

async function loadProducts() {
    const response = await fetch("data/products.json");
    if (!response.ok) {
        throw new Error("Failed to load products.json");
    }
    return await response.json();
}

async function loadCategories() {
    const response = await fetch("data/categories.json");
    if (!response.ok) {
        throw new Error("Failed to load categories.json");
    }
    return await response.json();
}

async function loadOffers() {
    const response = await fetch("data/offers.json");
    if (!response.ok) {
        throw new Error("Failed to load offers.json");
    }
    return await response.json();
}

async function loadRestaurant() {
    const response = await fetch("data/restaurant.json");
    if (!response.ok) {
        throw new Error("Failed to load restaurant.json");
    }
    return await response.json();
}

// ==============================
// HOME CATEGORIES
// ==============================

async function renderHomeCategories() {
    const categoriesList = document.getElementById("home-categories-list");
    if (!categoriesList) return;

    const categories = await loadCategories();
    categoriesList.innerHTML = "";

    categories
        .filter(function (category) {
            return category.active;
        })
        .sort(function (a, b) {
            return a.sort_order - b.sort_order;
        })
        .forEach(function (category) {
            const link = document.createElement("a");
            link.href = "visual-menu.html#" + category.id;
            link.className = "category-item";
            link.textContent = getText(category.name_ar, category.name_en);
            categoriesList.appendChild(link);
        });
}

// ==============================
// HOME POPULAR PRODUCTS
// ==============================

async function renderHomePopularProducts() {
    const productsGrid = document.getElementById("home-popular-products");
    if (!productsGrid) return;

    const products = await loadProducts();
    productsGrid.innerHTML = "";

    products
        .filter(function (product) {
            return (
                product.active !== false &&
                product.available &&
                product.featured
            );
        })
        .forEach(function (product) {
            const card = document.createElement("a");
            card.href = "product-details.html?id=" + product.id;
            card.className = "product-card";

            const image = document.createElement("div");
            image.className = "product-image";

            if (product.image) {
                const img = document.createElement("img");
                img.src = product.image;
                img.alt = getText(
                    product.name_ar,
                    product.name_en || product.name_ar
                );
                image.appendChild(img);
            } else {
                const imageText = document.createElement("span");
                imageText.textContent = getText("صورة", "Image");
                image.appendChild(imageText);
            }

            const content = document.createElement("div");
            content.className = "product-content";

            const name = document.createElement("h3");
            name.className = "product-name";
            name.textContent = getText(
                product.name_ar,
                product.name_en || product.name_ar
            );

            const description = document.createElement("p");
            description.className = "product-description";
            description.textContent = getText(
                product.description_ar || "",
                product.description_en || product.description_ar || ""
            );

            const price = document.createElement("p");
            price.className = "product-price";
            price.textContent = getText(
                product.price + " ر.س",
                product.price + " SAR"
            );

            content.appendChild(name);
            content.appendChild(description);
            content.appendChild(price);

            card.appendChild(image);
            card.appendChild(content);
            productsGrid.appendChild(card);
        });
}

// ==============================
// HOME SPECIAL OFFERS
// ==============================

async function renderHomeSpecials() {
    const specialsList = document.getElementById("home-specials-list");
    if (!specialsList) return;

    const offers = await loadOffers();
    specialsList.innerHTML = "";

    offers
        .filter(function (offer) {
            return offer.active;
        })
        .forEach(function (offer) {
            const card = document.createElement("a");
            card.href = "product-details.html?id=" + offer.products[0];
            card.className = "offer-card";

            const image = document.createElement("div");
            image.className = "offer-image";

            if (offer.image) {
                const img = document.createElement("img");
                img.src = offer.image;
                img.alt = getText(
                    offer.title_ar,
                    offer.title_en || offer.title_ar
                );
                image.appendChild(img);
            } else {
                const imageText = document.createElement("span");
                imageText.textContent = getText("صورة", "Image");
                image.appendChild(imageText);
            }

            const content = document.createElement("div");
            content.className = "offer-content";

            const label = document.createElement("p");
            label.className = "offer-label";
            label.textContent = getText("عرض خاص", "Special Offer");

            const title = document.createElement("h3");
            title.className = "offer-title";
            title.textContent = getText(
                offer.title_ar,
                offer.title_en || offer.title_ar
            );

            const description = document.createElement("p");
            description.className = "offer-description";
            description.textContent = getText(
                offer.description_ar || "",
                offer.description_en || offer.description_ar || ""
            );

            const price = document.createElement("div");
            price.className = "offer-price";

            const currentPrice = document.createElement("span");
            currentPrice.className = "offer-price-current";
            currentPrice.textContent = getText(
                offer.offer_price + " ر.س",
                offer.offer_price + " SAR"
            );

            const originalPrice = document.createElement("span");
            originalPrice.className = "offer-price-original";
            originalPrice.textContent = getText(
                offer.original_price + " ر.س",
                offer.original_price + " SAR"
            );

            price.appendChild(currentPrice);
            price.appendChild(originalPrice);

            content.appendChild(label);
            content.appendChild(title);
            content.appendChild(description);
            content.appendChild(price);

            card.appendChild(image);
            card.appendChild(content);
            specialsList.appendChild(card);
        });
}


// ==============================
// FOOTER
// ==============================

async function renderFooter() {

    const footerAddress =
        document.getElementById("footer-address");

    const footerInstagram =
        document.getElementById("footer-instagram");

    const footerWhatsapp =
        document.getElementById("footer-whatsapp");


    if (
        !footerAddress &&
        !footerInstagram &&
        !footerWhatsapp
    ) {
        return;
    }


    const restaurant = await loadRestaurant();


    // Address

    if (footerAddress) {

        footerAddress.textContent =
            getText(
                restaurant.address_ar,
                restaurant.address_en
            );

    }


    // Instagram

    if (footerInstagram) {

        if (
            restaurant.instagram &&
            restaurant.instagram !== "#"
        ) {

            footerInstagram.href =
                restaurant.instagram;

            footerInstagram.style.display = "";

        } else {

            footerInstagram.style.display = "none";

        }

    }


    // WhatsApp

    if (footerWhatsapp) {

        footerWhatsapp.href =
            "https://wa.me/" +
            restaurant.whatsapp.replace("+", "");

    }

}

// ==============================
// RESTAURANT INFORMATION
// ==============================

async function renderRestaurantPage() {
    const restaurantGrid = document.getElementById("restaurant-page-grid");
    if (!restaurantGrid) return;

    const restaurant = await loadRestaurant();
    restaurantGrid.innerHTML = "";

    const footerAddress = document.getElementById("footer-address");
    const footerInstagram = document.getElementById("footer-instagram");
    const footerWhatsapp = document.getElementById("footer-whatsapp");

    if (footerAddress) {
        footerAddress.textContent = getText(
            restaurant.address_ar,
            restaurant.address_en
        );
    }

    if (footerInstagram) {
        if (restaurant.instagram && restaurant.instagram !== "#") {
            footerInstagram.href = restaurant.instagram;
            footerInstagram.style.display = "";
        } else {
            footerInstagram.style.display = "none";
        }
    }

    if (footerWhatsapp) {
        footerWhatsapp.href =
            "https://wa.me/" + restaurant.whatsapp.replace("+", "");
    }

    // About
    const aboutCard = document.createElement("article");
    aboutCard.className = "restaurant-page-card";

    const aboutLabel = document.createElement("p");
    aboutLabel.className = "section-label";
    aboutLabel.textContent = getText("عن المطعم", "About");

    const aboutTitle = document.createElement("h2");
    aboutTitle.textContent = getText(restaurant.name_ar, restaurant.name_en);

    const aboutDescription = document.createElement("p");
    aboutDescription.textContent = getText(
        restaurant.description_ar,
        restaurant.description_en
    );

    aboutCard.appendChild(aboutLabel);
    aboutCard.appendChild(aboutTitle);
    aboutCard.appendChild(aboutDescription);
    restaurantGrid.appendChild(aboutCard);

    // Service Options
    const serviceCard = document.createElement("article");
    serviceCard.className = "restaurant-page-card";

    const serviceLabel = document.createElement("p");
    serviceLabel.className = "section-label";
    serviceLabel.textContent = getText("الخدمات", "Service Options");

    const serviceTitle = document.createElement("h2");
    serviceTitle.textContent = getText("خيارات الجلوس", "Dining Options");

    const serviceList = document.createElement("div");
    serviceList.className = "restaurant-service-list";

    const serviceOptions =
        document.documentElement.lang === "ar"
            ? restaurant.service_options_ar
            : restaurant.service_options_en;

    serviceOptions.forEach(function (option) {
        const item = document.createElement("div");
        item.className = "restaurant-service-item";
        item.textContent = option;
        serviceList.appendChild(item);
    });

    serviceCard.appendChild(serviceLabel);
    serviceCard.appendChild(serviceTitle);
    serviceCard.appendChild(serviceList);
    restaurantGrid.appendChild(serviceCard);

    // Opening Hours
    const hoursCard = document.createElement("article");
    hoursCard.className = "restaurant-page-card";

    const hoursLabel = document.createElement("p");
    hoursLabel.className = "section-label";
    hoursLabel.textContent = getText("ساعات العمل", "Opening Hours");

    const hoursTitle = document.createElement("h2");
    hoursTitle.textContent = getText("ساعات العمل", "Opening Hours");

    const hoursList = document.createElement("div");
    hoursList.className = "restaurant-hours-list";

    restaurant.opening_hours.forEach(function (item) {
        const row = document.createElement("div");
        const days = document.createElement("span");
        days.textContent = getText(item.days_ar, item.days_en);

        const time = document.createElement("strong");
        time.textContent = item.open + " – " + item.close;

        row.appendChild(days);
        row.appendChild(time);
        hoursList.appendChild(row);
    });

    hoursCard.appendChild(hoursLabel);
    hoursCard.appendChild(hoursTitle);
    hoursCard.appendChild(hoursList);
    restaurantGrid.appendChild(hoursCard);

    // Location
    const locationCard = document.createElement("article");
    locationCard.className = "restaurant-page-card";

    const locationLabel = document.createElement("p");
    locationLabel.className = "section-label";
    locationLabel.textContent = getText("الموقع", "Location");

    const locationTitle = document.createElement("h2");
    locationTitle.textContent = getText("موقع المطعم", "Restaurant Location");

    const locationAddress = document.createElement("p");
    locationAddress.textContent = getText(
        restaurant.address_ar,
        restaurant.address_en
    );

    const locationButton = document.createElement("a");
    locationButton.className = "restaurant-page-button";
    locationButton.href = restaurant.location.google_maps_url;
    locationButton.target = "_blank";
    locationButton.rel = "noopener noreferrer";
    locationButton.textContent = getText(
        "فتح الموقع على خرائط Google",
        "Open in Google Maps"
    );

    locationCard.appendChild(locationLabel);
    locationCard.appendChild(locationTitle);
    locationCard.appendChild(locationAddress);
    locationCard.appendChild(locationButton);
    restaurantGrid.appendChild(locationCard);

    // Map
    const mapCard = document.createElement("article");
    mapCard.className = "restaurant-page-card restaurant-map-card";

    const mapLabel = document.createElement("p");
    mapLabel.className = "section-label";
    mapLabel.textContent = getText("خرائط Google", "Google Maps");

    const mapTitle = document.createElement("h2");
    mapTitle.textContent = getText("موقعنا على الخريطة", "Our Location on the Map");

    const mapDescription = document.createElement("p");
    mapDescription.textContent = getText(
        "يمكنك فتح موقع المطعم مباشرة عبر خرائط Google.",
        "Open the restaurant location directly in Google Maps."
    );

    const mapButton = document.createElement("a");
    mapButton.className = "restaurant-page-button";
    mapButton.href = restaurant.location.google_maps_url;
    mapButton.target = "_blank";
    mapButton.rel = "noopener noreferrer";
    mapButton.textContent = getText("فتح خرائط Google", "Open Google Maps");

    mapCard.appendChild(mapLabel);
    mapCard.appendChild(mapTitle);
    mapCard.appendChild(mapDescription);
    mapCard.appendChild(mapButton);
    restaurantGrid.appendChild(mapCard);

    // Contact
    const contactCard = document.createElement("article");
    contactCard.className = "restaurant-page-card";

    const contactLabel = document.createElement("p");
    contactLabel.className = "section-label";
    contactLabel.textContent = getText("التواصل", "Contact");

    const contactTitle = document.createElement("h2");
    contactTitle.textContent = getText("تواصل معنا", "Get in Touch");

    const contactActions = document.createElement("div");
    contactActions.className = "restaurant-page-actions";

    const callButton = document.createElement("a");
    callButton.className = "restaurant-page-button";
    callButton.href = "tel:" + restaurant.phone;
    callButton.textContent = getText("اتصال", "Call");

    const whatsappButton = document.createElement("a");
    whatsappButton.className = "restaurant-page-button";
    whatsappButton.href =
        "https://wa.me/" + restaurant.whatsapp.replace("+", "");
    whatsappButton.target = "_blank";
    whatsappButton.rel = "noopener noreferrer";
    whatsappButton.textContent = getText("واتساب", "WhatsApp");

    contactActions.appendChild(callButton);
    contactActions.appendChild(whatsappButton);
    contactCard.appendChild(contactLabel);
    contactCard.appendChild(contactTitle);
    contactCard.appendChild(contactActions);
    restaurantGrid.appendChild(contactCard);

    // Social Media
    const socialCard = document.createElement("article");
    socialCard.className = "restaurant-page-card";

    const socialLabel = document.createElement("p");
    socialLabel.className = "section-label";
    socialLabel.textContent = getText("التواصل الاجتماعي", "Social Media");

    const socialTitle = document.createElement("h2");
    socialTitle.textContent = getText("تابع برق الكواكب", "Follow Barq AlKawakib");

    const socialLinks = document.createElement("div");
    socialLinks.className = "restaurant-page-social";

    if (restaurant.instagram && restaurant.instagram !== "#") {
        const instagramLink = document.createElement("a");
        instagramLink.href = restaurant.instagram;
        instagramLink.target = "_blank";
        instagramLink.rel = "noopener noreferrer";
        instagramLink.textContent = "Instagram";
        socialLinks.appendChild(instagramLink);
    }

    socialCard.appendChild(socialLabel);
    socialCard.appendChild(socialTitle);
    socialCard.appendChild(socialLinks);
    restaurantGrid.appendChild(socialCard);
}

// ==============================
// VISUAL MENU
// ==============================

async function renderVisualMenu() {
    const productsContainer = document.getElementById("visual-menu-products-list");
    if (!productsContainer) return;

    const currentRenderId = ++visualMenuRenderId;

    const [products, categories] = await Promise.all([
        loadProducts(),
        loadCategories()
    ]);

    if (currentRenderId !== visualMenuRenderId) return;

    productsContainer.innerHTML = "";

    categories
        .filter(function (category) {
            return category.active;
        })
        .sort(function (a, b) {
            return a.sort_order - b.sort_order;
        })
        .forEach(function (category) {
            const categoryProducts = products.filter(function (product) {
                return (
                    product.active !== false &&
                    product.available &&
                    product.category === category.id
                );
            });

            if (categoryProducts.length === 0) return;

            const categorySection = document.createElement("section");
            categorySection.className = "visual-category-section";
            categorySection.id = category.id;

            const categoryTitle = document.createElement("h2");
            categoryTitle.className = "visual-category-title";
            categoryTitle.textContent = getText(
                category.name_ar,
                category.name_en
            );

            const productsGrid = document.createElement("div");
            productsGrid.className = "visual-products-grid";

            categoryProducts.forEach(function (product) {
                const productCard = document.createElement("a");
                productCard.href = "product-details.html?id=" + product.id;
                productCard.className = "visual-product-card";

                const image = document.createElement("div");
                image.className = "visual-product-image";

                if (product.image) {
                    const img = document.createElement("img");
                    img.src = product.image;
                    img.alt = getText(
                        product.name_ar,
                        product.name_en || product.name_ar
                    );
                    image.appendChild(img);
                } else {
                    const imageText = document.createElement("span");
                    imageText.textContent = getText("صورة", "Image");
                    image.appendChild(imageText);
                }

                const content = document.createElement("div");
                content.className = "visual-product-content";

                const name = document.createElement("h3");
                name.className = "visual-product-name";
                name.textContent = getText(
                    product.name_ar,
                    product.name_en || product.name_ar
                );

                const description = document.createElement("p");
                description.className = "visual-product-description";
                description.textContent = getText(
                    product.description_ar || "",
                    product.description_en || product.description_ar || ""
                );

                const price = document.createElement("span");
                price.className = "visual-product-price";
                price.textContent = getText(
                    product.price + " ر.س",
                    product.price + " SAR"
                );

                content.appendChild(name);
                content.appendChild(description);
                content.appendChild(price);
                productCard.appendChild(image);
                productCard.appendChild(content);
                productsGrid.appendChild(productCard);
            });

            categorySection.appendChild(categoryTitle);
            categorySection.appendChild(productsGrid);
            productsContainer.appendChild(categorySection);
        });
}

// ==============================
// PRODUCT DETAILS
// ==============================

async function renderProductDetails() {
    const productContainer = document.getElementById("product-details-container");
    if (!productContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (!productId) {
        return;
    }

    const products = await loadProducts();
    const product = products.find(function (item) {
        return item.id === productId;
    });

    if (!product) {
        productContainer.innerHTML = "";
        const message = document.createElement("p");
        message.textContent = getText(
            "المنتج غير موجود.",
            "Product not found."
        );
        productContainer.appendChild(message);
        return;
    }

    productContainer.innerHTML = "";

    const image = document.createElement("div");
    image.className = "product-details-image";

    if (product.image) {
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = getText(
            product.name_ar,
            product.name_en || product.name_ar
        );
        image.appendChild(img);
    } else {
        const imageText = document.createElement("span");
        imageText.textContent = getText("صورة", "Image");
        image.appendChild(imageText);
    }

    const content = document.createElement("div");
    content.className = "product-details-content";

    if (product.badges && product.badges.length > 0) {
        const badge = document.createElement("span");
        badge.className = "product-badge";
        badge.textContent = product.badges[0];
        content.appendChild(badge);
    }

    const name = document.createElement("h1");
    name.className = "product-details-name";
    name.textContent = getText(
        product.name_ar,
        product.name_en || product.name_ar
    );

    const price = document.createElement("p");
    price.className = "product-details-price";
    price.textContent = getText(
        product.price + " ر.س",
        product.price + " SAR"
    );

    const description = document.createElement("p");
    description.className = "product-details-description";
    description.textContent = getText(
        product.description_ar || "",
        product.description_en || product.description_ar || ""
    );

    const allergensTitle = document.createElement("h2");
    allergensTitle.textContent = getText(
        "معلومات الحساسية",
        "Allergen Information"
    );

    const allergensList = document.createElement("ul");
    const allergenItem = document.createElement("li");
    allergenItem.textContent = getText(
        "راجع قائمة الأطعمة التي تسبب الحساسية قبل الطلب.",
        "Please review the food allergen list before ordering."
    );
    allergensList.appendChild(allergenItem);

    content.appendChild(name);
    content.appendChild(price);
    content.appendChild(description);
    content.appendChild(allergensTitle);
    content.appendChild(allergensList);

    productContainer.appendChild(image);
    productContainer.appendChild(content);
}

// ==============================
// QUICK MENU
// ==============================

async function renderQuickMenu() {

    const productsContainer =
        document.getElementById("quick-menu-products-list");

    if (!productsContainer) {
        return;
    }

    productsContainer.innerHTML = "";

    const products = await loadProducts();
    const categories = await loadCategories();


    categories
        .filter(function (category) {
            return category.active;
        })
        .sort(function (a, b) {
            return a.sort_order - b.sort_order;
        })
        .forEach(function (category) {

            const categoryProducts =
                products.filter(function (product) {

                    return (
                        product.active !== false &&
                        product.available &&
                        product.category === category.id
                    );

                });


            if (categoryProducts.length === 0) {
                return;
            }


            // ==============================
            // CATEGORY SECTION
            // ==============================

            const categorySection =
                document.createElement("section");

            categorySection.className =
                "quick-category-section";

            categorySection.id =
                category.id;


            // ==============================
            // CHECK CHICKEN CATEGORY
            // ==============================

            const isChicken =
                (category.name_en || "")
                    .toLowerCase() === "chicken";


            
            // ==============================
            // CATEGORY BANNERS
            // ==============================

            const categoryBannerPaths = {
                chicken: "assets/images/products/Chicken/Chicken_Banner.Jpg",
                meat: "assets/images/products/Chicken/Meat_Banner.png",
                traditional: "assets/images/products/Chicken/Traditional_Banner.png",
                appetizer: "assets/images/products/Chicken/Appetizer_Banner.png",
                dessert: "assets/images/products/Chicken/Dessert_Banner.png"
            };

            const categoryBannerAlt = {
                chicken: getText("الدجاج", "Chicken"),
                meat: getText("اللحوم", "Meat"),
                traditional: getText("الإيدامات", "Traditional Dishes"),
                appetizer: getText("المقبلات", "Appetizers"),
                dessert: getText("الحلويات", "Desserts")
            };

            const categoryNameAr = (category.name_ar || "").trim();
            const categoryNameEn = (category.name_en || "").trim().toLowerCase();

            let bannerKey = null;

            if (isChicken) {
                bannerKey = "chicken";
            } else if (categoryNameAr.includes("لحوم") || categoryNameEn === "meat") {
                bannerKey = "meat";
            } else if (categoryNameAr.includes("إيدام") || categoryNameAr.includes("ايدام") ||
                       categoryNameEn.includes("traditional")) {
                bannerKey = "traditional";
            } else if (categoryNameAr.includes("مقبلات") || categoryNameEn.includes("appetizer")) {
                bannerKey = "appetizer";
            } else if (categoryNameAr.includes("حلويات") || categoryNameEn.includes("dessert")) {
                bannerKey = "dessert";
            }

            if (bannerKey) {
                const banner = document.createElement("div");
                banner.className = "quick-category-banner";

                const bannerImage = document.createElement("img");
                bannerImage.className = "quick-category-banner-image";
                bannerImage.src = categoryBannerPaths[bannerKey];
                bannerImage.alt = categoryBannerAlt[bannerKey];
                bannerImage.loading = "eager";

                banner.appendChild(bannerImage);
                categorySection.appendChild(banner);
            } else {
                // ==============================
                // CATEGORY TITLE
                // ==============================

                const categoryTitle = document.createElement("h2");
                categoryTitle.className = "quick-category-title";
                categoryTitle.textContent = getText(
                    category.name_ar,
                    category.name_en
                );

                categorySection.appendChild(categoryTitle);
            }



           
            // ==============================
            // PRODUCTS LIST
            // ==============================

            const productsList =
                document.createElement("div");

            productsList.className =
                "quick-products-list";

            categoryProducts.forEach(function (product) {

                const productItem =
                    document.createElement("a");

                productItem.href =
                    "product-details.html?id=" + product.id;

                productItem.className =
                    "quick-menu-item quick-menu-item-premium";

                // IMAGE

                const image =
                    document.createElement("div");

                image.className =
                    "quick-menu-item-image";

                if (product.image) {

                    const img =
                        document.createElement("img");

                    img.src = product.image;

                    img.alt = getText(
                        product.name_ar,
                        product.name_en || product.name_ar
                    );

                    img.loading = "lazy";

                    image.appendChild(img);

                } else {

                    const imagePlaceholder =
                        document.createElement("span");

                    imagePlaceholder.textContent =
                        "Image";

                    image.appendChild(imagePlaceholder);
                }

                // CONTENT

                const content =
                    document.createElement("div");

                content.className =
                    "quick-menu-item-content";

                // NAME

                const name =
                    document.createElement("h3");

                name.className =
                    "quick-menu-item-name";

                name.textContent = getText(
                    product.name_ar,
                    product.name_en || product.name_ar
                );

                // DESCRIPTION

                const description =
                    document.createElement("p");

                description.className =
                    "quick-menu-item-description";

                description.textContent = getText(
                    product.description_ar || "",
                    product.description_en ||
                    product.description_ar ||
                    ""
                );

                content.appendChild(name);
                content.appendChild(description);

                // PRICE

                const price =
                    document.createElement("span");

                price.className =
                    "quick-menu-item-price";

                price.textContent = getText(
                    product.price + " ر.س",
                    product.price + " SAR"
                );

                // ARROW

                const arrow =
                    document.createElement("span");

                arrow.className =
                    "quick-menu-item-arrow";

                arrow.textContent = "›";

                // BUILD CARD

                productItem.appendChild(image);
                productItem.appendChild(content);
                productItem.appendChild(price);
                productItem.appendChild(arrow);

                productsList.appendChild(productItem);
            });

            categorySection.appendChild(productsList);

            productsContainer.appendChild(categorySection);


        });

}

// ==============================
// SEARCH
// ==============================

async function renderSearchResults() {
    const resultsContainer = document.getElementById("search-results-list");
    const noResults = document.getElementById("search-no-results");
    const searchInput = document.getElementById("search-input");

    if (!resultsContainer || !searchInput) return;

    const products = await loadProducts();
    const urlParams = new URLSearchParams(window.location.search);
    const urlQuery = urlParams.get("q");

    if (urlQuery) {
        searchInput.value = urlQuery;
    }

    function searchProducts() {
        const query = searchInput.value.trim().toLowerCase();
        resultsContainer.innerHTML = "";

        if (!query) {
            if (noResults) noResults.hidden = true;
            return;
        }

        const results = products.filter(function (product) {
            const nameAr = (product.name_ar || "").toLowerCase();
            const nameEn = (product.name_en || "").toLowerCase();
            const descriptionAr = (product.description_ar || "").toLowerCase();
            const descriptionEn = (product.description_en || "").toLowerCase();

            return (
                product.active !== false &&
                product.available &&
                (
                    nameAr.includes(query) ||
                    nameEn.includes(query) ||
                    descriptionAr.includes(query) ||
                    descriptionEn.includes(query)
                )
            );
        });

        if (results.length === 0) {
            if (noResults) noResults.hidden = false;
            return;
        }

        if (noResults) noResults.hidden = true;

        results.forEach(function (product) {
            const card = document.createElement("a");
            card.href = "product-details.html?id=" + product.id;
            card.className = "search-result-card";

            const image = document.createElement("div");
            image.className = "search-result-image";

            if (product.image) {
                const img = document.createElement("img");
                img.src = product.image;
                img.alt = getText(
                    product.name_ar,
                    product.name_en || product.name_ar
                );
                image.appendChild(img);
            } else {
                const imageText = document.createElement("span");
                imageText.textContent = getText("صورة", "Image");
                image.appendChild(imageText);
            }

            const content = document.createElement("div");
            content.className = "search-result-content";

            const name = document.createElement("h3");
            name.className = "search-result-name";
            name.textContent = getText(
                product.name_ar,
                product.name_en || product.name_ar
            );

            const description = document.createElement("p");
            description.className = "search-result-description";
            description.textContent = getText(
                product.description_ar || "",
                product.description_en || product.description_ar || ""
            );

            const price = document.createElement("span");
            price.className = "search-result-price";
            price.textContent = getText(
                product.price + " ر.س",
                product.price + " SAR"
            );

            content.appendChild(name);
            content.appendChild(description);
            content.appendChild(price);
            card.appendChild(image);
            card.appendChild(content);
            resultsContainer.appendChild(card);
        });
    }

    searchInput.oninput = searchProducts;
    searchProducts();
}

// ==============================
// OFFERS PAGE
// ==============================

async function renderOffersPage() {
    const offersContainer = document.getElementById("offers-list");
    if (!offersContainer) return;

    const offers = await loadOffers();
    offersContainer.innerHTML = "";

    offers
        .filter(function (offer) {
            return offer.active;
        })
        .forEach(function (offer) {
            const card = document.createElement("article");
            card.className = "offer-page-card";

            const image = document.createElement("div");
            image.className = "offer-page-image";

            if (offer.image) {
                const img = document.createElement("img");
                img.src = offer.image;
                img.alt = getText(
                    offer.title_ar,
                    offer.title_en || offer.title_ar
                );
                image.appendChild(img);
            } else {
                const imageText = document.createElement("span");
                imageText.textContent = getText("صورة", "Image");
                image.appendChild(imageText);
            }

            const content = document.createElement("div");
            content.className = "offer-page-content";

            const badge = document.createElement("span");
            badge.className = "offer-page-badge";
            badge.textContent = getText("عرض خاص", "Special Offer");

            const title = document.createElement("h2");
            title.className = "offer-page-title";
            title.textContent = getText(
                offer.title_ar,
                offer.title_en || offer.title_ar
            );

            const description = document.createElement("p");
            description.className = "offer-page-description";
            description.textContent = getText(
                offer.description_ar || "",
                offer.description_en || offer.description_ar || ""
            );

            const price = document.createElement("div");
            price.className = "offer-page-price";

            const currentPrice = document.createElement("span");
            currentPrice.className = "offer-page-current";
            currentPrice.textContent = getText(
                offer.offer_price + " ر.س",
                offer.offer_price + " SAR"
            );

            const originalPrice = document.createElement("span");
            originalPrice.className = "offer-page-original";
            originalPrice.textContent = getText(
                offer.original_price + " ر.س",
                offer.original_price + " SAR"
            );

            price.appendChild(currentPrice);
            price.appendChild(originalPrice);

            const button = document.createElement("a");
            button.className = "offer-page-button";
            button.href = "product-details.html?id=" + offer.products[0];
            button.textContent = getText("عرض المنتج", "View Product");

            content.appendChild(badge);
            content.appendChild(title);
            content.appendChild(description);
            content.appendChild(price);
            content.appendChild(button);

            card.appendChild(image);
            card.appendChild(content);
            offersContainer.appendChild(card);
        });
}

// ==============================
// HOME RESTAURANT INFO
// ==============================

async function renderHomeRestaurantInfo() {
    const restaurantContainer = document.getElementById("home-restaurant-info");
    if (!restaurantContainer) return;

    const restaurant = await loadRestaurant();
    restaurantContainer.innerHTML = "";

    const title = document.createElement("h2");
    title.textContent = getText(restaurant.name_ar, restaurant.name_en);

    const description = document.createElement("p");
    description.textContent = getText(
        restaurant.description_ar,
        restaurant.description_en
    );

    const address = document.createElement("p");
    address.textContent = getText(
        restaurant.address_ar,
        restaurant.address_en
    );

    const actions = document.createElement("div");
    actions.className = "restaurant-actions";

    const callButton = document.createElement("a");
    callButton.href = "tel:" + restaurant.phone;
    callButton.className = "restaurant-button";
callButton.innerHTML =
    '<span class="restaurant-button-icon" aria-hidden="true">☎</span>' +
    '<span>' + getText("اتصال", "Call") + '</span>';
    const whatsappButton = document.createElement("a");
    whatsappButton.href =
        "https://wa.me/" + restaurant.whatsapp.replace("+", "");
    whatsappButton.target = "_blank";
    whatsappButton.rel = "noopener";
    whatsappButton.className = "restaurant-button";
whatsappButton.innerHTML =
    '<span class="restaurant-button-icon" aria-hidden="true">◉</span>' +
    '<span>' + getText("واتساب", "WhatsApp") + '</span>';
    const infoButton = document.createElement("a");
    infoButton.href = "restaurant.html";
    infoButton.className = "restaurant-button";
   infoButton.innerHTML =
    '<span class="restaurant-button-icon" aria-hidden="true">ⓘ</span>' +
    '<span>' + getText(
        "معلومات المطعم",
        "Restaurant Information"
    ) + '</span>';

    actions.appendChild(callButton);
    actions.appendChild(whatsappButton);
    actions.appendChild(infoButton);

   
restaurantContainer.appendChild(title);
restaurantContainer.appendChild(description);
restaurantContainer.appendChild(address);
restaurantContainer.appendChild(actions);

// Google Maps section
const mapSection = document.createElement("div");
mapSection.className = "restaurant-map-section";

const mapTitle = document.createElement("h3");
mapTitle.textContent = getText(
    "موقعنا على الخريطة",
    "Our Location on the Map"
);

const mapButton = document.createElement("a");
mapButton.className = "restaurant-button";
mapButton.target = "_blank";
mapButton.rel = "noopener noreferrer";
mapButton.href =
    restaurant.location?.google_maps_url ||
    `https://www.google.com/maps?q=${restaurant.location.latitude},${restaurant.location.longitude}`;

mapButton.innerHTML =
    '<span class="restaurant-button-icon" aria-hidden="true">📍</span>' +
    '<span>' + getText(
        "فتح الموقع على خرائط Google",
        "Open in Google Maps"
    ) + '</span>';


mapSection.appendChild(mapTitle);

// Embedded Google Map
const mapFrame = document.createElement("iframe");
mapFrame.className = "restaurant-map-frame";
mapFrame.src =
    "https://maps.google.com/maps?q=" +
    encodeURIComponent(
        getText(restaurant.address_ar, restaurant.address_en)
    ) +
    "&output=embed";

mapFrame.title = getText(
    "خريطة موقع المطعم",
    "Restaurant location map"
);
mapFrame.loading = "lazy";
mapFrame.referrerPolicy = "no-referrer-when-downgrade";
mapFrame.allowFullscreen = true;

const directionsButton = document.createElement("a");
directionsButton.className = "restaurant-button";
directionsButton.href = restaurant.location.google_maps_url;
directionsButton.target = "_blank";
directionsButton.rel = "noopener noreferrer";
directionsButton.textContent = getText(
    "الاتجاهات إلى المطعم",
    "Get Directions"
);

mapSection.appendChild(mapFrame);
mapSection.appendChild(directionsButton);
restaurantContainer.appendChild(mapSection);


}

// ==============================
// QUICK MENU CATEGORIES
// ==============================

async function renderQuickMenuCategories() {
    const categoriesContainer = document.getElementById("quick-menu-category-list");
    if (!categoriesContainer) return;

    const categories = await loadCategories();
    categoriesContainer.innerHTML = "";

    categories
        .filter(function (category) {
            return category.active;
        })
        .sort(function (a, b) {
            return a.sort_order - b.sort_order;
        })
        .forEach(function (category, index) {
            const link = document.createElement("a");
            link.href = "#" + category.id;
            link.className = "quick-category";

            if (index === 0) {
                link.classList.add("active");
            }

            link.textContent = getText(
                category.name_ar,
                category.name_en
            );
            categoriesContainer.appendChild(link);
        });
}

// ==============================
// VISUAL MENU CATEGORIES
// ==============================

async function renderVisualMenuCategories() {
    const categoriesContainer = document.getElementById("visual-menu-category-list");
    if (!categoriesContainer) return;

    const categories = await loadCategories();
    categoriesContainer.innerHTML = "";

    categories
        .filter(function (category) {
            return category.active;
        })
        .sort(function (a, b) {
            return a.sort_order - b.sort_order;
        })
        .forEach(function (category, index) {
            const link = document.createElement("a");
            link.href = "#" + category.id;
            link.className = "visual-category";

            if (index === 0) {
                link.classList.add("active");
            }

            link.textContent = getText(
                category.name_ar,
                category.name_en
            );
            categoriesContainer.appendChild(link);
        });
}

// ==============================
// HOME SEARCH
// ==============================

const homeSearchInput = document.getElementById("menu-search");
const homeSearchButton = document.getElementById("search-button");

if (homeSearchInput && homeSearchButton) {
    homeSearchButton.addEventListener("click", function () {
        const query = homeSearchInput.value.trim();

        if (!query) {
            window.location.href = "search.html";
            return;
        }

        window.location.href =
            "search.html?q=" + encodeURIComponent(query);
    });

    homeSearchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            homeSearchButton.click();
        }
    });
}

// ==============================
// INITIALIZE ONCE
// ==============================

const savedLanguage = localStorage.getItem("nova-language") || "ar";

// Set language without rendering. Each page is rendered exactly once below.
setLanguage(savedLanguage, false);

renderHomeCategories();
renderHomePopularProducts();
renderHomeSpecials();
renderRestaurantPage();
renderVisualMenu();
renderProductDetails();
renderQuickMenu();
renderSearchResults();
renderOffersPage();
renderHomeRestaurantInfo();
renderQuickMenuCategories();
renderVisualMenuCategories();
