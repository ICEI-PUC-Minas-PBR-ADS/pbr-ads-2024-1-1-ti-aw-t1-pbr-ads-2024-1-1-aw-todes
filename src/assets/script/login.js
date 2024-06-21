//variaveirs
let emailLogin = document.querySelector('#emailLogin');
let senhaLogin = document.querySelector('#passwordLogin');
let msgError = document.querySelector('#msgError');
let msgSucess = document.querySelector('#msgSucess');
let userValid = {
    id: '',
    nome: '',
    email: '',
    senha: '',
    birthdate: '',
    gênero: '',
    celular: '',
    cpf: '',
    escolaridade: '',
    biografia: '',
    formação2: '',
    experiencia: ''
}
let empresaValid =        
{
    id:'',
    razãoSocial:'',
    nome:'',
    cnpj:'',
    endereço:{
                cep:'',
                estado:'',
                cidade:'',
                bairro:'',
                logradouro:'',
                numero:'',
            },
    email:'',
    senha:'',
}
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
// Código que faz o botão de olho trocar o tipo de password para text
let botaoVerSenha = document.querySelector('.olhoSenha');
botaoVerSenha.addEventListener('click', () => {
    let inputSenha = document.querySelector('#passwordLogin')
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})
function entrar() {

    usuarios = leituraDadosUsuarios();
    usuarios.forEach((item) => {
        if (emailLogin.value == item.email && senhaLogin.value == item.senha) {
            userValid =
            {
                id: item.id,
                nome: item.nome,
                email: item.email,
                senha: item.senha,
                birthdate: item.birthdate,
                gênero: item.gênero,
                celular: item.celular,
                cpf: item.cpf,
                escolaridade: item.escolaridade,
                biografia: item.biografia,
                formação2: item.formação2,
                experiencia: item.experiencia
            }
        }
    });
    empresas = leituraDadosEmpresas();
    empresas.forEach((each) =>{
        if(emailLogin.value == each.email && senhaLogin.value == each.senha){
            empresaValid =      
            {
                id: each.id,
                razãoSocial:each.razãoSocial,
                nome:each.nome,
                cnpj:each.cnpj,
                endereço:{
                            cep:each.endereço.cep,
                            estado:each.endereço.estado,
                            cidade:each.endereço.cidade,
                            bairro:each.endereço.bairro,
                            logradouro:each.endereço.logradouro,
                            numero:each.endereço.numero,
                        },
                telefone:each.telefone,
                email:each.email,
                senha:each.senha,
                sobreNós: each.sobreNós,
            }
        }
    })
    if(emailLogin.value == userValid.email && senhaLogin.value == userValid.senha){
        msgSucess.setAttribute('style', 'display:block');
        msgSucess.innerHTML = 'Bem vindo'
        msgError.setAttribute('style', 'display:none');
        msgError.innerHTML = ''
        botaoVerSenha.setAttribute('style', 'top: 65vh');
        setTimeout(() => {
            window.location.href = 'feed.html';
        }, 1000);
        let token = "TokenUsuario";
        localStorage.setItem('token', token);
        localStorage.setItem('userLogado', JSON.stringify(userValid))
    }
    else if(emailLogin.value == empresaValid.email && senhaLogin.value == empresaValid.senha){
        msgSucess.setAttribute('style', 'display:block');
        msgSucess.innerHTML = 'Bem vindo'
        msgError.setAttribute('style', 'display:none');
        msgError.innerHTML = ''
        botaoVerSenha.setAttribute('style', 'top: 65vh');
        setTimeout(() => {
            window.location.href = 'feed.html';
        }, 1000);
        token = "TokenEmpresa";
        localStorage.setItem('token', token);
        localStorage.setItem('userLogado', JSON.stringify(empresaValid))
    }
    else{
        msgError.setAttribute('style', 'display:block');
        msgError.innerHTML = 'Credenciais incorretas'
        msgSucess.setAttribute('style', 'display:none');
        msgSucess.innerHTML = ''
        botaoVerSenha.setAttribute('style', 'top: 65vh');
        emailLogin.focus();
    }
}
