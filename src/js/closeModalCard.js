function closeModalCard(event){

   if(!event.target.closest('.cardModal__wrapper')){ return}
   if(!event.target.closest('.cardModal__body')){
      event.target.closest('.cardModal').classList.remove('open-modal')
   }
   if( event.target.closest('.cardModal__button')){
    event.target.closest('.cardModal').classList.remove('open-modal')
  }
  
}

export {closeModalCard}