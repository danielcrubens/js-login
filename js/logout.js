

/* LOGOUT */

let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

logado.innerHTML = `Olá  ${userLogado.nome}`

if (localStorage.getItem('token') == null) {
  alert('Você precisa estar logado para acessar essa página')
  window.location.href = '/index.html'
}

let btnSair = document.querySelector("#sair")
btnSair.addEventListener('click', function () {
  localStorage.removeItem('token')
  localStorage.removeItem('userLogado')
  window.location.href = '/index.html'
})
