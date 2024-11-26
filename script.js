let currentSlide = 0;

function moveSlide(direction) {
    const sliderContainer = document.querySelector('.slider-container');
    const slideWidth = 100; // Adjust this value to match the actual width of your images
    const totalSlides = document.querySelectorAll('.slide').length;

    // Update current slide index
    currentSlide += direction;

    // Ensure the slider loops infinitely
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Loop to the last slide
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Loop back to the first slide
    }

    // Shift slider container to the current slide position
    sliderContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}



//slider 2
// JavaScript for slider functionality
const slider = document.getElementById('slider');
const sliderItems = document.querySelectorAll('.slider-item-2'); // Updated to match the class in your HTML
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

// Move to the next slide
function showNextSlide() {
  currentIndex = (currentIndex + 1) % sliderItems.length; // Loop back to the start
  updateSliderPosition();
}

// Move to the previous slide
function showPrevSlide() {
  currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length; // Handle negative indices
  updateSliderPosition();
}

// Update slider position based on currentIndex
function updateSliderPosition() {
  const slideWidth = sliderItems[0].clientWidth; // Get the width of a single slide
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Event listeners for buttons
nextBtn.addEventListener('click', showNextSlide);
prevBtn.addEventListener('click', showPrevSlide);

// Add responsive handling (optional)
window.addEventListener('resize', updateSliderPosition); // Recalculate positions on window resize


//slider 3
  
let currentCarouselIndex = 0;
let leftSlideCount = 0; // Count for left direction
let rightSlideCount = 0; // Count for right direction
const maxSlides = 1; // Maximum allowed slides in any direction

function moveCarousel(direction) {
  const carouselTrack = document.getElementById('carouselTrack');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const totalItems = carouselItems.length;

  // Check if the direction exceeds the allowed limits
  if (direction === 1 && rightSlideCount >= maxSlides) {
    console.log("Max right slides reached");
    return; // Stop right sliding
  }
  if (direction === -1 && leftSlideCount >= maxSlides) {
    console.log("Max left slides reached");
    return; // Stop left sliding
  }

  // Update the current index, ensuring it wraps around correctly
  currentCarouselIndex = (currentCarouselIndex + direction + totalItems) % totalItems;

  // Apply the transform
  carouselTrack.style.transform = `translateX(${-currentCarouselIndex * 100}%)`;

  // Increment the slide counter based on the direction
  if (direction === 1) {
    rightSlideCount++;
    leftSlideCount = Math.max(0, leftSlideCount - 1); // Reset opposite direction count
  } else if (direction === -1) {
    leftSlideCount++;
    rightSlideCount = Math.max(0, rightSlideCount - 1); // Reset opposite direction count
  }
}

