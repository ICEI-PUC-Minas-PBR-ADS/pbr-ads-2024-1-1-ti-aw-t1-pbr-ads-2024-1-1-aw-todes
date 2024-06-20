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
let usuarios = leituraDadosUsuarios();
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
let campoFormação = document.querySelector("#formação")
let campoExp = document.querySelector("#experienciaProfissional");

let addBio = document.querySelector("#addBio");
let addBioConfirm = false;

let updateNome = document.querySelector("#updateNome");
let updateNomeConfirm = false;

let updateEmail = document.querySelector("#updateEmail");
let updateEmailConfirm = false;

let formacao2 = document.querySelector("#formação2");
let formacao2Confirm = false;

let updateTelefone = document.querySelector("#updateTelefone");
let updateTelefoneConfirm = false;

let addExperiencia = document.querySelector("#addExperiencia");
let addExperienciaConfirm = false;

let msgError = document.querySelector(".textError");
let msgSucess = document.querySelector(".textUpdate")
window.onload = function carregaPerfil() {

    console.log(userLogado)
    campoExp.innerHTML = `      <h2>Experiência Profissional</h2>
                                <h3>2 anos trabalhando no haras</h3>`
    campoFormação.innerHTML = ` <h2>Formação</h2>
                                <h3>${GetFormation()}</h3>`

    campoTelefone.innerHTML = ` <h2>Telefone para contato</h2>
                                <h3>${userLogado.celular}</h3>`
    campoNome.innerHTML = `     <h2>Nome</h2>
                                <h3>${userLogado.nome}</h3>
                                <h5>${userLogado.email}</h5>`
    nomePerfil.innerHTML = `<a><img src="assets/img/icones de interface/do-utilizador (3).png"></a>
                    <h1>${userLogado.nome}</h1>`
    campoBio.innerHTML =
        `<h2>Sobre</h2>
    <h3>${getBio()}</h3>`
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
    console.log(usuarios);
    for (let i = 0; i < usuarios.length; i++) {
        if (userLogado.id == usuarios[i].id) {
            function GetUpdateNome() {
                if (updateNome.value == "") {
                    return usuarios[i].nome
                }
                return updateNome.value;
            }
            function GetUpdateEmail() {
                if (updateEmail.value == "") {
                    return usuarios[i].email
                }
                return updateEmail.value;
            }
            function GetUpdateTelefone() {
                if (updateTelefone.value == "") {
                    return usuarios[i].celular
                }
                return updateTelefone.value;
            }
            function GetUpdateBio(){
                if(addBio.value == ""){
                    return usuarios[i].biografia
                }
                return addBio.value;
            }
            function GetUpdateFormation(){
                if(formacao2.value == ""){
                    return usuarios[i].formacao2
                }
                return formacao2.value;
            }
            function GetUpdateExp(){
                if(addExperiencia.value == ""){
                    return usuarios[i].experiencia
                }
                return addExperiencia.value;
            }
            let atualizarUser =
            {
                id: usuarios[i].id,
                nome: GetUpdateNome(),
                email: GetUpdateEmail(),
                senha: usuarios[i].senha,
                birthdate: usuarios[i].birthdate,
                gênero: usuarios[i].gênero,
                celular: GetUpdateTelefone(),
                cpf: usuarios[i].cpf,
                escolaridade: usuarios[i].escolaridade,
                biografia: GetUpdateBio(),
                formação2: GetUpdateFormation(),
                experiencia: GetUpdateExp(),
            }
            usuarios[i] = atualizarUser;
            let atualizaUserLogado =
            {
                id: userLogado.id,
                nome: usuarios[i].nome,
                email: usuarios[i].email,
                senha: userLogado.senha,
                birthdate: userLogado.birthdate,
                gênero: userLogado.gênero,
                celular: usuarios[i].celular,
                cpf: userLogado.cpf,
                escolaridade: userLogado.escolaridade,
                biografia: usuarios[i].biografia,
                formação2: usuarios[i].formacao2,
                experiencia: usuarios[i].experiencia
            };
            userLogado = atualizaUserLogado;
        }
    }
    localStorage.setItem('userLogado', JSON.stringify(userLogado));
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    msgSucess.style.display = "block"
    setTimeout(() => {
        window.location.href = 'paginaUsuario.html';
    }, 3000);

})
function getBio() {
    if (userLogado.biografia === undefined || userLogado.biografia === "") {
        return "Insira sua Biografia"
    }
    return userLogado.biografia
};

function GetFormation() {
    if (userLogado.escolaridade === "valor1") {
        return "Ensino Fundamental Incompleto";
    }
    else if (userLogado.escolaridade === "valor2") {
        return "Ensino Fundamental Completo";
    }
    else if (userLogado.escolaridade === "valor3") {
        return "Ensino Médio Incompleto";
    }
    else if (userLogado.escolaridade === "valor4") {
        return "Ensino Médio Completo";
    }
    else {
        return "Ensino Superior Completo";
    }
};
function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = 'login.html';
};
