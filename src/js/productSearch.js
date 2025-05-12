import {cardWrapper} from './basketThingsLocStorage.js'



const inputSearch = document.querySelector('.header__search')

function productSearch(){

  for (let i = 0; i < cardWrapper.children.length; i++) {

    const title = cardWrapper.children[i].children[2].lastElementChild.innerText.toLowerCase()

    if (inputSearch.value && !title.includes( inputSearch.value.toLowerCase())) {
      cardWrapper.children[i].style = "display: none";
    } 
     else {
      cardWrapper.children[i].style = "display: flex";
    }
  }
}

export {inputSearch, productSearch}