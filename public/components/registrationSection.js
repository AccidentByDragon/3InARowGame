import { getAllUsers, addUser, getOneUser, updateUser } from "./userManagement.js";
import { updateLists } from "../main.js";

export default function registrationSection(users) {
  const tempUsers = [];
  for (let user of users) {
    tempUsers.push(user)
  }

  const sectionRegistration = document.createElement("section");
  sectionRegistration.id = "Registration";
  const sectionRegistrationH2 = document.createElement("h2");
  sectionRegistrationH2.innerText = "Register";
  sectionRegistration.appendChild(sectionRegistrationH2);


  const registerForm = document.createElement("form");
  registerForm.id = "userForm";
  const labelUsername = document.createElement("label");
  labelUsername.innerText = "Username: ";
  const inputNewUsername = document.createElement("input");
  inputNewUsername.type = "text";
  inputNewUsername.id = "userName";
  const inputSubmit = document.createElement("input");
  inputSubmit.type = "submit";
  inputSubmit.value = "Submit";


  registerForm.appendChild(labelUsername);
  registerForm.appendChild(inputNewUsername);
  registerForm.appendChild(inputSubmit);
  sectionRegistration.appendChild(registerForm);
  document.body.appendChild(sectionRegistration);

  document.querySelector(`#userForm`).addEventListener(`submit`, registerUser);
  function registerUser(event) {
    event.preventDefault();
    const usernameSt = document.getElementById("userName").value;
    const userExists = tempUsers.some(tempUsers =>
    tempUsers.name === usernameSt);
    console.log("Did user exist - ", userExists);
    if (userExists == true) {
        alert("a user by this name already exists")
      }
    else {
        const userId = tempUsers.length + 1
        addUser(usernameSt, userId);
      }
    updateLists();
  }

  return sectionRegistration;
}