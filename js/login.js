
let btn = document.querySelector('.bi-eye-slash')
let btnEntrar = document.querySelector('#entrar')

let usuario = document.querySelector('#usuario')
let userLabel = document.querySelector('#userLabel')

let senha = document.querySelector('#senha')
let senhaLabel = document.querySelector('#senhaLabel')

let msgError = document.querySelector('#msgError')


let inputs = document.querySelectorAll("input")
let button = document.querySelector("button")

let listaUser = []

let userValid = {
  nome: '',
  user: '',
  senha: ''
}

function checkInputs(inputs) {
  let preenchido = true;

  inputs.forEach(function (input) {
      if (input.value === "") {
        preenchido = false;
      }
  });
  return preenchido;
}

inputs.forEach(function (input) {
  input.addEventListener("keyup", function () {
      if (checkInputs(inputs)) {
          button.disabled = false;
      } else {
          button.disabled = true;
      }
  });
});


btn.addEventListener('click', function () {
  let inputSenha = document.querySelector('#senha')
  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
    this.classList.toggle("bi-eye")
  } else {
    inputSenha.setAttribute('type', 'password')
    this.classList.toggle("bi-eye")
  }
})


btnEntrar.addEventListener('click',function(){
  listaUser = JSON.parse(localStorage.getItem('listaUser'))

  /* VARRER A LISTAUSER ITEM POR ITEM */
  listaUser.forEach((item) => {
    if (usuario.value == item.userCad && senha.value == item.senhaCad) {
      userValid = {
        nome: item.nomeCad,
        user: item.userCad,
        senha: item.senhaCad
      }
    }
  })
  /* TRABALHANDO OBJETOS DE VALIDAÇÃO */
  
if (usuario.value == userValid.user && senha.value == userValid.senha) {
  window.location.href='/app.html'

  /* GERAR TOKEN USUÁRIO */
  let token = Math.round().toString(16).substr(2) + Math.round().toString(16).substr(2)
  localStorage.setItem('token',token)
  
localStorage.setItem('userLogado', JSON.stringify(userValid))
$("input[type=submit]").prop("disabled", false);

} else {
  userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
}
})
