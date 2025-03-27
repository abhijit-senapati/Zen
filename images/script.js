document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const menuIcon = document.querySelector('#menu-icon');
    const nav = document.querySelector('.nav');

    // Toggle mobile menu and change icon to cross
    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuIcon.classList.toggle('active'); // Toggle active class on menu icon
    });

    

    // Change header background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.classList.remove('transparent'); // Remove underline when scrolled
        } else {
            header.classList.remove('scrolled');
            header.classList.add('transparent'); // Add underline when at top
        }
    });
});


// JavaScript for Automatic Slider Functionality

// Selecting required elements
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Function to update the slider position
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to go to the next slide automatically
function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

// Set interval for automatic sliding
setInterval(autoSlide, 5000); // Adjust the timing as needed (5000ms = 5 seconds)

// Event listeners for navigation buttons
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
});

// Mobile menu toggle functionality
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// JavaScript for About Section (if needed for animations or interactivity)

// Example: Fade-in effect on scroll
const aboutSection = document.querySelector('.about-section');

function handleScroll() {
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        aboutSection.classList.add('visible');
    }
}

window.addEventListener('scroll', handleScroll);



//==========================================
document.addEventListener(
    "DOMContentLoaded", () => {
    const loadMoreBtn = document.getElementById("loadMore");
    const productsContainer = document.querySelector(".products-container");

    // Additional products data
    const additionalProducts = [
        { img: "home.jpg", name: "Product Name 5" },
        { img: "home 2.jpg", name: "Product Name 6" },
        { img: "home 3.jpg", name: "Product Name 7" },
        { img: "herb4.png", name: "Product Name 8" },
    ];

    // Load more products
    let currentIndex = 0;
    loadMoreBtn.addEventListener("click", () => {
        // Load next 2 products
        const nextProducts = additionalProducts.slice(currentIndex, currentIndex + 2);
        nextProducts.forEach((product) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
            `;
            productsContainer.appendChild(productCard);
        });

        // Update index
        currentIndex += 2;

        // Hide button if all products are loaded
        if (currentIndex >= additionalProducts.length) {
            loadMoreBtn.style.display = "none";
        }
    });
});

//===============================================

document.addEventListener("DOMContentLoaded", () => {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const sliderItems = document.querySelectorAll(".slider-item");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentIndex = 0;

    const updateSlider = () => {
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        updateSlider();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        updateSlider();
    });
});

//========================================
