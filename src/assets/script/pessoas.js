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
let token = localStorage.getItem('token');
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
var telaPessoas = document.querySelector(".telaPessoas");
var inputPessoas = document.querySelector("#inputPessoas");
var btnFiltrar = document.querySelector("#filtrarPessoas");
let modeloResultadoSearch
btnFiltrar.addEventListener("click", () => {
    let empresasObjeto = leituraDadosEmpresas();
    let usuariosObjeto = leituraDadosUsuarios();
    telaPessoas.innerHTML = '';

    empresasObjeto.forEach(eachEmpresa => {
        if (eachEmpresa.nomeFantasia === inputPessoas.value) {
            let defaultHTML = `
                    <div class="resultadoPesquisa">
                        <span id="info">
                            <a href="#"><img src="assets/img/icones de interface/do-utilizador (2).png" /></a>
                            <h2>${eachEmpresa.nomeFantasia}</h2>
                        </span>
                    </div>`;
            telaPessoas.innerHTML += defaultHTML;
        }
    });

    usuariosObjeto.forEach(eachUser => {
        if (eachUser.nome === inputPessoas.value) {
            let defaultHTML = `
                    <div class="resultadoPesquisa">
                        <span id="info">
                            <a href="#"><img src="assets/img/icones de interface/do-utilizador (2).png" /></a>
                            <h2>${eachUser.nome}</h2>
                        </span>
                        <button class="adicionarPessoa" data-id="${eachUser.id}">Adicionar</button>
                    </div>`;
            telaPessoas.innerHTML += defaultHTML;
        }
    });
    document.querySelectorAll(".adicionarPessoa").forEach(function (eachBtn) {
        eachBtn.addEventListener("click", function () {
            var pessoaId = parseInt(eachBtn.dataset.id);
            var pessoaSelecionada = resultadoSearch.findIndex(resultadoSearch => resultadoSearch === pessoaId);
            console.log(pessoaSelecionada)
            console.log(resultadoSearch)
        });
    });
});
//     // usuariosObjeto.forEach(eachUsers => {
//     //     if(eachUsers.nome === inputPessoas.value){
//     //         let defaultHTML = `
//     //     <div class="resultadoPesquisa">
//     //         <span id="info">
//     //             <a href="#"><img src="assets/img/icones de interface/do-utilizador (2).png" /></a>
//     //             <h2>${eachUsers.nome}</h2>
//     //         </span>
//     //         <button id="adicionarPessoa">Adicionar</button>
//     //     </div>`;
//     //         telaPessoas.innerHTML += defaultHTML;
//     //     }
//     //     else{
//     //         let defaultHTML = `
//     //     <div id="msgError">
//     //         <h2>Nenhum Resultado Encontrado</h2>
//     //     </div>`
//     //         telaPessoas.innerHTML += defaultHTML;
//     //     }
//     // })
// });
let imagemLogo = document.getElementById("linkHome").addEventListener('click', ()=>{
    window.location.href = 'home.html';
});

