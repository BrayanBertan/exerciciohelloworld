var campoNome = document.getElementById("campoNome");
var btnOk = document.getElementById("btnOk");
var mensagemHW = document.getElementById("mensagem");
btnOk.onclick = teste;
var btnLimpar = document.getElementById("btnLimpar");
btnLimpar.addEventListener("click",limpar);


function teste() {
    var nome = campoNome.value.trim();
    var mensagem = "Hello Wold: " + nome;
    mensagemHW.innerText = mensagem;
}

function limpar() {
    campoNome.value = '';
    mensagemHW.innerText = '';
 }
