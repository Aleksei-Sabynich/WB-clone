const basketProducts = document.querySelector('.basket__products')
const basketCountElements = document.querySelectorAll('.basketCount')
const basketContent = document.querySelector('.basket__content')
const basketResult = document.querySelector('.basket__result')
const basketTitleButton = document.querySelector('.basket__title-button')


const countLocStorage = JSON.parse(localStorage.getItem('count')) || [];


if(countLocStorage>0){
  Array.from(basketCountElements).forEach((el) => el.innerText =countLocStorage)
  Array.from(basketCountElements).forEach((el) => el.style = "visibility: visible;")
  basketContent.style = 'display: none'
  basketResult.style = ' visibility: visible'
  basketTitleButton.style = 'background-color: rgba(230, 7, 234, 0.8823529412)'

}

export {countLocStorage, basketProducts, basketCountElements,basketContent, basketResult, basketTitleButton}