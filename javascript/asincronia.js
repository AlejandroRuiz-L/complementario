// let asincrona1 = setTimeout(() => { console.log('Se ejecuta asincronia 1...'); }, 12000);
// let asincrona2 = setTimeout(() => { console.log('Se ejecuta asincronia 2...'); }, 7000);

// (() => { console.log('Inicio...'); })();
// let count = 1;

// let interval1 = setInterval(() => {
//   console.log(`Intervalo 1-${count}.`);
//   count++;
//   if (count > 20) {
//     (() => { console.log('Final...') })();
//     clearInterval(interval1);
//     clearInterval(interval2);
//     //console.clear();
//   }
// }, 1000);

// let interval2 = setInterval(() => {
//   console.log(`Intervalo 2-${count}.`);
//   if (count % 2 == 0) {
//     //console.clear();
//   }
// }, 1100);

// console.log('Inicio');

// setTimeout(() => {
//   console.log('Timeout 1 completado');
// }, 1);
// setTimeout(() => {
//   console.log('Timeout 2 completado');
// }, 1);
// setTimeout(() => {
//   console.log('Timeout 3 completado');
// }, 1);
// setTimeout(() => {
//   console.log('Timeout 4 completado');
// }, 1);

// console.log('Fin');

const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');

// function botonClick(callback) {
//   return function () {
//     console.log('Se hizo clic en un boton');
//     callback();
//   }
// }

// boton1.addEventListener('click', botonClick(function () {
//   console.log('Se presiono el boton 1');
// }));

// function callback(mensaje) {
//   console.log(mensaje);
// }
// saludo('Alejandro', function callback(mensaje) { console.log(mensaje) });

// function saludo(nombre) {
//   const mensaje = `Hola ${nombre}`;
//   callback(mensaje);
// }

// saludo('Alejandro', function callback(mensaje) { console.log(mensaje) });

import { getUserById, getSignatures } from "./module.js";

// const estudiar = function (nombre, callback) {
//   callback(nombre);
// };

// estudiar('Alejandro', function (nombre) {
//   console.log(`${nombre} está estudiando.`)
// })

let id = parseInt(prompt('Ingrese el id'));
let signature;

getUserById(id, function (error, user) {
  signature = user.signature;
  if (error) {
    console.error(error);
  } else {
    if (user.student) {
      console.log(`Usuario: ${user.name}`);
      console.log('Asignaciones:')
      getSignatures(signature, function (error, signature) {
        if (error) {
          console.error(error);
        } else {
          console.log(signature.title, 'dos');
        }
      })
    } else {
      console.log(`El usuario ${user.name} no es estudiante.`);
    }
  }
})
