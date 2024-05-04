// Código que faz o botão de olho trocar o tipo de password para text
let botaoVerSenha = document.querySelector('.olhoSenha');
botaoVerSenha.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#password')
    console.log(inputSenha)
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type','password')
    }
})
