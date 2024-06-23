// function promesaSuma(a, b) {
//   return new Promise((resolve, reject) => {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//       reject('Ambos argumentos deben ser numeros.');
//     } else {
//       resolve(a + b);
//     }
//   });
// }

// let timeOut = setTimeout(() => {
//   console.log("Hola mundo...");
// }, 40000)

// let count = 0;
// let interval = setInterval(() => {
//   console.log(`${count}. Hola de nuevo`);
//   count += 1;
//   if (count === 4) {
//     console.log(`Adios...`);
//     clearInterval(interval);
//   }
// }, 3000)


// promesaSuma(5, 3)
//   .then(resultado => {
//     console.log('La suma es:', resultado);
//     return
//   })

// class Operaciones{
//   sumar(a, b) {
//     return a + b;
//   }

//   restar(a, b) {
//     return a - b;
//   }

//   multiplicar(a, b) {
//     return a * b;
//   }

//   dividir(a, b) {
//     if (b === 0) {
//       return 'Error: No se puede dividir por cero';
//     }
//     return a / b;
//   }
// }

// const operacion = new Operaciones();
// let num1 = parseInt(prompt('Ingrese el primer número: '));
// let num2 = parseInt(prompt('Ingrese el segundo número: '));
// let suma = operacion.sumar(num1, num2);
// let multiplica = operacion.multiplicar(num1, num2);
// let dividir = operacion.dividir(num1, num2);

// console.log(`${num1} x ${num2}: ${multiplica}`);
// console.log(`${num1} + ${num2}: ${suma}`);
// console.log(`${num1} / ${num2}: ${dividir}`);

// Función para sumar dos números
// function sumar(num1, num2) {
//   return new Promise((resolve, reject) => {
//     if (!isNaN(num1) && !isNaN(num2)) {
//       resolve(num1 + num2);
//     } else {
//       reject('Por favor ingrese números válidos.');
//     }
//   });
// }

// // Función para restar dos números
// function restar(num1, num2) {
//   return new Promise((resolve, reject) => {
//     if (!isNaN(num1) && !isNaN(num2)) {
//       resolve(num1 - num2);
//     } else {
//       reject('Por favor ingrese números válidos.');
//     }
//   });
// }

// // Función para multiplicar dos números
// function multiplicar(num1, num2) {
//   return new Promise((resolve, reject) => {
//     if (!isNaN(num1) && !isNaN(num2)) {
//       resolve(num1 * num2);
//     } else {
//       reject('Por favor ingrese números válidos.');
//     }
//   });
// }

// // Función para dividir dos números
// function dividir(num1, num2) {
//   return new Promise((resolve, reject) => {
//     if (!isNaN(num1) && !isNaN(num2)) {
//       if (num2 !== 0) {
//         resolve(num1 / num2);
//       } else {
//         reject('No se puede dividir por cero.');
//       }
//     } else {
//       reject('Por favor ingrese números válidos.');
//     }
//   });
// }

// // Ejemplos de uso con promesas

// // Llamar a las funciones con números ingresados por el usuario
// let num1 = parseInt(prompt('Ingrese el primer número:'));
// let num2 = parseInt(prompt('Ingrese el segundo número:'));

// sumar(num1, num2)
//   .then(resultado => {
//     alert(`La suma de ${num1} + ${num2} es igual a ${resultado}`);
//   })
//   .catch(error => {
//     alert(error);
//   });

// restar(num1, num2)
//   .then(resultado => {
//     alert(`La resta de ${num1} - ${num2} es igual a ${resultado}`);
//   })
//   .catch(error => {
//     alert(error);
//   });

// multiplicar(num1, num2)
//   .then(resultado => {
//     alert(`La multiplicación de ${num1} * ${num2} es igual a ${resultado}`);
//   })
//   .catch(error => {
//     alert(error);
//   });

// dividir(num1, num2)
//   .then(resultado => {
//     alert(`La división de ${num1} / ${num2} es igual a ${resultado}`);
//   })
//   .catch(error => {
//     alert(error);
//   });

function integer(value) {
  if (typeof value === 'number') {
    return true
  }
  return false
}

async function cuadradoPromesa(value) {
  if (typeof value !== 'number' || typeof value === 'string') {
    return Promise.reject(`Error: '${value}' No es un número`);
  }
  let resultado = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value: value,
        result: value * value
      })
    }, 3000);
  })
  return resultado
}

let num = parseInt(prompt('Ingrese el número:'));
console.log(typeof num)
// while (true) {
//   num = prompt('Ingrese el número:');
//   if (integer(num)) {
//     break
//   }
// }
let promise = cuadradoPromesa(num).then(result => {
  console.log(`El cuadrado de '${result.value}' es: ${result.result}`);
  return cuadradoPromesa(result.result).then(result => {
    console.log(`El cuadrado de '${result.value}' es: ${result.result}`);
    return cuadradoPromesa(result.result).then(result => {
      console.log(`El cuadrado de '${result.value}' es: ${result.result}`);
      return cuadradoPromesa(result.result).then(result => {
        console.log(`El cuadrado de '${result.value}' es: ${result.result}`);
      })
    })
  })
}).catch(error => {
  console.log(error);
});
