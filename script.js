// Variáveis
let contador = 0;
const elementoContador = document.getElementById('contador');
const botaoDecrementar = document.getElementById('decrementar');
const botaoIncrementar = document.getElementById('incrementar');
const botaoZerar = document.getElementById('zerar');

// Imagens de fundo
const imagensDeFundo = [
"url('img/fundo')",
"url('img/fundo2')",
"url('img/fundo3')",
"url('img/fundo4')",
"url('img/fundo5')",
"url('img/fundo6')",
];

// Funções
function atualizarContador() {
    elementoContador.textContent = contador;
}

function mudarFundo() {
    const indice = Math.floor(Math.random() * imagensDeFundo.length);
    document.body.style.backgroundImage = imagensDeFundo[indice];
}

// Eventos (APENAS UMA VEZ PARA CADA BOTÃO)
botaoIncrementar.addEventListener('click', () => {
    contador++;
    atualizarContador();
    mudarFundo();
});

botaoDecrementar.addEventListener('click', () => {
    contador--;
    atualizarContador();
    mudarFundo();
});

botaoZerar.addEventListener('click', () => {
    contador = 0;
    atualizarContador();
    mudarFundo();
});

// Inicialização
atualizarContador();
mudarFundo(); // Define um fundo inicial