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
        biografia: ''
    }
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
                biografia: item.biografia
            }
        }
    });
    if(emailLogin.value == userValid.email && senhaLogin.value == userValid.senha){
        msgSucess.setAttribute('style', 'display:block');
        msgSucess.innerHTML = 'Bem vindo'
        msgError.setAttribute('style', 'display:none');
        msgError.innerHTML = ''
        botaoVerSenha.setAttribute('style', 'top: 65vh');
        setTimeout(() => {
            window.location.href = 'feed.html';
        }, 1000);
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
        localStorage.setItem('token', token);
        localStorage.setItem('userLogado', JSON.stringify(userValid))
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
