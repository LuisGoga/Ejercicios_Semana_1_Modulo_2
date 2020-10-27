

// Aquí instalamos (Configuramos), el servidor puerto: 3000 para poder trabajar con el
//resto de los ejercicios

const express = require ("express");
const app = express ();
let array = [1, 2, 3, 4,];

app.get("/saludo", function (req, res){

res.send("<h1>Hola Mundo</h1>");

});

app.listen(3000);

