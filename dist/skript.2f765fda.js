// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/mySwiper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swiper = void 0;
var swiper = exports.swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 8000
  },
  speed: 1000,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
},{}],"js/mySwiper-modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swiperModal = void 0;
var swiperModal = exports.swiperModal = new Swiper(".mySwiper-modal", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
},{}],"js/mySwiper-mini.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swiperMini = void 0;
var swiperMini = exports.swiperMini = new Swiper(".mySwiper-mini", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
},{}],"js/openBurgerMenu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonBurger = exports.blackoutElement = void 0;
exports.openBurgerMenu = openBurgerMenu;
var buttonBurger = exports.buttonBurger = document.querySelector('.header__burger');
var blackoutElement = exports.blackoutElement = document.querySelector('.blackout');
function openBurgerMenu() {
  buttonBurger.classList.toggle('isActive');
  blackoutElement.classList.toggle('active');
}
},{}],"js/buttonCurrency.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectElement = exports.buttonCurrency = void 0;
var buttonCurrency = exports.buttonCurrency = document.querySelector('.header__info-currency');
var selectElement = exports.selectElement = document.querySelector('.header__select');
buttonCurrency.addEventListener('click', function (event) {
  selectElement.classList.toggle('open');
});
},{}],"js/selectLocStorage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectLocStorage = exports.headerCurrencyText = exports.headerCurrencyIcon = void 0;
var _selectLocStorage$ico, _selectLocStorage$tex;
var selectLocStorage = exports.selectLocStorage = JSON.parse(localStorage.getItem('select')) || [];
var headerCurrencyIcon = exports.headerCurrencyIcon = document.querySelector('.header__currency-icon');
var headerCurrencyText = exports.headerCurrencyText = document.querySelector('.header__currency-text');
headerCurrencyIcon.innerHTML = (_selectLocStorage$ico = selectLocStorage.icon) !== null && _selectLocStorage$ico !== void 0 ? _selectLocStorage$ico : headerCurrencyIcon.innerHTML;
headerCurrencyText.innerText = (_selectLocStorage$tex = selectLocStorage.text) !== null && _selectLocStorage$tex !== void 0 ? _selectLocStorage$tex : headerCurrencyText.innerText;
if (selectLocStorage.id) {
  document.getElementById(selectLocStorage.id).lastElementChild.checked = true;
}
},{}],"js/countLocStorage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countLocStorage = exports.basketTitleButton = exports.basketResult = exports.basketProducts = exports.basketCountElements = exports.basketContent = void 0;
var basketProducts = exports.basketProducts = document.querySelector('.basket__products');
var basketCountElements = exports.basketCountElements = document.querySelectorAll('.basketCount');
var basketContent = exports.basketContent = document.querySelector('.basket__content');
var basketResult = exports.basketResult = document.querySelector('.basket__result');
var basketTitleButton = exports.basketTitleButton = document.querySelector('.basket__title-button');
var countLocStorage = exports.countLocStorage = JSON.parse(localStorage.getItem('count')) || [];
if (countLocStorage > 0) {
  Array.from(basketCountElements).forEach(function (el) {
    return el.innerText = countLocStorage;
  });
  Array.from(basketCountElements).forEach(function (el) {
    return el.style = "visibility: visible;";
  });
  basketContent.style = 'display: none';
  basketResult.style = ' visibility: visible';
  basketTitleButton.style = 'background-color: rgba(230, 7, 234, 0.8823529412)';
}
},{}],"js/totalLocStirage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.totalLocStorage = exports.basketResultSumm = exports.basketResultProduct = exports.basketResultDiscaunt = void 0;
var _countLocStorage = require("./countLocStorage.js");
var basketResultProduct = exports.basketResultProduct = document.querySelector('.basket__result-product');
var basketResultDiscaunt = exports.basketResultDiscaunt = document.querySelector('.basket__result-discaunt');
var basketResultSumm = exports.basketResultSumm = document.querySelector('.basket__result-summ');
var totalLocStorage = exports.totalLocStorage = JSON.parse(localStorage.getItem('total')) || [];
if (totalLocStorage.length !== 0) {
  basketResultProduct.firstElementChild.innerText = "\u0422\u043E\u0432\u0430\u0440\u044B , ".concat(totalLocStorage.count, " \u0448\u0442.");
  basketResultProduct.lastElementChild.innerHTML = "".concat(totalLocStorage.price, " p.");
  basketResultDiscaunt.lastElementChild.innerText = "-".concat(totalLocStorage.discaunt, " p.");
  basketResultSumm.lastElementChild.innerText = "".concat(totalLocStorage.summ, " p.");
}
},{"./countLocStorage.js":"js/countLocStorage.js"}],"js/basketThingsLocStorage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.produkts = exports.cardWrapper = exports.basketThingsLocStorage = void 0;
var _countLocStorage = require("./countLocStorage.js");
var cardWrapper = exports.cardWrapper = document.querySelector('.card__wrapper');
var basketThingsLocStorage = exports.basketThingsLocStorage = JSON.parse(localStorage.getItem('basketThings')) || [];
var produkts = exports.produkts = basketThingsLocStorage;
for (var i = 0; i < basketThingsLocStorage.length; i++) {
  var produkt = document.createElement('li');
  produkt.classList.add('basket__products-item');
  _countLocStorage.basketProducts.style = 'display: flex';
  _countLocStorage.basketProducts.append(produkt);
  var produktItem = document.querySelector('.basket__products-item:last-Child');
  var photoWrapper = document.createElement('div');
  photoWrapper.classList.add('basket__products-photo');
  var name = document.createElement('p');
  name.classList.add('basket__products-name');
  name.innerText = basketThingsLocStorage[i].name;
  var price = document.createElement('p');
  price.classList.add('basket__products-price');
  price.innerText = basketThingsLocStorage[i].price;
  produktItem.append(photoWrapper, name, price);
  var img = {};
  for (var j = 0; j < cardWrapper.children.length; j++) {
    if (cardWrapper.children[j].firstElementChild.firstElementChild.src === basketThingsLocStorage[i].img) {
      img = cardWrapper.children[j].firstElementChild.firstElementChild.cloneNode();
      cardWrapper.children[j].lastElementChild.previousElementSibling.style = 'background-color: rgb(224 179 225 / 26%)';
      cardWrapper.children[j].lastElementChild.previousElementSibling.children[0].style = 'display: none';
      cardWrapper.children[j].lastElementChild.previousElementSibling.children[1].innerText = 'В корзине';
      cardWrapper.children[j].lastElementChild.previousElementSibling.children[1].style = 'color: rgba(230, 7, 234, 0.8823529412)';
    }
  }
  var photo = document.querySelector(".basket__products-item:last-Child .basket__products-photo ");
  photo.append(img);
}
},{"./countLocStorage.js":"js/countLocStorage.js"}],"js/openCloseSelect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openCloseSelect = openCloseSelect;
var _selectLocStorage = require("./selectLocStorage.js");
var _buttonCurrency = require("./buttonCurrency.js");
function openCloseSelect(event) {
  if (!event.target.closest('.header__select') && !event.target.closest('.header__info-currency')) {
    _buttonCurrency.selectElement.classList.remove('open');
  }
  if (event.target.closest('.header__select-item')) {
    var selectItemElement = event.target.closest('.header__select-item');
    _selectLocStorage.headerCurrencyIcon.innerHTML = selectItemElement.children[0].innerHTML;
    _selectLocStorage.headerCurrencyText.innerText = selectItemElement.children[1].innerText;
    selectItemElement.children[3].checked = true;
    _buttonCurrency.selectElement.classList.remove('open');
    var objekt = {
      icon: _selectLocStorage.headerCurrencyIcon.innerHTML,
      text: _selectLocStorage.headerCurrencyText.innerText,
      id: selectItemElement.id
    };
    localStorage.setItem("select", JSON.stringify(objekt));
  }
}
},{"./selectLocStorage.js":"js/selectLocStorage.js","./buttonCurrency.js":"js/buttonCurrency.js"}],"js/closeBurgerMenu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeBurgerMenu = closeBurgerMenu;
var _openBurgerMenu = require("./openBurgerMenu.js");
function closeBurgerMenu(event) {
  if (!event.target.closest('.header__burger-menu') && !event.target.closest('.header__burger') && !event.target.closest('.basket-button') && !event.target.closest('.basket')) {
    _openBurgerMenu.buttonBurger.classList.remove('isActive');
    _openBurgerMenu.blackoutElement.classList.remove('active');
  }
  if (event.target.closest('.header__burger-menu')) {
    _openBurgerMenu.buttonBurger.classList.remove('isActive');
    _openBurgerMenu.blackoutElement.classList.remove('active');
  }
}
},{"./openBurgerMenu.js":"js/openBurgerMenu.js"}],"js/openModalCard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openModalCard = openModalCard;
function openModalCard(event) {
  if (event.target.closest('.card__item') && !event.target.closest('.card__button')) {
    event.target.closest('.card__item').lastElementChild.classList.add('open-modal');
  }
}
},{}],"js/closeModalCard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeModalCard = closeModalCard;
function closeModalCard(event) {
  if (!event.target.closest('.cardModal__wrapper')) {
    return;
  }
  if (!event.target.closest('.cardModal__body')) {
    event.target.closest('.cardModal').classList.remove('open-modal');
  }
  if (event.target.closest('.cardModal__button')) {
    event.target.closest('.cardModal').classList.remove('open-modal');
  }
}
},{}],"js/productSearch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputSearch = void 0;
exports.productSearch = productSearch;
var _basketThingsLocStorage = require("./basketThingsLocStorage.js");
var inputSearch = exports.inputSearch = document.querySelector('.header__search');
function productSearch() {
  for (var i = 0; i < _basketThingsLocStorage.cardWrapper.children.length; i++) {
    var title = _basketThingsLocStorage.cardWrapper.children[i].children[2].lastElementChild.innerText.toLowerCase();
    if (inputSearch.value && !title.includes(inputSearch.value.toLowerCase())) {
      _basketThingsLocStorage.cardWrapper.children[i].style = "display: none";
    } else {
      _basketThingsLocStorage.cardWrapper.children[i].style = "display: flex";
    }
  }
}
},{"./basketThingsLocStorage.js":"js/basketThingsLocStorage.js"}],"js/openBasket.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basketButton = exports.basket = void 0;
exports.openBasket = openBasket;
var _countLocStorage = require("./countLocStorage.js");
var _openBurgerMenu = require("./openBurgerMenu.js");
var basketButton = exports.basketButton = document.querySelector('.basket-button');
var basket = exports.basket = document.querySelector('.basket');
function openBasket() {
  basket.classList.toggle('active');
  _openBurgerMenu.blackoutElement.classList.toggle('active');
  _countLocStorage.basketResult.classList.toggle('active');
  document.body.style.overflow = 'hidden';
}
},{"./countLocStorage.js":"js/countLocStorage.js","./openBurgerMenu.js":"js/openBurgerMenu.js"}],"js/closeBasket.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeBasket = closeBasket;
var _countLocStorage = require("./countLocStorage.js");
var _openBasket = require("./openBasket.js");
function closeBasket(event) {
  if (!event.target.closest('.basket') && !event.target.closest('.basket-button')) {
    _openBasket.basket.classList.remove('active');
    _countLocStorage.basketResult.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}
},{"./countLocStorage.js":"js/countLocStorage.js","./openBasket.js":"js/openBasket.js"}],"js/clearBasket.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearBasket = clearBasket;
var _countLocStorage = require("./countLocStorage.js");
var _basketThingsLocStorage = require("./basketThingsLocStorage.js");
function clearBasket() {
  _countLocStorage.basketContent.style = 'display: flex';
  _countLocStorage.basketResult.style = ' visibility: hidden';
  _countLocStorage.basketProducts.style = ' display: none';
  _countLocStorage.basketTitleButton.style = 'background-color: rgb(150 145 150 / 88%)';
  Array.from(_countLocStorage.basketCountElements).forEach(function (el) {
    return el.style = "visibility: hidden;";
  });
  for (var i = _countLocStorage.basketProducts.children.length - 1; i >= 0; i--) {
    _countLocStorage.basketProducts.removeChild(_countLocStorage.basketProducts.lastElementChild);
  }
  for (var _i = 0; _i < _basketThingsLocStorage.cardWrapper.children.length; _i++) {
    _basketThingsLocStorage.cardWrapper.children[_i].lastElementChild.previousElementSibling.style = 'background-color: rgba(230, 7, 234, 0.8823529412)';
    _basketThingsLocStorage.cardWrapper.children[_i].lastElementChild.previousElementSibling.children[0].style = 'display: flex';
    _basketThingsLocStorage.cardWrapper.children[_i].lastElementChild.previousElementSibling.children[1].innerText = 'Послезавтра';
    _basketThingsLocStorage.cardWrapper.children[_i].lastElementChild.previousElementSibling.children[1].style = 'color: #fff';
  }
  _basketThingsLocStorage.produkts.length = 0;
  localStorage.removeItem("basketThings");
  localStorage.removeItem("total");
  localStorage.setItem("count", JSON.stringify(_countLocStorage.basketProducts.children.length));
}
},{"./countLocStorage.js":"js/countLocStorage.js","./basketThingsLocStorage.js":"js/basketThingsLocStorage.js"}],"js/openLogin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modalLogin = exports.loginButton = void 0;
exports.openLogin = openLogin;
var loginButton = exports.loginButton = document.querySelector('.login-button');
var modalLogin = exports.modalLogin = document.querySelector('.modalLogin');
function openLogin() {
  modalLogin.classList.add('open-modalLogin');
}
},{}],"js/closeLogin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeLogin = closeLogin;
var _openLogin = require("./openLogin.js");
function closeLogin(event) {
  if (event.target.closest('.modalLogin__button-close') || !event.target.closest('.modalLogin__wrapper') && !event.target.closest('.login-button')) {
    _openLogin.modalLogin.classList.remove('open-modalLogin');
  }
}
},{"./openLogin.js":"js/openLogin.js"}],"js/openSelectLogin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modalLoginCode = void 0;
exports.openSelectLogin = openSelectLogin;
var modalLoginCode = exports.modalLoginCode = document.querySelector('.modalLogin__wrapper-telCode');
var headerModalLogin = document.querySelector('.header__modalLogin');
function openSelectLogin() {
  headerModalLogin.classList.toggle('open');
}
},{}],"js/skript.js":[function(require,module,exports) {
"use strict";

var _mySwiper = require("./mySwiper.js");
var _mySwiperModal = require("./mySwiper-modal.js");
var _mySwiperMini = require("./mySwiper-mini.js");
var _openBurgerMenu = require("./openBurgerMenu.js");
var _buttonCurrency = require("./buttonCurrency.js");
var _selectLocStorage = require("./selectLocStorage.js");
var _countLocStorage = require("./countLocStorage.js");
var _totalLocStirage = require("./totalLocStirage.js");
var _basketThingsLocStorage = require("./basketThingsLocStorage.js");
var _openCloseSelect = require("./openCloseSelect.js");
var _closeBurgerMenu = require("./closeBurgerMenu.js");
var _openModalCard = require("./openModalCard.js");
var _closeModalCard = require("./closeModalCard.js");
var _productSearch = require("./productSearch.js");
var _openBasket = require("./openBasket.js");
var _closeBasket = require("./closeBasket.js");
var _clearBasket = require("./clearBasket.js");
var _openLogin = require("./openLogin.js");
var _closeLogin = require("./closeLogin.js");
var _openSelectLogin = require("./openSelectLogin.js");
var resultProduct = +_totalLocStirage.totalLocStorage.price;
var resultDiscaunt = +_totalLocStirage.totalLocStorage.discaunt;
var resultSumm = +_totalLocStirage.totalLocStorage.summ;
if (_totalLocStirage.totalLocStorage.length === 0) {
  resultProduct = 0;
  resultDiscaunt = 0;
  resultSumm = 0;
}
_openBurgerMenu.buttonBurger.addEventListener('click', _openBurgerMenu.openBurgerMenu);
document.documentElement.addEventListener('click', _openCloseSelect.openCloseSelect);
document.documentElement.addEventListener('click', _closeBurgerMenu.closeBurgerMenu);
document.documentElement.addEventListener('click', _openModalCard.openModalCard);
document.documentElement.addEventListener('click', _closeModalCard.closeModalCard);
_productSearch.inputSearch.addEventListener("change", _productSearch.productSearch);
_openBasket.basketButton.addEventListener('click', _openBasket.openBasket);
document.documentElement.addEventListener('click', _closeBasket.closeBasket, resultProduct, resultDiscaunt);
_countLocStorage.basketTitleButton.addEventListener('click', function () {
  (0, _clearBasket.clearBasket)();
  resultProduct = 0;
  resultDiscaunt = 0;
  resultSumm = 0;
});
_openSelectLogin.modalLoginCode.addEventListener('click', _openSelectLogin.openSelectLogin);
_openLogin.loginButton.addEventListener('click', _openLogin.openLogin);
document.documentElement.addEventListener('click', _closeLogin.closeLogin);
var modalCardElement = document.querySelector('.modal-card');
var total = {};
document.documentElement.addEventListener('click', function (event) {
  if (event.target.closest('.card__button')) {
    var card = event.target.closest('.card__button');
    if (card.children[1].innerText !== 'В корзине') {
      card.style = 'background-color: rgb(224 179 225 / 26%)';
      card.children[0].style = 'display: none';
      card.children[1].innerText = 'В корзине';
      card.children[1].style = 'color: rgba(230, 7, 234, 0.8823529412)';
      var produkt = document.createElement('li');
      produkt.classList.add('basket__products-item');
      _countLocStorage.basketProducts.style = 'display: flex';
      _countLocStorage.basketProducts.append(produkt);
      var produktItem = document.querySelector('.basket__products-item:last-Child');
      var photoWrapper = document.createElement('div');
      photoWrapper.classList.add('basket__products-photo');
      var name = document.createElement('p');
      name.classList.add('basket__products-name');
      name.innerText = event.target.closest('.card__item').children[2].lastElementChild.innerText;
      var price = document.createElement('p');
      price.classList.add('basket__products-price');
      price.innerText = event.target.closest('.card__item').children[1].children[0].nextElementSibling.innerText;
      produktItem.append(photoWrapper, name, price);
      var img = event.target.closest('.card__item').children[0].children[0].cloneNode();
      var photo = document.querySelector(".basket__products-item:last-Child .basket__products-photo ");
      photo.append(img);
      var productItem = {
        name: name.innerText,
        price: price.innerText,
        img: img.src
      };
      _basketThingsLocStorage.produkts.push(productItem);
      localStorage.setItem("basketThings", JSON.stringify(_basketThingsLocStorage.produkts));
      Array.from(_countLocStorage.basketCountElements).forEach(function (el) {
        return el.style = "visibility: visible;";
      });
      Array.from(_countLocStorage.basketCountElements).forEach(function (el) {
        return el.innerText = _countLocStorage.basketProducts.children.length;
      });
      _countLocStorage.basketContent.style = 'display: none';
      _countLocStorage.basketResult.style = ' visibility: visible';
      _countLocStorage.basketTitleButton.style = 'background-color: rgba(230, 7, 234, 0.8823529412)';
      modalCardElement.classList.add('modal-animstion');
      modalCardElement.addEventListener('animationend', function () {
        modalCardElement.classList.remove('modal-animstion');
      });
      resultProduct += +event.target.closest('.card__item').children[1].lastElementChild.innerText.match(/[\d.]+/)[0];
      resultSumm += +event.target.closest('.card__item').children[1].lastElementChild.previousElementSibling.innerText.match(/[\d.]+/)[0];
      resultDiscaunt = resultProduct - resultSumm;
      _totalLocStirage.basketResultProduct.firstElementChild.innerText = "\u0422\u043E\u0432\u0430\u0440\u044B , ".concat(_countLocStorage.basketProducts.children.length, " \u0448\u0442.");
      _totalLocStirage.basketResultProduct.lastElementChild.innerHTML = "".concat(Number(resultProduct).toFixed(2), " p.");
      _totalLocStirage.basketResultDiscaunt.lastElementChild.innerText = "-".concat(Number(resultDiscaunt).toFixed(2), " p.");
      _totalLocStirage.basketResultSumm.lastElementChild.innerText = "".concat(Number(resultSumm).toFixed(2), " p.");
      total = {
        count: _countLocStorage.basketProducts.children.length,
        price: Number(resultProduct).toFixed(2),
        discaunt: Number(resultDiscaunt).toFixed(2),
        summ: Number(resultSumm).toFixed(2)
      };
      localStorage.setItem("total", JSON.stringify(total));
      localStorage.setItem("count", JSON.stringify(_countLocStorage.basketProducts.children.length));
    }
  }
});
document.documentElement.addEventListener('click', function (event) {
  if (event.target.classList.contains("basket__products-price")) {
    _countLocStorage.basketProducts.removeChild(event.target.closest(".basket__products-item"));
    Array.from(_countLocStorage.basketCountElements).forEach(function (el) {
      return el.innerText = _countLocStorage.basketProducts.children.length;
    });
    for (var i = 0; i < _countLocStorage.basketProducts.children.length; i++) {
      if (_countLocStorage.basketProducts.children[i].children[1].innerText !== _basketThingsLocStorage.produkts[i].name) {
        _basketThingsLocStorage.produkts.splice(i, 1);
      }
    }
    if (_countLocStorage.basketProducts.children.length !== _basketThingsLocStorage.produkts.length) {
      _basketThingsLocStorage.produkts.splice(_basketThingsLocStorage.produkts.length - 1);
    }
    if (_countLocStorage.basketProducts.children.length < 1) {
      Array.from(_countLocStorage.basketCountElements).forEach(function (el) {
        return el.style = "visibility: hidden;";
      });
      _countLocStorage.basketContent.style = 'display: flex';
      _countLocStorage.basketProducts.style = ' display: none';
      _countLocStorage.basketResult.classList.remove('active');
      _countLocStorage.basketTitleButton.style = 'background-color: rgb(150 145 150 / 88%)';
    }
    var _cardWrapper = document.querySelector('.card__wrapper');
    for (var _i = 0; _i < _cardWrapper.children.length; _i++) {
      if (event.target.closest('.basket__products-item').firstElementChild.firstElementChild.src === _cardWrapper.children[_i].firstElementChild.firstElementChild.src) {
        resultProduct -= +_cardWrapper.children[_i].children[1].lastElementChild.innerText.match(/[\d.]+/)[0];
        resultSumm -= +_cardWrapper.children[_i].children[1].lastElementChild.previousElementSibling.innerText.match(/[\d.]+/)[0];
        resultDiscaunt = resultProduct - resultSumm;
        _totalLocStirage.basketResultProduct.firstElementChild.innerText = "\u0422\u043E\u0432\u0430\u0440\u044B , ".concat(_countLocStorage.basketProducts.children.length, " \u0448\u0442.");
        _totalLocStirage.basketResultProduct.lastElementChild.innerHTML = "".concat(resultProduct.toFixed(2), " p.");
        _totalLocStirage.basketResultDiscaunt.lastElementChild.innerText = "-".concat(resultDiscaunt.toFixed(2), " p.");
        _totalLocStirage.basketResultSumm.lastElementChild.innerText = "".concat(resultSumm.toFixed(2), " p.");
        total = {
          count: _countLocStorage.basketProducts.children.length,
          price: resultProduct.toFixed(2),
          discaunt: resultDiscaunt.toFixed(2),
          summ: resultSumm.toFixed(2)
        };
        _cardWrapper.children[_i].lastElementChild.previousElementSibling.style = 'background-color: rgba(230, 7, 234, 0.8823529412)';
        _cardWrapper.children[_i].lastElementChild.previousElementSibling.children[0].style = 'display: flex';
        _cardWrapper.children[_i].lastElementChild.previousElementSibling.children[1].innerText = 'Послезавтра';
        _cardWrapper.children[_i].lastElementChild.previousElementSibling.children[1].style = 'color: #fff';
        localStorage.setItem("total", JSON.stringify(total));
      }
    }
    localStorage.setItem("basketThings", JSON.stringify(_basketThingsLocStorage.produkts));
    localStorage.setItem("count", JSON.stringify(_countLocStorage.basketProducts.children.length));
  }
});
},{"./mySwiper.js":"js/mySwiper.js","./mySwiper-modal.js":"js/mySwiper-modal.js","./mySwiper-mini.js":"js/mySwiper-mini.js","./openBurgerMenu.js":"js/openBurgerMenu.js","./buttonCurrency.js":"js/buttonCurrency.js","./selectLocStorage.js":"js/selectLocStorage.js","./countLocStorage.js":"js/countLocStorage.js","./totalLocStirage.js":"js/totalLocStirage.js","./basketThingsLocStorage.js":"js/basketThingsLocStorage.js","./openCloseSelect.js":"js/openCloseSelect.js","./closeBurgerMenu.js":"js/closeBurgerMenu.js","./openModalCard.js":"js/openModalCard.js","./closeModalCard.js":"js/closeModalCard.js","./productSearch.js":"js/productSearch.js","./openBasket.js":"js/openBasket.js","./closeBasket.js":"js/closeBasket.js","./clearBasket.js":"js/clearBasket.js","./openLogin.js":"js/openLogin.js","./closeLogin.js":"js/closeLogin.js","./openSelectLogin.js":"js/openSelectLogin.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57267" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/skript.js"], null)
//# sourceMappingURL=/skript.2f765fda.js.map