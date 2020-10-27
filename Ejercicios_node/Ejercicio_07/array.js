

//7.Escribe un módulo propio con una función que crea un array con 10 valores consecutivos.
//Estos valores serán los 10 números siguientes a un número que recibe por parámetro.
//Escribe otro módulo en el que se genera un número aleatorio.
//Importa los dos y pasa el parámetro aleatorio al que crea el array de 10 números y muestra por consola el resultado.

function numerosConsecutivos (numero){

    let array= [];
    
    for(let i = 1; i <= 10; i++){
    
        array.push(numero + i);
    }
    
    return array;
    
    }

    module.exports = numerosConsecutivos;