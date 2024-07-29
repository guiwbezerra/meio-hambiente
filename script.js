const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Definição da história e perguntas sobre meio ambiente
const perguntas = [
    {
        enunciado: "Você cresceu em uma cidade rodeada por natureza e sempre apreciou suas belezas naturais. Como você se sente sobre a atual situação ambiental?",
        alternativas: [
            {
                texto: "Estou muito preocupado com as mudanças climáticas e a perda de biodiversidade.",
                afirmacao: "Preocupação com o futuro do planeta."
            },
            {
                texto: "Acredito que a natureza é resiliente e que os problemas ambientais se resolverão sozinhos.",
                afirmacao: "Confiança na capacidade da natureza de se recuperar."
            }
        ]
    },
    {
        enunciado: "Você está planejando suas férias. Como você escolhe o destino?",
        alternativas: [
            {
                texto: "Prefiro destinos próximos à natureza, como parques nacionais e praias limpas.",
                afirmacao: "Preferência por destinos ecológicos e sustentáveis."
            },
            {
                texto: "Escolho destinos urbanos movimentados, pois são mais excitantes e oferecem mais opções de entretenimento.",
                afirmacao: "Preferência por destinos urbanos e movimentados."
            }
        ]
    },
    {
        enunciado: "Ao fazer compras, como você escolhe produtos?",
        alternativas: [
            {
                texto: "Prefiro produtos orgânicos e locais para apoiar a agricultura sustentável.",
                afirmacao: "Apoio ao consumo consciente e sustentável."
            },
            {
                texto: "Escolho produtos com base no preço e na conveniência, sem considerar muito o impacto ambiental.",
                afirmacao: "Preferência por conveniência e preço."
            }
        ]
    },
    {
        enunciado: "Você é convidado para um protesto ambiental. Qual é a sua reação?",
        alternativas: [
            {
                texto: "Participo ativamente para lutar por políticas ambientais mais rigorosas.",
                afirmacao: "Engajamento em causas ambientais e ativismo."
            },
            {
                texto: "Prefiro não me envolver em protestos e busco apoiar causas ambientais de outras formas.",
                afirmacao: "Apoio a causas ambientais, mas com métodos diferentes."
            }
        ]
    },
    {
        enunciado: "Você está planejando seu futuro profissional. Como você considera o impacto ambiental na sua carreira?",
        alternativas: [
            {
                texto: "Busco carreiras que possam contribuir para a preservação ambiental, como conservação, engenharia ambiental ou energias renováveis.",
                afirmacao: "Prioridade no impacto ambiental positivo da carreira."
            },
            {
                texto: "Escolho carreiras com base no potencial de ganhos e oportunidades de crescimento, independentemente do impacto ambiental.",
                afirmacao: "Preferência por carreiras tradicionais sem foco ambiental específico."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual < perguntas.length) {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        mostraAlternativas();
    } else {
        // Fim das perguntas, exibir resultado final ou próxima ação
        exibeResultadoFinal();
    }
}

function mostraAlternativas() {
    // Limpa as alternativas anteriores
    caixaAlternativas.innerHTML = '';

    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += `${opcaoSelecionada.afirmacao} `;
    atual++;
    mostraPergunta();
}

function exibeResultadoFinal() {
    // Aqui você pode exibir o resultado final ou realizar a próxima ação
    caixaPerguntas.textContent = "Quiz concluído! Veja seu resultado:";
    caixaAlternativas.style.display = 'none'; // Esconder caixa de alternativas
    textoResultado.textContent = `História final: ${historiaFinal}`;
    caixaResultado.style.display = 'block'; // Exibir caixa de resultado
}

// Iniciar o quiz mostrando a primeira pergunta
mostraPergunta();