const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você apoio o racismo?",
        alternativas: [
            {
                texto: "Sim, eu apoio o movimento racista",
                afirmacao: [
                    "Vocẽ realmente já ouviu falar o que é racismo? A sua história e quantas milhares de pessoas foram prejudicadas e mortas? ",
                    "afirmacao 2"
                    ]
            },
            {
                texto: "Não, sou contra o movimento racista",
                afirmacao: [
                    " Que legal! concordamos que o  racismo não é uma coisa boa",
                    "afirmacao 2"
                    ]
            }           
            
        ]
    },
    {
        enunciado: "Principal dano causado pelo racismo",
        alternativas: [
            {
                texto:"Fortalece a autoestima das vitimas",
                afirmacao: [
                    "Racismo enfraquece a autoestima, perpetuando sentimentos de inferioridade",
                    "afirmacao 2"
                    ]
            },
            {
                texto: "Contribui para a exclusão social e marginalização de grupos minoridarios",
                afirmacao: [
                    "Reforça a desigualdade e esteriótipos discriminatórios",
                    "afirmacao 2"
                    ]
            }
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto:"Alternativa 1 da pergunta 3",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                    ]
            },
            {
                texto:"Alternativa 2 da pergunta 3",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                    ]
            }
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
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
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
