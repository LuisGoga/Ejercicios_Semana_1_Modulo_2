//10.Escribe un módulo con una función que reciba un array de números y lo muestre en pantalla desde
//la primera posición hasta la última. Después escribe otro módulo con una función que reciba un array de números
//y lo muestre en pantalla desde la última posición a la primera.  Crea un array y pásalo a cada una de las funciones.

function finPrincipio(array){

    for (let i = array.length -1; i >= 0; i--){

        console.log(array[i])
    }
}

module.exports = finPrincipio;