const modalLoginCode = document.querySelector('.modalLogin__wrapper-telCode')
const headerModalLogin = document.querySelector('.header__modalLogin')


function openSelectLogin (){

  headerModalLogin.classList.toggle('open')
}


export {openSelectLogin,  modalLoginCode}
