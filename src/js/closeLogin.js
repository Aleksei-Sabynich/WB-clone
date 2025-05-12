import { modalLogin} from './openLogin.js'


function closeLogin (event){
   if(event.target.closest('.modalLogin__button-close') 
      || !event.target.closest('.modalLogin__wrapper') 
      && !event.target.closest('.login-button'))
      {
      modalLogin.classList.remove('open-modalLogin')
   }
}

export {closeLogin}