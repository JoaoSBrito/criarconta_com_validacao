const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')

form.addEventListener('submit', e => {
  // CANCELAR ELEMENTOS PADROES DA WEB //
  e.preventDefault()

  checkInputs()
})

// FUNÇÃO PARA VALIDAÇÃO DOS CAMPOS //
function checkInputs() {
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim() //METODO TRIM É PARA ELIMINAR ESPAÇOS
  const passwordValue = password.value.trim()
  const confirmPasswordValue = confirmPassword.value.trim()

  //VALIDAÇÃO CAMPO USERNAME

  if (usernameValue === '') {
    //ADICIONA ERRO E CLASSE
    setErrorFor(username, 'Preencha o campo')
  }
  // ADICIONA CLASSE DE SUCESSO
  else {
    setSuccessFor(username)
  }

  if (emailValue === '') {
    setErrorFor(email, 'Preencha o campo')
  } else {
    setSuccessFor(email)
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Preencha o campo')
  } else {
    setSuccessFor(password)
  }

  if (confirmPasswordValue === '') {
    setErrorFor(confirmPassword, 'Preencha o campo')
  } else if (confirmPasswordValue !== passwordValue) {
    setErrorFor(confirmPassword, 'Senhas não correspondem')
  } else {
    setSuccessFor(confirmPassword)
  }
}

function setErrorFor(input, message) {
  //ADICIONA CLASSE DE ERRO AO FORMBOX
  const formControl = input.parentElement
  //ADICIONA TEXTO
  const small = formControl.querySelector('small')
  small.innerText = message
  //NOME DA CLASSE PARA SER ADICIONADA
  formControl.className = 'form-box error'
}

function setSuccessFor(input) {
  //ADICIONA CLASSE DE SUCESSO AO FORMBOX
  const formControl = input.parentElement
  //NOME DA CLASSE PARA SER ADICIONADA
  formControl.className = 'form-box success'
}
