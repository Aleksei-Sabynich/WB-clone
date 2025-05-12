
import {basketProducts} from './countLocStorage.js'


const basketResultProduct =document.querySelector('.basket__result-product')
const basketResultDiscaunt = document.querySelector('.basket__result-discaunt')
const basketResultSumm = document.querySelector('.basket__result-summ')


const totalLocStorage = JSON.parse(localStorage.getItem('total')) || [];
if( totalLocStorage.length !== 0){

   basketResultProduct.firstElementChild.innerText =`Товары , ${ totalLocStorage.count} шт.`
   basketResultProduct.lastElementChild.innerHTML = `${totalLocStorage.price} p.`   
   basketResultDiscaunt.lastElementChild.innerText = `-${totalLocStorage.discaunt} p.`  
   basketResultSumm.lastElementChild.innerText =  `${totalLocStorage.summ} p.`  

}




export {basketResultProduct, basketResultDiscaunt, basketResultSumm, totalLocStorage}
  