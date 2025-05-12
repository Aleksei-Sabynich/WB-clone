import {buttonBurger, blackoutElement} from './openBurgerMenu.js'

function closeBurgerMenu(event) {

   if( !event.target.closest('.header__burger-menu') && !event.target.closest('.header__burger') && !event.target.closest('.basket-button')&& !event.target.closest('.basket') ){
      buttonBurger.classList.remove('isActive')   
      blackoutElement.classList.remove('active')
   }
   if( event.target.closest('.header__burger-menu')){
    buttonBurger.classList.remove('isActive')   
    blackoutElement.classList.remove('active')
  }
}

export {closeBurgerMenu}
