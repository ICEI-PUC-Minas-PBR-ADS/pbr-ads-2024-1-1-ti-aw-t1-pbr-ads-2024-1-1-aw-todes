window.onload = function carregaVagas(){
    let vagas = leituraVagas();
    if (vagas !== null) {
        imprimirVagas();
    }
}
function leituraVagas() {
    var vagasString = localStorage.getItem('vagas');
    var vagasObjeto = [];
    if (vagasString === null) {
        vagasObjeto = [];
        localStorage.setItem("vagas", JSON.stringify(vagasObjeto));
    }
    else {
        vagasObjeto = JSON.parse(vagasString);
    }
    return vagasObjeto;
}
function imprimirVagas(){
    let telaDeVagas = document.querySelector(".showVagas");
    let vagas = leituraVagas();
    vagas.forEach(eachVagas => {
        let defaultHTML = `<div class="vaga">
                <span class="titleVaga">
                    <h2>${eachVagas.tituloVaga}</h2>
                </span>
                <span class="descriçãoVaga">
                    <h3>Descrição da Vaga</h3>
                    <p>${eachVagas.descriçãoVaga}</p>
                </span>
                <span class="requisitosVaga">
                    <h3>Requisitos</h3>
                    <p>${eachVagas.funçãoVaga}</p>
                </span>
                <span class="salarioVaga">
                    <h3>Salário da Vaga</h3>
                    <h4>${eachVagas.salarioVaga}</h4>
                </span>
                <span class="telefoneEmpresa">
                    <h3>Telefone para contato</h3>
                    <h4>${eachVagas.telefoneVaga}</h4>
                </span>
            </div>`
            telaDeVagas.innerHTML += defaultHTML;
    })
}

























































































let imagemLogo = document.getElementById("linkHome").addEventListener('click', ()=>{
    window.location.href = 'home.html';
});
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