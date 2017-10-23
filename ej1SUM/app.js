function range(start, end, step=1){
  var numberArray = []

   for(var i = start; i <= end; i = i + step){
     numberArray.push(i);
   }
   return numberArray;
 }

 function sum(arr){
   var suma = 0
   for(var j = 0; j < arr.length; j++){
     suma = suma + arr[j];
   }
   return suma;
 }

 //console.log(sum(range(1,10,2)));

 range(10, 12, 1);
