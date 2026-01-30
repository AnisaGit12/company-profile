// Mobile Nav Toggle
const mobileToggle = document.querySelector('.mobile-nav-toggle');
const navMenu = document.getElementById('navmenu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// AOS initialization (Animate on Scroll)
AOS.init({
    duration: 800,
    once: true
});

// Optional: Glightbox init
const lightbox = GLightbox({
    selector: '.glightbox'
});

// Optional: Swiper for portfolio / testimonials
const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
});
