
// ======================================
// PROJETO CARDÁPIO IFPI
// ======================================


// 1. CARDÁPIO DA SEMANA

const cardapios = [
    {
        dia: "Segunda-feira",
        refeicao: ["Arroz", "Feijão", "Frango", "Salada"]
    },
    {
        dia: "Terça-feira",
        refeicao: ["Macarrão", "Carne moída", "Legumes"]
    },
    {
        dia: "Quarta-feira",
        refeicao: ["Arroz", "Feijão", "Peixe", "Salada"]
    },
    {
        dia: "Quinta-feira",
        refeicao: ["Cuscuz", "Frango", "Salada"]
    },
    {
        dia: "Sexta-feira",
        refeicao: ["Arroz", "Feijão", "Carne", "Salada"]
    }
];


// 2. CONTADOR DE AVALIAÇÕES

const avaliacoes = cardapios.map(function() {
    return {
        gostei: 0,
        naoGostei: 0
    };
});


// 3. IDENTIFICAR O DIA ATUAL

const numeroDia = new Date().getDay();

const diasSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

const diaAtual = diasSemana[numeroDia];


// 4. MOSTRAR OS CARDÁPIOS

function mostrarCardapios() {

    const areaCardapio = document.getElementById("cardapio");

    areaCardapio.innerHTML = "";

    cardapios.forEach(function(item, indice) {

        const classeHoje = item.dia === diaAtual ? "hoje" : "";

        areaCardapio.innerHTML += `
            <div class="card ${classeHoje}">

                <h3>${item.dia}</h3>

                <p><strong>Refeição:</strong></p>

                ${item.refeicao.map(function(alimento) {
                    return `<p>• ${alimento}</p>`;
                }).join("")}

                ${item.dia === diaAtual ? "<strong>Hoje!</strong>" : ""}

                <div class="avaliacao">

                    <p>Você gostou da refeição?</p>

                    <button class="gostei" data-indice="${indice}" data-voto="gostei">
                        👍 Gostei
                    </button>

                    <button class="nao-gostei" data-indice="${indice}" data-voto="naoGostei">
                        👎 Não gostei
                    </button>

                    <p>
                        👍 <span id="curtidas-${indice}">0</span>
                        |
                        👎 <span id="nao-curtidas-${indice}">0</span>
                    </p>

                </div>

            </div>
        `;
    });
}


// 5. REGISTRAR OS VOTOS

function registrarVotos() {

    const areaCardapio = document.getElementById("cardapio");

    areaCardapio.addEventListener("click", function(event) {

        const botao = event.target.closest("button[data-voto]");

        if (!botao) {
            return;
        }

        const indice = Number(botao.dataset.indice);

        const tipoVoto = botao.dataset.voto;

        avaliacoes[indice][tipoVoto]++;

        document.getElementById("curtidas-" + indice).textContent =
            avaliacoes[indice].gostei;

        document.getElementById("nao-curtidas-" + indice).textContent =
            avaliacoes[indice].naoGostei;

    });
}


// 6. INICIAR O SISTEMA

mostrarCardapios();

registrarVotos();
