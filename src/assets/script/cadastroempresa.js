function leituraDadosEmpresas() {
    var empresasString = localStorage.getItem('empresas');
    var empresasObjeto = [];
    if (empresasString === null) {
        empresasObjeto = [];
        localStorage.setItem("empresas", JSON.stringify(empresasObjeto));
    }
    else {
        empresasObjeto= JSON.parse(empresasString);
    }
    return empresasObjeto;
}


let razaoSocial = document.querySelector('#razãoSocial');
let nomeFantasia = document.querySelector('#nomeFantasia');
let cnpj = document.querySelector('#cnpj');
let formAdress = document.querySelector('#formAdress');
let cepInput = document.querySelector('#cep');
let estado = document.querySelector('#estado');
let cidade = document.querySelector('#cidade');
let bairro = document.querySelector('#bairro');
let logradouro = document.querySelector('#logradouro');
let logradouroNumero = document.querySelector('#logradouroNumero');
let emailEmpresa = document.querySelector('#emailEmpresa');
let confirmEmailEmpresa = document.querySelector('#confirmEmailEmpresa');
let passwordEmpresa = document.querySelector('#password');
let confirmPasswordEmpresa = document.querySelector('#confirmPassword');

//funcionalidade API cep
 
//Validando o CEP numerico
cepInput.addEventListener('keypress' , (e)=>{
    const validaCep = /[0-9]/;
    const key = String.fromCharCode(e.keyCode);
    if(!validaCep.test(key)){
        e.preventDefault();
        return;
    }
});
// pegando o endereço
cepInput.addEventListener('keyup', (e) =>{
    const inputValue = e.target.value;
    if(inputValue.length === 8){
        pegaEndereco(inputValue);
    }
});
// pegando o endereço da api
const pegaEndereco = async (cep)=> {
    cepInput.blur();
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(apiUrl)
    const data = await response.json();
    if(data.erro === true){
        formAdress.reset();
        return;

    }
}

























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
