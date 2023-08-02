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

const topHeader = document.querySelector(".top-header");
const mainHeader = document.querySelector(".main-header");
const shippingFreeContainer = document.querySelector(".shipping-free-container");

function handleScroll() {
  if (window.pageYOffset > topHeader.offsetTop) {
    topHeader.classList.add("fixed");
  } else {
    topHeader.classList.remove("fixed");
  }

  if (window.pageYOffset > mainHeader.offsetTop) {
    mainHeader.classList.add("fixed");
  } else {
    mainHeader.classList.remove("fixed");
  }

  if (window.pageYOffset > shippingFreeContainer.offsetTop) {
    shippingFreeContainer.classList.add("fixed");
  } else {
    shippingFreeContainer.classList.remove("fixed");
  }
}

window.addEventListener("scroll", handleScroll);