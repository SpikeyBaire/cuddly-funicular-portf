// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});


const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.classList.add('visible');
  } else {
    scrollToTopButton.classList.remove('visible');
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Basic validation
  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset();
  } else {
    alert('Please fill out all fields.');
  }
});
