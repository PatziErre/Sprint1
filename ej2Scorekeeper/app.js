
var scores = {
    "Alex": 0,
    "Jess": 0,
    "Maya": 0
}


function actualizarScore(nombre, puntos){
    scores[nombre] = puntos;
    
}

actualizarScore("Alex", 1000);
actualizarScore("Jess", 800);
actualizarScore("Maya", 100);

console.log(scores);
