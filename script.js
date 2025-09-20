// main.js - JavaScript for Travel-Tales Website

// Mobile Navigation Toggle
const navToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });
}

// Highlight Active Navigation Link
const navLinks = document.querySelectorAll('.nav-link');
const currentPath = window.location.pathname;

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});

// Lazy Load Images
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => {
    imageObserver.observe(img);
});

// Page-Specific Code Guards
if (document.querySelector('.form-container')) {
    console.log('Booking form detected. Add form-specific logic here.');
}

if (document.querySelector('.destinations-grid')) {
    console.log('Destinations grid detected. Add grid-specific logic here.');
}
