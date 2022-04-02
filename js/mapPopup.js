const linkMap = document.querySelector('.map-mini');
const modalMap = document.querySelector('.modal-map');
const closeModalMap = modalMap.querySelector('.modal-close');

// Клик по мини-карте - открывает интерактивную карту
linkMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.add('modal-show');
  modalMap.classList.add('modal-show-animation');
  setTimeout(() => {
    modalMap.classList.remove('modal-show-animation');
  }, 1000);
})

// Закрыть карту
closeModalMap.addEventListener('click', function () {
  modalMap.classList.remove('modal-show');
})

// Закрыть модальное окно по ECS
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalMap.classList.contains("modal-show")) {
      evt.preventDefault();
      modalMap.classList.remove("modal-show");
    }
  }
});
