let listaAmigos = [];
let entrada = document.getElementById("amigo");

function limparInput() {
    entrada.value = "";        
}

function atualizarListaAmigos() {
    let listaHtml = document.getElementById("listaAmigos");
    listaHtml.innerHTML = "";

    for (i = 0; i < listaAmigos.length; i++) { 
        const novoNome = document.createElement('li');
        novoNome.textContent = listaAmigos[i]; 
        listaHtml.appendChild(novoNome);
    }
}

function adicionarAmigo() {

    if (entrada.value == "") {
        alert("Por favor, insira um nome válido!");
        limparInput(); 
    }
    else {
        listaAmigos.push(entrada.value);
        atualizarListaAmigos();
        limparInput();   
    }
}

function sortearAmigo() {

    if (listaAmigos.length == 0) {
        alert("Você ainda não listou nenhum amigo!");
    } else {
        let resultadoSorteio = document.getElementById("resultado");
        let nomeSorteado = listaAmigos[parseInt(Math.random() * listaAmigos.length)];

        let mensagemResultado = `O amigo secreto sorteado é: ${nomeSorteado}`;
        resultadoSorteio.innerHTML = mensagemResultado;

        let listaHtml = document.getElementById("listaAmigos");
        listaHtml.innerHTML = "";    
    }
}

function reiniciar() {
    listaAmigos = [];
    let resultadoSorteio = document.getElementById("resultado");
    resultadoSorteio.innerHTML = "";
}