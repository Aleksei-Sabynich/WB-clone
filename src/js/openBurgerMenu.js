
const buttonBurger =  document.querySelector('.header__burger')
const blackoutElement = document.querySelector('.blackout')


function openBurgerMenu(){
  buttonBurger.classList.toggle('isActive')   
  blackoutElement.classList.toggle('active')
}


export {buttonBurger,blackoutElement, openBurgerMenu }