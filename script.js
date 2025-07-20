// Toggle mobile menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Autoplay certificate slider
let autoSlideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlideAuto() {
  slides.forEach((slide, index) => {
    slide.style.display = index === autoSlideIndex ? "block" : "none";
  });
  autoSlideIndex = (autoSlideIndex + 1) % slides.length;
  setTimeout(showSlideAuto, 3000); // Change every 3 seconds
}
showSlideAuto();

// Scroll-to-top button visibility and smooth scroll
let topBtn = document.getElementById("topBtn");
window.onscroll = function () {
  topBtn.style.display =
    document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
      ? "block"
      : "none";
};

const typedTextElement = document.getElementById("typed-text");

const textArray = [
  { text: "PG Scholar in AIML", color: "#007bff" },     // blue
  { text: "AI Researcher", color: "#28a745" },           // green
  { text: "Working on GANs & ESRGAN", color: "#dc3545" }, // red
  { text: "Medical Image Enhancement", color: "#6f42c1" }, // purple
  { text: "Web Developer", color: "#fd7e14" },           // orange
  { text: "ML & DL Enthusiast", color: "#17a2b8" }       // cyan
];

let arrayIndex = 0;
let charIndex = 0;

function typeText() {
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

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) typeText();
});
window.onscroll = function () {
  document.getElementById("scrollTopBtn").style.display = (window.scrollY > 200) ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
const quotes = [
    // Education
    "'Education is the most powerful weapon which you can use to change the world.' – Nelson Mandela",
    "'The beautiful thing about learning is that no one can take it away from you.' – B.B. King",

    // Sports
    "'You miss 100% of the shots you don’t take.' – Wayne Gretzky",
    "'Hard work beats talent when talent doesn't work hard.' – Tim Notke",

    // Life Motivation
    "'Believe you can and you're halfway there.' – Theodore Roosevelt",
    "'Success is not final, failure is not fatal: it is the courage to continue that counts.' – Winston Churchill",
    " 'Life is really simple, but we insist on making it complicated.' – Confucius",
    // AI / Tech
    "'AI is the new electricity.' – Andrew Ng",
    "'Any sufficiently advanced technology is indistinguishable from magic.' – Arthur C. Clarke",

    // Research
    "'Research is what I’m doing when I don’t know what I’m doing.' – Wernher von Braun",
    "'Research is to see what everybody else has seen, and to think what nobody has thought.' – Albert Szent-Györgyi"
  ];

  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("daily-quote").innerText = quote;


