import { basketProducts, basketCountElements,basketContent, basketResult, basketTitleButton} from './countLocStorage.js'
import {basketResultProduct, basketResultDiscaunt, basketResultSumm} from './totalLocStirage.js'
import {produkts} from './basketThingsLocStorage.js'


const modalCardElement = document.querySelector('.modal-card')


function addProduct (event){
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
    }
  }
}

export {addProduct, modalCardElement}