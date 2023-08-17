
var nTerminos = parseInt(prompt("Ingresa la cantidad de términos de la serie de Fibonacci que deseas generar:"));


function SFibonacci(n) {
  var fibSeries = [0, 1];
  
  for (var i = 2; i < n; i++) {
    fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
  }
  
  return fibSeries;
}

function sumarArray(array) {
  return array.reduce(function(a, b) {
    return a + b;
  }, 0);
}

var serieFibonacci = SFibonacci(nTerminos);
var sumaTotal = sumarArray(serieFibonacci);

console.log("Serie de Fibonacci:");
console.log(serieFibonacci);
console.log("Suma total de los términos:", sumaTotal);