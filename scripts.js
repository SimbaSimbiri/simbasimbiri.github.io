// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Scroll Animation
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  
  // Change header style when scrolling past 50px
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Reveal Elements on Scroll
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;
    
    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('active');
    }
  });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    
    // Close mobile menu after clicking a link
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  });
});

// Slideshow for About Section
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName('mySlides');
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

// Typewriter effect for the hero section animated text
const typeTexts = [
  "the Kotlin Lover ⚡",
  "the Mobile Maniac 👨🏽‍💻",
  "the ML guy 🤖",
  "the Web Dev 🕷️",
  "the Prolific Poet 📝",
  "Ray Simbiri"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typing');
const typingSpeed = 40;    // Delay when typing characters (in milliseconds)
const deletingSpeed = 50;  // Delay when deleting characters
const pauseTime = 2000;     // Pause time after a word is fully typed

function type() {
  const currentText = typeTexts[textIndex];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % typeTexts.length;
      setTimeout(type, 500); // Short pause before typing next word
    } else {
      setTimeout(type, deletingSpeed);
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(type, pauseTime); // Pause before erasing
    } else {
      setTimeout(type, typingSpeed);
    }
  }
}

// Initialize the typewriter effect when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  if (typingElement) {
    type();
  }
});