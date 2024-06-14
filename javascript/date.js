let date = new Date();
let time = date.getTime();
let day = date.getDay();
let month = date.getMonth();
let birth = new Date("04/12/2000");
let age = date - new Date("04/12/2000");
let cadena = new Date(age * 1000).toLocaleTimeString("es-ES")

console.log(date)
console.log(time)
console.log(day)
console.log(month)
console.log(age)
console.log(cadena)