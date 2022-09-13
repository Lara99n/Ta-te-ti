import turno from "./turno.js";
import validar from "./validar.js";

var ganador = 0;

function boton00(player1, matrix, contador_selecciones) {
  const button_selection = document.getElementById("button_active1");
  if (player1) {
    button_selection.innerText = "X";
    button_selection.style.color = "tomato";
  } else {
    button_selection.innerText = "O";
    button_selection.style.color = "#1E90FF";
  }
  button_selection.disabled = true;
  button_selection.style.cursor = "default";
  matrix[0][0] = player1 ? "x" : "o";
  ganador = validar(player1, matrix, contador_selecciones);
  if (ganador === 0) {
    player1 = !player1;
    turno(player1);
  }

  return [player1, matrix, ganador];
}

function boton01(player1, matrix, contador_selecciones) {
  const button_selection = document.getElementById("button_active2");
  if (player1) {
    button_selection.innerText = "X";
    button_selection.style.color = "tomato";
  } else {
    button_selection.innerText = "O";
    button_selection.style.color = "#1E90FF";
  }
  button_selection.disabled = true;
  button_selection.style.cursor = "default";
  matrix[0][1] = player1 ? "x" : "o";
  ganador = validar(player1, matrix, contador_selecciones);
  if (ganador === 0) {
    player1 = !player1;
    turno(player1);
  }

  return [player1, matrix, ganador];
}

function boton02(player1, matrix, contador_selecciones) {
  const button_selection = document.getElementById("button_active3");
  if (player1) {
    button_selection.innerText = "X";
    button_selection.style.color = "tomato";
  } else {
    button_selection.innerText = "O";
    button_selection.style.color = "#1E90FF";
  }
  button_selection.disabled = true;
  button_selection.style.cursor = "default";
  matrix[0][2] = player1 ? "x" : "o";
  ganador = validar(player1, matrix, contador_selecciones);
  if (ganador === 0) {
    player1 = !player1;
    turno(player1);
  }

  return [player1, matrix, ganador];
}

function boton10(player1, matrix, contador_selecciones) {
  const button_selection = document.getElementById("button_active4");
  if (player1) {
    button_selection.innerText = "X";
    button_selection.style.color = "tomato";
  } else {
    button_selection.innerText = "O";
    button_selection.style.color = "#1E90FF";
  }
  button_selection.disabled = true;
  button_selection.style.cursor = "default";
  matrix[1][0] = player1 ? "x" : "o";
  ganador = validar(player1, matrix, contador_selecciones);
  if (ganador === 0) {
    player1 = !player1;
    turno(player1);
  }

  return [player1, matrix, ganador];
}

function boton11(player1, matrix, contador_selecciones) {
  const button_selection = document.getElementById("button_active5");
  if (player1) {
    button_selection.innerText = "X";
    button_selection.style.color = "tomato";
  } else {
    button_selection.innerText = "O";
    button_selection.style.color = "#1E90FF";
  }
  button_selection.disabled = true;
  button_selection.style.cursor = "default";
  matrix[1][1] = player1 ? "x" : "o";
  ganador = validar(player1, matrix, contador_selecciones);
  if (ganador === 0) {
    player1 = !player1;
    turno(player1);
  }

  return [player1, matrix, ganador];
}

function boton12(player1, matrix, contador_selecciones) {
  const button_selection = document.getElementById("button_active6");
  if (player1) {
    button_selection.innerText = "X";
    button_selection.style.color = "tomato";
  } else {
    button_selection.innerText = "O";
    button_selection.style.color = "#1E90FF";
  }
  button_selection.disabled = true;
  button_selection.style.cursor = "default";
  matrix[1][2] = player1 ? "x" : "o";
  ganador = validar(player1, matrix, contador_selecciones);
  if (ganador === 0) {
    player1 = !player1;
    turno(player1);
  }

  return [player1, matrix, ganador];
}

function boton20(player1, matrix, contador_selecciones) {
  const button_selection = document.getElementById("button_active7");
  if (player1) {
    button_selection.innerText = "X";
    button_selection.style.color = "tomato";
  } else {
    button_selection.innerText = "O";
    button_selection.style.color = "#1E90FF";
  }
  button_selection.disabled = true;
  button_selection.style.cursor = "default";
  matrix[2][0] = player1 ? "x" : "o";
  ganador = validar(player1, matrix, contador_selecciones);
  if (ganador === 0) {
    player1 = !player1;
    turno(player1);
  }

  return [player1, matrix, ganador];
}

function boton21(player1, matrix, contador_selecciones) {
  const button_selection = document.getElementById("button_active8");
  if (player1) {
    button_selection.innerText = "X";
    button_selection.style.color = "tomato";
  } else {
    button_selection.innerText = "O";
    button_selection.style.color = "#1E90FF";
  }
  button_selection.disabled = true;
  button_selection.style.cursor = "default";
  matrix[2][1] = player1 ? "x" : "o";
  ganador = validar(player1, matrix, contador_selecciones);
  if (ganador === 0) {
    player1 = !player1;
    turno(player1);
  }

  return [player1, matrix, ganador];
}

function boton22(player1, matrix, contador_selecciones) {
  const button_selection = document.getElementById("button_active9");
  if (player1) {
    button_selection.innerText = "X";
    button_selection.style.color = "tomato";
  } else {
    button_selection.innerText = "O";
    button_selection.style.color = "#1E90FF";
  }
  button_selection.disabled = true;
  button_selection.style.cursor = "default";
  matrix[2][2] = player1 ? "x" : "o";
  ganador = validar(player1, matrix, contador_selecciones);
  if (ganador === 0) {
    player1 = !player1;
    turno(player1);
  }

  return [player1, matrix, ganador];
}

export {
  boton00,
  boton01,
  boton02,
  boton10,
  boton11,
  boton12,
  boton20,
  boton21,
  boton22,
};
