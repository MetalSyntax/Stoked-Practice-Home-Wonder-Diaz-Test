// Initialize Swiper for the six-slider-swiper
let sixSliderSwiper = new Swiper(".six-slider-swiper", {
  // Enable lazy loading
  lazy: true,
  // Set number of slides to show
  slidesPerView: 6,
  // Set space between slides
  spaceBetween: 30,
  // Enable looping
  loop: true,
  // Set breakpoints for responsive design
  breakpoints: {
    280: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
  // Enable navigation buttons
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Enable autoplay and set delay
  autoplay: {
    delay: 5000,
  },
  // Enable parallax effect
  parallax: true,
});

// Initialize Swiper for the three-slider-swiper
let threeSliderSwiper = new Swiper(".three-slider-swiper", {
  // Enable lazy loading
  lazy: true,
  // Set number of slides to show
  slidesPerView: 3,
  // Set space between slides
  spaceBetween: 30,
  // Center the active slide
  centeredSlides: true,
  // Enable looping
  loop: true,
  // Set breakpoints for responsive design
  breakpoints: {
    280: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  // Enable pagination and set type
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  // Enable autoplay and set delay
  autoplay: {
    delay: 5000,
  },
});

// Initialize Swiper for the slider-full-swiper
let sliderFullSwiper = new Swiper(".slider-full-swiper", {
  // Enable lazy loading
  lazy: true,
  // Set number of slides to show
  slidesPerView: 1,
  // Set space between slides
  spaceBetween: 30,
  // Enable looping
  loop: true,
  // Enable scrollbar and hide it
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  // Enable autoplay and set delay
  autoplay: {
    delay: 5000,
  },
});

// Get the hamburguer button
var hamburguerButton = document.querySelector(".hamburguer-button");
// Get the mobile menu overlay
var mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
// Add click event listener to hamburguer button
hamburguerButton.addEventListener("click", function () {
  // Add "open" class to mobile menu overlay
  mobileMenuOverlay.classList.add("open");
});
// Add click event listener to overlay area
mobileMenuOverlay.addEventListener("click", function () {
  // Remove "open" class from mobile menu overlay
  mobileMenuOverlay.classList.remove("open");
});

// Selecting the top header element
const allHeader = document.querySelector(".all-header");
// Function to handle the scroll event
function handleScroll() {
  // Adding the "fixed" class to the all headers when scrolling past its offset position
  if (window.pageYOffset > allHeader.offsetTop) {
    allHeader.classList.add("fixed");
  } else {
    allHeader.classList.remove("fixed");
  }
}
// Adding a scroll event listener to the window, calling the handleScroll function
window.addEventListener("scroll", handleScroll);