const botao = document.getElementById("botao");
const conteudo = document.getElementById("conteudo");

botao.addEventListener("click", () => {
  botao.style.opacity = "0";
  setTimeout(() => {
    botao.style.display = "none";
    conteudo.classList.remove("hidden");
    conteudo.classList.add("visible");
    iniciarContador();
  }, 800);
});

function iniciarContador() {
  const inicio = new Date("2024-09-03T00:00:00");

  function atualizarContador() {
    const agora = new Date();
    const diff = agora - inicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById(
      "contador"
    ).innerText = `Já se passaram ${dias} dias, ${horas} horas e ${minutos} minutos desde o dia que eu tomei a melhor decisão da minha vida.`;
  }

  atualizarContador();
  setInterval(atualizarContador, 60000); // atualiza a cada minuto
}
