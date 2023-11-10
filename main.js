let users = [
  {
    name: "Karl",
    score: 100
  }
]
const header = document.createElement("header");
const aRefGame = document.createElement("a");

aRefGame.innerText = "Game";
aRefGame.href = "#Game";
header.appendChild(aRefGame);
document.body.appendChild(header);

const aRefRegistration = document.createElement("a")
aRefRegistration.innerText = "Registration";
aRefRegistration.href = "#Registration";
header.appendChild(aRefRegistration);

const aRefUsers = document.createElement("a");
aRefUsers.innerText = "Users";
aRefUsers.href = "#Users";
header.appendChild(aRefUsers);


//Registration Section
const sectionRegistration = document.createElement("section");
sectionRegistration.id = "Registration";
const sectionRegistrationH2 = document.createElement("h2");
sectionRegistrationH2.innerText = "Register";
sectionRegistration.appendChild(sectionRegistrationH2);
// Registration Code here

document.body.appendChild(sectionRegistration);


//Game Section
const sectionGame = document.createElement("section");
sectionGame.id = "Game";
const sectionGameHeader = document.createElement("h2");
sectionGameHeader.innerText = "Game";
sectionGame.appendChild(sectionGameHeader)
//Game Code here

document.body.appendChild(sectionGame);


//User Section
const sectionUsers = document.createElement("section");
sectionUsers.id = "Users";
const sectionUsersH2 = document.createElement("h2");
sectionUsersH2.innerText = "Users";
sectionUsers.appendChild(sectionUsersH2);

//Table of Users
const userTable = document.createElement("table");
const uTHead = document.createElement("thead");
const uTBody = document.createElement("thead");
const uTrHead = document.createElement("tr");
const uThName = document.createElement("th");
const uThScore = document.createElement("th");
const uThGame = document.createElement("th");
const uThHistory = document.createElement("th");

uThName.innerText = "User name";
uThScore.innerText = "User Score";
uThGame.innerText = "Play Agaisnt";
uThHistory.innerText = "Match History";

uTrHead.appendChild(uThName);
uTrHead.appendChild(uThGame);
uTrHead.appendChild(uThScore);
uTrHead.appendChild(uThHistory);
uTHead.appendChild(uTrHead);
userTable.appendChild(uTHead);
userTable.appendChild(uTBody);

for (let user of users) {
  
  const userRow = document.createElement("tr");
  const userName = document.createElement("td");
  const userGame = document.createElement("td");
  const userScore = document.createElement("td");
  const userHistory = document.createElement("td");
  
  userName.innerText = user.name;
  userGame.innerText = "Play";
  userScore.innerText = user.score;
  userHistory.innerText = "See Match History"

  userRow.appendChild(userName);
  userRow.appendChild(userGame);
  userRow.appendChild(userScore);
  userRow.appendChild(userHistory);
  uTBody.appendChild(userRow)
}
sectionUsers.appendChild(userTable);

document.body.appendChild(sectionUsers)

