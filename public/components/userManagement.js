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
  let matchHistory = [
    {
      winner: "Karl",
      loser: "Bob",
      roundsPlayed: 5
    }
  ]
  //const nextId = nextId++


/*   const newUser = {
    id: nextId,
    name: "name",
    matchAmount: 0,
    results: []
  } */


 currentUsers();
  return users;
}

export async function fetchCurrentUsers() {
    let repsonse = await fetch(`/users`);
    const users = response.json()
    console.log(users);
  }