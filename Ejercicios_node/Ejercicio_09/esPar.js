//9.Crea un módulo propio con una función. 
//La función esPar() devuelve “true” en caso de que el número sea par y “false” en caso contrario.
//En el archivo index.js, genera un número aleatorio, llama a la función esPar() y muestra el resultado de la función.



function esPar (numero){

    if(numero % 2 !==0){

        return false

    }else{

        return true
    }

}

module.exports = esPar;