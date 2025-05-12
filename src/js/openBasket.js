import {basketResult} from './countLocStorage.js'
import {blackoutElement} from './openBurgerMenu.js'

const basketButton  = document.querySelector('.basket-button')
const basket = document.querySelector('.basket')

function openBasket(){

  basket.classList.toggle('active')
  blackoutElement.classList.toggle('active')
  basketResult.classList.toggle('active')
  document.body.style.overflow = 'hidden';

}

export { basketButton, basket, openBasket}