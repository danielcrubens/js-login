let btn = document.querySelector('.bi-eye-slash')

btn.addEventListener('click', function ()  {
    let inputSenha = document.querySelector('#senha')
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
        this.classList.toggle("bi-eye");
    }else{
        inputSenha.setAttribute('type','password')
        this.classList.toggle("bi-eye");
    }
})

let btnConfirm = document.querySelector('#verConfirmSenha')

btnConfirm.addEventListener('click', function ()  {
    let inputConfirmSenha = document.querySelector('#comfirmSenha')
    if (inputConfirmSenha.getAttribute('type') == 'password') {
        inputConfirmSenha.setAttribute('type', 'text')
        this.classList.toggle("bi-eye");
    }else{
        inputConfirmSenha.setAttribute('type','password')
        this.classList.toggle("bi-eye");
    }
})



