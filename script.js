// Texto da carta
const text = `
Desde que você entrou na minha vida, tudo mudou.
Dias mais leves, sorrisos mais fáceis, mundo mais bonito.

Cada detalhe seu mora no meu coração.
Seu jeito, sua voz, seu sorriso, seu olhar...
Tudo em você me faz ter certeza:

Eu te escolheria em todas as vidas,
em todos os mundos,
em todas as versões do universo.

Você é meu amor, minha pessoa, meu futuro. ❤️
`;

let i = 0;
const speed = 40;

const typewriter = document.getElementById("typewriter");
const revealBtn = document.getElementById("revealBtn");
const gift = document.getElementById("gift");
const music = document.getElementById("music");
const contador = document.getElementById("contador");
const envelope = document.getElementById("envelope");

// Efeito máquina de escrever
function typeEffect() {
  if (i < text.length) {
    typewriter.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  } else {
    revealBtn.classList.remove("hidden");
  }
}

// Contador de dias juntos (desde 21/04/2018)
const aniversario = new Date('2018-04-21');
function atualizarContador() {
  const hoje = new Date();
  const diff = hoje - aniversario;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  contador.textContent = `Já estamos juntos há ${dias} dias 💖`;
}
atualizarContador();
setInterval(atualizarContador, 60 * 60 * 1000); // atualiza a cada hora

// Botão pra abrir a foto
revealBtn.addEventListener("click", () => {
  gift.classList.remove("hidden");
  revealBtn.style.display = "none";
  //music.play(); Coloquei como comentário, pq botei pra música abrir antes
});

// Corações flutuantes
function criarCoracao() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.animationDuration = (4 + Math.random() * 4) + 's';
  heart.style.width = 20 + Math.random() * 20 + 'px';
  heart.style.height = heart.style.width;
  document.querySelector('.hearts').appendChild(heart);
  setTimeout(() => { heart.remove() }, 6000);
}
setInterval(criarCoracao, 500);

// Abrir envelope ao clicar na aba
const flap = document.querySelector('.flap');
flap.addEventListener('click', () => {
  envelope.classList.add('open');
  typeEffect(); //pra iniciar a digitação que foi configurada mais acima
  music.play(); //pra tocar a música quando ela clicar em abrir a carta
});