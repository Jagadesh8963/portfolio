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
// Scroll To Top Button
// =====================
window.addEventListener("scroll", function () {
  const topBtn = document.getElementById("scrollTopBtn");

  if (topBtn) {
    topBtn.style.display =
      window.scrollY > 200 ? "block" : "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

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