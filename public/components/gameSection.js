import { getAllUsers, addUser, getOneUser, updateUser } from "./userManagement.js";

export default function Game(plyrList) {
  const sectionGame = document.createElement("section");
  sectionGame.id = "Game";
  const sectionGameHeader = document.createElement("h2");
  sectionGameHeader.innerText = "Game";
  sectionGame.appendChild(sectionGameHeader)

  let currentPlayers = []
  let gameStarted = false;

  const sectionPlyrSlct = document.createElement("section");
  sectionPlyrSlct.id = "playerSelect"
  const plyrSlctForm = document.createElement("form");
  plyrSlctForm.id = "playerSelectForm"
  const plyrSlctSelect1 = document.createElement("select")
  plyrSlctSelect1.id = "playerSelect1"
  plyrList.forEach(user => {
    const option = document.createElement("option");
    option.value = user.name;
    option.textContent = user.name;
    plyrSlctSelect1.appendChild(option)
  });
  const plyrSlctSelect2 = document.createElement("select");
  plyrSlctSelect2.id = "playerSelect2"
  plyrList.forEach(user => {
    const option = document.createElement("option");
    option.value = user.name;
    option.textContent = user.name;
    plyrSlctSelect2.appendChild(option)
  });
  const plyrSlctBttn = document.createElement("input");
  plyrSlctBttn.type = "submit"
  plyrSlctBttn.id = "playerSelectButton"
  plyrSlctBttn.value = "Select Players"

  plyrSlctForm.appendChild(plyrSlctSelect1);
  plyrSlctForm.appendChild(plyrSlctSelect2);
  plyrSlctForm.appendChild(plyrSlctBttn);
  sectionPlyrSlct.appendChild(plyrSlctForm);
  sectionGame.appendChild(sectionPlyrSlct);

  sectionPlyrSlct.addEventListener("click", function (event) {
    if (event.target.id == "playerSelectButton") {
      event.preventDefault();      
      const tempSelection1 = plyrSlctSelect1.options[plyrSlctSelect1.selectedIndex].value;
      const tempSelection2 = plyrSlctSelect2.options[plyrSlctSelect2.selectedIndex].value;

      if (tempSelection1 != tempSelection2) {
        currentPlayers.push(tempSelection1)
        currentPlayers.push(tempSelection2)
        alert(`${tempSelection1} and ${tempSelection2} added to current players`)
        gameStarted = true;
      } else {
        alert("You must select two different Players")
      }

    }
  })


  let roundNumber = 0;  
  let player1Turn = true;
  let player2Turn = false;
  let player1Win = false;
  let player2Win = false;
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
      if (player1Turn === true && player1Pieces != 0 && gameStarted === true) {
        const tempTarget = event.target;        
        tempTarget.className = "player1Cell";
        player2Turn = true;
        player1Turn = false;
        player1Pieces = player1Pieces - 1;        
        checkWin1();
      } else if (player2Turn === true && player2Pieces != 0 && gameStarted === true) {
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
      if (player1Turn === true && player1Pieces === 0 && gameStarted === true) {
        const tempTarget = event.target;
        tempTarget.className = "cell"
        player1Pieces++;
      }
      else {
        alert("You cannot move this piece");
      }
    }
    else if (event.target.className === "player2Cell") {
      if (player2Turn === true && player2Pieces === 0 && gameStarted === true) {
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
      gameStarted = false;
      player1Win = true;    
    }
    else if (gameCell2x1.className === "player1Cell" && gameCell2x2.className === "player1Cell" && gameCell2x3.className === "player1Cell") {
      gameStarted = false;
      player1Win = true;    
    }
    else if (gameCell3x1.className === "player1Cell" && gameCell3x2.className === "player1Cell" && gameCell3x3.className === "player1Cell") {
      gameStarted = false;
      player1Win = true;    
    }
    else if (gameCell1x1.className === "player1Cell" && gameCell2x1.className === "player1Cell" && gameCell3x1.className === "player1Cell") {
      gameStarted = false;
      player1Win = true;    
    }
    else if (gameCell1x2.className === "player1Cell" && gameCell2x2.className === "player1Cell" && gameCell3x2.className === "player1Cell") {
      gameStarted = false;
      player1Win = true;    
    }
    else if (gameCell1x3.className === "player1Cell" && gameCell2x3.className === "player1Cell" && gameCell3x3.className === "player1Cell") {
      gameStarted = false;
      player1Win = true;
    }
    else if (gameCell1x1.className === "player1Cell" && gameCell2x2.className === "player1Cell" && gameCell3x3.className === "player1Cell") {
      gameStarted = false;
      player1Win = true;    
    }
    else if (gameCell3x1.className === "player1Cell" && gameCell2x2.className === "player1Cell" && gameCell1x3.className === "player1Cell") {
      gameStarted = false;
      player1Win = true;
    }
    gameWon();
  }

  function checkWin2() {
    if (gameCell1x1.className === "player2Cell" && gameCell1x2.className === "player2Cell" && gameCell1x3.className === "player2Cell") {
      gameStarted = false;
      player2Win = true;    
    }
    else if (gameCell2x1.className === "player2Cell" && gameCell2x2.className === "player2Cell" && gameCell2x3.className === "player2Cell") {
      gameStarted = false;
      player2Win = true; 
    }
    else if (gameCell3x1.className === "player2Cell" && gameCell3x2.className === "player2Cell" && gameCell3x3.className === "player2Cell") {
      gameStarted = false;
      player2Win = true; 
    }
    else if (gameCell1x1.className === "player2Cell" && gameCell2x1.className === "player2Cell" && gameCell3x1.className === "player2Cell") {
      gameStarted = false;
      player2Win = true; 
    }
    else if (gameCell1x2.className === "player2Cell" && gameCell2x2.className === "player2Cell" && gameCell3x2.className === "player2Cell") {
      gameStarted = false;
      player2Win = true; 
    }
    else if (gameCell1x3.className === "player2Cell" && gameCell2x3.className === "player2Cell" && gameCell3x3.className === "player2Cell") {
      gameStarted = false;
      player2Win = true; 
    }
    else if (gameCell1x1.className === "player2Cell" && gameCell2x2.className === "player2Cell" && gameCell3x3.className === "player2Cell") {
      gameStarted = false;
      player2Win = true; 
    }
    else if (gameCell3x1.className === "player2Cell" && gameCell2x2.className === "player2Cell" && gameCell1x3.className === "player2Cell") {
      gameStarted = false;
      player2Win = true; 
    }
    gameWon();
  }
  
  function gameWon() {
    if (player1Win === true) {
      printGameResult(currentPlayers[0], currentPlayers[1], roundNumber)
      currentPlayers = []
    } else if (player2Win === true) {
      printGameResult(currentPlayers[1], currentPlayers[0], roundNumber)
      currentPlayers = []
    }
 }

  function printGameResult(winner, loser, roundsPlayed) {
    alert(`${winner} has won`)
    const matchResultStringWin = `${winner} won agaisnt ${loser} after ${roundsPlayed} rounds played`
    const matchResultStringLoss = `${loser} lost against ${winner} after ${roundsPlayed} rounds played`
    pushGameResult(winner, loser, gameLength)  
  }

  return sectionGame;
}

