



let userLogado = localStorage.getItem('userLogado')

if (localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar o feed');
    window.location.href = 'login.html';
}
function logout() {
    localStorage.removeItem('token')
    window.location.href = 'home.html';
}