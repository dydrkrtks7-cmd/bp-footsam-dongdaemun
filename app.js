// Multi-language translation dataset
const localizedCatalog = JSON.parse(document.getElementById('site-translations').textContent);
function messageValue(value) { return value.replace(/\{([A-Za-z][\w.-]{0,127})(?::(group))?\}/g, (_, key, format) => { const token = localizedCatalog.tokens[key]; return format ? Number(token).toLocaleString('en-US') : token; }); }
const translations = Object.fromEntries(Object.entries(localizedCatalog.messages).map(([language, values]) => [language, Object.fromEntries(Object.entries(values).map(([key, value]) => [key, messageValue(value)]))]));
function translatedSchema(value, language) { if (typeof value === 'string') return value.startsWith('@message:') ? translations[language][value.slice(9)].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : messageValue(value); if (Array.isArray(value)) return value.map(item => translatedSchema(item, language)); if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, translatedSchema(item, language)])); return value; }

// Application State
let currentLang = 'ko';

// DOM Elements
const header = document.querySelector('header');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('nav');
const tabButtons = document.querySelectorAll('.tab-btn');
const spacePanels = document.querySelectorAll('.space-panel');
const langButtons = document.querySelectorAll('.lang-btn');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  // Check for saved language, default to 'ko'
  const savedLang = localStorage.getItem('footsam_lang');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  } else {
    // Detect browser language
    const browserLang = navigator.language.slice(0, 2);
    if (translations[browserLang]) {
      currentLang = browserLang;
    }
  }

  // Set active class on active lang button
  langButtons.forEach(btn => {
    if (btn.dataset.lang === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Apply translations
  applyLanguage(currentLang);

  // Initialize Scroll Event listener
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger initial scroll check

  // Initialize Scroll Animation Observer
  initScrollReveal();
});

// Switch Language Function
function applyLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  document.getElementById("business-schema").textContent = JSON.stringify(translatedSchema(localizedCatalog.structuredData, lang));
  localStorage.setItem('footsam_lang', lang);

  // Find all translatable elements
  const translatableElements = document.querySelectorAll('[data-i18n]');
  translatableElements.forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      // Check if it's an input or has special attributes
      if (el.tagName === 'META') {
        el.content = translations[lang][key];
      } else if (el.tagName === 'TITLE') {
        el.textContent = translations[lang][key];
      } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });

  // Highlight active lang buttons
  langButtons.forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Close mobile navigation menu if open
  nav.classList.remove('active');
  mobileNavToggle.classList.remove('active');
  mobileNavToggle.setAttribute('aria-expanded', 'false');
}

// Lang button listeners
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    applyLanguage(btn.dataset.lang);
  });
});

// Scroll Header effect
function handleScroll() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// Mobile Menu Toggle
mobileNavToggle.addEventListener('click', () => {
  const opened = nav.classList.toggle('active');
  mobileNavToggle.classList.toggle('active', opened);
  mobileNavToggle.setAttribute('aria-expanded', String(opened));
});

// Close Mobile Nav when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    mobileNavToggle.classList.remove('active');
  mobileNavToggle.setAttribute('aria-expanded', 'false');
  });
});

// Facility Tab Swapping Logic
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active state from other tabs
    tabButtons.forEach(b => b.classList.remove('active'));
    // Add active state to clicked tab
    btn.classList.add('active');

    const targetTab = btn.dataset.tab;

    // Show corresponding panel and hide others
    spacePanels.forEach(panel => {
      if (panel.id === targetTab) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  });
});

// Intersection Observer for scroll animation (Fade up)
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Once animated, no need to watch it anymore
        observer.unobserve(entry.target);
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    root: null, // viewport
    threshold: 0.15, // trigger when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px" // trigger slightly before entering viewport
  });

  reveals.forEach(el => revealObserver.observe(el));
}
