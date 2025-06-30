// Variável para armazenar o valor do contador
let contador = 0;

// Elementos HTML
const elementoContador = document.getElementById('contador');
const botaoDecrementar = document.getElementById('decrementar');
const botaoIncrementar = document.getElementById('incrementar');
const botaoZerar = document.getElementById('zerar');


// Atualiza o contador na tela
function atualizarContador() {
    elementoContador.textContent = contador;
}

// Evento para decrementar
botaoDecrementar.addEventListener('click', () => {
    contador--;
    atualizarContador();
});

// Evento para incrementar
botaoIncrementar.addEventListener('click', () => {
    contador++;
    atualizarContador();
});

// Inicializa o contador
atualizarContador();

botaoZerar.addEventListener('click', () => {
    contador = 0;
    atualizarContador();
});

// Array de imagens
const imagensDeFundo = [
    "url('img/fundo')",
    "url('img/fundo2')",
    "url('img/fundo3')",
    "url('img/fundo4')",
    "url('img/fundo5')",
    "url('img/fundo6')",
];

// Função para mudar o fundo aleatoriamente
function mudarFundo() {
    const fundoAleatorio = imagensDeFundo[Math.floor(Math.random() * imagensDeFundo.length)];
    document.body.style.backgroundImage = fundoAleatorio;
}

// Chame a função nos eventos de clique
botaoDecrementar.addEventListener('click', () => {
    contador--;
    atualizarContador();
    mudarFundo(); // Muda o fundo ao decrementar
});

botaoIncrementar.addEventListener('click', () => {
    contador++;
    atualizarContador();
    mudarFundo(); // Muda o fundo ao incrementar
});

botaoZerar.addEventListener('click', () => {
    contador = 0;
    atualizarContador();
    mudarFundo(); // Muda o fundo ao zerar
});