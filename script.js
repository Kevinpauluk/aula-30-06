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
    contador = 0; // Reseta o contador para 0
    atualizarContador(); // Atualiza o display
});