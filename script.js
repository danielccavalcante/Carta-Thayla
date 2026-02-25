// Texto da carta
const text = `
Meu amor, desde que você entrou na minha vida, tudo mudou.
Meus dias ficaram mais leves, os sorrisos mais fáceis, eu comecei a ver um mundo mais bonito.
Cada detalhe teu mora no meu coração.
Seu jeito, sua voz, seu sorriso, seu olhar... Tudo em você me faz ter certeza:
Se tivéssemos mais de uma vida, eu te escolheria em todas elas, em todos os mundos, em todas as versões do universo.
Eu agradeço demais por Deus ter te colocado em meu caminho naquele dia.
Você é a minha princesa, a minha companhia e o meu futuro. ❤️
O nome Thayla pode ser interpretado como "aquela que está protegida" e eu quero ser essa pessoa que te passa segurança e que vai sempre estar te protegendo e te apoiando em tudo.
Eu tenho muito orgulho de você, meu amor, sei que Deus tem coisas incríveis reservadas pra nós dois ❤️❤️
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
    let char = text.charAt(i);
    if (char === "\n") {
      typewriter.innerHTML += "<br>"; // troca quebra de linha por <br>
    } else {
      typewriter.innerHTML += char;
    }
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