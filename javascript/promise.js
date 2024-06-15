function promesaSuma(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      reject('Ambos argumentos deben ser numeros.');
    } else {
      resolve(a + b);
    }
  });
}

let timeOut = setTimeout(() => {
  console.log("Hola mundo...");
}, 40000)

let count = 0;
let interval = setInterval(() => {
  console.log(`${count}. Hola de nuevo`);
  count += 1;
  if (count === 4) {
    console.log(`Adios...`);
    clearInterval(interval);
  }
}, 3000)


promesaSuma(5, 3)
  .then(resultado => {
    console.log('La suma es:', resultado);
    return
  })