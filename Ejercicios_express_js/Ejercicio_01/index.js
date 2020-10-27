

//1.Crea una aplicación express con una llamada de tipo get que devuelva el siguiente HTML:
//<h1>Hola mundo desde express</h1> 

const express = require("express");
    
    
    const app = express();

    app.get("/", function(req, res){

        res.send(`
        <h1>Hola Mundo</h1>
        <h4>Desde express</h4>
      

        `)
    })


    app.listen(3000);
