// Escribe una función que tome un array como parámetro y 
// retorne otro array pero sin elementos duplicados.

// Declaramos un arreglo con duplicados
var listOfNumbers = [3, 12, 3, 18, 12, 9];

// Esta función busca los duplicados
function quitarDuplicados(original){
    // declarar un arreglo vacio dentro de la función
    var nuevoArreglo = [];

    // Hacemos un bucle for que dure el largo del arreglo que recibio la función
    // Con FOR for accedemos a cada elemento del arreglo
    for(i = 0; i <= original.length; i++){
        // Usamos una variable para saber si el elemento es nuevo
        var nuevo = true;
            // Otro bucle que dure el largo del nuevoArreglo arreglo para comparar
            // los elementos que hemos agregado
            for (x = 0; x <= nuevoArreglo.length; x++){
                // Si ya existe el elemento de original en el que estamos,
                // nuevo sera falso y no lo agregaremos
                if(nuevoArreglo[x] == original[i]){
                    nuevo = false;
                }
            }
            // Si el elemento es nuevo, lo agregamos a nuevoArreglo
            if (nuevo){
                nuevoArreglo.push(original[i]);
            } 
    }
    // Regresamos el nuevo arreglo
    return nuevoArreglo;
}

console.log(quitarDuplicados(listOfNumbers));