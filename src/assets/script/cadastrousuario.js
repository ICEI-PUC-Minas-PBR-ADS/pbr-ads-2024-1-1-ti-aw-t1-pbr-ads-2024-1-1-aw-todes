function leituraDadosUsuarios() {
    var usuariosString = localStorage.getItem('usuarios');
    var usuariosObjeto = [];
    if (usuariosString === null) {
        usuariosObjeto = [];
        localStorage.setItem("usuarios", JSON.stringify(usuariosObjeto));
    }
    else {
        usuariosObjeto = JSON.parse(usuariosString);
    }
    return usuariosObjeto;
}
// variaveis
let botaoVerSenha = document.querySelector('.olhoSenha');
let botaoVerSenha2 = document.querySelector('.olhoSenha2');


let nome = document.querySelector('#nome');
let validNome = false;

let email = document.querySelector('#email');
let validEmail = false;
let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

let confirmEmail = document.querySelector('#confirmEmail');
let validConfirmEmail = false;

let senha = document.querySelector('#password');
let validPassword = false;

let confirmSenha = document.querySelector('#confirmPassword');
let validConfirmPassword = false;

let dataNascimento = document.querySelector('#datadenascimento');
let validBirthdate = false;

let genero = document.querySelector('#genero');
let validGenero = false;

let telefone = document.querySelector('#telefone');
let validTelefone = false;
let telefonePattern = /^\(\d{2}\) \d{4,5}-\d{4}$/;

let cpf = document.querySelector('#cpf');
let validCPF = false;

let formacao = document.querySelector('#formação');
let validFormacao = false;

let msgError = document.querySelector("#msgError");
let msgSucess = document.querySelector("#msgSucess");

//validação de nome
nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        nome.style.border = 'solid 1px red'
        validNome = false;
    }
    else {
        nome.style.border = 'solid 1px green'
        validNome = true;
    }
})
//validação de email
function validaEmail(email) {
    return emailPattern.test(email);
}
email.addEventListener('keyup', () => {
    if (validaEmail(email.value) !== true) {
        email.style.border = 'solid 1px red'
        validEmail = false;
    }
    else {
        email.style.border = 'solid 1px green'
        validEmail = true;
    }
})
confirmEmail.addEventListener('keyup', () => {
    if (confirmEmail.value !== email.value) {
        confirmEmail.style.border = 'solid 1px red'
        validConfirmEmail = false;
    }
    else {
        confirmEmail.style.border = 'solid 1px green'
        validConfirmEmail = true;
    }
})
// validação de senha
senha.addEventListener('keyup', () => {
    if ((senha.value.length >= 8) && (senha.value.length <= 16)) {
        senha.style.border = 'solid 1px green'
        validPassword = true;
    }
    else {
        senha.style.border = 'solid 1px red'
        validPassword = false;
    }
})
confirmSenha.addEventListener('keyup', () => {
    if (confirmSenha.value !== senha.value) {
        confirmSenha.style.border = 'solid 1px red'
        validConfirmPassword = false;
    }
    else {
        confirmSenha.style.border = 'solid 1px green'
        validConfirmPassword = true;
    }
})
// validação de data de nascimento
dataNascimento.addEventListener('change', () => {
    if (dataNascimento.value == '') {
        dataNascimento.style.border = 'solid 1px red'
        validBirthdate = false;
    }
    else {
        dataNascimento.style.border = 'solid 1px green'
        validBirthdate = true;
    }
})
// validação de genero
genero.addEventListener('keyup', () => {
    if (genero.value === '') {
        genero.style.border = 'solid 1px red'
        validGenero = false;
    }
    else {
        genero.style.border = 'solid 1px green'
        validGenero = true;
    }
})
function validaTelefone(telefone) {
    return telefonePattern.test(telefone);
}
// validação de telefone
telefone.addEventListener('keyup', () => {
    if (validaTelefone(telefone.value) !== true) {
        telefone.style.border = 'solid 1px red'
        validTelefone = false;
    }
    else {
        telefone.style.border = 'solid 1px green'
        validTelefone = true;
    }
})
// valida cpf
function validaCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');

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
cpf.addEventListener('keyup', () => {
    if (validaCPF(cpf.value) !== true) {
        cpf.style.border = 'solid 1px red';
        validCPF = false;
    } else {
        cpf.style.border = 'solid 1px green';
        validCPF = true;
    }
})
formacao.addEventListener('change', () => {
    if (formacao.value === 'invalid') {
        formacao.style.border = 'solid 1px red';
        validFormacao = false;
    }
    else {
        formacao.style.border = 'solid 1px green';
        validFormacao = true;
    }
});
// função para cadastrar usuarios
function cadastrar() {
    if (validNome && validEmail && validConfirmEmail && validPassword && validConfirmPassword && validBirthdate && validGenero && validTelefone && validCPF && validFormacao) {
        msgSucess.setAttribute('style', 'display:block')
        msgSucess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display:none')
        msgError.innerHTML = ''
        botaoVerSenha.style.top = '50vh'
        botaoVerSenha2.style.top = '55.4vh'
        usuarios = leituraDadosUsuarios();
        let cadastrarUser =
        {
            id: criadorID(usuarios),
            nome: nome.value,
            email: email.value,
            senha: senha.value,
            birthdate: dataNascimento.value,
            gênero: genero.value,
            celular: telefone.value,
            cpf: cpf.value,
            escolaridade: formacao.value,
            biografia: "",
            formação2: '',
            experiencia: '',
        }
        usuarios.push(cadastrarUser);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 3000);
    }
    else {
        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML = '<strong>Preencha os campos corretamente</strong>'
        msgSucess.setAttribute('style', 'display:none')
        msgSucess.innerHTML = ''
        botaoVerSenha.style.top = '50vh'
        botaoVerSenha2.style.top = '55.4vh'
    }
}
function criadorID() {
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    if (usuarios.length === 0) {
        return 1;
    }
    else {
        let tamanhoVetor = usuarios.length;
        return tamanhoVetor + 1;
    }
}
// Código que faz o botão de olho trocar o tipo de password para text
botaoVerSenha.addEventListener('click', () => {
    let inputSenha = document.querySelector('#password')
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})
// Código que faz o botão de olho trocar o tipo de password para text do botão de confirmação da senha
botaoVerSenha2.addEventListener('click', () => {
    let inputSenha = document.querySelector('#confirmPassword')
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

