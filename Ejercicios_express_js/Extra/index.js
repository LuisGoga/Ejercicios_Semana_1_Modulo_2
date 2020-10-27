




//Una ruta para mostrar la cesta.
//Una ruta para confirmar la compra. Esta ruta devolverá un mensaje de confirmación y vaciará la cesta.



//EXTRA

//Crea una aplicación que simule una tienda online. Crea una variable almacén en la que guardes un array con objetos.
//Cada objeto será un departamento de la tienda y tendrás varios productos en cada uno.
//Cada uno de estos productos será un objeto con las siguientes propiedades:
//nombre, precio y stock. Crea también una variable cesta.

const express = require("express");

const app = express();

//Hay que generar el array cesta vacio para poder sumar y restar productos del array almacén
let cesta = [];

const almacen = [

    {
        seccion: "Fruteria",
        productos: [
    

    {
        nombre: "Fresas",
        precio: 1,
        stock: 30,
    },
    {
        nombre: "Peras",
        precio: 3,
        stock: 18,

    },
],

    },
    {
        seccion: "Pescaderia",
        productos: [
    

    {
        nombre: "Lubina",
        precio: 6,
        stock: 10,
    },
    {
        nombre: "Merluza",
        precio: 4,
        stock: 8,

    },
],

    },

    {
        seccion: "Carniceria",
        productos: [
    

    {
        nombre: "Filetes de ternera",
        precio: 3,
        stock: 20,
    },
    {
        nombre: "Lomo de cerdo",
        precio: 2,
        stock: 25,

    },
],

    },

]

//Crea las siguientes rutas:
//Dos rutas diferentes para cada uno de los departamentos de la tienda.
//Una ruta devolverá en la respuesta todos los productos que hay en ese departamento. Haz que se muestre en una tabla HTML.

//Primera ruta para frutería mostrando los elementos dentro del objeto frutería del array almacén
app.get("/Fruteria", function(req, res){

    let contenidoTabla ="";

    for(let i = 0; i < almacen[0].productos.length; i++){
  
        contenidoTabla +=`

        <tr>
        <td>${ almacen[0].productos[i].nombre}</td>
        <td>${ almacen[0].productos[i].precio}</td>
        <td>${ almacen[0].productos[i].stock}</td>
        </tr>

        `
    }

    let tabla = `

    <table>
    <thead>
    <tr>

    <th>Nombre</th>
    <th>Precio</th>
    <th>Stock</th>

    </tr>
    </thead>
    <tbody>

    ${contenidoTabla}

    </body>
    
    `;

    res.send(tabla);

})

//Segunda ruta para Pescaderia mostrando los elementos dentro del objeto Pescaderia del array almacén
app.get("/Pescaderia", function(req, res){

    let contenidoTabla ="";

    for(let i = 0; i < almacen[1].productos.length; i++){
  
        contenidoTabla +=`

        <tr>
        <td>${ almacen[1].productos[i].nombre}</td>
        <td>${ almacen[1].productos[i].precio}</td>
        <td>${ almacen[1].productos[i].stock}</td>
        </tr>

        `
    }

    let tabla = `

    <table>
    <thead>
    <tr>

    <th>Nombre</th>
    <th>Precio</th>
    <th>Stock</th>

    </tr>
    </thead>
    <tbody>

    ${contenidoTabla}

    </body>
    
    `;

    res.send(tabla);

})

//Tercera ruta para Carniceria mostrando los elementos dentro del objeto Carnoiceria del array almacén
app.get("/Carniceria", function(req, res){

    let contenidoTabla ="";

    for(let i = 0; i < almacen[2].productos.length; i++){
  
        contenidoTabla +=`

        <tr>
        <td>${ almacen[2].productos[i].nombre}</td>
        <td>${ almacen[2].productos[i].precio}</td>
        <td>${ almacen[2].productos[i].stock}</td>
        </tr>

        `
    }

    let tabla = `

    <table>
    <thead>
    <tr>

    <th>Nombre</th>
    <th>Precio</th>
    <th>Stock</th>

    </tr>
    </thead>
    <tbody>

    ${contenidoTabla}

    </body>
    
    `;

    res.send(tabla);

});

//La otra ruta servirá para comprar productos. Esta ruta recibirá dos parámetros: nombre del producto y cantidad.
//Añadir a la variable cesta el producto y la cantidad seleccionada Si la cantidad pedida es mayor que el stock,
//devolveremos un mensaje avisando de que no hay stock suficiente.  

app.get("/Fruteria/:producto/:cantidad",
function (req, res){

    let producto = req.params.producto;
    let cantidad = req.params.cantidad;

    for (let i = 0; i < almacen[0].productos.length; i++){

        if(producto === almacen[0].productos[i].nombre &&
        cantidad <= almacen[0].productos[i].stock
        ){
        almacen[0].productos[i].stock -= cantidad;
        cesta.push({
            producto : producto,
            cantidad: cantidad,
            stock: almacen[0].productos[i].stock,

        });

        res.send("Se ha añadido " + cantidad + productos);

       }else{

        res.send("No se encuentra el producto, o no tenemos suficiente Stock");

        
       }

    }

});

app.listen(3000);

