//10.Escribe un módulo con una función que reciba un array de números y lo muestre en pantalla desde
//la primera posición hasta la última. Después escribe otro módulo con una función que reciba un array de números
//y lo muestre en pantalla desde la última posición a la primera.  Crea un array y pásalo a cada una de las funciones.




let principioFin = require("./principioFin");
let finPrincipio = require("./finPrincipio");


let array = [1, 2, 3, 4, 5,  6, 7, 8, 9, 10];



principioFin(array);

finPrincipio(array);
