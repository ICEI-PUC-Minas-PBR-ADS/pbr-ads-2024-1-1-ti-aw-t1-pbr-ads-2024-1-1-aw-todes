// Código que faz o botão de olho trocar o tipo de password para text
let botaoVerSenha = document.querySelector('.olhoSenha');
botaoVerSenha.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#password')
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type','password')
    }
})
// Código que faz o botão de olho trocar o tipo de password para text do botão de confirmação da senha
let botaoVerSenha2 = document.querySelector('.olhoSenha2');
botaoVerSenha2.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#confirmPassword')
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type','password')
    }
})
