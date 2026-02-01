// Bootstrap carousel auto slide
const carouselElement = document.querySelector('#heroCarousel');
const carousel = new bootstrap.Carousel(carouselElement, {
  interval: 5000,
  ride: 'carousel'
});

// Animate text on slide change
carouselElement.addEventListener('slid.bs.carousel', function () {
  const activeItems = carouselElement.querySelectorAll('.carousel-item.active .slide-title, .carousel-item.active .slide-subtitle, .carousel-item.active .slide-btn');
  activeItems.forEach(el => {
    el.style.animation = 'none';
    el.offsetHeight; // trigger reflow
    el.style.animation = 'fadeSlide 1s forwards';
  });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll reveal for sections
const scrollElements = document.querySelectorAll('.scroll-animate');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  scrollElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
