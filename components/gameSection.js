//Game Section
export default function Game() {
  const sectionGame = document.createElement("section");
  sectionGame.id = "Game";
  const sectionGameHeader = document.createElement("h2");
  sectionGameHeader.innerText = "Game";
  sectionGame.appendChild(sectionGameHeader)

  let currentPlayers = [
    {
      name: "player1",
    },
    {
      name: "player2",
    }
  ]
  let roundNumber = 0;
  let gameStarted = false;
  let player1Turn = true;
  let player2Turn = false;
  let player1Pieces = 3;
  let player2Pieces = 3;
  const gameGrid = document.createElement("div");
  gameGrid.id = "grid";
  const gameCell1x1 = document.createElement("div");
  gameCell1x1.id = "cell";
  const gameCell1x2 = document.createElement("div");
  gameCell1x2.id = "cell";
  const gameCell1x3 = document.createElement("div");
  gameCell1x3.id = "cell";
  const gameCell2x1 = document.createElement("div");
  gameCell2x1.id = "cell";
  const gameCell2x2 = document.createElement("div");
  gameCell2x2.id = "cell";
  const gameCell2x3 = document.createElement("div");
  gameCell2x3.id = "cell";
  const gameCell3x1 = document.createElement("div");
  gameCell3x1.id = "cell";
  const gameCell3x2 = document.createElement("div");
  gameCell3x2.id = "cell";
  const gameCell3x3 = document.createElement("div");
  gameCell3x3.id = "cell";

  gameGrid.appendChild(gameCell1x1);
  gameGrid.appendChild(gameCell1x2);
  gameGrid.appendChild(gameCell1x3);
  gameGrid.appendChild(gameCell2x1);
  gameGrid.appendChild(gameCell2x2);
  gameGrid.appendChild(gameCell2x3);
  gameGrid.appendChild(gameCell3x1);
  gameGrid.appendChild(gameCell3x2);
  gameGrid.appendChild(gameCell3x3);
  sectionGame.appendChild(gameGrid);

  gameGrid.addEventListener("click", function (event) {
    if (event.target.id === "cell") {
      if (player1Turn === true && player1Pieces != 0) {
        const tempTarget = event.target;
        tempTarget.id = "player1Cell";
        player2Turn = true;
        player1Turn = false;
        player1Pieces = player1Pieces - 1;
        checkWin();
      } else if (player2Turn === true && player2Pieces != 0) {
        const tempTarget = event.target;
        tempTarget.id = "player2Cell";
        player1Turn = true;
        player2Turn = false;
        player2Pieces = player2Pieces - 1;
        checkWin();
        roundNumber++;
      }
    }
    else if (event.target.id === "player1Cell") {
      if (player1Turn === true && player1Pieces === 0) {
        const tempTarget = event.target;
        tempTarget.id = "cell"
        player1Pieces++;
      }
      else {
        alert("You cannot move this piece");
      }
    }
    else if (event.target.id === "player2Cell") {
      if (player2Turn === true && player2Pieces === 0) {
        const tempTarget = event.target;
        tempTarget.id = "cell"
        player2Pieces++;
      }
      else {
        alert("You cannot move this piece");
      }
    }
  })

  return sectionGame;
}

function checkWin() {
  
}