// async function read() {
//   //Read JSON file
//   let response = await fetch('./data.json');
//   let user = await response.json()
//   let repos = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   let listRepos = await repos.json()
//   let users = await fetch(`https://jsonplaceholder.typicode.com/users`)
//   let listUsers = await users.json()
//   let count = 0;
//   for (let user in listUsers) {
//     document.write(`<h2>Usuario ${count + 1}</h2>`)
//     document.write(`<h3>${listUsers[count].name}</h3>`);
//     document.write(`<p>Email: ${listUsers[count].email}</p>`)
//     document.write(`<p>Dirección: ${listUsers[count].address.street}</p>`)
//     console.log(listUsers)
//     document.write("<h3>Posts:</h3>")
//     for (let post in listRepos[0]) {
//       document.write("e")
//     }
//     count += 1
//   }
// }
// read()
const $dom = document.querySelector('.item');
const $div = document.getElementById("div1");
const $form = document.querySelector("form");
const $input = document.querySelector("form > input");
$div.style.borderColor = "purple";
console.log($dom);
$dom.textContent = 'Nuevo texto';
const $img = document.querySelector('img');
$img.setAttribute("src", "https://picsum.photos/id/237/300");
$img.setAttribute("alt", "Imagen");
$img.classList.add("box");
$input.removeAttribute("type");
$input.setAttribute("type", "tel");
$form.firstElementChild.setAttribute("type", "file");
$form.firstElementChild.setAttribute("enctype", "multipart/form-data");