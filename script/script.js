$(document).ready(function() {
  fnSlider();
});

function fnSlider() {
  const sliderContainer = document.querySelector('.slider');
  const sliderUp = document.querySelector('.slider-up');
  const sliderDown = document.querySelector('.slider-down');
  const slidesLength = sliderContainer.querySelectorAll('a.slider-item').length;

  let activeSlideIndex = 0;

  sliderUp.addEventListener('click', () => changeSlide('up'));
  sliderDown.addEventListener('click', () => changeSlide('down'));

  const changeSlide = (direction) => {
      const sliderHeight = sliderContainer.clientHeight;
      if(direction === 'down'){
          activeSlideIndex++
          if (activeSlideIndex > slidesLength - 1) {
              activeSlideIndex = 0;
          }
          sliderContainer.style.transform = `translateY(-${activeSlideIndex * sliderHeight + (50 * activeSlideIndex)}px)`
      }
      if(direction === 'up'){
          activeSlideIndex--
          if (activeSlideIndex < 0) {
              activeSlideIndex = 0;
          }
          sliderContainer.style.transform = `translateY(-${activeSlideIndex * sliderHeight + (50 * activeSlideIndex)}px)`
      }
  }
};

window.onscroll = function () { fnScrollAnimation() };

function fnScrollAnimation() {
    const winScroll = document.documentElement.scrollTop;

    const windowBottom = $(window).scrollTop() + $(window).innerHeight();

     $(".scroll-opacity").each(function() {
        const objectTop = $(this).offset().top + 150;
 
        if (objectTop < windowBottom) {
            $(this).css('opacity', '1')
       }
     });
};