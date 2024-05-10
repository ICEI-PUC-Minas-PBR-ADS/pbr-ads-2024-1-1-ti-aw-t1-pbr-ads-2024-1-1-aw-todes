// variaveis
let botaoVerSenha = document.querySelector('.olhoSenha');
let botaoVerSenha2 = document.querySelector('.olhoSenha2');
let mensagemErroNome = document.querySelector('#mensagemErroNome');

let nome = document.querySelector('#nome');

let email = document.querySelector('#email');
let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
let confirmEmail = document.querySelector('#confirmEmail');

let senha = document.querySelector('#password');
let confirmSenha = document.querySelector('#confirmPassword');

let dataNascimento = document.querySelector('#datadenascimento');
let genero = document.querySelector('#genero');

let telefone = document.querySelector('#telefone');
let telefonePattern = /^\(\d{2}\) \d{4,5}-\d{4}$/;

let cpf = document.querySelector('#cpf');
let formacao = document.querySelector('#formação');

//validação de nome
nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 2){
        nome.style.border = 'solid 1px red'
        mensagemErroNome.style.display= 'block'
    }
    else{
        nome.style.border = 'solid 1px green'
        mensagemErroNome.style.display= 'none'
    }
})
//validação de email
function validaEmail(email){
    return emailPattern.test(email);
}
email.addEventListener('keyup', ()=>{
    if(validaEmail(email.value) !== true){
        email.style.border = 'solid 1px red'
    }
    else{
        email.style.border = 'solid 1px green'
    }
})
confirmEmail.addEventListener('keyup', ()=>{
    if(confirmEmail.value !== email.value){
        confirmEmail.style.border = 'solid 1px red'
    }
    else{
        confirmEmail.style.border = 'solid 1px green'
    }
})
// validação de senha
senha.addEventListener('keyup', ()=>{
    if((senha.value.length >= 8 ) && (senha.value.length <= 16 )){
        senha.style.border = 'solid 1px green'
    }
    else{
        senha.style.border = 'solid 1px red'
    }
})
confirmSenha.addEventListener('keyup', ()=>{
    if(confirmSenha.value !== senha.value){
        confirmSenha.style.border = 'solid 1px red'
    }
    else{
        confirmSenha.style.border = 'solid 1px green'
    }
})
// validação de genero
genero.addEventListener('keyup', ()=>{
    if(genero.value === ''){
        genero.style.border = 'solid 1px red'
    }
    else{
        genero.style.border = 'solid 1px green'
    }
})
function validaTelefone(telefone){
    return telefonePattern.test(telefone);
}
// validação de telefone
telefone.addEventListener('keyup', ()=>{
    if(validaTelefone(telefone.value) !== true){
        telefone.style.border = 'solid 1px red'
    }
    else{
        telefone.style.border = 'solid 1px green'
    }
})
// valida cpf
function validaCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,'');

    if (cpf.length !== 11 || /^(.)\1{10}$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
    let resto = soma % 11;

    if (resto === 0 || resto === 1) resto = 0;
    else resto = 11 - resto;

    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
    resto = soma % 11;

    if (resto === 0 || resto === 1) resto = 0;
    else resto = 11 - resto;

    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true;
}
cpf.addEventListener('keyup', ()=>{
    if (validaCPF(cpf.value)) {
        cpf.style.border = 'solid 1px green';
    } else {
        cpf.style.border = 'solid 1px red'; 
    }
})
// função para cadastrar usuarios
function cadastrar(){

}






// Código que faz o botão de olho trocar o tipo de password para text
botaoVerSenha.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#password')
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type','password')
    }
})
// Código que faz o botão de olho trocar o tipo de password para text do botão de confirmação da senha
botaoVerSenha2.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#confirmPassword')
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type','password')
    }
})

