import {aleatorio, nome} from './aleatorio.js';
import {aleatorio} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-bnt");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciajogos);

function inicia jogo() 
    atual = 0;
    historiafinal = "";
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.remove(".mostrar");
    caixaResultado.classList.remove("mostrar"); 
    mostraResultado();
}

function mostraPerguntas() {
    if(atual >= perguntas.lengt){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    if(opcaoSelecionada.proxima !== undefined) {
      atual= opcaoSelecionada.proxima;
    }else {    
    mostraResultado();
    return;
    }
    mostraPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = `Em 2049, $(nome)`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
    caixaResultado.classlist.add("mostrar); 
    botaoJogarNovamente.addEventListener("click", jogarNovamente);                             
}

function jogarNovamente {
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}
    
mostraPergunta();
