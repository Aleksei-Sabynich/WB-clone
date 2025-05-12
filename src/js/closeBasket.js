import {basketResult} from './countLocStorage.js'
import  {basket} from './openBasket.js'


function closeBasket(event) {

  if(!event.target.closest('.basket') && !event.target.closest('.basket-button') ){
    basket.classList.remove('active')
    basketResult.classList.remove('active')
    document.body.style.overflow = 'auto';
  }
 
}

export {closeBasket}
