function openModalCard (event){

   if( event.target.closest('.card__item') && !event.target.closest('.card__button')){
      event.target.closest('.card__item').lastElementChild.classList.add('open-modal')

   }

}

export {openModalCard}