// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
// Optional scroll to menu section
document.querySelector('.cta-btn')?.addEventListener('click', () => {
  const menuSection = document.getElementById('menu'); // Make sure to have this ID in your HTML
  if (menuSection) {
    menuSection.scrollIntoView({ behavior: 'smooth' });
  }
});
// Reveal feature cards on scroll
const featureCards = document.querySelectorAll('.feature-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

featureCards.forEach(card => {
  observer.observe(card);
});
// Reveal How It Works steps on scroll
const stepCards = document.querySelectorAll('.step-card');

const stepObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

stepCards.forEach(card => {
  stepObserver.observe(card);
});
// Reveal testimonial cards on scroll
const testimonialCards = document.querySelectorAll('.testimonial-card');

const testimonialObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

testimonialCards.forEach(card => {
  testimonialObserver.observe(card);
});
// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
