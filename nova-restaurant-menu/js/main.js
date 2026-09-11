// ==============================
// QUICK MENU NAVIGATION
// ==============================

const quickMenuButton = document.getElementById("quick-menu-button");

if (quickMenuButton) {

    quickMenuButton.addEventListener("click", function () {

        window.location.href = "quick-menu.html";

    });

}

// ==============================
// SEARCH NAVIGATION
// ==============================

const searchButton = document.getElementById("search-button");

if (searchButton) {

    searchButton.addEventListener("click", function () {

        window.location.href = "search.html";

    });

}

// ==============================
// LANGUAGE PREFERENCE
// ==============================

const languageButtons = document.querySelectorAll(".language-button");

function setLanguage(language) {

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
}


// Load saved language
const savedLanguage =
    localStorage.getItem("nova-language") || "en";

setLanguage(savedLanguage);


// Language Button
languageButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const currentLanguage =
            document.documentElement.lang;

        if (currentLanguage === "en") {
            setLanguage("ar");
        } else {
            setLanguage("en");
        }

    });

});

// ==============================
// DATA LOADING
// ==============================

async function loadProducts() {

    const response = await fetch("data/products.json");

    const products = await response.json();

    return products;

}

// ==============================
// CATEGORIES DATA
// ==============================

async function loadCategories() {

    const response = await fetch("data/categories.json");

    const categories = await response.json();

    return categories;

}


// ==============================
// OFFERS DATA
// ==============================

async function loadOffers() {

    const response = await fetch("data/offers.json");

    const offers = await response.json();

    return offers;

}


// ==============================
// RESTAURANT DATA
// ==============================

async function loadRestaurant() {

    const response = await fetch("data/restaurant.json");

    const restaurant = await response.json();

    return restaurant;

}

// ==============================
// HOME CATEGORIES
// ==============================

async function renderHomeCategories() {

    const categoriesList =
        document.getElementById("home-categories-list");

    if (!categoriesList) {
        return;
    }


    const categories = await loadCategories();


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
link.textContent = category.name_en;

categoriesList.appendChild(link);

        });

}


renderHomeCategories();

// ==============================
// HOME POPULAR PRODUCTS
// ==============================

async function renderHomePopularProducts() {

    const productsGrid =
        document.getElementById("home-popular-products");

    if (!productsGrid) {
        return;
    }


    const products = await loadProducts();


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

card.href =
    "product-details.html?id=" + product.id;

card.className = "product-card";

        


            const image = document.createElement("div");

            image.className = "product-image";

            image.innerHTML = "<span>Image</span>";


            const content = document.createElement("div");

            content.className = "product-content";


            const name = document.createElement("h3");

            name.className = "product-name";

            name.textContent = product.name_en;


            const description = document.createElement("p");

            description.className = "product-description";

            description.textContent = product.description_en;


            const price = document.createElement("p");

            price.className = "product-price";

            price.textContent = product.price + " SAR";


            content.appendChild(name);

            content.appendChild(description);

            content.appendChild(price);


            card.appendChild(image);

            card.appendChild(content);


            productsGrid.appendChild(card);

        });

}


renderHomePopularProducts();

// ==============================
// HOME SPECIAL OFFERS
// ==============================

async function renderHomeSpecials() {

    const specialsList =
        document.getElementById("home-specials-list");

    if (!specialsList) {
        return;
    }


    const offers = await loadOffers();


    offers
        .filter(function (offer) {
            return offer.active;
        })
        .forEach(function (offer) {

            const card = document.createElement("a");

card.href =
    "product-details.html?id=" + offer.products[0];

card.className = "offer-card";

           


            const image = document.createElement("div");

            image.className = "offer-image";

            image.innerHTML = "<span>Image</span>";


            const content = document.createElement("div");

            content.className = "offer-content";


            const label = document.createElement("p");

            label.className = "offer-label";

            label.textContent = "Special Offer";


            const title = document.createElement("h3");

            title.className = "offer-title";

            title.textContent = offer.title_en;


            const description = document.createElement("p");

            description.className = "offer-description";

            description.textContent = offer.description_en;


            const price = document.createElement("div");

            price.className = "offer-price";


            const currentPrice = document.createElement("span");

            currentPrice.className = "offer-price-current";

            currentPrice.textContent =
                offer.offer_price + " SAR";


            const originalPrice = document.createElement("span");

            originalPrice.className = "offer-price-original";

            originalPrice.textContent =
                offer.original_price + " SAR";


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


renderHomeSpecials();

async function renderRestaurantPage() {
    const restaurantGrid = document.getElementById("restaurant-page-grid");

    if (!restaurantGrid) {
        return;
    }

    const restaurant = await loadRestaurant();

    // About
    const aboutCard = document.createElement("article");
    aboutCard.className = "restaurant-page-card";

    const aboutLabel = document.createElement("p");
    aboutLabel.className = "section-label";
    aboutLabel.textContent = "About";

    const aboutTitle = document.createElement("h2");
    aboutTitle.textContent = restaurant.name_en;

    const aboutDescription = document.createElement("p");
    aboutDescription.textContent = restaurant.description_en;

    aboutCard.appendChild(aboutLabel);
    aboutCard.appendChild(aboutTitle);
    aboutCard.appendChild(aboutDescription);


    // Opening Hours
    const hoursCard = document.createElement("article");
    hoursCard.className = "restaurant-page-card";

    const hoursLabel = document.createElement("p");
    hoursLabel.className = "section-label";
    hoursLabel.textContent = "Opening Hours";

    const hoursTitle = document.createElement("h2");
    hoursTitle.textContent = "Opening Hours";

    const hoursList = document.createElement("div");
    hoursList.className = "restaurant-hours-list";

    restaurant.opening_hours.forEach(function (item) {
        const row = document.createElement("div");

        const days = document.createElement("span");
        days.textContent = item.days_en;

        const time = document.createElement("strong");
        time.textContent = item.open + " – " + item.close;

        row.appendChild(days);
        row.appendChild(time);

        hoursList.appendChild(row);
    });

    hoursCard.appendChild(hoursLabel);
    hoursCard.appendChild(hoursTitle);
    hoursCard.appendChild(hoursList);


    // Location
    const locationCard = document.createElement("article");
    locationCard.className = "restaurant-page-card";

    const locationLabel = document.createElement("p");
    locationLabel.className = "section-label";
    locationLabel.textContent = "Location";

    const locationTitle = document.createElement("h2");
    locationTitle.textContent = "Visit Us";

    const address = document.createElement("p");
    address.textContent = restaurant.address_en;

    const locationActions = document.createElement("div");
    locationActions.className = "restaurant-page-actions";

    const mapButton = document.createElement("a");
    mapButton.className = "restaurant-page-button";
    mapButton.href = restaurant.location.google_maps_url;
    mapButton.target = "_blank";
    mapButton.rel = "noopener";
    mapButton.textContent = "Open Google Maps";

    locationActions.appendChild(mapButton);

    locationCard.appendChild(locationLabel);
    locationCard.appendChild(locationTitle);
    locationCard.appendChild(address);
    locationCard.appendChild(locationActions);


    // Contact
    const contactCard = document.createElement("article");
    contactCard.className = "restaurant-page-card";

    const contactLabel = document.createElement("p");
    contactLabel.className = "section-label";
    contactLabel.textContent = "Contact";

    const contactTitle = document.createElement("h2");
    contactTitle.textContent = "Get in Touch";

    const contactActions = document.createElement("div");
    contactActions.className = "restaurant-page-actions";

    const callButton = document.createElement("a");
    callButton.className = "restaurant-page-button";
    callButton.href = "tel:" + restaurant.phone;
    callButton.textContent = "Call";

    const whatsappButton = document.createElement("a");
    whatsappButton.className = "restaurant-page-button";
    whatsappButton.href = "https://wa.me/" + restaurant.whatsapp.replace("+", "");
    whatsappButton.target = "_blank";
    whatsappButton.rel = "noopener";
    whatsappButton.textContent = "WhatsApp";

    contactActions.appendChild(callButton);
    contactActions.appendChild(whatsappButton);

    contactCard.appendChild(contactLabel);
    contactCard.appendChild(contactTitle);
    contactCard.appendChild(contactActions);


    // Social Media
    const socialCard = document.createElement("article");
    socialCard.className = "restaurant-page-card";

    const socialLabel = document.createElement("p");
    socialLabel.className = "section-label";
    socialLabel.textContent = "Social Media";

    const socialTitle = document.createElement("h2");
    socialTitle.textContent = "Follow NOVA";

    const socialLinks = document.createElement("div");
    socialLinks.className = "restaurant-page-social";

    const instagramLink = document.createElement("a");
    instagramLink.href = restaurant.instagram;
    instagramLink.target = "_blank";
    instagramLink.rel = "noopener";
    instagramLink.textContent = "Instagram";

    socialLinks.appendChild(instagramLink);

    socialCard.appendChild(socialLabel);
    socialCard.appendChild(socialTitle);
    socialCard.appendChild(socialLinks);


    // Google Maps
    const mapCard = document.createElement("article");
    mapCard.className = "restaurant-page-card";

    const mapLabel = document.createElement("p");
    mapLabel.className = "section-label";
    mapLabel.textContent = "Google Maps";

    const mapTitle = document.createElement("h2");
    mapTitle.textContent = "Our Location";

    const mapPlaceholder = document.createElement("div");
    mapPlaceholder.className = "restaurant-map-placeholder";
    mapPlaceholder.textContent = "Google Maps";

    mapCard.appendChild(mapLabel);
    mapCard.appendChild(mapTitle);
    mapCard.appendChild(mapPlaceholder);


    restaurantGrid.appendChild(aboutCard);
    restaurantGrid.appendChild(hoursCard);
    restaurantGrid.appendChild(locationCard);
    restaurantGrid.appendChild(contactCard);
    restaurantGrid.appendChild(socialCard);
    restaurantGrid.appendChild(mapCard);
}

renderRestaurantPage();

async function renderVisualMenu() {
    const productsContainer = document.getElementById(
        "visual-menu-products-list"
    );

    if (!productsContainer) {
        return;
    }

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

            const categoryProducts = products.filter(function (product) {
                return (
                    product.active !== false &&
                    product.available &&
                    product.category === category.id
                );
            });

            if (categoryProducts.length === 0) {
                return;
            }

            // Category Section
            const categorySection = document.createElement("section");
            categorySection.className = "visual-category-section";
            categorySection.id = category.id;

            // Category Title
            const categoryTitle = document.createElement("h2");
            categoryTitle.className = "visual-category-title";
            categoryTitle.textContent = category.name_en;

            // Products Grid
            const productsGrid = document.createElement("div");
            productsGrid.className = "visual-products-grid";

            categoryProducts.forEach(function (product) {

                const productCard = document.createElement("a");

                productCard.href =
                    "product-details.html?id=" + product.id;

                productCard.className = "visual-product-card";

                // Image
                const image = document.createElement("div");
                image.className = "visual-product-image";

                const imageText = document.createElement("span");
                imageText.textContent = "Image";

                image.appendChild(imageText);


                // Content
                const content = document.createElement("div");
                content.className = "visual-product-content";


                // Name
                const name = document.createElement("h3");
                name.textContent = product.name_en;


                // Description
                const description = document.createElement("p");
                description.textContent = product.description_en;


                // Price
                const price = document.createElement("span");
                price.className = "visual-product-price";
                price.textContent = product.price + " SAR";


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

renderVisualMenu();

async function renderProductDetails() {
    const productContainer = document.getElementById(
        "product-details-container"
    );

    if (!productContainer) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    if (!productId) {
        productContainer.innerHTML = `
            <p>Product not found.</p>
        `;
        return;
    }

    const products = await loadProducts();

    const product = products.find(function (item) {
        return item.id === productId;
    });

    if (!product) {
        productContainer.innerHTML = `
            <p>Product not found.</p>
        `;
        return;
    }

    // Product Image
    const image = document.createElement("div");
    image.className = "product-details-image";

    const imageText = document.createElement("span");
    imageText.textContent = "Image";

    image.appendChild(imageText);


    // Product Content
    const content = document.createElement("div");
    content.className = "product-details-content";


    // Badge
    if (product.badges && product.badges.length > 0) {
        const badge = document.createElement("span");
        badge.className = "product-badge";
        badge.textContent = product.badges[0];

        content.appendChild(badge);
    }


    // Name
    const name = document.createElement("h1");
    name.className = "product-details-name";
    name.textContent = product.name_en;


    // Price
    const price = document.createElement("p");
    price.className = "product-details-price";
    price.textContent = product.price + " SAR";


    // Description
    const description = document.createElement("p");
    description.className = "product-details-description";
    description.textContent = product.description_en;


    // Ingredients
    const ingredientsTitle = document.createElement("h2");
    ingredientsTitle.textContent = "Ingredients";

    const ingredientsList = document.createElement("ul");

    product.ingredients.forEach(function (ingredient) {
        const item = document.createElement("li");
        item.textContent = ingredient;

        ingredientsList.appendChild(item);
    });


    // Allergens
    const allergensTitle = document.createElement("h2");
    allergensTitle.textContent = "Allergens";

    const allergensList = document.createElement("ul");

    if (product.allergens.length === 0) {
        const item = document.createElement("li");
        item.textContent = "None";

        allergensList.appendChild(item);
    } else {
        product.allergens.forEach(function (allergen) {
            const item = document.createElement("li");
            item.textContent = allergen;

            allergensList.appendChild(item);
        });
    }


    content.appendChild(name);
    content.appendChild(price);
    content.appendChild(description);
    content.appendChild(ingredientsTitle);
    content.appendChild(ingredientsList);
    content.appendChild(allergensTitle);
    content.appendChild(allergensList);

    productContainer.appendChild(image);
    productContainer.appendChild(content);
}

renderProductDetails();

async function renderQuickMenu() {
    const productsContainer = document.getElementById(
        "quick-menu-products-list"
    );

    if (!productsContainer) {
        return;
    }

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

            const categoryProducts = products.filter(function (product) {
                return (
                    product.active !== false &&
                    product.available &&
                    product.category === category.id
                );
            });

            if (categoryProducts.length === 0) {
                return;
            }

            // Category Section
            const categorySection = document.createElement("section");
            categorySection.className = "quick-category-section";
            categorySection.id = category.id;

            // Category Title
            const categoryTitle = document.createElement("h2");
            categoryTitle.className = "quick-category-title";
            categoryTitle.textContent = category.name_en;

            // Products List
            const productsList = document.createElement("div");
            productsList.className = "quick-products-list";

            categoryProducts.forEach(function (product) {

                const productItem = document.createElement("a");

                productItem.href =
                    "product-details.html?id=" + product.id;

                productItem.className = "quick-menu-item";

                // Product Content
                const content = document.createElement("div");
                content.className = "quick-menu-item-content";

                // Product Name
                const name = document.createElement("h3");
                name.className = "quick-menu-item-name";
                name.textContent = product.name_en;

                // Product Description
                const description = document.createElement("p");
                description.className = "quick-menu-item-description";
                description.textContent = product.description_en;

                content.appendChild(name);
                content.appendChild(description);

                // Product Price
                const price = document.createElement("span");
                price.className = "quick-menu-item-price";
                price.textContent = product.price + " SAR";

                productItem.appendChild(content);
                productItem.appendChild(price);

                productsList.appendChild(productItem);
            });

            categorySection.appendChild(categoryTitle);
            categorySection.appendChild(productsList);

            productsContainer.appendChild(categorySection);
        });
}

renderQuickMenu();

async function renderSearchResults() {
    const resultsContainer = document.getElementById(
        "search-results-list"
    );

    const noResults = document.getElementById(
        "search-no-results"
    );

    const searchInput = document.getElementById(
        "search-input"
    );

    if (!resultsContainer || !searchInput) {
        return;
    }

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
            noResults.hidden = true;
            return;
        }

        const results = products.filter(function (product) {

            const name = product.name_en.toLowerCase();
            const description = product.description_en.toLowerCase();

            return (
                product.active !== false &&
                product.available &&
                (
                    name.includes(query) ||
                    description.includes(query)
                )
            );
        });

        if (results.length === 0) {
            noResults.hidden = false;
            return;
        }

        noResults.hidden = true;

        results.forEach(function (product) {

            const card = document.createElement("a");

            card.href =
                "product-details.html?id=" + product.id;

            card.className = "search-result-card";


            // Image
            const image = document.createElement("div");
            image.className = "search-result-image";

            const imageText = document.createElement("span");
            imageText.textContent = "Image";

            image.appendChild(imageText);


            // Content
            const content = document.createElement("div");
            content.className = "search-result-content";


            // Name
            const name = document.createElement("h3");
            name.className = "search-result-name";
            name.textContent = product.name_en;


            // Description
            const description = document.createElement("p");
            description.className = "search-result-description";
            description.textContent = product.description_en;


            // Price
            const price = document.createElement("span");
            price.className = "search-result-price";
            price.textContent = product.price + " SAR";


            content.appendChild(name);
            content.appendChild(description);
            content.appendChild(price);

            card.appendChild(image);
            card.appendChild(content);

            resultsContainer.appendChild(card);
        });
    }

    searchInput.addEventListener(
        "input",
        searchProducts
    );

    searchProducts();
}

renderSearchResults();

async function renderOffersPage() {
    const offersContainer = document.getElementById("offers-list");

    if (!offersContainer) {
        return;
    }

    const offers = await loadOffers();

    offers
        .filter(function (offer) {
            return offer.active;
        })
        .forEach(function (offer) {

            // Offer Card
            const card = document.createElement("article");
            card.className = "offer-page-card";


            // Image
            const image = document.createElement("div");
            image.className = "offer-page-image";

            const imageText = document.createElement("span");
            imageText.textContent = "Image";

            image.appendChild(imageText);


            // Content
            const content = document.createElement("div");
            content.className = "offer-page-content";


            // Badge
            const badge = document.createElement("span");
            badge.className = "offer-page-badge";
            badge.textContent = "Special Offer";


            // Title
            const title = document.createElement("h2");
            title.className = "offer-page-title";
            title.textContent = offer.title_en;


            // Description
            const description = document.createElement("p");
            description.className = "offer-page-description";
            description.textContent = offer.description_en;


            // Prices
            const price = document.createElement("div");
            price.className = "offer-page-price";

            const currentPrice = document.createElement("span");
            currentPrice.className = "offer-page-current";
            currentPrice.textContent = offer.offer_price + " SAR";

            const originalPrice = document.createElement("span");
            originalPrice.className = "offer-page-original";
            originalPrice.textContent = offer.original_price + " SAR";

            price.appendChild(currentPrice);
            price.appendChild(originalPrice);


            // Button
            const button = document.createElement("a");
            button.className = "offer-page-button";
            button.href =
                "product-details.html?id=" + offer.products[0];
            button.textContent = "View Product";


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

renderOffersPage();

async function renderHomeRestaurantInfo() {
    const restaurantContainer = document.getElementById(
        "home-restaurant-info"
    );

    if (!restaurantContainer) {
        return;
    }

    const restaurant = await loadRestaurant();

    // Restaurant Name
    const title = document.createElement("h2");
    title.textContent = restaurant.name_en;

    // Description
    const description = document.createElement("p");
    description.textContent = restaurant.description_en;

    // Address
    const address = document.createElement("p");
    address.textContent = restaurant.address_en;

    // Actions
    const actions = document.createElement("div");
    actions.className = "restaurant-actions";

    // Call
    const callButton = document.createElement("a");
    callButton.href = "tel:" + restaurant.phone;
    callButton.className = "restaurant-button";
    callButton.textContent = "Call";

    // WhatsApp
    const whatsappButton = document.createElement("a");
    whatsappButton.href =
        "https://wa.me/" + restaurant.whatsapp.replace("+", "");
    whatsappButton.target = "_blank";
    whatsappButton.rel = "noopener";
    whatsappButton.className = "restaurant-button";
    whatsappButton.textContent = "WhatsApp";

    // Restaurant Information
    const infoButton = document.createElement("a");
    infoButton.href = "restaurant.html";
    infoButton.className = "restaurant-button";
    infoButton.textContent = "Restaurant Information";

    actions.appendChild(callButton);
    actions.appendChild(whatsappButton);
    actions.appendChild(infoButton);

    restaurantContainer.appendChild(title);
    restaurantContainer.appendChild(description);
    restaurantContainer.appendChild(address);
    restaurantContainer.appendChild(actions);
}

renderHomeRestaurantInfo();

async function renderQuickMenuCategories() {
    const categoriesContainer = document.getElementById(
        "quick-menu-category-list"
    );

    if (!categoriesContainer) {
        return;
    }

    const categories = await loadCategories();

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

            link.textContent = category.name_en;

            categoriesContainer.appendChild(link);
        });
}

renderQuickMenuCategories();

async function renderVisualMenuCategories() {
    const categoriesContainer = document.getElementById(
        "visual-menu-category-list"
    );

    if (!categoriesContainer) {
        return;
    }

    const categories = await loadCategories();

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

            link.textContent = category.name_en;

            categoriesContainer.appendChild(link);
        });
}

renderVisualMenuCategories();

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