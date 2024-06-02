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

var telaPessoas = document.querySelector(".telaPessoas");
var inputPessoas = document.querySelector("#inputPessoas");
var btnFiltrar = document.querySelector("#filtrarPessoas");

btnFiltrar.addEventListener("click", ()=>{


    let empresasObjeto = leituraDadosEmpresas();
    let usuariosObjeto = leituraDadosUsuarios();
    telaPessoas.innerHTML = '';
    empresasObjeto.forEach(eachEmpresa => {
        if(eachEmpresa.nomeFantasia === inputPessoas.value){
            let defaultHTML = `
        <div class="resultadoPesquisa">
            <span id="info">
                <a href="#"><img src="assets/img/icones de interface/do-utilizador (2).png" /></a>
                <h2>${eachEmpresa.nomeFantasia}</h2>
            </span>
            <button id="adicionarPessoa"data-id=${eachEmpresa.id}>Adicionar</button>
        </div>`;
            telaPessoas.innerHTML += defaultHTML;
        }
    });
    //script para adicionar amigos
    document.querySelectorAll(".adicionarPessoa").forEach(function(eachBtn){
        eachBtn.addEventListener("click", function(){
            console.log("sigma")
            var empresaId = parseInt(eachBtn.dataset.id);
            var empresaSelecionada = empresasObjeto.findIndex(empresas => empresas.id === empresaId);

            // Verifica se o botão já está selecionado
            if (eachBtn.style.backgroundColor === "rgba(0, 128, 17, 0.849)") {
                eachBtn.style.backgroundColor = "";
                console.log("Empresa deselecionada:", empresasObjeto[empresaSelecionada]);
                // Remove a empresa selecionada de alguma lista, se necessário
            } else {
                eachBtn.style.backgroundColor = "rgba(0, 128, 17, 0.849)";
                console.log("Empresa selecionada:", empresasObjeto[empresaSelecionada]);
                // Adiciona a empresa selecionada a alguma lista, se necessário
            }
        });
    });
    // usuariosObjeto.forEach(eachUsers => {
    //     if(eachUsers.nome === inputPessoas.value){
    //         let defaultHTML = `
    //     <div class="resultadoPesquisa">
    //         <span id="info">
    //             <a href="#"><img src="assets/img/icones de interface/do-utilizador (2).png" /></a>
    //             <h2>${eachUsers.nome}</h2>
    //         </span>
    //         <button id="adicionarPessoa">Adicionar</button>
    //     </div>`;
    //         telaPessoas.innerHTML += defaultHTML;
    //     }
    //     else{
    //         let defaultHTML = `          
    //     <div id="msgError">
    //         <h2>Nenhum Resultado Encontrado</h2>
    //     </div>`
    //         telaPessoas.innerHTML += defaultHTML;
    //     }
    // })
});

