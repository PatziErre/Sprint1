function sortNumber(a,b) {
     return a - b;
 }

 var numArray = [1, 10 , 99, 34, 55, 3, 021];
 numArray.sort(sortNumber);
 console.log(numArray.join(","));



 function search(array, element) {
   for (var i = 0; i < array.length; i++) {
     if (array[i] === element) {
       return i;
     }
   }
 }

 console.log(search([3, 4, 35, 97, 32, 8, 71], 4)); 
