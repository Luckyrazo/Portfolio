// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Animate hamburger icon
  const spans = hamburger.querySelectorAll("span");
  if (navLinks.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
  } else {
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  }
});

// Close mobile menu when clicking on a link
const navItems = document.querySelectorAll(".nav-links a");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
    const spans = hamburger.querySelectorAll("span");
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Navbar background change on scroll
const navbar = document.querySelector(".navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
  }

  lastScroll = currentScroll;
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all sections
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(section);
});

// Observe skill items with staggered animation
const skillItems = document.querySelectorAll(".skill-item");
skillItems.forEach((item, index) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(20px)";
  item.style.transition = `opacity 0.5s ease ${
    index * 0.05
  }s, transform 0.5s ease ${index * 0.05}s`;

  const progressObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";

          // Animate progress bar
          const progressBar = entry.target.querySelector(".skill-progress-bar");
          if (progressBar) {
            const proficiency = entry.target.getAttribute("data-proficiency");
            setTimeout(() => {
              progressBar.style.width = proficiency + "%";
            }, index * 50);
          }

          progressObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  progressObserver.observe(item);
});

// Observe skill cards
const skillCards = document.querySelectorAll(".skill-card");
skillCards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = `opacity 0.6s ease ${
    index * 0.1
  }s, transform 0.6s ease ${index * 0.1}s`;
  observer.observe(card);
});

// Contact form handling
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const name = contactForm.querySelector('input[type="text"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  const message = contactForm.querySelector("textarea").value;

  // Simple validation
  if (name && email && message) {
    // Here you would typically send the form data to a server
    alert("Thank you for your message! I will get back to you soon.");
    contactForm.reset();
  } else {
    alert("Please fill in all fields.");
  }
});

// Add active class to current navigation item based on scroll position
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href").slice(1) === current) {
      item.classList.add("active");
    }
  });
});

// Initialize animations on page load
window.addEventListener("load", () => {
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.style.opacity = "1";
  }
});

// Projects Slider
const projectsSlider = document.querySelector(".projects-slider-wrapper");
const projectCards = document.querySelectorAll(
  ".projects-slider-wrapper .project-card"
);
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const sliderDotsContainer = document.querySelector(".slider-dots");

let currentSlide = 0;
const totalSlides = projectCards.length;

// Create dots
const dotsCount = Math.ceil(totalSlides / 2); // One dot per 2 slides
for (let i = 0; i < dotsCount; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  sliderDotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".slider-dots .dot");

function updateSlider() {
  // Hide all cards first
  projectCards.forEach((card) => {
    card.style.display = "none";
  });

  // Show only the 2 cards for current slide
  const startIndex = currentSlide * 2;
  const endIndex = Math.min(startIndex + 2, totalSlides);

  for (let i = startIndex; i < endIndex; i++) {
    projectCards[i].style.display = "block";
  }

  // Update dots
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

function nextSlide() {
  const maxSlide = Math.ceil(totalSlides / 2) - 1;
  currentSlide = currentSlide >= maxSlide ? 0 : currentSlide + 1;
  updateSlider();
}

function prevSlide() {
  const maxSlide = Math.ceil(totalSlides / 2) - 1;
  currentSlide = currentSlide <= 0 ? maxSlide : currentSlide - 1;
  updateSlider();
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Auto-slide (optional)
let autoSlideInterval = setInterval(nextSlide, 5000);

// Pause auto-slide on hover
const sliderContainer = document.querySelector(".projects-slider-container");
sliderContainer.addEventListener("mouseenter", () => {
  clearInterval(autoSlideInterval);
});

sliderContainer.addEventListener("mouseleave", () => {
  autoSlideInterval = setInterval(nextSlide, 5000);
});

// Touch swipe support
let touchStartX = 0;
let touchEndX = 0;

sliderContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

sliderContainer.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchStartX - touchEndX > 50) {
    nextSlide();
  }
  if (touchEndX - touchStartX > 50) {
    prevSlide();
  }
}

// Initialize slider
updateSlider();
