// // Image carousel
// let currentIndex = 0;

// function showSlide(index) {
//   const imageContainer = document.querySelector('.image-container');
//   const images = document.querySelectorAll('.image');
  
//   if (images.length === 0) {
//     console.error("No images found");
//     return;
//   }

//   const imageWidth = images[0].width;
//   const newPosition = -index * imageWidth;

//   imageContainer.style.transform = `translateX(${newPosition}px)`;
//   currentIndex = index;
// }

// function nextSlide() {
//   const totalSlides = document.querySelectorAll('.image').length;
//   currentIndex = (currentIndex + 1) % totalSlides;
//   showSlide(currentIndex);
// }

// function prevSlide() {
//   const totalSlides = document.querySelectorAll('.image').length;
//   currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//   showSlide(currentIndex);
// }

// // Wait for images to load before initializing
// window.addEventListener('load', () => {
//   showSlide(currentIndex);

//   // Enable the buttons after images have loaded
//   document.querySelector('.nav-button.prev').addEventListener('click', prevSlide);
//   document.querySelector('.nav-button.next').addEventListener('click', nextSlide);
// });

// Image carousel
let currentIndex = 0;

function showSlide(index) {
  const imageContainer = document.querySelector('.image-container');
  const images = document.querySelectorAll('.image');
  
  if (images.length === 0) {
    console.error("No images found");
    return;
  }

  const imageWidth = images[0].width;
  const newPosition = -index * imageWidth;

  imageContainer.style.transform = `translateX(${newPosition}px)`;
  currentIndex = index;
}

function nextSlide() {
  const totalSlides = document.querySelectorAll('.image').length;
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  const totalSlides = document.querySelectorAll('.image').length;
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Ensure that functions are defined before assigning to click events
window.addEventListener('load', () => {
  showSlide(currentIndex);

  const prevButton = document.querySelector('.nav-button.prev');
  const nextButton = document.querySelector('.nav-button.next');

  if (prevButton) {
    prevButton.onclick = prevSlide;
  }

  if (nextButton) {
    nextButton.onclick = nextSlide;
  }
});
