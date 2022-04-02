const linkContactUs = document.querySelector('.button-contact');
const modalContactUs = document.querySelector('.modal-contact-us');
const closeModalContactUs = modalContactUs.querySelector('.modal-close');
const formContactUs = modalContactUs.querySelector('form');

const nameModal = modalContactUs.querySelector('[name=name]');
const emailModal = modalContactUs.querySelector('[name=email]');

let isStorageSupport = true;
const nameStorage = '';


// Проверяем, поддерживает ли браузер localStorage
try {
  nameStorage = localStorage.getItem('name');
} catch (error) {
  isStorageSupport = false;
}

// Обрабатываем клик по кнопке Напишите нам
linkContactUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalContactUs.classList.add('modal-show');
  modalContactUs.classList.add('modal-show-animation');
  setTimeout(() => {
    modalContactUs.classList.remove('modal-show-animation');
  }, 1000);
  nameModal.focus();
  if (nameStorage) {
    nameModal.value = nameStorage;
    emailModal.focus();
  }
});

// Кнопка Закрыть модальное окно
closeModalContactUs.addEventListener('click', function () {
  modalContactUs.classList.remove('modal-show');
  modalContactUs.classList.remove('modal-error');
});

// Закрыть модальное окно по ECS
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalContactUs.classList.contains("modal-show")) {
      evt.preventDefault();
      modalContactUs.classList.remove("modal-show");
      modalContactUs.classList.add('modal-error');
    }
  }
});

// Проверяем форму
formContactUs.addEventListener('submit', function (evt) {
  if (!nameModal.value || !emailModal.value) {
    evt.preventDefault();
    modalContactUs.classList.add('modal-error');
    setTimeout(() => {
      modalContactUs.classList.remove('modal-error');
    }, 500);
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', nameModal.value);
    }
  }
});
