//Game Section
export default function Game() {
  const sectionGame = document.createElement("section");
  sectionGame.id = "Game";
  const sectionGameHeader = document.createElement("h2");
  sectionGameHeader.innerText = "Game";
  sectionGame.appendChild(sectionGameHeader)

  
  const gameGrid = document.createElement("div");
  gameGrid.id = "grid";
  gameGrid.addEventListener("click", function (event) {
    if (event.target.id === "cell") {
      
    }
  })

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

  return sectionGame;
}
