var ganador = 0;
var cantidadJuegos = 0; //Control para reiniciar la variable ganador

function validar(player1, matrix, contador_selecciones) {
  let simbolo;

  if (cantidadJuegos === 1) {
    ganador = 0;
    cantidadJuegos = 0;
  }

  if (player1) {
    simbolo = "x";
  } else {
    simbolo = "o";
  }
  //Primera fila
  if (
    simbolo === matrix[0][0] &&
    simbolo === matrix[0][1] &&
    simbolo === matrix[0][2]
  ) {
    if (simbolo === "x") {
      ganador = 1;
      cantidadJuegos += 1;
    } else if (simbolo === "o") {
      ganador = 2;
      cantidadJuegos += 1;
    } else {
      ganador = 0;
    }
  }
  //segunda fila
  else if (
    simbolo === matrix[1][0] &&
    simbolo === matrix[1][1] &&
    simbolo === matrix[1][2]
  ) {
    if (simbolo === "x") {
      ganador = 1;
      cantidadJuegos += 1;
    } else if (simbolo === "o") {
      ganador = 2;
      cantidadJuegos += 1;
    } else {
      ganador = 0;
    }
  }
  //Tercera fila
  else if (
    simbolo === matrix[2][0] &&
    simbolo === matrix[2][1] &&
    simbolo === matrix[2][2]
  ) {
    if (simbolo === "x") {
      ganador = 1;
      cantidadJuegos += 1;
    } else if (simbolo === "o") {
      ganador = 2;
      cantidadJuegos += 1;
    } else {
      ganador = 0;
    }
  }
  //Primera columna
  else if (
    simbolo === matrix[0][0] &&
    simbolo === matrix[1][0] &&
    simbolo === matrix[2][0]
  ) {
    if (simbolo === "x") {
      ganador = 1;
      cantidadJuegos += 1;
    } else if (simbolo === "o") {
      ganador = 2;
      cantidadJuegos += 1;
    } else {
      ganador = 0;
    }
  }

  //Segunda columna
  else if (
    simbolo === matrix[0][1] &&
    simbolo === matrix[1][1] &&
    simbolo === matrix[2][1]
  ) {
    if (simbolo === "x") {
      ganador = 1;
      cantidadJuegos += 1;
    } else if (simbolo === "o") {
      ganador = 2;
      cantidadJuegos += 1;
    } else {
      ganador = 0;
    }
  }

  //Tercera Columna
  else if (
    simbolo === matrix[0][2] &&
    simbolo === matrix[1][2] &&
    simbolo === matrix[2][2]
  ) {
    if (simbolo === "x") {
      ganador = 1;
      cantidadJuegos += 1;
    } else if (simbolo === "o") {
      ganador = 2;
      cantidadJuegos += 1;
    } else {
      ganador = 0;
    }
  }
  //Diagonal 1
  else if (
    simbolo === matrix[0][0] &&
    simbolo === matrix[1][1] &&
    simbolo === matrix[2][2]
  ) {
    if (simbolo === "x") {
      ganador = 1;
      cantidadJuegos += 1;
    } else if (simbolo === "o") {
      ganador = 2;
      cantidadJuegos += 1;
    } else {
      ganador = 0;
    }
  }

  //Diagonal 2
  else if (
    simbolo === matrix[0][2] &&
    simbolo === matrix[1][1] &&
    simbolo === matrix[2][0]
  ) {
    if (simbolo === "x") {
      ganador = 1;
      cantidadJuegos += 1;
    } else if (simbolo === "o") {
      ganador = 2;
      cantidadJuegos += 1;
    } else {
      ganador = 0;
    }
  }

  if (contador_selecciones === 9) {
    const nextButton = document.getElementById("nextButton");
    nextButton.disabled = false;
    nextButton.style.backgroundColor = "#f5ce22";
    nextButton.style.cursor = "pointer";
    ganador = 3; //Empate
  }

  return ganador;
}

export default validar;
