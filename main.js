// import fs from "fs";

let users = [
  {
    name: "Karl",
    password: "Admin",
    score: 100    
  }
]
const header = document.createElement("header");
const aRefGame = document.createElement("a");
const headerNav = document.createElement("nav")

aRefGame.innerText = "Game";
aRefGame.href = "#Game";
headerNav.appendChild(aRefGame);


const aRefRegistration = document.createElement("a")
aRefRegistration.innerText = "Registration";
aRefRegistration.href = "#Registration";
headerNav.appendChild(aRefRegistration);

const aRefUsers = document.createElement("a");
aRefUsers.innerText = "Users";
aRefUsers.href = "#Users";
headerNav.appendChild(aRefUsers);
header.appendChild(headerNav);
document.body.appendChild(header);

const userLoggedIn = false;

//Registration Section
const sectionRegistration = document.createElement("section");
sectionRegistration.id = "Registration";
const sectionRegistrationH2 = document.createElement("h2");
sectionRegistrationH2.innerText = "Register";
sectionRegistration.appendChild(sectionRegistrationH2);
// Registration Code here
const registerForm = document.createElement("form");
registerForm.id = "userForm";
const labelUsername = document.createElement("label");
labelUsername.innerText = "Username: ";
const inputLun = document.createElement("input");
inputLun.type = "text";
inputLun.id = "userName";
const labelPassword = document.createElement("label");
labelPassword.innerText = "Password";
const inputUpw = document.createElement("input");
inputUpw.type = "text";
inputUpw.id = "password";
const inputSubmit = document.createElement("input");
inputSubmit.type = "button";
inputSubmit.value = "Submit";


registerForm.appendChild(labelUsername);
registerForm.appendChild(inputLun);
registerForm.appendChild(labelPassword);
registerForm.appendChild(inputUpw);
registerForm.appendChild(inputSubmit);
sectionRegistration.appendChild(registerForm);
document.body.appendChild(sectionRegistration);


// Process added user
document.querySelector(`#userForm`).addEventListener(`Submit`, registerUser);
function registerUser(event) {
  event.preventDefault();

  const usernameSt = document.getElementById(`userName`).value;
  const passwordSt = document.getElementById(`password`).value;

  console.log("Username - ", usernameSt);
  console.log("Password - ", passwordSt);

  const userExists = users.some(users =>
    users.username === usernameSt && users.password === passwordSt);
  console.log("Did user exist - ", userExists);

  if (userExists == true) {
    
  }
  else {
    users.push({name: usernameSt, password: passwordSt, score: 0})
  }
  

}  





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
const uThHistory = document.createElement("th");

uThName.innerText = "User name";
uThScore.innerText = "User Score";
uThHistory.innerText = "Match History";

uTrHead.appendChild(uThName);
uTrHead.appendChild(uThScore);
uTrHead.appendChild(uThHistory);
uTHead.appendChild(uTrHead);
userTable.appendChild(uTHead);
userTable.appendChild(uTBody);

for (let user of users) {
  
  const userRow = document.createElement("tr");
  const userName = document.createElement("td");
  const userScore = document.createElement("td");
  const userHistory = document.createElement("td");
  
  userName.innerText = user.name;
  userScore.innerText = user.score;
  userHistory.innerText = "See Match History"

  userRow.appendChild(userName);
  userRow.appendChild(userScore);
  userRow.appendChild(userHistory);
  uTBody.appendChild(userRow)
}
sectionUsers.appendChild(userTable);

document.body.appendChild(sectionUsers)

