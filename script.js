// Loader
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
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
// Dark Mode Toggle
// =====================
function toggleDarkMode() {
  const body = document.body;
  const isDark = body.classList.toggle("dark-mode");

  // Save preference
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");

  // Update both desktop and mobile toggle button labels
  updateDarkModeButtons(isDark);
}

function updateDarkModeButtons(isDark) {
  const icon = document.getElementById("dm-icon");
  const label = document.getElementById("dm-label");
  if (icon) icon.textContent = isDark ? "☀️" : "🌙";
  if (label) label.textContent = isDark ? "Light" : "Dark";
}

// Apply saved dark mode preference on load
(function () {
  const saved = localStorage.getItem("darkMode");
  if (saved === "enabled") {
    document.body.classList.add("dark-mode");
    // Buttons update after DOM is ready
    document.addEventListener("DOMContentLoaded", function () {
      updateDarkModeButtons(true);
    });
  }
})();

// =====================
// Certificate Slider
// =====================
let autoSlideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlideAuto() {
  if (slides.length === 0) return;

  slides.forEach((slide, index) => {
    slide.style.display = index === autoSlideIndex ? "block" : "none";
  });

  autoSlideIndex = (autoSlideIndex + 1) % slides.length;

  setTimeout(showSlideAuto, 3000);
}

function moveSlide(direction) {
  if (slides.length === 0) return;

  slides[autoSlideIndex === 0 ? slides.length - 1 : autoSlideIndex - 1].style.display = "none";

  // Recalculate current visible slide
  let currentVisible = -1;
  slides.forEach((s, i) => {
    if (s.style.display === "block") currentVisible = i;
  });

  if (currentVisible === -1) currentVisible = 0;

  slides[currentVisible].style.display = "none";
  let newIndex = (currentVisible + direction + slides.length) % slides.length;
  slides[newIndex].style.display = "block";
  autoSlideIndex = (newIndex + 1) % slides.length;
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
    typedTextElement.textContent = current.text.substring(0, charIndex - 1);
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
    topBtn.style.display = window.scrollY > 200 ? "block" : "none";
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

  // Apply dark mode label if already saved
  const savedDark = localStorage.getItem("darkMode") === "enabled";
  if (savedDark) {
    updateDarkModeButtons(true);
  }

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
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.innerText = quote;
  }

});
// Skills Highlight
document.addEventListener("DOMContentLoaded", function () {

  const skills = document.querySelectorAll("article h3");

  let currentSkill = 0;

  setInterval(() => {

    skills.forEach(skill =>
      skill.classList.remove("skill-blink")
    );

    skills[currentSkill].classList.add("skill-blink");

    currentSkill = (currentSkill + 1) % skills.length;

  }, 1000);

});
// Research & Teaching Animation
document.addEventListener("DOMContentLoaded", function () {

  const items = document.querySelectorAll(
    ".research-list span, .teaching-list span"
  );

  let current = 0;

  setInterval(() => {

    items.forEach(item =>
      item.classList.remove("active-item")
    );

    items[current].classList.add("active-item");

    current = (current + 1) % items.length;

  }, 1000);

});