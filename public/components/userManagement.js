export async function getAllUsers() {
  const res = await fetch('/users')
    const data = await res.json()
    return data
  }

  export async function addUser(userName,id) {
    let response = await fetch('/users', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "id": id,
        "name": userName,
        "matchAmount": 0,
        "results": []
      })
    })

    response = await response.json()
    console.log(response);
  }

  export async function getOneUser(userId) {
    const res = await fetch('/users/' + userId)
    const data = await res.json()
    return data;
  }

  export async function updateUser(user) {
    let response = await fetch('/users/' + user.id, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })

    response = await response.json()
    console.log(response);
  }