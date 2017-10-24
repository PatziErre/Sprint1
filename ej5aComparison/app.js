// función llamada comparacion que tome dos arrays como argumentos.

var gatito1 = ["Guero", "Camilo", "Efesios"];
var gatito2 = ["Guero", "Camilo", "Efesios"];

function comparacion (gatito1, gatito2) {
  if (gatito1.length != gatito2.length) {
return false;
  } 
  for (var i = 0; i < gatito1.length; i++) {
  if (gatito1[i] != gatito2[i]) {
return false;
  }
  }
  return true;
}

console.log(comparacion(gatito1, gatito2));