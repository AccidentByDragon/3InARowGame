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
  const inputLun = document.createElement("input");
  inputLun.type = "text";
  inputLun.id = "userName";
  //const labelPassword = document.createElement("label");
  //labelPassword.innerText = "Password";
  //const inputUpw = document.createElement("input");
  //inputUpw.type = "text";
  //inputUpw.id = "password";
  const inputSubmit = document.createElement("input");
  inputSubmit.type = "button";
  inputSubmit.value = "Submit";


  registerForm.appendChild(labelUsername);
  registerForm.appendChild(inputLun);
  //registerForm.appendChild(labelPassword);
  //registerForm.appendChild(inputUpw);
  registerForm.appendChild(inputSubmit);
  sectionRegistration.appendChild(registerForm);
  document.body.appendChild(sectionRegistration);

  document.querySelector(`#userForm`).addEventListener(`Submit`, registerUser);
  return sectionRegistration;
}

function registerUser(event)
{ 
  event.preventDefault();
  const userExists = users.some(users =>
    users.username === usernameSt);
  console.log("Did user exist - ", userExists);
  if (userExists == true) {
    alert("a user by this name already exists")
  }
  else {
    tempUsers.push({name: usernameSt, score: 0})
  }
}


// Process added user
/* function registerUser(event) {
    event.preventDefault();

    const usernameSt = document.getElementById(`userName`).value;
    const passwordSt = document.getElementById(`password`).value;

    console.log("Username - ", usernameSt);
    console.log("Password - ", passwordSt);

    const userExists = users.some(users =>
      users.username === usernameSt && users.password === passwordSt);
    console.log("Did user exist - ", userExists);

    if (userExists == true) {
      window.location.assign("MainPage.html");
    }
    else {
      users.push({ name: usernameSt, password: passwordSt, score: 0 })
    }
  } */