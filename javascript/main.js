var saludo = 'Hola';
let mensaje = 'Estudiando';
let count = 0;
{
  saludo = 'Adios';
  mensaje = 'Terminamos';
  document.write(saludo, mensaje);
  console.log(saludo, mensaje);
}
console.log(saludo, mensaje);
document.write(saludo, mensaje);

/*
const createUser = function(user, password) {
  let user = {
    userName: user,
    pwd: password
  }
  return user
}
let usuario = createUser('Alejandro', 123)

contador = user.pwd;
while (contador < 10) {
  console.log(usuario.userName, usuario.pwd)
  usuario.pwd += contador
  contador += 1
}
*/

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto
    this.ancho = ancho
  }

  get area() {
    return this.alto * this.ancho
  }
}

let palabra = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, facilis deserunt repellendus quo id fuga! Distinctio impedit mollitia, provident reprehenderit quasi est, tempore debitis temporibus eius illum illo fugit iste."
/*
console.log(palabra.length)
palabra.toUpperCase()
document.write(palabra)
console.log(palabra.match('dolor'))
*/
/*
while (true) {
  console.log(palabra[contador])
  contador += 1
  if (contador > palabra.length) {
    break;
  }
}
*/
/*
let orderedList1 = `<ol>`
let orderedList2 = `</ol>`

document.write(orderedList1)

while (contador < palabra.length) {
  document.write(`<li> ${palabra[contador]}</li>`)
  contador += 1
}

document.write(orderedList2)
*/

count = 102030405060708090908070605040302010

function lotharCollatz(contador) {
  while (contador) {
    document.write(`<--`);
    if (contador % 2 == 0) {
      contador /= 2;
    } else {
      contador = (contador * 3) + 1;
    }
    document.write(`${contador}-->`);
    if (contador == 1) {
      break;
    }
  }
}

lotharCollatz(count)