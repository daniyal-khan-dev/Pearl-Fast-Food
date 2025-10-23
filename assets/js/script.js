//==================== LOADER JAVA ==========================
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
    document.body.style.overflow = 'auto';
}

function fadeOut() {
    document.body.style.overflow = 'hidden';
    setTimeout(loader, 3000);
}

window.onload = fadeOut;

//==================== ON SCROLL NAVBAR COLOR CHANGE ==========================
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.style.background = "#fff";
        header.style.setProperty("box-shadow", "0 .5rem 1.5rem rgba(0,0,0,.1)");
    } else {
        header.style.background = "transparent";
        header.style.removeProperty("box-shadow");
    }
});

//==================== REDIRECTING THROUGH NAV WITHOU SHOEING IN URL ==========================
document.querySelectorAll("header .navbar a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("data-target");
        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});

//==================== ACTIVATING NAV ==========================
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

//==================== ACTIVATING NAV ON SCROLL ==========================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    sections.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-target') === id) {
                    link.classList.add('active');
                }
            });
        }
    });
};

//==================== HOME SLIDER JAVA ==========================
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
    },

});

//==================== SCROLL TO TOP ==========================
(function ($) {
    'use strict';
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 70) {
            $('.scroll-to-top').addClass('reveal');
        } else {
            $('.scroll-to-top').removeClass('reveal');
        }
    });
});

//==================== Scroll To Popular ==========================
function scrollToPopular() {
    const section = document.getElementById("popular-dishes");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

//==================== Popular Dishes ==========================
const dishes = [
    {
        name: "Spicy Noodles",
        folder: "spicy-noodles",
        desc: "Delicious stir-fried noodles tossed with fresh veggies and bold spices for a fiery kick.",
        price: "$4.99",
        rating: 5.5,
        stars: 5,
        halfStar: true
    },
    {
        name: "Rosted Chicken",
        folder: "rosted-chicken",
        desc: "Juicy roasted chicken seasoned with aromatic herbs and spices, cooked to golden perfection.",
        price: "$11.56",
        rating: 4.5,
        stars: 4,
        halfStar: true
    },
    {
        name: "Large Pizza",
        folder: "large-pizza",
        desc: "Cheesy, oven-baked pizza loaded with fresh toppings and a rich tomato sauce.",
        price: "$9.99",
        rating: 5.5,
        stars: 5,
        halfStar: true
    },
    {
        name: "Beef Burger",
        folder: "beef-burger",
        desc: "Juicy grilled beef patty with fresh lettuce, cheese, and special house sauce.",
        price: "$7.49",
        rating: 5.0,
        stars: 4,
        halfStar: true
    },
    {
        name: "Nuggets",
        folder: "nuggets",
        desc: "Golden, crispy chicken nuggets with a tender inside, served with dipping sauces.",
        price: "$3.99",
        rating: 4.8,
        stars: 5,
        halfStar: false
    },
    {
        name: "Choco Lava Cake",
        folder: "choco-lava",
        desc: "Warm chocolate cake with a gooey molten center, served fresh from the oven.",
        price: "$5.50",
        rating: 5.0,
        stars: 5,
        halfStar: false
    }
];

const popularContainer = document.getElementById("dishes-container");

dishes.forEach(dish => {
    const stars = '<i class="fas fa-star"></i>'.repeat(dish.stars) +
        (dish.halfStar ? '<i class="fas fa-star-half-alt"></i>' : '');

    const box = `
      <div class="box">
        <div class="image">
          <img src="assets/img/dishes/${dish.folder}/${dish.folder}-1.jpg" alt="${dish.name}">
          <a href="#" class="fas fa-heart"
            data-dish-name="${dish.name}"
            data-dish-image-1="assets/img/dishes/${dish.folder}/${dish.folder}-1.jpg"
            data-dish-image-2="assets/img/dishes/${dish.folder}/${dish.folder}-2.jpg"
            data-dish-image-3="assets/img/dishes/${dish.folder}/${dish.folder}-3.jpg"
            data-dish-desc="${dish.desc}"
            data-dish-price="${dish.price}"
            data-dish-rating="${dish.rating}">
          </a>
          <a href="#" class="fas fa-eye"
            data-dish-name="${dish.name}"
            data-dish-image-1="assets/img/dishes/${dish.folder}/${dish.folder}-1.jpg"
            data-dish-image-2="assets/img/dishes/${dish.folder}/${dish.folder}-2.jpg"
            data-dish-image-3="assets/img/dishes/${dish.folder}/${dish.folder}-3.jpg"
            data-dish-desc="${dish.desc}"
            data-dish-price="${dish.price}"
            data-dish-rating="${dish.rating}">
          </a>
        </div>
        <div class="content">
          <div class="stars">${stars}</div>
          <h3>${dish.name}</h3>
          <p>${dish.desc}</p>
          <div class="price-cart">
            <span class="price">${dish.price}</span>
            <a href="#" class="btn add-to-cart"
              data-dish-name="${dish.name}"
              data-dish-image-1="assets/img/dishes/${dish.folder}/${dish.folder}-1.jpg"
              data-dish-image-2="assets/img/dishes/${dish.folder}/${dish.folder}-2.jpg"
              data-dish-image-3="assets/img/dishes/${dish.folder}/${dish.folder}-3.jpg"
              data-dish-desc="${dish.desc}"
              data-dish-price="${dish.price}"
              data-dish-rating="${dish.rating}">
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    `;
    popularContainer.innerHTML += box;
});

//==================== Menu Dishes ==========================
const menuItems = [
    {
        name: "BBQ",
        folder: "bbq",
        desc: "Smoky, tender, and juicy BBQ cooked with signature spices.",
        price: "$12.99",
        rating: 5.0
    },
    {
        name: "Chinese",
        folder: "chinese",
        desc: "Authentic Chinese flavors with a mix of noodles, rice, and sauces.",
        price: "$9.50",
        rating: 4.8
    },
    {
        name: "Pasta",
        folder: "pasta",
        desc: "Creamy, cheesy pasta with fresh herbs and rich sauce.",
        price: "$7.99",
        rating: 4.9
    },
    {
        name: "Momos",
        folder: "momos",
        desc: "Soft, steamed dumplings stuffed with flavorful fillings.",
        price: "$5.50",
        rating: 4.7
    },
    {
        name: "Donuts",
        folder: "donuts",
        desc: "Sweet, fluffy donuts glazed and topped with chocolate.",
        price: "$3.50",
        rating: 4.6
    },
    {
        name: "Pancakes",
        folder: "pancakes",
        desc: "Fluffy pancakes drizzled with syrup and topped with butter.",
        price: "$4.20",
        rating: 4.9
    },
    {
        name: "Cupcakes",
        folder: "cupcakes",
        desc: "Moist cupcakes topped with creamy frosting and sprinkles.",
        price: "$2.99",
        rating: 4.5
    },
    {
        name: "Ice Cream",
        folder: "icecream",
        desc: "Refreshing, creamy ice cream available in multiple flavors.",
        price: "$2.50",
        rating: 4.9
    },
    {
        name: "Soft Drinks",
        folder: "soft-drinks",
        desc: "Cool and refreshing soft drinks to complement your meal.",
        price: "$1.99",
        rating: 4.6
    }
];

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    let stars = "";
    for (let i = 0; i < fullStars; i++) stars += '<i class="fas fa-star"></i>';
    if (halfStar) stars += '<i class="fas fa-star-half-alt"></i>';
    return stars;
}

const menuContainer = document.getElementById("menu-container");

menuItems.forEach(item => {
    const box = `
      <div class="box">
        <div class="image">
          <img src="assets/img/dishes/${item.folder}/${item.folder}-1.jpg" alt="${item.name}">
          <a href="#" class="fas fa-heart"
            data-dish-name="${item.name}"
            data-dish-image-1="assets/img/dishes/${item.folder}/${item.folder}-1.jpg"
            data-dish-image-2="assets/img/dishes/${item.folder}/${item.folder}-2.jpg"
            data-dish-image-3="assets/img/dishes/${item.folder}/${item.folder}-3.jpg"
            data-dish-desc="${item.desc}"
            data-dish-price="${item.price}"
            data-dish-rating="${item.rating}">
          </a>
          <a href="#" class="fas fa-eye"
            data-dish-name="${item.name}"
            data-dish-image-1="assets/img/dishes/${item.folder}/${item.folder}-1.jpg"
            data-dish-image-2="assets/img/dishes/${item.folder}/${item.folder}-2.jpg"
            data-dish-image-3="assets/img/dishes/${item.folder}/${item.folder}-3.jpg"
            data-dish-desc="${item.desc}"
            data-dish-price="${item.price}"
            data-dish-rating="${item.rating}">
          </a>
        </div>
        <div class="content">
          <div class="stars">${generateStars(item.rating)}</div>
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <div class="price-cart">
            <span class="price">${item.price}</span>
            <a href="#" class="btn add-to-cart"
              data-dish-name="${item.name}"
              data-dish-image-1="assets/img/dishes/${item.folder}/${item.folder}-1.jpg"
              data-dish-image-2="assets/img/dishes/${item.folder}/${item.folder}-2.jpg"
              data-dish-image-3="assets/img/dishes/${item.folder}/${item.folder}-3.jpg"
              data-dish-desc="${item.desc}"
              data-dish-price="${item.price}"
              data-dish-rating="${item.rating}">
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    `;
    menuContainer.innerHTML += box;
});

function validateFullName(input) {
    input.value = input.value.replace(/[^A-Za-z\s]/g, "");
}

function validateEmail(input) {
    input.value = input.value.toLowerCase();
}

function validatePhone(input) {
    input.value = input.value.replace(/\D/g, "");
    if (input.value.length > 11) {
        input.value = input.value.slice(0, 11);
    }
}

function validateCity(input) {
    input.value = input.value.replace(/[^A-Za-z\s]/g, "");
}

function validateCardName(input) {
    input.value = input.value.replace(/[^A-Za-z\s]/g, "");
}

//==================== Modal and Wishlist functionality ==========================
document.addEventListener('DOMContentLoaded', function () {
    // Modal elements
    const dishModal = document.getElementById('dishModal');
    const wishlistModal = document.getElementById('wishlistModal');
    const cartModal = document.getElementById('cartModal');
    const modalImage = document.getElementById('modalDishImage');
    const modalName = document.getElementById('modalDishName');
    const modalRating = document.getElementById('modalDishRating');
    const modalDescription = document.getElementById('modalDishDescription');
    const modalPrice = document.getElementById('modalDishPrice');
    const modalAddToCart = document.getElementById('modalAddToCart');

    // Navbar elements
    const wishlistIcon = document.getElementById('wishlistIcon');
    const cartIcon = document.getElementById('cartIcon');
    const wishlistCount = document.getElementById('wishlistCount');
    const cartCount = document.getElementById('cartCount');

    // Wishlist elements
    const wishlistBody = document.getElementById('wishlistBody');
    const emptyWishlist = document.getElementById('emptyWishlist');

    // Cart elements
    const cartBody = document.getElementById('cartBody');
    const emptyCart = document.getElementById('emptyCart');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotal = document.getElementById('cartTotal');

    // Get all icons
    const eyeIcons = document.querySelectorAll('.fa-eye[data-dish-name]');
    const heartIcons = document.querySelectorAll('.fa-heart[data-dish-name]');
    const closeModals = document.querySelectorAll('.close-modal');

    updateWishlistCount();
    updateCartCount();
    updateHeartState();

    function formatDate(date) {
        return date.toLocaleString("en-US", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        });
    }

    function getNumericPrice(price) {
        if (!price) return 0;
        if (typeof price === "number") return price;
        return parseFloat(price.replace('$', '').trim()) || 0;
    }

    // Wishlist functions with 24-hour expiration
    function getWishlist() {
        const wishlistData = localStorage.getItem('wishlist');
        if (!wishlistData) return [];

        try {
            const parsed = JSON.parse(wishlistData);
            const now = Date.now();
            const twentyFourHours = 24 * 60 * 60 * 1000;

            if (Array.isArray(parsed)) {
                localStorage.removeItem('wishlist');
                return [];
            }

            if (!parsed.timestamp || typeof parsed.timestamp !== 'number' || (now - parsed.timestamp) > twentyFourHours) {
                localStorage.removeItem('wishlist');
                return [];
            }

            return parsed.items || [];
        } catch (e) {
            localStorage.removeItem('wishlist');
            return [];
        }
    }

    function saveWishlist(wishlist) {
        const wishlistData = {
            items: wishlist,
            timestamp: Date.now()
        };
        localStorage.setItem('wishlist', JSON.stringify(wishlistData));
        updateWishlistCount();
    }

    function getCart() {
        const cartData = localStorage.getItem('cart');
        if (!cartData) return [];

        try {
            const parsed = JSON.parse(cartData);
            const now = Date.now();
            const twentyFourHours = 24 * 60 * 60 * 1000;

            if (Array.isArray(parsed)) {
                localStorage.removeItem('cart');
                return [];
            }

            if (!parsed.timestamp || typeof parsed.timestamp !== 'number' || (now - parsed.timestamp) > twentyFourHours) {
                localStorage.removeItem('cart');
                return [];
            }

            return parsed.items || [];
        } catch (e) {
            localStorage.removeItem('cart');
            return [];
        }
    }

    function saveCart(cart) {
        const cartData = {
            items: cart,
            timestamp: Date.now()
        };
        localStorage.setItem('cart', JSON.stringify(cartData));
        updateCartCount();
    }

    function updateWishlistCount() {
        const wishlist = getWishlist();
        wishlistCount.textContent = wishlist.length;
    }

    function updateCartCount() {
        const cart = getCart();
        cartCount.textContent = cart.length;
    }

    function updateHeartState() {
        const wishlist = getWishlist();

        heartIcons.forEach(heartIcon => {
            const dishName = heartIcon.getAttribute('data-dish-name');
            const isInWishlist = wishlist.some(item => item.name === dishName);

            if (isInWishlist) {
                heartIcon.classList.add('active');
                heartIcon.style.color = '#e74c3c';
            } else {
                heartIcon.classList.remove('active');
                heartIcon.style.color = '';
            }
        });
    }

    function toggleWishlist(dishData) {
        let wishlist = getWishlist();
        const existingItemIndex = wishlist.findIndex(item => item.name === dishData.name);

        if (existingItemIndex === -1) {
            wishlist.push(dishData);
            saveWishlist(wishlist);
            updateHeartState();

            Swal.fire({
                title: 'Added to Wishlist!',
                text: `${dishData.name} has been added to your wishlist.`,
                icon: 'success',
                confirmButtonColor: '#27ae60',
                confirmButtonText: 'Continue'
            });
        } else {
            wishlist.splice(existingItemIndex, 1);
            saveWishlist(wishlist);
            updateHeartState();

            Swal.fire({
                title: 'Removed from Wishlist!',
                text: `${dishData.name} has been removed from your wishlist.`,
                icon: 'success',
                confirmButtonColor: '#27ae60',
                confirmButtonText: 'OK'
            });
        }
    }

    function removeFromWishlist(dishName) {
        let wishlist = getWishlist();
        wishlist = wishlist.filter(item => item.name !== dishName);
        saveWishlist(wishlist);
        displayWishlist();
        updateHeartState();

        Swal.fire({
            title: 'Removed!',
            text: `${dishName} has been removed from your wishlist.`,
            icon: 'success',
            confirmButtonColor: '#27ae60',
            confirmButtonText: 'OK'
        });
    }

    function addToCart(dishData) {
        let cart = getCart();
        const existingItem = cart.find(item => item.name === dishData.name);

        if (!existingItem) {
            cart.push({ ...dishData, quantity: 1 });
            saveCart(cart);
        } else {
            existingItem.quantity += 1;
            saveCart(cart);
        }

        Swal.fire({
            title: 'Added to Cart!',
            text: `${dishData.name} has been added to your cart.`,
            icon: 'success',
            confirmButtonColor: '#27ae60',
            confirmButtonText: 'Continue Shopping'
        });
    }

    function removeFromCart(dishName) {
        let cart = getCart();
        cart = cart.filter(item => item.name !== dishName);
        saveCart(cart);
        displayCart();

        Swal.fire({
            title: 'Removed!',
            text: `${dishName} has been removed from your cart.`,
            icon: 'success',
            confirmButtonColor: '#27ae60',
            confirmButtonText: 'OK'
        });
    }

    function updateCartQuantity(dishName, newQuantity) {
        let cart = getCart();
        const item = cart.find(item => item.name === dishName);
        if (item) {
            if (newQuantity < 1) {
                item.quantity = 1;
            } else {
                item.quantity = newQuantity;
            }
            saveCart(cart);
            displayCart();
        }
    }

    function calculateCartTotal() {
        const cart = getCart();
        return cart.reduce((total, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return total + (price * item.quantity);
        }, 0).toFixed(2);
    }

    // Display Cart
    function displayCart() {
        const cart = getCart();

        if (cart.length === 0) {
            emptyCart.style.display = 'block';
            cartBody.innerHTML = '';
            cartBody.appendChild(emptyCart);
            cartFooter.style.display = 'none';
        } else {
            emptyCart.style.display = 'none';
            cartBody.innerHTML = '';

            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <button class="remove-btn" onclick="removeFromCart('${item.name}')">
                        ×
                    </button>
                    
                    <div class="cart-item-image">
                        <img src="${item.image1 || item.image}" alt="${item.name}">
                    </div>

                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <div class="price">${item.price}</div>
                        <div class="quantity-controls">
                            <button class="qty-btn" onclick="updateCartQuantity('${item.name}', ${item.quantity - 1})">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateCartQuantity('${item.name}', ${item.quantity + 1})">+</button>
                        </div>
                    </div>

                    <div class="cart-item-total">
                        $${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                    </div>
                `;

                cartBody.appendChild(cartItem);
            });

            cartFooter.style.display = 'block';
            cartTotal.textContent = calculateCartTotal();
        }
    }

    // Display Wishlist
    function displayWishlist() {
        const wishlist = getWishlist();

        if (wishlist.length === 0) {
            emptyWishlist.style.display = 'block';
            wishlistBody.innerHTML = '';
            wishlistBody.appendChild(emptyWishlist);
        } else {
            emptyWishlist.style.display = 'none';
            wishlistBody.innerHTML = '';

            wishlist.forEach(item => {
                const wishlistItem = document.createElement('div');
                wishlistItem.className = 'wishlist-item';
                wishlistItem.innerHTML = `
                    <button class="remove-btn" onclick="removeFromWishlist('${item.name}')">
                        ×
                    </button>
                    
                    <div class="wishlist-item-image">
                        <img src="${item.image1}" alt="${item.name}">
                    </div>

                    <div class="wishlist-item-details view-btn">
                        <h4>${item.name}</h4>
                        <div class="price">${item.price}</div>
                    </div>

                    <div class="wishlist-item-actions">
                        <button class="btn" onclick="addToCartFromWishlist('${item.name}', '${item.image1}', '${item.price}', '${item.rating}')">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                `;

                wishlistItem.querySelector('.view-btn').addEventListener('click', () => {
                    document.getElementById("wishlistModal").classList.remove("active");

                    openDishModal({
                        name: item.name,
                        image1: item.image1,
                        image2: item.image2,
                        image3: item.image3,
                        desc: item.desc,
                        price: item.price,
                        rating: item.rating
                    });
                });

                wishlistBody.appendChild(wishlistItem);
            });
        }
    }

    // Global functions for onclick handlers
    window.removeFromWishlist = removeFromWishlist;
    window.removeFromCart = removeFromCart;
    window.updateCartQuantity = updateCartQuantity;
    window.addToCartFromWishlist = function (name, image, price, rating) {
        const dishData = { name, image, price, rating };
        addToCart(dishData);
        let wishlist = getWishlist();
        wishlist = wishlist.filter(item => item.name !== name);
        saveWishlist(wishlist);
        displayWishlist();
        updateHeartState();
    };

    // Function to generate star rating
    function generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let starsHTML = '';

        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fas fa-star"></i>';
        }

        if (hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        }

        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="far fa-star"></i>';
        }

        return starsHTML;
    }

    // Function to open dish modal
    function openDishModal(dishData) {
        const track = document.getElementById('carouselTrack');
        track.innerHTML = '';

        [dishData.image1, dishData.image2, dishData.image3].forEach(imgSrc => {
            if (imgSrc) {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = dishData.name;
                track.appendChild(img);
            }
        });

        let index = 0;
        const images = track.querySelectorAll('img');

        function updateSlide() {
            track.style.transform = `translateX(-${index * 100}%)`;
        }

        document.getElementById('prevBtn').onclick = () => {
            index = (index > 0) ? index - 1 : images.length - 1;
            updateSlide();
        };

        document.getElementById('nextBtn').onclick = () => {
            index = (index < images.length - 1) ? index + 1 : 0;
            updateSlide();
        };

        modalName.textContent = dishData.name;
        modalRating.innerHTML = generateStars(parseFloat(dishData.rating));
        modalDescription.textContent = dishData.desc;
        modalPrice.textContent = dishData.price;
        dishModal.classList.add('active');
        wishlistModal.classList.remove("active");
        document.body.style.overflow = 'hidden';
    }

    // Function to open wishlist modal
    function openWishlistModal() {
        displayWishlist();
        wishlistModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Handle Add To Cart from Menu Section
    document.querySelectorAll(".add-to-cart").forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();

            const dishData = {
                name: this.getAttribute("data-dish-name"),
                image1: this.getAttribute('data-dish-image-1'),
                image2: this.getAttribute('data-dish-image-2'),
                image3: this.getAttribute('data-dish-image-3'),
                desc: this.getAttribute("data-dish-desc") || "No description available",
                price: this.getAttribute("data-dish-price"),
                rating: this.getAttribute("data-dish-rating"),
                quantity: 1
            };

            addToCart(dishData);
        });
    });

    // Function to open cart modal
    function openCartModal() {
        displayCart();
        cartModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Function to close modals
    function closeModalFunc() {
        dishModal.classList.remove('active');
        wishlistModal.classList.remove('active');
        cartModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Add click event listeners to eye icons
    eyeIcons.forEach(eyeIcon => {
        eyeIcon.addEventListener('click', function (e) {
            e.preventDefault();
            const dishData = {
                name: this.getAttribute('data-dish-name'),
                image1: this.getAttribute('data-dish-image-1'),
                image2: this.getAttribute('data-dish-image-2'),
                image3: this.getAttribute('data-dish-image-3'),
                desc: this.getAttribute('data-dish-desc'),
                price: this.getAttribute('data-dish-price'),
                rating: this.getAttribute('data-dish-rating')
            };
            openDishModal(dishData);
        });
    });

    // Add click event listeners to heart icons
    heartIcons.forEach(heartIcon => {
        heartIcon.addEventListener('click', function (e) {
            e.preventDefault();
            const dishData = {
                name: this.getAttribute('data-dish-name'),
                image1: this.getAttribute('data-dish-image-1'),
                image2: this.getAttribute('data-dish-image-2'),
                image3: this.getAttribute('data-dish-image-3'),
                price: this.getAttribute('data-dish-price'),
                rating: this.getAttribute('data-dish-rating'),
                desc: this.getAttribute('data-dish-desc')
            };
            toggleWishlist(dishData);
        });
    });

    // Add click event listener to wishlist icon in navbar
    wishlistIcon.addEventListener('click', function (e) {
        e.preventDefault();
        openWishlistModal();
    });

    // Add click event listener to cart icon in navbar
    cartIcon.addEventListener('click', function (e) {
        e.preventDefault();
        openCartModal();
    });

    // Close modal when clicking the X button
    closeModals.forEach(closeModal => {
        closeModal.addEventListener('click', closeModalFunc);
    });

    // Close modal when clicking outside the modal content
    [dishModal, wishlistModal, cartModal].forEach(modal => {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeModalFunc();
            }
        });
    });

    // Close modal when pressing Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && (dishModal.classList.contains('active') || wishlistModal.classList.contains('active') || cartModal.classList.contains('active'))) {
            closeModalFunc();
        }
    });

    // Add to cart functionality from dish modal
    modalAddToCart.addEventListener('click', function () {
        const firstImage = document.querySelector('#carouselTrack img');

        const dishData = {
            name: modalName.textContent,
            image1: firstImage ? firstImage.src : '',
            price: modalPrice.textContent,
            rating: modalRating.querySelectorAll('.fa-star').length || "4.5",
            desc: modalDescription.textContent
        };

        addToCart(dishData);
        closeModalFunc();
    });

    // ==================== CHECKOUT FUNCTIONALITY ==========================
    const checkoutModal = document.getElementById('checkoutModal');
    const checkoutBtn = document.querySelector('.checkout-btn');
    const backToCartBtn = document.getElementById('backToCart');
    const checkoutForm = document.getElementById('checkoutForm');
    const orderSummaryDiv = document.getElementById('checkoutOrderSummary');
    const checkoutTotalSpan = document.getElementById('checkoutTotal');
    const paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');
    const onlinePaymentDetails = document.getElementById('onlinePaymentDetails');

    // Function to open checkout modal
    function openCheckoutModal() {
        const cart = getCart();
        if (cart.length === 0) {
            Swal.fire({
                title: 'Empty Cart!',
                text: 'Please add some items to your cart before checkout.',
                icon: 'warning',
                confirmButtonColor: '#27ae60',
                confirmButtonText: 'OK'
            });
            return;
        }

        displayCheckoutSummary();
        checkoutModal.classList.add('active');
        cartModal.classList.remove('active');
        document.body.style.overflow = 'hidden';
    }

    // Function to display order summary in checkout
    function displayCheckoutSummary() {
        const cart = getCart();
        orderSummaryDiv.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemPrice = parseFloat(item.price.replace('$', ''));
            const itemTotal = itemPrice * item.quantity;
            total += itemTotal;

            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <div class="order-item-details">
                    <div class="order-item-name">${item.name}</div>
                    <div class="order-item-qty">Quantity: ${item.quantity}</div>
                </div>
                <div class="order-item-price">$${itemTotal.toFixed(2)}</div>
            `;
            orderSummaryDiv.appendChild(orderItem);
        });

        checkoutTotalSpan.textContent = total.toFixed(2);
    }

    // Function to close all modals including checkout
    function closeAllModals() {
        dishModal.classList.remove('active');
        wishlistModal.classList.remove('active');
        cartModal.classList.remove('active');
        checkoutModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Payment method selection handler
    paymentRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.value === 'online') {
                onlinePaymentDetails.style.display = 'block';
                const paymentFields = onlinePaymentDetails.querySelectorAll('input');
                paymentFields.forEach(field => field.required = true);
            } else {
                onlinePaymentDetails.style.display = 'none';
                const paymentFields = onlinePaymentDetails.querySelectorAll('input');
                paymentFields.forEach(field => {
                    field.required = false;
                    field.value = '';
                });
            }
        });
    });

    // Format card number input
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
            e.target.value = value;
        });
    }

    // Format expiry date input
    const expiryInput = document.getElementById('expiryDate');
    if (expiryInput) {
        expiryInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }

    // Function to send email confirmation
    async function sendOrderConfirmation(orderData) {
        try {
            // Build items table rows dynamically
            const itemsTable = orderData.items.map(item => `
                <tr style="vertical-align: top">
                    <td style="display: flex; padding:12px 8px; width:64px;">
                        <div class="img">
                           <img style="height: 48px" height="48" src="${normalizeImageUrl(item.image1)}" alt="${item.name}" />
                        </div>
            
                        <div class="details" style="margin-left: 10px;">
                            <div>${item.name}</div>
                            <div style="font-size: 12px; color: #888; padding-top: 4px">Qty: ${item.quantity}</div>
                        </div>
                    </td>
            
                    <td style="padding: 12px 4px 0 0; white-space: nowrap; text-align: right">
                        <strong>$${(getNumericPrice(item.price) * item.quantity).toFixed(2)}</strong>
                    </td>
                </tr>
            `).join("");


            const templateParams = {
                orderId: orderData.orderId,
                orderDate: formatDate(orderData.orderDate),
                fullName: orderData.customer.fullName,
                email: orderData.customer.email,
                phone: orderData.customer.phone,
                address: orderData.customer.address,
                city: orderData.customer.city,
                notes: orderData.customer.notes,
                total: `$${orderData.total}`,
                itemsTable: itemsTable
            };

            // Send email via EmailJS
            const response = await emailjs.send(
                "service_24yqh5d",  // replace
                "template_fgch7kp", // replace
                templateParams
            );

            return { success: true, response };
        } catch (error) {
            console.error("Error sending email:", error);
            return { success: false, error: error.message };
        }
    }

    // Checkout form submission
    checkoutForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const cart = getCart();
        const total = calculateCartTotal();

        // Validate required fields
        const email = formData.get('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            Swal.fire({
                title: 'Invalid Email!',
                text: 'Please enter a valid email address.',
                icon: 'error',
                confirmButtonColor: '#27ae60',
                confirmButtonText: 'OK'
            });
            return;
        }

        // Validate payment fields if online payment is selected
        const paymentMethod = formData.get('paymentMethod');
        if (paymentMethod === 'online') {
            const cardNumber = formData.get('cardNumber');
            const expiryDate = formData.get('expiryDate');
            const cvv = formData.get('cvv');
            const cardName = formData.get('cardName');

            if (!cardNumber || cardNumber.replace(/\s/g, '').length < 16) {
                Swal.fire({
                    title: 'Invalid Card Number!',
                    text: 'Please enter a valid card number.',
                    icon: 'error',
                    confirmButtonColor: '#27ae60',
                    confirmButtonText: 'OK'
                });
                return;
            }

            if (!expiryDate || !/^\d{2}\/\d{2}$/.test(expiryDate)) {
                Swal.fire({
                    title: 'Invalid Expiry Date!',
                    text: 'Please enter a valid expiry date (MM/YY).',
                    icon: 'error',
                    confirmButtonColor: '#27ae60',
                    confirmButtonText: 'OK'
                });
                return;
            }

            if (!cvv || cvv.length < 3) {
                Swal.fire({
                    title: 'Invalid CVV!',
                    text: 'Please enter a valid CVV.',
                    icon: 'error',
                    confirmButtonColor: '#27ae60',
                    confirmButtonText: 'OK'
                });
                return;
            }

            if (!cardName || cardName.trim().length < 2) {
                Swal.fire({
                    title: 'Invalid Card Name!',
                    text: 'Please enter the name on the card.',
                    icon: 'error',
                    confirmButtonColor: '#27ae60',
                    confirmButtonText: 'OK'
                });
                return;
            }
        }

        // Prepare order data (NEVER include card details for security)
        const orderData = {
            customer: {
                fullName: formData.get('fullName'),
                email: email,
                phone: formData.get('phone'),
                city: formData.get('city'),
                address: formData.get('address'),
                notes: formData.get('notes') || ''
            },
            items: cart.map(item => ({
                image1: item.image1,
                name: item.name,
                price: item.price,
                quantity: item.quantity
            })),
            total: total,
            paymentMethod: formData.get('paymentMethod'),
            paymentInfo: formData.get('paymentMethod') === 'online' ? {
                hasCardInfo: true,
            } : { hasCardInfo: false },
            orderDate: new Date().toLocaleString(),
            orderId: 'PFF-' + Date.now()
        };

        // Show loading
        Swal.fire({
            title: 'Processing Order...',
            text: 'Please wait while we process your order.',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });

        try {
            const emailResult = await sendOrderConfirmation(orderData);
            localStorage.removeItem('cart');
            updateCartCount();
            Swal.fire({
                title: 'Order Placed Successfully!',
                html: `
                    <p>Thank you ${orderData.customer.fullName}!</p>
                    <p><strong>Order ID:</strong> ${orderData.orderId}</p>
                    <p><strong>Total:</strong> $${orderData.total}</p>
                    <p>A confirmation email has been sent to <strong>${orderData.customer.email}</strong></p>
                    <p>Your delicious food will be delivered to your address shortly!</p>
                `,
                icon: 'success',
                confirmButtonColor: '#27ae60',
                confirmButtonText: 'Great!'
            });

            closeAllModals();
            checkoutForm.reset();
            onlinePaymentDetails.style.display = 'none';

        } catch (error) {
            console.error('Order processing error:', error);
            Swal.fire({
                title: 'Order Error',
                text: 'There was an issue processing your order. Please try again.',
                icon: 'error',
                confirmButtonColor: '#27ae60',
                confirmButtonText: 'Try Again'
            });
        }
    });

    // Event listeners for checkout
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            openCheckoutModal();
        });
    }

    if (backToCartBtn) {
        backToCartBtn.addEventListener('click', function (e) {
            e.preventDefault();
            checkoutModal.classList.remove('active');
            cartModal.classList.add('active');
        });
    }

    // Update close modal functionality to include checkout modal
    closeModals.forEach(closeModal => {
        closeModal.addEventListener('click', closeAllModals);
    });

    // Update modal click outside functionality
    [dishModal, wishlistModal, cartModal, checkoutModal].forEach(modal => {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeAllModals();
            }
        });
    });

    // Update escape key functionality
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && (dishModal.classList.contains('active') ||
            wishlistModal.classList.contains('active') ||
            cartModal.classList.contains('active') ||
            checkoutModal.classList.contains('active'))) {
            closeAllModals();
        }
    });

    function normalizeImageUrl(path) {
        // If already absolute, return as is
        if (path.startsWith('http')) return path;

        // Otherwise, prepend your Netlify domain
        return `https://daniyal-khan-pearl-fast-food.netlify.app/${path}`;
    }
});


document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const templateParams = {
        contact_name: document.getElementById("contact_name").value,
        contact_email: document.getElementById("contact_email").value.toLowerCase(),
        contact_phone: document.getElementById("contact_phone").value,
        contact_subject: document.getElementById("contact_subject").value,
        contact_message: document.getElementById("contact_message").value
    };

    try {
        const response = await emailjs.send(
            "service_24yqh5d",
            "template_ea3zezb",
            templateParams
        );

        Swal.fire({
            title: 'success !',
            text: '✅ Message sent successfully!',
            icon: 'success',
            confirmButtonColor: '#27ae60',
            confirmButtonText: 'Continue'
        });
        document.getElementById("contactForm").reset();
    } catch (error) {
        console.error("Error sending contact message:", error);
        Swal.fire({
            title: 'Error!',
            text: '❌ Failed to send message. Please try again later.',
            icon: 'error',
            confirmButtonColor: '#27ae60',
            confirmButtonText: 'Try Again'
        });
    }
});