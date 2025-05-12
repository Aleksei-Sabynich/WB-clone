const loginButton = document.querySelector('.login-button')
const modalLogin = document.querySelector('.modalLogin')

function openLogin(){
  modalLogin.classList.add('open-modalLogin')
}

export {loginButton, modalLogin, openLogin }
