// Select Elements
const navBar = document.querySelector(".content");
const navOpenBtn = document.querySelector(".navOpen-btn");
const navCloseBtn = document.querySelector(".navClose-btn");

// Open Navigation Bar
navOpenBtn.addEventListener("click", () => {
  navBar.style.right = "0";
});

// Close Navigation Bar
navCloseBtn.addEventListener("click", () => {
  navBar.style.right = "-100%";
});

//Scroll Reveal Animations
const sr = ScrollReveal ({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 100,
})

sr.reveal ('.home-details, .about-img, .about-text, .menu-details, .menu-items, .time-table, .brand-subtitle, .brand-img, .review-text, .client-review, .newsletter-content, .footer-content')
