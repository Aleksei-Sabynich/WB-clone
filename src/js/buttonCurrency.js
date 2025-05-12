const buttonCurrency = document.querySelector('.header__info-currency')
const selectElement = document.querySelector('.header__select')

buttonCurrency.addEventListener('click', (event) => { 
  selectElement.classList.toggle('open')
})

export {buttonCurrency, selectElement }