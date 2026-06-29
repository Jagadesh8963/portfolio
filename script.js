// Loader
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
});

// =====================
// Profile Photo - Slow reveal (scale up) then spin border PERMANENTLY
// =====================
window.addEventListener("load", function () {
  const wrapper = document.querySelector(".photo-frame-wrapper");

  if (wrapper) {
    // Step 1: After 400ms — slowly scale up and fade in (1.8s transition via CSS)
    setTimeout(function () {
      wrapper.classList.add("revealed");
    }, 400);

    // Step 2: After reveal finishes — start spinning border forever
    setTimeout(function () {
      wrapper.classList.add("spin-active");
      // Lock it permanently — nothing can hide it
      wrapper.style.opacity = "1";
      wrapper.style.visibility = "visible";
    }, 2400);
  }
});

// Toggle Mobile Menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}

// =====================
// Certificate Slider
// =====================
let autoSlideIndex = 0;
let manualSlideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlideAuto() {
  if (slides.length === 0) return;

  slides.forEach((slide, index) => {
    slide.style.display = index === autoSlideIndex ? "block" : "none";
  });

  manualSlideIndex = autoSlideIndex;
  autoSlideIndex = (autoSlideIndex + 1) % slides.length;

  setTimeout(showSlideAuto, 3000);
}

function moveSlide(direction) {
  if (slides.length === 0) return;
  manualSlideIndex = (manualSlideIndex + direction + slides.length) % slides.length;
  autoSlideIndex = (manualSlideIndex + 1) % slides.length;

  slides.forEach((slide, index) => {
    slide.style.display = index === manualSlideIndex ? "block" : "none";
  });
}

// =====================
// Typing Animation
// =====================
const typedTextElement = document.getElementById("typed-text");

const textArray = [
  { text: "Assistant Professor - CSE (AI&ML)", color: "#ff1493" },
  { text: "PG Scholar in AIML", color: "#007bff" },
  { text: "AI Researcher", color: "#28a745" },
  { text: "Working on GANs & ESRGAN", color: "#dc3545" },
  { text: "Medical Image Enhancement", color: "#6f42c1" },
  { text: "Web Developer", color: "#fd7e14" },
  { text: "ML & DL Enthusiast", color: "#17a2b8" }
];

let arrayIndex = 0;
let charIndex = 0;

function typeText() {
  if (!typedTextElement) return;

  const current = textArray[arrayIndex];
  typedTextElement.style.color = current.color;

  if (charIndex < current.text.length) {
    typedTextElement.textContent += current.text.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(eraseText, 1500);
  }
}

function eraseText() {
  const current = textArray[arrayIndex];

  if (charIndex > 0) {
    typedTextElement.textContent =
      current.text.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50);
  } else {
    arrayIndex = (arrayIndex + 1) % textArray.length;
    setTimeout(typeText, 500);
  }
}

// =====================
// Scroll To Top Button — replaced by enhanced version below
// =====================

// =====================
// Daily Quote
// =====================
const quotes = [
  "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
  "The beautiful thing about learning is that no one can take it away from you. – B.B. King",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "Hard work beats talent when talent doesn't work hard. – Tim Notke",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
  "Life is really simple, but we insist on making it complicated. – Confucius",
  "AI is the new electricity. – Andrew Ng",
  "Any sufficiently advanced technology is indistinguishable from magic. – Arthur C. Clarke",
  "Research is what I'm doing when I don't know what I'm doing. – Wernher von Braun",
  "Research is to see what everybody else has seen, and to think what nobody has thought. – Albert Szent-Györgyi"
];

// =====================
// Initialize Everything
// =====================
document.addEventListener("DOMContentLoaded", function () {

  // Start Typing Animation
  if (textArray.length > 0 && typedTextElement) {
    typeText();
  }

  // Start Certificate Slider
  if (slides.length > 0) {
    showSlideAuto();
  }

  // Load Daily Quote
  const quoteElement = document.getElementById("daily-quote");

  if (quoteElement) {
    const quote =
      quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.innerText = quote;
  }
});
// Photo frame border hidden — spinning wrapper handles it

// =====================
// Navbar fade on scroll (visual only)
// =====================
window.addEventListener("scroll", function () {
  var nav = document.getElementById("desktop-nav");
  if (nav) {
    if (window.scrollY > 40) {
      nav.style.background = "rgba(255,255,255,0.97)";
      nav.style.boxShadow = "0 4px 24px rgba(0,114,255,0.12)";
    } else {
      nav.style.background = "rgba(255,255,255,0.88)";
      nav.style.boxShadow = "0 2px 18px rgba(0,114,255,0.07)";
    }
  }
});
// =====================
// Scroll To Top — Progress Ring + Rocket Launch
// =====================
(function () {
  const CIRCUMFERENCE = 2 * Math.PI * 22; // r=22

  window.addEventListener("scroll", function () {
    const topBtn = document.getElementById("scrollTopBtn");
    const circle = document.querySelector(".progress-ring__circle");
    if (!topBtn) return;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(scrollTop / docHeight, 1);

    // Show/hide
    topBtn.style.display = scrollTop > 200 ? "flex" : "none";

    // Update ring
    if (circle) {
      const offset = CIRCUMFERENCE - progress * CIRCUMFERENCE;
      circle.style.strokeDashoffset = offset;
    }
  });

  window.scrollToTop = function () {
    const topBtn = document.getElementById("scrollTopBtn");
    if (topBtn) {
      topBtn.classList.add("launching");
      setTimeout(() => topBtn.classList.remove("launching"), 850);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
})();

// =====================
// Visitor Counter
// =====================
(function () {
  const key = "portfolio_visit_count";
  let count = parseInt(localStorage.getItem(key) || "0", 10);
  count += 1;
  localStorage.setItem(key, count);

  function animateCount(el, target) {
    let current = Math.max(0, target - 30);
    const step = Math.ceil((target - current) / 30);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current.toLocaleString();
      if (current >= target) clearInterval(timer);
    }, 40);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const el = document.getElementById("visitor-count");
    if (el) animateCount(el, count);
  });
})();


// ══════════════════════════════════════════════
// CURSOR TRAIL — glowing blue dots
// ══════════════════════════════════════════════
(function () {
  const canvas = document.getElementById('cursor-trail-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dots = [];
  const MAX  = 28;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  let mx = -999, my = -999;
  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dots.push({ x: mx, y: my, r: 7, a: 1 });
    if (dots.length > MAX) dots.shift();

    dots.forEach((d, i) => {
      const progress = i / dots.length;
      d.a = progress * 0.85;
      d.r = 2 + progress * 6;

      const grd = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 2.2);
      grd.addColorStop(0,   `rgba(0,198,255,${d.a})`);
      grd.addColorStop(0.5, `rgba(0,114,255,${d.a * 0.6})`);
      grd.addColorStop(1,   `rgba(0,114,255,0)`);

      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r * 2.2, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r * 0.45, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${d.a * 0.9})`;
      ctx.fill();
    });

    requestAnimationFrame(loop);
  }
  loop();
})();

// ══════════════════════════════════════════════
// WELCOME TOAST
// ══════════════════════════════════════════════
(function () {
  const visitKey = 'portfolio_visit_count';
  const count = parseInt(localStorage.getItem(visitKey) || '1', 10);
  const toast = document.getElementById('welcome-toast');
  const msg   = document.getElementById('toast-msg');
  if (!toast) return;

  if (count === 1) {
    if (msg) msg.textContent = 'Welcome! Thanks for visiting my portfolio 🎉';
  } else {
    if (msg) msg.textContent = 'Welcome back! Great to see you again 😊';
  }

  setTimeout(() => {
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  }, 1200);
})();

// ══════════════════════════════════════════════
// LANGUAGE SWITCHER — English ↔ Telugu
// ══════════════════════════════════════════════
const i18n = {
  en: {
    hello_im:             "Hello, I'm",
    get_to_know:          "Get To Know More",
    about_me:             "About Me",
    btech_desc:           "B.Tech <br />COMPUTER SCIENCE and ENGINEERING",
    mtech_desc:           "M.Tech<br />AI&ML specialization",
    explore_my:           "Explore My",
    skills:               "Skills",
    browse_recent:        "Browse My Recent",
    projects_title:       "Projects",
    intellectual_property:"Intellectual Property",
    patents_title:        "Patents",
    academic_conference:  "Academic & Conference",
    publications_title:   "Publications",
    go_through:           "GoThrough on my",
    certifications:       "Certifications",
    quote_of_day:         "Quote of the Day",
    get_in_touch:         "Get in Touch",
    contact_me:           "Contact Me",
    nav_about:            "About",
    nav_experience:       "Experience",
    nav_projects:         "Projects",
    nav_patents:          "Patents",
    nav_publications:     "Publications",
    nav_certificates:     "certificates",
    nav_contact:          "Contact",
    btn_resume:           "Download RESUME",
    btn_cv:               "Download CV",
    btn_contact:          "Contact",
    typed_texts: [
      { text: "Assistant Professor - CSE (AI&ML)", color: "#ff1493" },
      { text: "PG Scholar in AIML",                color: "#007bff" },
      { text: "AI Researcher",                      color: "#28a745" },
      { text: "Working on GANs & ESRGAN",           color: "#dc3545" },
      { text: "Medical Image Enhancement",          color: "#6f42c1" },
      { text: "Web Developer",                      color: "#fd7e14" },
      { text: "ML & DL Enthusiast",                 color: "#17a2b8" }
    ]
  },
  te: {
    hello_im:             "నమస్కారం, నేను",
    get_to_know:          "మరింత తెలుసుకోండి",
    about_me:             "నా గురించి",
    btech_desc:           "బి.టెక్ <br />కంప్యూటర్ సైన్స్ & ఇంజినీరింగ్",
    mtech_desc:           "ఎం.టెక్<br />AI&ML స్పెషలైజేషన్",
    explore_my:           "నా నైపుణ్యాలు",
    skills:               "నైపుణ్యాలు",
    browse_recent:        "నా తాజా",
    projects_title:       "ప్రాజెక్టులు",
    intellectual_property:"మేధో సంపత్తి",
    patents_title:        "పేటెంట్లు",
    academic_conference:  "విద్యా & సమావేశం",
    publications_title:   "ప్రచురణలు",
    go_through:           "నా సర్టిఫికెట్లు",
    certifications:       "సర్టిఫికేషన్లు",
    quote_of_day:         "నేటి సూక్తి",
    get_in_touch:         "సంప్రదించండి",
    contact_me:           "నన్ను సంప్రదించండి",
    nav_about:            "గురించి",
    nav_experience:       "అనుభవం",
    nav_projects:         "ప్రాజెక్టులు",
    nav_patents:          "పేటెంట్లు",
    nav_publications:     "ప్రచురణలు",
    nav_certificates:     "సర్టిఫికెట్లు",
    nav_contact:          "సంప్రదింపు",
    btn_resume:           "రెజ్యూమే డౌన్‌లోడ్",
    btn_cv:               "CV డౌన్‌లోడ్",
    btn_contact:          "సంప్రదించు",
    typed_texts: [
      { text: "అసిస్టెంట్ ప్రొఫెసర్ - CSE (AI&ML)", color: "#ff1493" },
      { text: "AI & ML పీజీ స్కాలర్",               color: "#007bff" },
      { text: "AI పరిశోధకుడు",                       color: "#28a745" },
      { text: "GANs & ESRGAN పై పని చేస్తున్నాను",   color: "#dc3545" },
      { text: "వైద్య చిత్ర మెరుగుదల",               color: "#6f42c1" },
      { text: "వెబ్ డెవలపర్",                        color: "#fd7e14" },
      { text: "ML & DL ఉత్సాహి",                    color: "#17a2b8" }
    ]
  }
};

let currentLang = 'en';

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'te' : 'en';
  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  const t = i18n[lang];

  // Fade out
  document.body.classList.add('lang-fade');

  setTimeout(() => {
    // data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // Nav links — both desktop and hamburger
    const navMap = [
      ['a[href="#about"]',        'nav_about'],
      ['a[href="#experience"]',   'nav_experience'],
      ['a[href="#projects"]',     'nav_projects'],
      ['a[href="#patents"]',      'nav_patents'],
      ['a[href="#publications"]', 'nav_publications'],
      ['a[href="#certificates"]', 'nav_certificates'],
      ['a[href="#contact"]',      'nav_contact'],
    ];
    navMap.forEach(([sel, key]) => {
      document.querySelectorAll(sel).forEach(el => { el.textContent = t[key]; });
    });

    // Typed text array swap
    if (typeof textArray !== 'undefined') {
      textArray.length = 0;
      t.typed_texts.forEach(item => textArray.push(item));
    }

    // Toggle button label
    const flag  = document.getElementById('lang-flag');
    const label = document.getElementById('lang-label');
    if (flag && label) {
      flag.textContent  = lang === 'en' ? '🇮🇳' : '🇬🇧';
      label.textContent = lang === 'en' ? 'తెలుగు' : 'English';
    }

    // Toast language switch message
    const toastMsg = document.getElementById('toast-msg');
    if (toastMsg) {
      const toast = document.getElementById('welcome-toast');
      toastMsg.textContent = lang === 'te'
        ? 'భాష తెలుగుకు మారింది! 🙏'
        : 'Switched to English! 🎉';
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
      }
    }

    document.body.classList.remove('lang-fade');
    document.body.classList.add('lang-fade-in');
    setTimeout(() => document.body.classList.remove('lang-fade-in'), 250);
  }, 220);
}