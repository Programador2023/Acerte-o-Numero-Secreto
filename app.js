let listasDeNumerosSorteados = [];
let numeroLimite = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Número do jogo Secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}
exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Parabéns");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let menssagemTentativas = `você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    document.getElementById("reiniciar").removeAttribute("disabled");
    exibirTextoNaTela("p", menssagemTentativas);
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior ");
    }
  }
  tentativas++;
  limparCampo();
}
function gerarNumeroAleatorio() {
  let NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listasDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listasDeNumerosSorteados = [];
  }

  if (listasDeNumerosSorteados.includes(NumeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listasDeNumerosSorteados.push(NumeroEscolhido);

    return NumeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
