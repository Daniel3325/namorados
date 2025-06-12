// Corações caindo
const container = document.querySelector(".coraçoes-container");

function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.innerText = "❤️";
  coracao.style.position = "absolute";
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.top = "0";
  coracao.style.fontSize = Math.random() * 20 + 10 + "px";
  coracao.style.animation = `cair ${3 + Math.random() * 5}s linear forwards`;
  container.appendChild(coracao);

  setTimeout(() => coracao.remove(), 8000);
}

const estiloCair = document.createElement("style");
estiloCair.innerHTML = `
  @keyframes cair {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(100vh); opacity: 0; }
  }
`;
document.head.appendChild(estiloCair);

setInterval(criarCoracao, 200);

// Abrir carta
function abrirCarta() {
  document.querySelector(".carta-fechada").style.display = "none";
  document.getElementById("carta").style.display = "block";
  iniciarContador();
  iniciarLoopImagens();
  // tocarMusica(); // Descomente se for usar YouTube
}

// Loop imagens
let imagemIndex = 0;
let intervaloImagens;

function iniciarLoopImagens() {
  const imagens = document.querySelectorAll("#imagens-loop .imagem");

  if (imagens.length === 0) return;

  if (intervaloImagens) clearInterval(intervaloImagens);

  imagemIndex = 0;
  imagens.forEach(img => img.classList.remove("mostrar"));
  imagens[imagemIndex].classList.add("mostrar");

  intervaloImagens = setInterval(() => {
    imagens[imagemIndex].classList.remove("mostrar");
    imagemIndex = (imagemIndex + 1) % imagens.length;
    imagens[imagemIndex].classList.add("mostrar");
  }, 3000);
}

// Contador de tempo desde uma data
function iniciarContador() {
  const dataInicial = new Date("2025-02-12T03:51:00");

  setInterval(() => {
    const agora = new Date();
    let totalSegundos = Math.floor((agora - dataInicial) / 1000);

    const segundos = totalSegundos % 60;
    totalSegundos = Math.floor(totalSegundos / 60);

    const minutos = totalSegundos % 60;
    totalSegundos = Math.floor(totalSegundos / 60);

    const horas = totalSegundos % 24;
    const diasTotal = Math.floor(totalSegundos / 24);
    const meses = Math.floor(diasTotal / 30);
    const dias = diasTotal % 30;

    document.getElementById("contador").innerText =
      `💖 ${meses} mês(es), ${dias} dia(s), ${horas} hora(s), ${minutos} minuto(s), ${segundos} segundo(s) juntos 💖`;
  }, 1000);
}

// function tocarMusica() {
//   const player = document.getElementById("player");
//   player.src += ""; // Recarrega
// }