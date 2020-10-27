//5.Define un objeto con las propiedades siguientes: nombre, apellidos y edad.
//El objeto estará fuera de las rutas para que sea accesible por todas ellas.
//Crea una aplicación en la que se pueda modificar cualquiera de las propiedades
//de ese objeto utilizando peticiones de tipo get. Crea una ruta para cambiar el nombre,
//otra ruta para el apellido y otra ruta para la edad. 

const express = require ("express");
const app = express ();


let persona = {

    nombre: "Luis",
    apellidos: "Gomez",
    edad: 43,
};

app.get("/nombre/:parametro", function (req, res){

persona.nombre = req.params.parametro;
res,send (persona);

});

app.get("/apellidos/:parametro", function (req, res){

persona.apellidos = req.params.parametro;
res,send (persona);

});

app.get("/edad/:parametro", function (req, res){

persona.edad = parseInt(req.params.parametro);
res,send (persona);
    


});

app.listen(3000);
