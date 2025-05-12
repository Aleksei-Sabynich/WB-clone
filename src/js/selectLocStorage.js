const selectLocStorage = JSON.parse(localStorage.getItem('select')) || [];


const headerCurrencyIcon = document.querySelector('.header__currency-icon')
const headerCurrencyText = document.querySelector('.header__currency-text')


headerCurrencyIcon.innerHTML = selectLocStorage.icon ?? headerCurrencyIcon.innerHTML
headerCurrencyText.innerText = selectLocStorage.text ??  headerCurrencyText.innerText

if(selectLocStorage.id){
  document.getElementById(selectLocStorage.id).lastElementChild.checked = true
}

export {selectLocStorage, headerCurrencyIcon, headerCurrencyText}