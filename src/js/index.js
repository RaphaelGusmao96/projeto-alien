const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal")
const videoModal= document.getElementById("video-modal");


const modal = document.querySelector(".modal");

botaoTrailer.addEventListener("click", () => {
  modal.classList.add("aberto");
  
});

botaoFecharModal.addEventListener("click", () => {
  modal.classList.remove("aberto");
  videoModal.currentTime = 0;
  });

  
