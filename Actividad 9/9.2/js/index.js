/*Para que funcione para cualquier array hay que crearse una función para el prototipo del Array*/
Array.prototype.maximo = function(){
    if (this.length > 0){
        let max = this[0];
        /* al reduce se le pasan generalmente uno ó dos parametros:
        - callback(acumulador, valorActual, indice, arrayOriginal):
                acumulador
                    El acumulador acumula el valor devuelto por la función callback. 
                    Es el valor acumulado devuelto en la última invocación de callback, 
                    o el valorInicial, si se proveyó. (Ver a continuación).

                valorActual
                    El elemento actual que está siendo procesado en el array.

                índice Optional
                    El índice del elemento actual que está siendo procesado en el array.
                    Empieza desde el índice 0 si se provee valorInicial. En caso contrario, comienza desde el índice 1.

                array Optional
                    El array sobre el cual se llamó el método reduce()

            Normalmente en la mayoria de los casos, solo se utiliza el acumulador y valorActual
            ignorando los dos ultimos parametros ya que son opcionales y en este caso no nos interesan


        - valorInicial: Opcional
            (Un valor a usar como primer argumento en la primera llamada
            de la función callback. Si no se proporciona el valorInicial, 
            primer elemento del array será utilizado y saltado)

            Llamando a reduce() sobre un array vacío sin un valorInicial lanzará un TypeError.
        */

        /*Ejemplo; 5,7,8,6,9

        5,5 => 5
        5,7 => 7
        7,8 => 8
        8,6 => 8
        8,9 =>  */

        /*
            function()
        */

        return this.reduce(
            (max,valor) => Math.max(max,valor), // funcion de callback donde max es el acumulador, y valor el valorActual
            max // parametro valorInicial
        );
    } else {
        return 0;
    }
    
}

Array.prototype.minimo = function(){
    return Math.min(...this);
}

console.log([1,5,2,4,3].maximo());
console.log([12,3,4,5,6].minimo());

// Esta sería la opción más sencilla. Desempaqueta el array en argumentos variables, 
    // tantos como elementos tenga
    //  return Math.max(...this);

    // Esta sería la solución.
    /*
    let mayor = -Infinity;
    // this hace referencia al propio array llamante que llama a máximo
    for (let elemento of this) {
        if (elemento > mayor) {
            mayor = elemento;
        }
    }
    
    return mayor;
    */