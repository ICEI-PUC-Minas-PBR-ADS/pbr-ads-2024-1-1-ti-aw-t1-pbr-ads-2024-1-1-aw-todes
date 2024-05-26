function leituraDadosEmpresas() {
    var empresasString = localStorage.getItem('empresas');
    var empresasObjeto = [];
    if (empresasString === null) {
        empresasObjeto = [];
        localStorage.setItem("empresas", JSON.stringify(empresasObjeto));
    }
    else {
        empresasObjeto = JSON.parse(empresasString);
    }
    return empresasObjeto;
}


let razaoSocial = document.querySelector('#razãoSocial');
let validRazaoSocial = false;

let nomeFantasia = document.querySelector('#nomeFantasia');
let validNomeFantasia = false;

let cnpj = document.querySelector('#cnpj');
let validCnpj = false;

let cepInput = document.querySelector('#cep');
let validCEP = false;

let estado = document.querySelector('#estado');
let cidade = document.querySelector('#cidade');
let bairro = document.querySelector('#bairro');
let logradouro = document.querySelector('#logradouro');

let logradouroNumero = document.querySelector('#logradouroNumero');
let validLogradouroNumero = document.querySelector('#logradouroNumero');

let emailEmpresa = document.querySelector('#emailEmpresa');
let validEmailEmpresa = false;
let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

let confirmEmailEmpresa = document.querySelector('#confirmEmailEmpresa');
let validConfirmEmailEmpresa = false;

let passwordEmpresa = document.querySelector('#password');
let validPasswordEmpresa = false;

let confirmPasswordEmpresa = document.querySelector('#confirmPassword');
let validConfirmPasswordEmpresa = false;

let formAdress = document.querySelector('#formAdress');

//validação do form de cadastro
razaoSocial.addEventListener('keyup', () => {
    if (razaoSocial.value.length <= 6) {
        razaoSocial.style.border = 'solid 1px red'
        validRazaoSocial = false;
    }
    else {
        razaoSocial.style.border = 'solid 1px green'
        validRazaoSocial = true;
    }
});
nomeFantasia.addEventListener('keyup', () => {
    if (nomeFantasia.value.length <= 3) {
        nomeFantasia.style.border = "solid 1px red";
        validNomeFantasia = false;
    }
    else {
        nomeFantasia.style.border = "solid 1px green";
        validNomeFantasia = true;
    }
});

// função que valida cnpj
function validaCNPJ(cnpj) {
    var b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    var c = String(cnpj).replace(/[^\d]/g, '')

    if (c.length !== 14)
        return false

    if (/0{14}/.test(c))
        return false

    for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
    if (c[12] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false

    for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
    if (c[13] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false

    return true
}

cnpj.addEventListener('keyup', () => {
    if (validaCNPJ(cnpj.value) !== true) {
        cnpj.style.border = "solid 1px red";
        validCnpj = false;
    }
    else {
        cnpj.style.border = "solid 1px green";
        validCnpj = true;
    }
});

function validaEmail(email) {
    return emailPattern.test(email);
}

emailEmpresa.addEventListener('keyup', () => {
    if (validaEmail(emailEmpresa.value) !== true) {
        emailEmpresa.style.border = 'solid 1px red'
        validEmailEmpresa = false;
    }
    else {
        emailEmpresa.style.border = 'solid 1px green'
        validEmailEmpresa = true;
    }
})

confirmEmailEmpresa.addEventListener('keyup', () => {
    if (confirmEmailEmpresa.value !== emailEmpresa.value) {
        confirmEmailEmpresa.style.border = 'solid 1px red'
        validConfirmEmailEmpresa = false;
    }
    else {
        confirmEmailEmpresa.style.border = 'solid 1px green'
        validConfirmEmailEmpresa = true;
    }
})
passwordEmpresa.addEventListener('keyup', () => {
    if ((passwordEmpresa.value.length >= 8) && (passwordEmpresa.value.length <= 16)) {
        passwordEmpresa.style.border = 'solid 1px green'
        validPasswordEmpresa = true;
    }
    else {
        passwordEmpresa.style.border = 'solid 1px red'
        validPasswordEmpresa = false;
    }
})
confirmPasswordEmpresa.addEventListener('keyup', () => {
    if (confirmPasswordEmpresa.value !== passwordEmpresa.value) {
        confirmPasswordEmpresa.style.border = 'solid 1px red'
        validConfirmPasswordEmpresa = false;
    }
    else {
        confirmPasswordEmpresa.style.border = 'solid 1px green'
        validConfirmPasswordEmpresa = true;
    }
})
logradouroNumero.addEventListener('keyup', () => {
    if (logradouroNumero.value === "") {
        logradouroNumero.style.border = 'solid 1px red';
    }
    else{
        logradouroNumero.style.border = 'solid 1px green';
    }
});                                                     
function cadastrar(){
    console.log(condiçãoCadastro())
    if (condiçãoCadastro() === true){
        msgSucess.setAttribute('style', 'display:block')
        msgSucess.innerHTML = '<strong>Cadastrando empresa...</strong>'
        msgError.setAttribute('style', 'display:none')
        msgError.innerHTML = ''
        botaoVerSenha.style.top = '71.5vh'
        botaoVerSenha2.style.top = '76.7vh'
        empresas = leituraDadosEmpresas();
        let cadastrarEmpresa =
        {
            id: criadorID(empresas),
            razãoSocial:razaoSocial.value,
            nomeFantasia:nomeFantasia.value,
            cnpj:cnpj.value,
            endereço:{
                        cep:cepInput.value,
                        estado:estado.value,
                        cidade:cidade.value,
                        bairro:bairro.value,
                        logradouro:logradouro.value,
                        numero:logradouroNumero.value,
                    },
            email:emailEmpresa.value,
            senha:passwordEmpresa.value,
        }
        empresas.push(cadastrarEmpresa);
        localStorage.setItem('empresas', JSON.stringify(empresas));
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 3000);
    }
    else {
        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML = '<strong>Preencha os campos corretamente</strong>'
        msgSucess.setAttribute('style', 'display:none')
        msgSucess.innerHTML = ''
        botaoVerSenha.style.top = '71.5vh'
        botaoVerSenha2.style.top = '76.7vh'
    }
};
function condiçãoCadastro(){
   if(validRazaoSocial && validNomeFantasia && validCnpj && validCEP && validLogradouroNumero && validEmailEmpresa && validConfirmEmailEmpresa && validPasswordEmpresa && 
      validConfirmPasswordEmpresa){
        return true
      }
        return false
};
function criadorID(){
    let empresas = JSON.parse(localStorage.getItem("empresas"));
    if (empresas.length === 0) {
        return 1;
    }
    else {
        let tamanhoVetor = empresas.length;
        return tamanhoVetor + 1;
    }
}






































//funcionalidade API cep
//Validando o CEP numerico
cepInput.addEventListener('keypress', (e) => {
    const validaCep = /[0-9]/;
    const key = String.fromCharCode(e.keyCode);
    if (!validaCep.test(key)) {
        e.preventDefault();
        return;
    }
});
// pegando o endereço
cepInput.addEventListener('keyup', (e) => {
    const inputValue = e.target.value;
    if (inputValue.length === 8) {
        pegaEndereco(inputValue);
    }
});
// pegando o endereço da api
const pegaEndereco = async (cep) => {
    cepInput.blur();
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(apiUrl)
    const data = await response.json();
    if (data.erro === true) {
        formAdress.reset();
        cepInput.style.border = 'solid 1px red';
        return;
    }
    validCEP = true;
    cepInput.style.border = 'solid 1px green';
    cidade.style.border = 'solid 1px green';
    estado.style.border = 'solid 1px green';
    bairro.style.border = 'solid 1px green';
    logradouro.style.border = 'solid 1px green';
    logradouro.value = data.logradouro;
    cidade.value = data.localidade;
    estado.value = data.uf;
    bairro.value = data.bairro;
};

// Código que faz o botão de olho trocar o tipo de password para text
let botaoVerSenha = document.querySelector('.olhoSenha');
botaoVerSenha.addEventListener('click', () => {
    let inputSenha = document.querySelector('#password')
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})
// Código que faz o botão de olho trocar o tipo de password para text do botão de confirmação da senha
let botaoVerSenha2 = document.querySelector('.olhoSenha2');
botaoVerSenha2.addEventListener('click', () => {
    let inputSenha = document.querySelector('#confirmPassword')
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})
