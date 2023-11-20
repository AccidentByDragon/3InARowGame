import { getAllUsers, addUser, getOneUser, updateUser } from "./userManagement.js";

export default function UserSection(users) {
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
  uThScore.innerText = "Number of wins";
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
    userScore.innerText = user.matchAmount;
    userHistory.innerText = "See Match History"

    userRow.appendChild(userName);
    userRow.appendChild(userScore);
    userRow.appendChild(userHistory);
    uTBody.appendChild(userRow)
  }

  sectionUsers.appendChild(userTable);
  document.body.appendChild(sectionUsers)

  return sectionUsers;
}