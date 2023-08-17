var x = parseFloat(prompt("Ingresa el valor de x:"));
var n = parseInt(prompt("Ingresa el número de términos (n):"));



function calcularExponencialSerieTaylor(x, n) {
  var resultado = 1;
  
  for (var i = 1; i <= n; i++) {
    resultado += Math.pow(x, i) / factorial(i);
  }
  
  return resultado;
}

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}


var expAproximada = calcularExponencialSerieTaylor(x, n);

console.log(`f(x)= ${expAproximada}`);
