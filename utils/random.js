import iniciarJuego from "./iniciarJuego.js";

function random(nuevoJuego) {
  var player1;
  const ranMatch = Math.floor(Math.random() * 2) + 1; // 1 o 2
  const playerInit = document.getElementById("playerInit");

  if (ranMatch === 1) {
    playerInit.innerText = "Inicia el Jugador 1";
    player1 = true;
  } else {
    playerInit.innerText = "Inicia Jugador 2";
    player1 = false;
  }

  let modal = document.querySelectorAll(".modal")[0];
  let modal_container = document.querySelectorAll(".modal-container")[0];
  modal_container.style.opacity = "1";
  modal_container.style.visibility = "visible";
  modal.classList.toggle("modal-close");

  iniciarJuego(nuevoJuego, player1); /***********/

  const button_ranGame = document.getElementById("ranGame");
  button_ranGame.disable = true;
  button_ranGame.style.backgroundColor = "gray";
  button_ranGame.style.cursor = "default";
  const button_reset = document.getElementById("cleanButton");
  button_reset.disabled = false;
  button_reset.style.backgroundColor = "#f5ce22";
  button_reset.style.cursor = "pointer";
  return player1;
}

export default random;
