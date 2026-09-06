/* Escolhas da CPU */
const opcoesCPU = ['✊', '✋', '✌️', '🦎', '🖖'];

const opcoes = document.querySelectorAll('button');
const escolhaJogadores = document.querySelector('.escolhasJogadores');
const placar = document.querySelector('.placar');
const frase = document.querySelector('.frase')

let jogadorWin = 0;
let cpuWin = 0;
let empate = 0;

opcoes.forEach(opcao => {
    opcao.addEventListener('click', function() {
        /* Escolha do jogador*/
        const escolhaJogador = this.value;

        /* Escolha da CPU */
        const indiceAleatorio = Math.floor(Math.random() * opcoesCPU.length);
        const escolhaCPU = opcoesCPU[indiceAleatorio];
        
        escolhaJogadores.textContent = `Jogador: ${escolhaJogador} | CPU: ${escolhaCPU}`;

        /* Lógica do jogo */
        if (
            (opcao.value === '✊' && (escolhaCPU === '✌️' || escolhaCPU === '🦎')) ||
            (opcao.value === '✋' && (escolhaCPU === '✊' || escolhaCPU === '🖖')) ||
            (opcao.value === '✌️' && (escolhaCPU === '✋' || escolhaCPU === '🦎')) ||
            (opcao.value === '🦎' && (escolhaCPU === '✋' || escolhaCPU === '🖖')) ||
            (opcao.value === '🖖' && (escolhaCPU === '✊' || escolhaCPU === '✌️'))
        ) {
            frase.textContent = 'Jogador venceu!';
            frase.style.color = 'green';

            jogadorWin++;

        } else if (opcao.value === escolhaCPU) {
            frase.textContent = 'Partida empatada!';
            frase.style.color = 'orange';

            empate++;
        } else {
            frase.textContent = 'CPU venceu!';
            frase.style.color = 'red';
            
            cpuWin++;
        }

        placar.textContent = `Jogador: ${jogadorWin} | CPU: ${cpuWin} | Empate: ${empate}`;
    });
})
