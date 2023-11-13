import registrationSection from "./components/registrationSection.js";
let users = [
  {
    name: "Karl",
    password: "Admin",
    score: 100
  },
  {
    name: "Bob",
    password: "Bob",
    score: 0
  }
]
document.body.appendChild(registrationSection(users));