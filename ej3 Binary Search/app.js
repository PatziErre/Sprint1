function ordenarNumero(a,b) {
  return a - b;
}

var arregloDeNumeros = [1, 9, 22, 31, 6, 9, 30, 324, 534, 0, 32];
arregloDeNumeros.sort(ordenarNumero);

function busquedaBinaria (array, numero) {
var menor = 0;
var media = 0;
var mayor = array.length-1;

// Usas un while para saber que el menor siga siendo una posición existente
while (menor <= mayor){
   // Buscas cual es el numero intermedio del arreglo actual
   media = parseInt((menor+mayor)/2);

   // Si el numero de en medio del arreglo es el numero que buscamos, regress media
   if(array[media] == numero) {
     return media;
   }
   // Si el numero de en medio es menor al número que buscamos, la media sube una posición
   else if (array[media]<numero) {
     menor = media+1;
   }
   // Si el numero de en medio es menor al número que buscamos, la media baja una posición
   else {
     mayor = media-1;
 }
}
// Si ninguno de los casos anteriores se cumple, no existe, entonces regresamos -1
return -1;
}


console.log(busquedaBinaria(arregloDeNumeros, 31));