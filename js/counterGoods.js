const buttonsBuy = document.querySelectorAll('.button-buy');
const buttonsBookmark = document.querySelectorAll('.button-bookmark');

const modalCart = document.querySelector('.modal-cart-notice');
const modalCartClose = modalCart.querySelector('.modal-close');

const headerCart = document.querySelector('.main-header-cart');
const cartCounter = headerCart.querySelector('.counter');

const headerBookmark = document.querySelector('.main-header-bookmarks');
const bookmarkCounter = headerBookmark.querySelector('.counter');

const redBasic = '#ee3643';

for (buttonBuy of buttonsBuy) {
  buttonBuy.onclick = function () {
    headerCart.style.backgroundColor = redBasic;
    +cartCounter.textContent++;
    modalCart.classList.add('modal-show');
    modalCart.classList.add('modal-show-animation');
  }
};

for (buttonBookmark of buttonsBookmark) {
  buttonBookmark.onclick = function () {
    headerBookmark.style.backgroundColor = redBasic;
    +bookmarkCounter.textContent++;
  }
}

modalCartClose.onclick = function () {
  modalCart.classList.remove('modal-show');
  modalCart.classList.remove('modal-show-animation');
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalCart.classList.contains("modal-show")) {
      evt.preventDefault();
      modalCart.classList.remove("modal-show");
      modalCart.classList.remove('modal-show-animation');
    }
  }
});
