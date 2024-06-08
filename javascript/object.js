// const objeto = new Object();
// objeto.name = "Alejandro";
// objeto.lastName = 'Ruiz';
// objeto.saludo = saludo => saludo;

// // console.log(objeto);
// //document.write(objeto.saludo("Hola, soy "), objeto.name);

// // const persona = {
// //   name : 'Alejandro',
// //   lastName: 'Ruiz',
// //   likes: ["Programacion", "Series", "Peliculas"],
// //   sayLikes: function (lista) {
// //     for (i = 0; i < lista.length; i++) {
// //       document.write(`<br>${lista[i]}`)
// //     }
// //   },
// //   saludo: function () {
// //     return `<br>Hola, mi nombre es ${this.name} ${this.lastName}<br>
// //     Mis gustos son:${this.sayLikes(this.likes)}`
// //   }
// // }

// // console.log(persona)
// // document.write(persona.saludo())

// // let a = 5 + 5 - 10 * 3;
// // console.log(a)

// // console.log(0 === false)

// // let num = 10;
// // num++
// // num++
// // console.log(num)

// // let inp = `<input type="text" placeholder="Ingrese el numero" id="number" />`;
// // document.write(inp);
// // let valor = document.getElementById('number');

// let a = 347, b = 428;
// // let ternario = a > b ? a : b > a ? b : false
// let mayorIgual = a > b ? `${a} > ${b}`
//   : b > a ? `${b} > ${a}`
//     : `${a} = ${b}`
// console.log(mayorIgual)

// let c = 47;
// let parImpar = c % 2 == 0 ? `${c} Par` : `${c} Impar`
// console.log(parImpar)

// let age = 15;
// let mayorEdad = age >= 18 ? 'Mayor de edad' : 'Menor de edad'
// console.log(mayorEdad)

// let hour = 23
// if (hour >= 0 && hour <= 4.59) {
//   console.log("Durmiendo")
// } else if (hour >= 5 && hour <= 11.59) {
//   console.log("Trabajando")
// } else if (hour >= 12 && hour <= 13.59) {
//   console.log("Almorzando")
// } else if (hour >= 14 && hour <= 18.59) {
//   console.log("Trabajando")
// } else { console.log("En casa") }



// for (i = 0; i <= 6; i++) {
//   switch (i) {
//     case 0: console.log("Lunes, Trabajo")
//       break;
//     case 1: console.log("Martes, Trabajo")
//       break;
//     case 2: console.log("Miercoles, Trabajo")
//       break;
//     case 3: console.log("Jueves, Trabajo")
//       break;
//     case 4: console.log("Viernes, Trabajo")
//       break;
//     case 5: console.log("Sabado, Trabajo y estudio")
//       break;
//     case 6: console.log("Domingo, descanso")
//       break;
//     default: console.log('No es un dia de la semana')
//       break;
//   }
// }

// let count = 0;
// while (count <= 4) {
//   console.log(++count);
// }

// let dias = {
//   1: 'Lunes',
//   2: 'Martes',
//   3: 'Miercoles',
//   4: 'Jueves',
//   5: 'Viernes',
//   6: 'Sabado',
//   7: 'Domingo'
// }

// // dias.forEach(dia => {
// //   console.log(dia);
// // });


// for (i = 1; i <= 9; i++){
//   if (i != 3) {
//     console.log(`Caramelo para persona ${i}`)
//   }
// }

// for (const key in dias) {
//   console.log(`Llave: ${key}, valor: ${dias[key]}`)
// }

// let palabra = document.getElementById('palabra');
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (const i of nums) {
//   console.log(i)
// }
// console.log(palabra.length)

// let num = 5 / 0;

// try {
//   console.log(num)
// } catch(error) {
//   console.log("No se puede dividir por cero.", error)
// } finally {
//   console.log('Se realizo correctamente.', error)
// }
// console.log(error)
try {
  let a = 
  console.log(a * 8)
} catch (error) {
  console.log("Error")
}