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
let empresas = leituraDadosEmpresas();
let showInfos = true;
let campoNome = document.querySelector("#nome");
let nomePerfil = document.querySelector(".perfil")
let userLogado = JSON.parse(localStorage.getItem('userLogado'));
let campoBio = document.querySelector(".bio");
let inputBio = document.querySelector("#addBio")
let telaPerfil = document.querySelector(".telaPerfil");
let btnActionEdit = document.querySelector("#editPerfil");
let infoPerfil = document.querySelector(".infoPerfil");
let updatePerfil = document.querySelector(".UpdatePerfil");
let btnCancelUpdate = document.querySelector("#cancelUpdate");
let btnConfirmUpdate = document.querySelector("#acceptUpdate");
let campoTelefone = document.querySelector("#telefonePerfil");
let campoEndereço = document.querySelector("#endereçoEmpresa")


let addBio = document.querySelector("#addBio");
let addBioConfirm = false;

let updateNome = document.querySelector("#updateNome");
let updateNomeConfirm = false;

let updateEmail = document.querySelector("#updateEmail");
let updateEmailConfirm = false;

let updateTelefone = document.querySelector("#updateTelefone");
let updateTelefoneConfirm = false;

let msgError = document.querySelector(".textError");
let msgSucess = document.querySelector(".textUpdate")

window.onload = function carregaPerfil() {
    console.log(userLogado)

    campoEndereço.innerHTML = `<h2>Endereço da Empresa</h2>
                                <h3>${userLogado.endereço.logradouro} Bairro ${userLogado.endereço.bairro} N° ${userLogado.endereço.numero} ${userLogado.endereço.cidade}</h3>`
    campoTelefone.innerHTML = ` <h2>Telefone para contato</h2>
                                <h3>${userLogado.telefone}</h3>`
    campoNome.innerHTML = `     <h2>Nome</h2>
                                <h3>${userLogado.razãoSocial}</h3>
                                <h5>${userLogado.email}</h5>`
    nomePerfil.innerHTML = `<a><img src="assets/img/icones de interface/do-utilizador (3).png"></a>
                    <h1>${userLogado.nome}</h1>`
    campoBio.innerHTML =
        `<h2>Sobre</h2>
    <h3>${getSobreNós()}</h3>`
};

btnActionEdit.addEventListener("click", () => {
    if (showInfos === true) {
        infoPerfil.style.display = "none"
        updatePerfil.style.display = "flex"
        showInfos = false;
    }
});
btnCancelUpdate.addEventListener("click", () => {
    infoPerfil.style.display = "flex"
    updatePerfil.style.display = "none"
    showInfos = true;
});
btnConfirmUpdate.addEventListener("click", () => {
    for (let i = 0; i < empresas.length; i++) {
        console.log("Até aqui foi")
        if (userLogado.id == empresas[i].id) {
            function GetUpdateNome() {
                if (updateNome.value == "") {
                    return empresas[i].razãoSocial
                }
                return updateNome.value;
            }
            function GetUpdateEmail() {
                if (updateEmail.value == "") {
                    return empresas[i].email
                }
                return updateEmail.value;
            }
            function GetUpdateTelefone() {
                if (updateTelefone.value == "") {
                    return empresas[i].telefone
                }
                return updateTelefone.value;
            }
            function GetUpdateSobre(){
                if(addBio.value == ""){
                    return empresas[i].sobreNós
                }
                return addBio.value;
            }
            let atualizarEmpresa =
            {
                id: empresas[i].id,
                nome:empresas[i].nome,
                razãoSocial:GetUpdateNome(),
                email: GetUpdateEmail(),
                senha: empresas[i].senha,
                endereço:{
                    cep:empresas[i].endereço.cep,
                    estado:empresas[i].endereço.estado,
                    cidade:empresas[i].endereço.cidade,
                    bairro:empresas[i].endereço.bairro,
                    logradouro:empresas[i].endereço.logradouro,
                    numero:empresas[i].endereço.numero,
                },
                telefone: GetUpdateTelefone(),
                cnpj: empresas[i].cnpj,
                sobreNós: GetUpdateSobre(),
            }
            empresas[i] = atualizarEmpresa;
            let atualizaUserLogado =
            {
                id: userLogado.id,
                nome:userLogado.nome,
                razãoSocial:empresas[i].razãoSocial,
                email: empresas[i].email,
                senha: userLogado.senha,
                endereço:{
                    cep:userLogado.endereço.cep,
                    estado:userLogado.endereço.estado,
                    cidade:userLogado.endereço.cidade,
                    bairro:userLogado.endereço.bairro,
                    logradouro:userLogado.endereço.logradouro,
                    numero:userLogado.endereço.numero,
                },
                telefone: empresas[i].telefone,
                cnpj: userLogado.cnpj,
                sobreNós: empresas[i].sobreNós,
            }
            userLogado = atualizaUserLogado;
        }
    }
    localStorage.setItem('userLogado', JSON.stringify(userLogado));
    localStorage.setItem('empresas', JSON.stringify(empresas));
    msgSucess.style.display = "block"
    setTimeout(() => {
        window.location.href = 'paginaEmpresa.html';
    }, 3000);

})
function getSobreNós() {
    if (userLogado.sobreNós === undefined || userLogado.sobreNós === "") {
        return "Fale um pouco sobre sua Empresa"
    }
    return userLogado.sobreNós
};

function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = 'login.html';
};
