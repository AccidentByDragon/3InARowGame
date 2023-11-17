export default function userManagement() {
  let users = [
    {
      id: 1,
      name: "Karl",
      matchAmount: 1,
      results: []
    },
    {
      id: 2,
      name: "Bob",
      matchAmount: 1,
      results: []
    }
  ]
  
  const matchHistory = [
    {
      winner: "Karl",
      loser: "Bob",
      roundsPlayed: 5
    }
  ]
  //const nextId = nextId++
 //fetchCurrentUsers();
  return users;
}

export function pushGameResult(winner, loser, gameLength) {
  
}

export function pushUser(users = [], userAdd) {
  const newUser = {
    //id: nextId,
    name: userAdd,
    matchAmount: 0,
    results: []
  }
  users.push(newUser)
  return users;
}

/* export async function fetchCurrentUsers() {
    let repsonse = await fetch(`/users`);
    const users = response.json()
    console.log(users);
  } */