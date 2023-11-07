// import PromptSync from "prompt-sync";
// const prompt = PromptSync({ sigint: true });

let users = [

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


const sectionRegistration = document.createElement("section");
sectionRegistration.id = "Registration";
const sectionRegistrationH2 = document.createElement("h2");
sectionRegistrationH2.innerText = "Register";
sectionRegistration.appendChild(sectionRegistrationH2);
document.body.appendChild(sectionRegistration);

const sectionGame = document.createElement("section");
sectionGame.id = "Game";
const sectionGameHeader = document.createElement("h2");
sectionGameHeader.innerText = "Game";
sectionGame.appendChild(sectionGameHeader)
document.body.appendChild(sectionGame);

const sectionUsers = document.createElement("section");
sectionUsers.id = "Users";
const sectionUsersH2 = document.createElement("h2");
sectionUsersH2.innerText = "Users";
sectionUsers.appendChild(sectionUsersH2);
document.body.appendChild(sectionUsers)
