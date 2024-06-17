window.onload = function carregaDados() {
    let postsObjeto = leituraPosts();
    if (postsObjeto !== null) {
        ImprimirPosts();
    }
}
function leituraPosts() {
    var postsString = localStorage.getItem('posts');
    var postsObjeto = [];
    if (postsString === null) {
        postsObjeto = [];
        localStorage.setItem("posts", JSON.stringify(postsObjeto));
    }
    else {
        postsObjeto = JSON.parse(postsString);
    }
    return postsObjeto;
}
//Sistema de Login
let userLogado = JSON.parse(localStorage.getItem('userLogado'));
let nomeLogado = document.querySelector('#nomeLogado');
let token = localStorage.getItem('token');
let painelPosts = document.querySelector('.painelPosts');
let avatarInputPost = document.querySelector("#avatarInputPost");
let inputTitlePost = document.querySelector("#tituloPost");
let inputContentPost = document.querySelector("#conteudoPost");
let btnPostar = document.querySelector("#postar")
btnPostar.addEventListener('click', () => {
    if ((inputTitlePost.value === "") && (inputContentPost.value === "")) {
        inputTitlePost.style.border = 'red 1px solid';
        inputContentPost.style.border = 'red 1px solid';
    }
    else {
        let posts = leituraPosts();
        let addPost = {
            idPost: criadorID(posts),
            idAutorPost: userLogado.id,
            nomeAutor: userLogado.nome,
            Titulo: inputTitlePost.value,
            Conteudo: inputContentPost.value,
        }
        posts.push(addPost);
        localStorage.setItem('posts', JSON.stringify(posts));
        ImprimirPosts();
    };
});
function ImprimirPosts() {
    document.querySelector('.posts').innerHTML = "";
    let posts = leituraPosts();
    posts.forEach(eachPost => {
        let defaultHTML = `
        <div class="post1">    
            <div class="autorPost">
                <a><img src="assets/img/icones de interface/do-utilizador (2).png"></a>
                <h3>${eachPost.nomeAutor}</h3>
            </div>
            <div class ="content">
            <div class="conteudoDoPost">
                <h3>${eachPost.Titulo}</h3>
                <div id="paragrafoPost">${eachPost.Conteudo}</div>
            </div>
            <div class="btnPosts">
            <button class="btnLike"><i class="fa-regular fa-heart"></i></button>
            <button class="btnDelete"><i class="fa-solid fa-trash"></i></button> 
            </div>
            </div>
        </div>`;
        document.querySelector('.posts').innerHTML += defaultHTML;
    });
}
if (token == null) {
    alert('Você precisa estar logado para acessar o feed');
    window.location.href = 'login.html';
    painelPosts.style.filter = 'blur(3px)'
}
if (token === "TokenUsuario") {
    nomeLogado.innerHTML = '<h3>' + userLogado.nome + '</h3>';
}
else {
    nomeLogado.innerHTML = '<h3>' + userLogado.nome + '</h3>';
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
function criadorID() {
    let posts = JSON.parse(localStorage.getItem("posts"));
    if (posts.length === 0) {
        return 1;
    }
    else {
        let tamanhoVetor = posts.length;
        return tamanhoVetor + 1;
    }
}
let imagemLogo = document.getElementById("linkHome").addEventListener('click', ()=>{
    window.location.href = 'home.html';
});