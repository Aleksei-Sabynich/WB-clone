import {swiper}         from './mySwiper.js'
import {swiperModal}    from './mySwiper-modal.js'
import {swiperMini}     from './mySwiper-mini.js'
import {buttonBurger,blackoutElement,openBurgerMenu } from './openBurgerMenu.js'
import {buttonCurrency, selectElement } from './buttonCurrency.js'
import {selectLocStorage, headerCurrencyIcon, headerCurrencyText} from './selectLocStorage.js'
import {countLocStorage, basketProducts, basketCountElements,basketContent, basketResult, basketTitleButton} from './countLocStorage.js'
import {basketResultProduct, basketResultDiscaunt, basketResultSumm, totalLocStorage} from './totalLocStirage.js'
import {cardWrapper, basketThingsLocStorage, produkts} from './basketThingsLocStorage.js'
import {openCloseSelect} from './openCloseSelect.js'
import {closeBurgerMenu} from './closeBurgerMenu.js'
import {openModalCard} from './openModalCard.js'
import {closeModalCard} from './closeModalCard.js'
import {inputSearch, productSearch} from './productSearch.js'
import { basketButton, basket, openBasket} from './openBasket.js'
import {closeBasket} from './closeBasket.js'
import {clearBasket} from './clearBasket.js'
import {loginButton, modalLogin, openLogin } from './openLogin.js'
import {closeLogin} from './closeLogin.js'
import {openSelectLogin,  modalLoginCode} from './openSelectLogin.js'


let resultProduct  = +totalLocStorage.price
let resultDiscaunt = +totalLocStorage.discaunt 
let resultSumm     = +totalLocStorage.summ


if(totalLocStorage.length === 0){
  resultProduct = 0
  resultDiscaunt = 0
  resultSumm = 0
}


buttonBurger.addEventListener( 'click', openBurgerMenu)

document.documentElement.addEventListener('click', openCloseSelect)

document.documentElement.addEventListener('click', closeBurgerMenu)

document.documentElement.addEventListener('click', openModalCard)

document.documentElement.addEventListener('click', closeModalCard)

inputSearch.addEventListener("change", productSearch)

basketButton.addEventListener('click', openBasket)

document.documentElement.addEventListener('click', closeBasket, resultProduct, resultDiscaunt,)

modalLoginCode.addEventListener('click',openSelectLogin)

loginButton.addEventListener('click',openLogin)

document.documentElement.addEventListener('click', closeLogin)

basketTitleButton.addEventListener('click', () =>{
  clearBasket()
  resultProduct = 0
  resultDiscaunt = 0
  resultSumm = 0

})




const modalCardElement = document.querySelector('.modal-card')
let total = {}


document.documentElement.addEventListener('click', (event) => { 

  if( event.target.closest('.card__button')){

    const card =  event.target.closest('.card__button')

    if(card.children[1].innerText !== 'В корзине' ){

      card.style = 'background-color: rgb(224 179 225 / 26%)'
      card.children[0].style = 'display: none'
      card.children[1].innerText = 'В корзине'
      card.children[1].style = 'color: rgba(230, 7, 234, 0.8823529412)'
   
      const produkt = document.createElement('li')
      produkt.classList.add('basket__products-item')

      basketProducts.style = 'display: flex'
      basketProducts.append(produkt)

      const produktItem = document.querySelector('.basket__products-item:last-Child')


      const photoWrapper = document.createElement('div')
      photoWrapper.classList.add('basket__products-photo')

      const name = document.createElement('p')
      name.classList.add('basket__products-name')
      name.innerText = event.target.closest('.card__item').children[2].lastElementChild.innerText

      const price = document.createElement('p')
      price.classList.add('basket__products-price')
      price.innerText = event.target.closest('.card__item').children[1].children[0].nextElementSibling.innerText
      
      produktItem.append(photoWrapper,name,price)

        
      const img = event.target.closest('.card__item').children[0].children[0].cloneNode()
      const photo = document.querySelector(".basket__products-item:last-Child .basket__products-photo ");
      photo.append(img)

      const productItem = {
        name: name.innerText,
        price:price.innerText,
        img: img.src
      }

      produkts.push(productItem);
      localStorage.setItem("basketThings", JSON.stringify(produkts))

      Array.from(basketCountElements).forEach((el) => el.style = "visibility: visible;")
      Array.from(basketCountElements).forEach((el) => el.innerText = basketProducts.children.length)

      basketContent.style = 'display: none'
      basketResult.style = ' visibility: visible'
      basketTitleButton.style = 'background-color: rgba(230, 7, 234, 0.8823529412)'

      
      modalCardElement.classList.add('modal-animstion')
  
      modalCardElement.addEventListener('animationend', () =>{
        modalCardElement.classList.remove('modal-animstion')
      })

      resultProduct += +event.target.closest('.card__item').children[1].lastElementChild.innerText.match(/[\d.]+/)[0]
      resultSumm += +event.target.closest('.card__item').children[1].lastElementChild.previousElementSibling.innerText.match(/[\d.]+/)[0]
      resultDiscaunt = resultProduct - resultSumm

      basketResultProduct.firstElementChild.innerText = `Товары , ${ basketProducts.children.length} шт.`
      basketResultProduct.lastElementChild.innerHTML = `${Number(resultProduct).toFixed(2)} p.`

      basketResultDiscaunt.lastElementChild.innerText = `-${Number(resultDiscaunt).toFixed(2)} p.`

      basketResultSumm.lastElementChild.innerText =  `${Number(resultSumm).toFixed(2)} p.`

      total = {
      count: basketProducts.children.length,
      price:Number(resultProduct).toFixed(2),
      discaunt: Number(resultDiscaunt).toFixed(2),
      summ:Number(resultSumm).toFixed(2)
      }

      localStorage.setItem("total", JSON.stringify(total))
      localStorage.setItem("count", JSON.stringify(basketProducts.children.length))

    }
    else{

      basket.classList.toggle('active')
      blackoutElement.classList.toggle('active')
      basketResult.classList.toggle('active')
      document.body.style.overflow = 'hidden';

    }

  }
  
})


document.documentElement.addEventListener('click', (event) =>{

  if (event.target.classList.contains("basket__products-price")){

    basketProducts.removeChild(event.target.closest(".basket__products-item"))
    Array.from(basketCountElements).forEach((el) => el.innerText = basketProducts.children.length)


    for (let i = 0; i < basketProducts.children.length; i++) {
      if (basketProducts.children[i].children[1].innerText !== produkts[i].name){
        produkts.splice(i, 1);
      }
    }
    if (basketProducts.children.length !== produkts.length) {
      produkts.splice(produkts.length - 1);
    }


    if(basketProducts.children.length <1){
      Array.from(basketCountElements).forEach((el) => el.style = "visibility: hidden;")
      basketContent.style = 'display: flex'
      basketProducts.style = ' display: none'
      basketResult.classList.remove('active')
      basketTitleButton.style = 'background-color: rgb(150 145 150 / 88%)'
    }


    const  cardWrapper = document.querySelector('.card__wrapper')
    for (let i = 0; i <cardWrapper.children.length; i++ ){
      if(event.target.closest('.basket__products-item').firstElementChild.firstElementChild.src ===cardWrapper.children[i].firstElementChild.firstElementChild.src){

    resultProduct -= +cardWrapper.children[i].children[1].lastElementChild.innerText.match(/[\d.]+/)[0]
    resultSumm -= +cardWrapper.children[i].children[1].lastElementChild.previousElementSibling.innerText.match(/[\d.]+/)[0]
    resultDiscaunt = resultProduct - resultSumm

    basketResultProduct.firstElementChild.innerText = `Товары , ${ basketProducts.children.length} шт.`
    basketResultProduct.lastElementChild.innerHTML = `${resultProduct.toFixed(2)} p.`
    basketResultDiscaunt.lastElementChild.innerText = `-${resultDiscaunt.toFixed(2)} p.`
    basketResultSumm.lastElementChild.innerText =  `${resultSumm.toFixed(2)} p.`


    total = {
      count: basketProducts.children.length,
      price:resultProduct.toFixed(2),
      discaunt: resultDiscaunt.toFixed(2),
      summ:resultSumm.toFixed(2)

        }
       
    cardWrapper.children[i].lastElementChild.previousElementSibling.style = 'background-color: rgba(230, 7, 234, 0.8823529412)'
    cardWrapper.children[i].lastElementChild.previousElementSibling.children[0].style = 'display: flex'
    cardWrapper.children[i].lastElementChild.previousElementSibling.children[1].innerText = 'Послезавтра'
    cardWrapper.children[i].lastElementChild.previousElementSibling.children[1].style = 'color: #fff'
    
    localStorage.setItem("total", JSON.stringify(total))
      }
    }

    localStorage.setItem("basketThings", JSON.stringify(produkts))
    localStorage.setItem("count", JSON.stringify(basketProducts.children.length))
  }
})

