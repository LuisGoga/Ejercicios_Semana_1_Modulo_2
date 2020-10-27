//6.Declara un array con los nombres de l@s estudiantes del BBK Bootcamp.
//Crea una aplicación en la que se puedan añadir elementos a ese array mediante el método get.
//Agrega los nombres de los profesores.

const express = require("express");
const app = express();


let bootcamp = ["Rafa", "Diego", "Elena", "Maialen", "roberto", "Bego", "Luis", "Manu", "Isabel", ];

app.get("/", function(req, res) {

    res.send(bootcamp);
});

app.get("/:parametro", function(req, res){

    bootcamp.push(req.params.parametro);
    res.send("Se ha añadido");
});

app.listen(3000);