const sliderGoods = document.querySelector('.goods-item-slider');

const arrowBackward = sliderGoods.querySelector('.arrow-backward');
const arrowForward = sliderGoods.querySelector('.arrow-forward');

const slidePagination = sliderGoods.querySelectorAll('.slider-controls button');

const sliderList = sliderGoods.querySelectorAll('.slider-item');

// Трюк для того, чтобы можно было работать с Node-листом как с массивом
NodeList.prototype.indexOf = Array.prototype.indexOf;


arrowBackward.onclick = function () {
  let currentSlideIndex;
  for (sliderItem of sliderList) {
    if (sliderItem.classList.contains('slide-current')) {
      currentSlideIndex = sliderList.indexOf(sliderItem);
    };
  };
  let previousSlideIndex = currentSlideIndex - 1;
  sliderList[previousSlideIndex].classList.add('slide-current');
  sliderList[currentSlideIndex].classList.remove('slide-current');

  sliderGoods.classList.remove(`slider-background-${currentSlideIndex + 1}`);
  sliderGoods.classList.add(`slider-background-${previousSlideIndex + 1}`);

  slidePagination[previousSlideIndex].classList.add('current');
  slidePagination[currentSlideIndex].classList.remove('current');

  if (previousSlideIndex === 0) {
    arrowBackward.setAttribute("disabled", "disabled");
  };

  if (arrowForward.hasAttribute('disabled')) {
    arrowForward.removeAttribute("disabled");
  }
};

arrowForward.onclick = function () {
  let currentSlideIndex;
  for (sliderItem of sliderList) {
    if (sliderItem.classList.contains('slide-current')) {
      currentSlideIndex = sliderList.indexOf(sliderItem);
    };
  };
  let nextSlideIndex = currentSlideIndex + 1;
  sliderList[nextSlideIndex].classList.add('slide-current');
  sliderList[currentSlideIndex].classList.remove('slide-current');

  sliderGoods.classList.remove(`slider-background-${currentSlideIndex + 1}`);
  sliderGoods.classList.add(`slider-background-${nextSlideIndex + 1}`);

  slidePagination[nextSlideIndex].classList.add('current');
  slidePagination[currentSlideIndex].classList.remove('current');

  if (nextSlideIndex) {
    arrowBackward.removeAttribute("disabled");
  } else {
    arrowForward.setAttribute("disabled", "disabled");
  };

  if (nextSlideIndex >= sliderList.length - 1) {
    arrowForward.setAttribute("disabled", "disabled");
  } else {
    arrowForward.removeAttribute("disabled");
  }
};

// Навигация по слайдам из кнопок пагинации
for (const button of slidePagination) {
  button.onclick = function () {
    let indexOfButton = slidePagination.indexOf(button);

    slidePagination.forEach(element => {
      if (element.classList.contains('current')) {
        element.classList.remove('current');
      }
    });

    for (sliderItem of sliderList) {
      let currentSlideIndex;
      if (sliderItem.classList.contains('slide-current')) {
        currentSlideIndex = sliderList.indexOf(sliderItem);
        sliderItem.classList.remove('slide-current');
        sliderGoods.classList.remove(`slider-background-${currentSlideIndex + 1}`);
      };
    };

    button.classList.add('current');
    sliderList[indexOfButton].classList.add('slide-current');
    sliderGoods.classList.add(`slider-background-${indexOfButton + 1}`);
  }
}
