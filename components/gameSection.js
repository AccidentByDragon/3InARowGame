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
  gameCell1x1.className="cell";
  gameCell1x1.id = "cell1x1";
  const gameCell1x2 = document.createElement("div");
  gameCell1x2.className = "cell";
  gameCell1x2.id = "cell1x2";
  const gameCell1x3 = document.createElement("div");
  gameCell1x3.className = "cell";
  gameCell1x3.id = "cell1x3";
  const gameCell2x1 = document.createElement("div");
  gameCell2x1.className = "cell";
  gameCell2x1.id = "cell2x1";
  const gameCell2x2 = document.createElement("div");
  gameCell2x2.className = "cell";
  gameCell2x2.id = "cell2x2"
  const gameCell2x3 = document.createElement("div");
  gameCell2x3.className = "cell";
  gameCell2x3.id = "cell2x3";
  const gameCell3x1 = document.createElement("div");
  gameCell3x1.className = "cell";
  gameCell3x1.id = "cell3x1";
  const gameCell3x2 = document.createElement("div");
  gameCell3x2.className = "cell";
  gameCell3x2.id = "cell3x2";
  const gameCell3x3 = document.createElement("div");
  gameCell3x3.className = "cell";
  gameCell3x3.id = "cell3x3";

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
    if (event.target.className === "cell") {
      if (player1Turn === true && player1Pieces != 0) {
        const tempTarget = event.target;        
        tempTarget.className = "player1Cell";
        player2Turn = true;
        player1Turn = false;
        player1Pieces = player1Pieces - 1;        
        checkWin1();
      } else if (player2Turn === true && player2Pieces != 0) {
        const tempTarget = event.target;
        tempTarget.className = "player2Cell";
        player1Turn = true;
        player2Turn = false;
        player2Pieces = player2Pieces - 1;
        checkWin2();
        roundNumber++;
      }
    }
    else if (event.target.className === "player1Cell") {
      if (player1Turn === true && player1Pieces === 0) {
        const tempTarget = event.target;
        tempTarget.className = "cell"
        player1Pieces++;
      }
      else {
        alert("You cannot move this piece");
      }
    }
    else if (event.target.className === "player2Cell") {
      if (player2Turn === true && player2Pieces === 0) {
        const tempTarget = event.target;
        tempTarget.className = "cell"
        player2Pieces++;
      }
      else {
        alert("You cannot move this piece");
      }
    }
  })
  function checkWin1() {
    if (gameCell1x1.className === "player1Cell" && gameCell1x2.className === "player1Cell" && gameCell1x3.className ==="player1Cell") {
      alert(`player1 has won`)
    }
    if (gameCell2x1.className === "player1Cell" && gameCell2x2.className === "player1Cell" && gameCell2x3.className === "player1Cell") {
      alert(`player1 has won`)
    }
    if (gameCell3x1.className === "player1Cell" && gameCell3x2.className === "player1Cell" && gameCell3x3.className === "player1Cell") {
      alert(`player1 has won`)
    }
    if (gameCell1x1.className === "player1Cell" && gameCell2x1.className === "player1Cell" && gameCell3x1.className === "player1Cell") {
      alert(`player1 has won`)
    }
    if (gameCell1x2.className === "player1Cell" && gameCell2x2.className === "player1Cell" && gameCell3x2.className === "player1Cell") {
      alert(`player1 has won`)
    }
    if (gameCell1x3.className === "player1Cell" && gameCell2x3.className === "player1Cell" && gameCell3x3.className === "player1Cell") {
      alert(`player1 has won`)
    }
    if (gameCell1x1.className === "player1Cell" && gameCell2x2.className === "player1Cell" && gameCell3x3.className === "player1Cell") {
      alert(`player1 has won`)
    }
    if (gameCell3x1.className === "player1Cell" && gameCell2x2.className === "player1Cell" && gameCell1x3.className === "player1Cell") {
      alert(`player1 has won`)
    }    
  }
  function checkWin2() {
    if (gameCell1x1.className === "player2Cell" && gameCell1x2.className === "player2Cell" && gameCell1x3.className === "player2Cell") {
      alert(`player2 has won`)
    }
    if (gameCell2x1.className === "player2Cell" && gameCell2x2.className === "player2Cell" && gameCell2x3.className === "player2Cell") {
      alert(`player2 has won`)
    }
    if (gameCell3x1.className === "player2Cell" && gameCell3x2.className === "player2Cell" && gameCell3x3.className === "player2Cell") {
      alert(`player2 has won`)
    }
    if (gameCell1x1.className === "player2Cell" && gameCell2x1.className === "player2Cell" && gameCell3x1.className === "player2Cell") {
      alert(`player2 has won`)
    }
    if (gameCell1x2.className === "player2Cell" && gameCell2x2.className === "player2Cell" && gameCell3x2.className === "player2Cell") {
      alert(`player2 has won`)
    }
    if (gameCell1x3.className === "player2Cell" && gameCell2x3.className === "player2Cell" && gameCell3x3.className === "player2Cell") {
      alert(`player2 has won`)
    }
    if (gameCell1x1.className === "player2Cell" && gameCell2x2.className === "player2Cell" && gameCell3x3.className === "player2Cell") {
      alert(`player2 has won`)
    }
    if (gameCell3x1.className === "player2Cell" && gameCell2x2.className === "player2Cell" && gameCell1x3.className === "player2Cell") {
      alert(`player2 has won`)
    }
  }
  return sectionGame;
}

