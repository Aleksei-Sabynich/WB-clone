import {headerCurrencyIcon,headerCurrencyText} from './selectLocStorage.js'
import {selectElement } from './buttonCurrency.js'



function openCloseSelect (event){
  
  if( !event.target.closest('.header__select') && !event.target.closest('.header__info-currency')){
    selectElement.classList.remove('open')
  }
   if( event.target.closest('.header__select-item')){
    
    const selectItemElement = event.target.closest('.header__select-item')

    headerCurrencyIcon.innerHTML = selectItemElement.children[0].innerHTML
    headerCurrencyText.innerText = selectItemElement.children[1].innerText
    selectItemElement.children[3].checked = true
    selectElement.classList.remove('open')

    const objekt = {
      icon: headerCurrencyIcon.innerHTML,
      text: headerCurrencyText.innerText,
      id:selectItemElement.id
    }
    
    localStorage.setItem("select", JSON.stringify(objekt))
  }
 
}

export {openCloseSelect}