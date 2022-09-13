function turno(player1) {
  if (player1 === true) {
    const img_player1 = document.getElementById("img_player1");
    img_player1.src = "./images/play.png";
    img_player1.style.width = "120%";

    const img_player2 = document.getElementById("img_player2");
    img_player2.src = "./images/wait.png";
    img_player2.style.width = "60%";

    document.getElementById("player1_title").style.fontSize = "20px";
    document.getElementById("player2_title").style.fontSize = "15px";
  } else {
    const img_player1 = document.getElementById("img_player1");
    img_player1.src = "./images/wait.png";
    img_player1.style.width = "60%";

    const img_player2 = document.getElementById("img_player2");
    img_player2.src = "./images/play.png";
    img_player2.style.width = "120%";

    document.getElementById("player1_title").style.fontSize = "15px";
    document.getElementById("player2_title").style.fontSize = "20px";
  }
}

export default turno;
