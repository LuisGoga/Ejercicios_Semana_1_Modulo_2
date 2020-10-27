//3.Crea un array de 5 nombres. Define dos rutas: una será del tipo “/persona” y la otra será /persona/:parámetro’.
//Al entrar a la primera ruta nos devolverá la lista de personas y al entrar a la segunda nos devolverá,
//la persona solicitada.

const express = require("express");

const app = express();

let array = ["Ander", "Roberto", "Elena", "Bego", "Luis"];

app.get("/persona", function(req, res){

    let mensaje = "";
    for(let i = 0; i < array.length; ++i){

        mensaje += ` <h1>${array[i]}</h1>`
 
    }

    //similar a la función del Else
    res.send(mensaje);

});

    app.get("/personas/:nombre", function(req, res){

        let nombre = req.params.nombre;
        for(let i = 0; i < array.length; i++){

            if (nombre === array [i]){

                res.send(array[i]);
            }
        }
 res.send("error");
    
})

app.listen(3000);