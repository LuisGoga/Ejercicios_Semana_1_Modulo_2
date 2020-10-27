//7.Crea un módulo propio con un array de 10 ceros.
//Crea otro módulo con una función que devuelva un número aleatorio entre 0 y 9.
//Crea una ruta para que cada vez que se haga una petición de tipo get,
//se llame al método de número aleatorio y se sume 1 al valor del número en el índice del número aleatorio.
//Muestra el array con los valores en la respuesta.

const express = requiere ("express");
const aleatorio = require ("./aleatorio");
const array = require ("./array");

const app = express();

app.get("/", function (req, res){
let numero = aleatorio();
array[numero] += 1;
res.send(array);

});

//y se sume 1 al valor del número en el índice del número aleatorio.

app.get("/borar/:numero", function(req, res){
let numero =parseInt( req.params.numero);
    for(let i = 0; i < array.length; i++){

        if (numero === array[i]){

            array[i] = 0;
        }
    }

    res.send("Se ha borrado");

})

app.listen(3000);

