const buttonsBuy = document.querySelectorAll('.button-buy');
const buttonsBookmark = document.querySelectorAll('.button-bookmark');

const headerCart = document.querySelector('.main-header-cart');
const cartCounter = headerCart.querySelector('.counter');

const headerBookmark = document.querySelector('.main-header-bookmarks');
const bookmarkCounter = headerBookmark.querySelector('.counter');

const redBasic = '#ee3643';

for (buttonBuy of buttonsBuy) {
  buttonBuy.onclick = function () {
    headerCart.style.backgroundColor = redBasic;
    +cartCounter.textContent++;
  }
};

for (buttonBookmark of buttonsBookmark) {
  buttonBookmark.onclick = function () {
    headerBookmark.style.backgroundColor = redBasic;
    +bookmarkCounter.textContent++;
  }
}
