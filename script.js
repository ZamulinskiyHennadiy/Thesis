// JavaScript для керування слайдером
document.addEventListener("DOMContentLoaded", function() {
  const track = document.querySelector(".slider-track");
  const slides = Array.from(track.children);
  const prevButton = document.querySelector(".prev-btn");
  const nextButton = document.querySelector(".next-btn");
  let currentSlideIndex = 0;

  function updateSliderPosition() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
  }

  function moveToNextSlide() {
    if (currentSlideIndex < slides.length - 1) {
      currentSlideIndex++;
    } else {
      currentSlideIndex = 0; // Повернутись на початок, якщо дійшли до кінця
    }
    updateSliderPosition();
  }

  function moveToPrevSlide() {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
    } else {
      currentSlideIndex = slides.length - 1; // Перейти до останнього слайда, якщо натиснули "назад" на першому слайді
    }
    updateSliderPosition();
  }

  nextButton.addEventListener("click", moveToNextSlide);
  prevButton.addEventListener("click", moveToPrevSlide);

  // Оновлення розташування при зміні розміру вікна
  window.addEventListener("resize", updateSliderPosition);
});