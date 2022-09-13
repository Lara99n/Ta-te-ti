import random from "./random.js";
import ocultarModal from "./ocultarModal.js";
import { winPlayer1, winPlayer2 } from "./ganador.js";
import {
  boton00,
  boton01,
  boton02,
  boton10,
  boton11,
  boton12,
  boton20,
  boton21,
  boton22,
} from "./botonesTablero.js";

var player1; //True o False
var nuevoJuego = false; //Primer Juego
var contador_selecciones = 0;
var ganador = 0; //0 1 2 3
var score1 = 0;
var score2 = 0;

var matrix = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const sortearPartida = document.querySelector("#ranGame");
const comenzar = document.querySelector("#start");
const activeBoton00 = document.querySelector("#button_active1");
const activeBoton01 = document.querySelector("#button_active2");
const activeBoton02 = document.querySelector("#button_active3");
const activeBoton10 = document.querySelector("#button_active4");
const activeBoton11 = document.querySelector("#button_active5");
const activeBoton12 = document.querySelector("#button_active6");
const activeBoton20 = document.querySelector("#button_active7");
const activeBoton21 = document.querySelector("#button_active8");
const activeBoton22 = document.querySelector("#button_active9");
const siguienteJuego = document.querySelector("#nextButton");
const botonReinicio = document.querySelector("#cleanButton");

function contadorClicks() {
  contador_selecciones += 1;
  if (contador_selecciones === 9) {
    contador_selecciones = 0;
  }
  console.log(matrix);
  console.log(ganador);
}

function puntaje() {
  if (ganador === 1) {
    score1 += 1;
    winPlayer1(score1);
    contador_selecciones = 0;
  } else if (ganador === 2) {
    score2 += 1;
    winPlayer2(score2);
    contador_selecciones = 0;
  } else if (ganador === 3) {
    contador_selecciones = 0;
  }
}

sortearPartida.onclick = () => {
  player1 = random(nuevoJuego);
};

comenzar.onclick = () => {
  ocultarModal();
};

window.addEventListener("click", function (e) {
  let modal = document.querySelectorAll(".modal")[0];
  let modal_container = document.querySelectorAll(".modal-container")[0];

  if (e.target === modal_container) {
    modal.classList.toggle("modal-close");
    setTimeout(function () {
      modal_container.style.opacity = "0";
      modal_container.style.visibility = "hidden";
    }, 1000);
  }
});

activeBoton00.onclick = () => {
  var resultado = boton00(player1, matrix, contador_selecciones);
  player1 = resultado[0];
  matrix = resultado[1];
  ganador = resultado[2];
  contadorClicks();
  puntaje();
};

activeBoton01.onclick = () => {
  var resultado = boton01(player1, matrix, contador_selecciones);
  player1 = resultado[0];
  matrix = resultado[1];
  ganador = resultado[2];
  contadorClicks();
  puntaje();
};

activeBoton02.onclick = () => {
  var resultado = boton02(player1, matrix, contador_selecciones);
  player1 = resultado[0];
  matrix = resultado[1];
  ganador = resultado[2];
  contadorClicks();
  puntaje();
};

activeBoton10.onclick = () => {
  var resultado = boton10(player1, matrix, contador_selecciones);
  player1 = resultado[0];
  matrix = resultado[1];
  ganador = resultado[2];
  contadorClicks();
  puntaje();
};

activeBoton11.onclick = () => {
  var resultado = boton11(player1, matrix, contador_selecciones);
  player1 = resultado[0];
  matrix = resultado[1];
  ganador = resultado[2];
  contadorClicks();
  puntaje();
};

activeBoton12.onclick = () => {
  var resultado = boton12(player1, matrix, contador_selecciones);
  player1 = resultado[0];
  matrix = resultado[1];
  ganador = resultado[2];
  contadorClicks();
  puntaje();
};

activeBoton20.onclick = () => {
  var resultado = boton20(player1, matrix, contador_selecciones);
  player1 = resultado[0];
  matrix = resultado[1];
  ganador = resultado[2];
  contadorClicks();
  puntaje();
};

activeBoton21.onclick = () => {
  var resultado = boton21(player1, matrix, contador_selecciones);
  player1 = resultado[0];
  matrix = resultado[1];
  ganador = resultado[2];
  contadorClicks();
  puntaje();
};

activeBoton22.onclick = () => {
  var resultado = boton22(player1, matrix, contador_selecciones);
  player1 = resultado[0];
  matrix = resultado[1];
  ganador = resultado[2];
  contadorClicks();
  puntaje();
};

siguienteJuego.onclick = () => {
  ganador = 0;
  contador_selecciones = 0;
  nuevoJuego = true;

  matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const button_ranGame = document.getElementById("ranGame");
  button_ranGame.disabled = false;
  button_ranGame.style.backgroundColor = "#f5ce22";
  button_ranGame.style.cursor = "pointer";
  const button_next = document.getElementById("nextButton");
  button_next.disabled = true;
  button_next.style.backgroundColor = "gray";
  button_next.style.cursor = "default";

  const img_player1 = document.getElementById("img_player1");
  img_player1.src = "./images/wait.png";
  img_player1.style.width = "80%";

  const img_player2 = document.getElementById("img_player2");
  img_player2.src = "./images/wait.png";
  img_player2.style.width = "80%";

  for (var i = 1; i < 10; i++) {
    let string = "button_active" + i;
    document.getElementById(string).innerText = null;
    document.getElementById(string).disabled = true;
    document.getElementById(string).style.cursor = "default";
  }
};

botonReinicio.onclick = () => {
  let option = confirm("¿Está seguro de reiniciar el Juego?");
  if (option) {
    location.reload();
  }
};
