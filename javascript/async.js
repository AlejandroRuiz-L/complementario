async function read() {
  //Read JSON file
  let response = await fetch('./data.json');
  let user = await response.json()
  let repos = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  let listRepos = await repos.json()
  let users = await fetch(`https://jsonplaceholder.typicode.com/users`)
  let listUsers = await users.json()
  let count = 0;
  for (let user in listUsers) {
    document.write(`<h2>Usuario ${count + 1}</h2>`)
    document.write(`<h3>${listUsers[count].name}</h3>`);
    document.write(`<p>Email: ${listUsers[count].email}</p>`)
    document.write(`<p>Teléfono: ${listUsers[count].phone}</p>`)
    console.log(listUsers)
    document.write("<h3>Posts:</h3>")
    for (let post in listRepos[0]) {
      document.write("e")
    }
    count += 1
  }
}

read()