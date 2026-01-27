document.addEventListener('DOMContentLoaded', () => {

  "use strict";

  /* ======= Mobile Nav Toggle ======= */
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('#navmenu');

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', () => {
      navMenu.classList.toggle('navmenu-mobile');
      mobileNavToggle.classList.toggle('bi-list');
      mobileNavToggle.classList.toggle('bi-x');
    });
  }

  /* ======= Smooth Scroll ======= */
  const scrollLinks = document.querySelectorAll('#navmenu a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });

        // Close mobile nav after click
        if (navMenu.classList.contains('navmenu-mobile')) {
          navMenu.classList.remove('navmenu-mobile');
          mobileNavToggle.classList.add('bi-list');
          mobileNavToggle.classList.remove('bi-x');
        }
      }
    });
  });

  /* ======= Hero Carousel ======= */
  const heroCarousel = document.querySelector('#hero-carousel');
  if (heroCarousel) {
    const carousel = new bootstrap.Carousel(heroCarousel, {
      interval: 5000,
      ride: 'carousel'
    });
  }

  /* ======= GLightbox ======= */
  const portfolioLightbox = GLightbox({
    selector: '.glightbox'
  });

  /* ======= AOS Animation ======= */
  AOS.init({
    duration: 1000,
    once: true
  });

  /* ======= Scroll to Top Button ======= */
  const scrollTop = document.getElementById('scroll-top');
  if (scrollTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        scrollTop.classList.add('active');
      } else {
        scrollTop.classList.remove('active');
      }
    });

    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ======= Portfolio Isotope Filter ======= */
  const portfolioContainer = document.querySelector('.isotope-layout');
  if (portfolioContainer) {
    const iso = new Isotope(portfolioContainer.querySelector('.isotope-container'), {
      itemSelector: '.isotope-item',
      layoutMode: 'masonry'
    });

    const filters = portfolioContainer.querySelectorAll('.isotope-filters li');
    filters.forEach(filter => {
      filter.addEventListener('click', () => {
        filters.forEach(el => el.classList.remove('filter-active'));
        filter.classList.add('filter-active');
        iso.arrange({ filter: filter.getAttribute('data-filter') });
      });
    });
  }

});
