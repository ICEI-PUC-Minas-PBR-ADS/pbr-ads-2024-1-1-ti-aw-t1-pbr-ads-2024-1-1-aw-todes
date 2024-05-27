//Sistema de Login
let userLogado = JSON.parse(localStorage.getItem('userLogado'));
let nomeLogado = document.querySelector('#nomeLogado');
let token = localStorage.getItem('token');
let painelPosts = document.querySelector('.painelPosts');
let avatarInputPost = document.querySelector("#avatarInputPost");

if (token == null) {
    alert('Você precisa estar logado para acessar o feed');
    window.location.href = 'login.html';
    painelPosts.style.filter = 'blur(3px)'
}
if (token === "TokenUsuario") {
    nomeLogado.innerHTML = '<h3>' + userLogado.nome + '</h3>';
}
else {
    nomeLogado.innerHTML = '<h3>' + userLogado.nomeFantasia + '</h3>';
}

avatarInputPost.addEventListener('click', () => {
    if (token == "TokenUsuario") {
        window.location.href = 'paginaUsuario.html';
    }
    else {
        window.location.href = 'paginaEmpresa.html';
    }
});





function telaDeVagas() {
    if (token == "TokenUsuario") {
        window.location.href = 'vagasUsuarios.html'
    }
    else {
        window.location.href = 'vagasEmpresas.html'
    }
}
function selecionarPerfil() {
    if (token == "TokenUsuario") {
        window.location.href = 'paginaUsuario.html';
    }
    else {
        window.location.href = 'paginaEmpresa.html';
    }
}
function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = 'home.html';
}

