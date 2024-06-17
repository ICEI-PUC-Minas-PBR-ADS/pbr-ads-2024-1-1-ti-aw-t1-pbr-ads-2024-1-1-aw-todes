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
let token = localStorage.getItem('token');
let userLogado = JSON.parse(localStorage.getItem('userLogado'));

if (token == null) {
    alert('Você precisa estar logado para acessar o feed');
    window.location.href = 'login.html';
    painelPosts.style.filter = 'blur(3px)'
}
if (token === "TokenUsuario") {
    alert('Está página é para empresas');
    window.location.href = 'login.html';
    painelPosts.style.filter = 'blur(3px)'
}

function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = 'login.html';
}
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
let imagemLogo = document.getElementById("linkHome").addEventListener('click', () => {
    window.location.href = 'home.html';
});

let addVaga = document.querySelector("#addVaga");
let validAddVaga = false;
let myVagas = document.querySelector("#myVagas");
let validMyVagas = false;
let telaVagas = document.querySelector(".contentPagina")
let adicionarVaga = `<div class="addVaga">
<div class="infoVaga">
    <span id="title">
        <h3>Informação da vaga</h3>
    </span>
    <section class="formVaga">
        <section class="primParte">
            <span class="inputs1">
                <label for="tituloVaga">Nome da Vaga</label>
                <input type="text" id="tituloVaga">
            </span>
            <span class="inputs2">
                <label for="functionVaga">Função da vaga</label>
                <input type="text" id="functionVaga">
            </span>
            <span class="inputs3">
                <label for="salarioVaga">Salário da vaga</label>
                <input type="text" id="salarioVaga">
            </span>
        </section>
        <span class="inputs4">
            <label for="descriçãoVaga">Descrição da vaga</label>
            <textarea id="descriçãoVaga"></textarea>
        </span>

        <span id="title">
            <h3>Informações Adicionais</h3>
        </span>
        <section class="secondParte">
            <span class="inputs1">
                <label for="resquisitosVaga">Requisitos Necessarios</label>
                <textarea id="requisitosVaga"></textarea>
            </span>
            <span class="inputs1">
                <label for="FormaçãoVaga">Formação Necessaria</label>
                <textarea id="FormaçãoVaga"></textarea>
            </span>
            <span class="inputs1">
                <label for="ObservaçõesVaga">Observações opcionais</label>
                <textarea id="ObservaçõesVaga"></textarea>
            </span>
        </section>
        <button id="enviarVaga">Adicionar Vaga</button>
    </section>
</div>
</div>`
let MinhasVagas = ""

window.onload = function carregaInputVagas() {
    telaVagas.innerHTML = adicionarVaga;
    validAddVaga = true;
    addVaga.style.backgroundColor = "#771e76a2"
    const btnEnviarVaga = document.getElementById("enviarVaga");
    btnEnviarVaga.addEventListener("click", gravarVaga)
}
addVaga.addEventListener("click", () => {
    if (validMyVagas === true) {
        telaVagas.innerHTML = adicionarVaga;
        validAddVaga = true;
        validMyVagas = false;
        addVaga.style.backgroundColor = "#771e76a2"
        myVagas.style.backgroundColor = "rgb(245, 245, 245)"
        const btnEnviarVaga = document.getElementById("enviarVaga");
        btnEnviarVaga.addEventListener("click", gravarVaga)
    }
})
myVagas.addEventListener("click", () => {
    telaVagas.innerHTML = "";
    let vagas = leituraVagas();
    if (validAddVaga === true) {
        telaDeVagas.innerHTML = "";
        validMyVagas = true;
        validAddVaga = false;
        addVaga.style.backgroundColor = "rgb(245, 245, 245)"
        myVagas.style.backgroundColor = "#771e76a2"
        for (let i = vagas.length - 1; i >= 0; i--){
            let vaga = vagas[i];
            if (vaga.idEmpresa === userLogado.id) {
                MinhasVagas = `       
                <div class="showVagas">
                            <div class="vaga">
                                <span class="titleVaga">
                                    <h2>${vaga.tituloVaga}</h2>
                                </span>
                                <span class="descriçãoVaga">
                                    <h3>Descrição da Vaga</h3>
                                    <p>${vaga.descriçãoVaga}</p>
                                </span>
                                <span class="requisitosVaga">
                                    <h3>Requisitos</h3>
                                    <p>${vaga.requisitosVaga}</p>
                                </span>
                                <span class="salarioVaga">
                                    <h3>Salário da Vaga</h3>
                                    <h4>${vaga.salarioVaga}</h4>
                                </span>
                                <span class="telefoneVaga">
                                    <h3>Telefone para contato</h3>
                                    <h4>${vaga.telefoneVaga}</h4>
                                </span>
                            </div>
                </div>`
                telaVagas.innerHTML += MinhasVagas;
            }
            else{
                MinhasVagas =
                `<div class="showVagas">
                            <div class="vaga">
                            <h1></h1>
                            
                            `
                            
                            telaVagas.innerHTML = MinhasVagas;
            }
        }
    }
})
btnEnviarVaga.addEventListener("click", () => {
    console.log("está funcionando");
});
function gravarVaga() {
    let vagas = leituraVagas();
    let tituloVaga = document.querySelector("#tituloVaga");
    let functionVaga = document.querySelector("#functionVaga")
    let salarioVaga = document.querySelector("#salarioVaga")
    let descriptionVaga = document.querySelector("#descriçãoVaga")
    let requisitosVaga = document.querySelector("#requisitosVaga")
    let FormationVaga = document.querySelector("#FormaçãoVaga")
    let ObservaçõesVaga = document.querySelector("#ObservaçõesVaga")
    let addVaga = {
        idVaga: criadorID(vagas),
        idEmpresa: userLogado.id,
        tituloVaga: tituloVaga.value,
        funçãoVaga: functionVaga.value,
        salarioVaga: salarioVaga.value,
        descriçãoVaga: descriptionVaga.value,
        requisitosVaga: requisitosVaga.value,
        FormaçãoVaga: FormationVaga.value,
        ObservaçõesVaga: ObservaçõesVaga.value,
        telefoneVaga: userLogado.telefone,
    }
    vagas.push(addVaga);
    localStorage.setItem('vagas', JSON.stringify(vagas));
}
function criadorID() {
    let vagas = JSON.parse(localStorage.getItem("vagas"));
    if (vagas.length === 0) {
        return 1;
    }
    else {
        let tamanhoVetor = vagas.length;
        return tamanhoVetor + 1;
    }
}