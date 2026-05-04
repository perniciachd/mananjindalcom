// script.js
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const progress = document.querySelector('.scroll-progress');
const reveals = document.querySelectorAll('.reveal');

toggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const setActiveLink = () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
};

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  progress.style.width = `${(scrollTop / height) * 100}%`;
  setActiveLink();
});

document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.currentTarget.querySelector('button');
  const original = btn.textContent;
  btn.textContent = 'Sent';
  btn.style.background = '#16a34a';
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
  }, 1800);
});