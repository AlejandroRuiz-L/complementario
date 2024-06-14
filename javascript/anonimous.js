// (function () {
//   var x = 10;
//   console.log(x); // 10
// })();
// console.log(x); // ReferenceError: x is not defined

// var miModulo = (function () {
//   var privateVariable = "Privada";

//   function privateMethod() {
//     console.log("Esto es privado");
//   }

//   return {
//     publicMethod: function () {
//       console.log("Esto es público");
//       privateMethod();
//     }
//   };
// })();

// miModulo.publicMethod(); // Esto es público, Esto es privado
// miModulo.privateMethod(); // Error: miModulo.privateMethod is not a function
(function () {
  suma = a + b
})(a, b)
console.log(5);