import {basketProducts,basketContent, basketResult, basketTitleButton,basketCountElements} from './countLocStorage.js'
import {cardWrapper, produkts} from './basketThingsLocStorage.js'


function clearBasket(){

  basketContent.style = 'display: flex'
  basketResult.style = ' visibility: hidden'
  basketProducts.style = ' display: none'
  basketTitleButton.style = 'background-color: rgb(150 145 150 / 88%)'

  Array.from(basketCountElements).forEach((el) => el.style = "visibility: hidden;")
  for( let i = basketProducts.children.length-1; i >= 0; i--){

  basketProducts.removeChild(basketProducts.lastElementChild)
  }

  for (let i = 0; i <cardWrapper.children.length; i++ ){

    cardWrapper.children[i].lastElementChild.previousElementSibling.style = 'background-color: rgba(230, 7, 234, 0.8823529412)'
    cardWrapper.children[i].lastElementChild.previousElementSibling.children[0].style = 'display: flex'
    cardWrapper.children[i].lastElementChild.previousElementSibling.children[1].innerText = 'Послезавтра'
    cardWrapper.children[i].lastElementChild.previousElementSibling.children[1].style = 'color: #fff'
        
  }

  produkts.length = 0
  localStorage.removeItem("basketThings");
  localStorage.removeItem("total")
  localStorage.setItem("count", JSON.stringify(basketProducts.children.length))

}

export {clearBasket}