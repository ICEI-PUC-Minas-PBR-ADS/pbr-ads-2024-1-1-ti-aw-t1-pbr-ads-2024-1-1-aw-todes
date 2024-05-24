//Sistema de Login
let userLogado = JSON.parse(localStorage.getItem('userLogado'));
let nomeLogado = document.querySelector('#nomeLogado');
nomeLogado.innerHTML = '<h3>'+ userLogado.nome + '</h3>';

if (localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar o feed');
    window.location.href = 'login.html';
}
function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = 'home.html';
}
