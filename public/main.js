import registrationSection from "./components/registrationSection.js";
import Game from "./components/gameSection.js"
import UserSection from "./components/userSection.js"
import usersManagement from "./components/userManagement.js";
import { fetchCurrentUsers } from "./components/userManagement.js";

fetchCurrentUsers();
let users = usersManagement();


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
document.body.appendChild(registrationSection(users));

//Game Section
document.body.appendChild(Game(users));

//User Section
document.body.appendChild(UserSection(users));

