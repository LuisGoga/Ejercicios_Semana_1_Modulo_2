//2.Crea una aplicación con una ruta a la que le puede llegar un parámetro en la url.
//Al hacer una petición get a esa ruta, el servidor devolverá como respuesta un número aleatorio,
//entre 1 y el número que llega como parámetro.


const express = require ("express");

const app = express();

app.get("/:numero", function(req, res){

    let numero = Matc.floor(Match.random() * parseInt( req.params.numero - 0) + 0);

    res.send (`Aleatorio: ${numero}`);

});

app.listen(3000);



