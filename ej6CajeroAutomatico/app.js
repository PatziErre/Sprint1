var billetes = {
    "100": 100,
    "50": 50,
    "20": 200,
    "10": 300,
    "5": 500,
    "1": 800,
  }
  
  // Necesitamos sacar las llaves del objeto para ordenarlas
  billetesKeys = Object.keys(billetes);
  
  // Aplicamos el sort para ordenar las llaves descendientemente
  billetesKeys.sort(function(a,b){
      return b - a
  });
  
  function calcularBilletes(montoSolicitado) {
    // Agregas una variable en donde vas a tener el total de billetes a darle
    var totalDeBilletes = 0;
    var montoPendiente = montoSolicitado;
    // Comienzas un for para recorrer todos los tipos de billetes en el arreglo
    for (i = 0; i < billetesKeys.length; i++) {
      // Checas si aplica para cada tipo de billete
      key = parseInt(billetesKeys[i]);
      // Se usarian billetes si es que el monto pendiente dividido entre
      var billetesUsados = Math.floor(montoPendiente/key);
      
      if (montoPendiente>= key && billetesUsados > 0){
        montoPendiente = montoPendiente % billetes[key];
        billetes[key] = billetes[key] - billetesUsados;
        console.log("Se usará " + billetesUsados + " billete de denominación $" + key); 
        totalDeBilletes = totalDeBilletes + billetesUsados;
      }
     }
    console.log("Monto solicitado $" + montoSolicitado + " se entregan " + totalDeBilletes + " billetes");
    console.log("En el cajero quedan: ", billetes);
  }
  
  calcularBilletes(150);