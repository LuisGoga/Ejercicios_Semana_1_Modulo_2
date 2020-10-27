//3.Instala el paquete exact-math usando npm. Crea un archivo .js
//y muestra por consola las siguientes operaciones utilizando el módulo instalado:
//a.	789+34+250443
//b.	2059-79
//c.	3.24*97.856
//d.	1205/12.002
//e.	125+(643-98)*74/25

const exactMath = require("exact-math");

let suma = exactMath.add(789, 34, 250443);
let resta = exactMath.sub(2059, 79);
let multiplicacion = exactMath.mul(3.24, 97.856);
let division = exactMath.div(1205, 12.002);


console.log(suma, resta, multiplicacion, division);



