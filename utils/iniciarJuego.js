import turno from "./turno.js";

function iniciarJuego(nuevoJuego, player1) {
  var i;

  if (!nuevoJuego) {
    for (i = 1; i < 10; i++) {
      let string = "button_active" + i;
      document.getElementById(string).style.display = "block";
    }
  } else {
    for (i = 1; i < 10; i++) {
      let string = "button_active" + i;
      document.getElementById(string).disabled = false;
      document.getElementById(string).style.cursor = "pointer";
    }

    nuevoJuego = false;
  }

  turno(player1);
}

export default iniciarJuego;
