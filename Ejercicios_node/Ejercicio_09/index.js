//9.Crea un módulo propio con una función. 
//La función esPar() devuelve “true” en caso de que el número sea par y “false” en caso contrario.
//En el archivo index.js, genera un número aleatorio, llama a la función esPar() y muestra el resultado de la función.

let esPar = require("./esPar")

let numero = Math.floor(Math.random() * (1000 -1)) + 1;

console.log(`El número ${numero} es par: ${esPar(numero)}`);