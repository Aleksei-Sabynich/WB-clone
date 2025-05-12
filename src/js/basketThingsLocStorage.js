import {basketProducts} from './countLocStorage.js'



const cardWrapper = document.querySelector('.card__wrapper')
const basketThingsLocStorage  = JSON.parse(localStorage.getItem('basketThings')) || [];

let produkts = basketThingsLocStorage


for (let i = 0; i < basketThingsLocStorage.length; i++) {

   const produkt = document.createElement('li')
   produkt.classList.add('basket__products-item')
   
   basketProducts.style = 'display: flex'
   basketProducts.append(produkt)
   
   
   const produktItem = document.querySelector('.basket__products-item:last-Child')
   
   
   
   const photoWrapper = document.createElement('div')
   photoWrapper.classList.add('basket__products-photo')
   
   const name = document.createElement('p')
   name.classList.add('basket__products-name')
   name.innerText = basketThingsLocStorage[i].name
   
   const price = document.createElement('p')
   price.classList.add('basket__products-price')
   price.innerText =basketThingsLocStorage[i].price
   
   produktItem.append(photoWrapper,name,price)
   

   let img ={}
   for (let j = 0; j <cardWrapper.children.length; j++ ){

   if(cardWrapper.children[j].firstElementChild.firstElementChild.src === basketThingsLocStorage[i].img){

      img = cardWrapper.children[j].firstElementChild.firstElementChild.cloneNode()
      cardWrapper.children[j].lastElementChild.previousElementSibling.style = 'background-color: rgb(224 179 225 / 26%)'
      cardWrapper.children[j].lastElementChild.previousElementSibling.children[0].style = 'display: none'
      cardWrapper.children[j].lastElementChild.previousElementSibling.children[1].innerText = 'В корзине'
      cardWrapper.children[j].lastElementChild.previousElementSibling.children[1].style = 'color: rgba(230, 7, 234, 0.8823529412)'
   }
   }

   const photo = document.querySelector(".basket__products-item:last-Child .basket__products-photo ");
   photo.append(img)
}

export {cardWrapper, basketThingsLocStorage, produkts}