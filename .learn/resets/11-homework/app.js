// one euro is:
const oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87, // libra esterlina
  }; // faltaba una llave de cierre
  
  const fromDollarToYen = function(amountInDollars) {
    const rate = oneEuroIs["JPY"] / oneEuroIs["USD"];
    const amountInYen = amountInDollars * rate;
    return amountInYen;
  };
  
  const fromYenToPound = function(amountInYen) {
    const rate = oneEuroIs["GBP"] / oneEuroIs["JPY"];
    const amountInPound = amountInYen * rate;
    return amountInPound; // faltaba devolver el valor
  };
  
  // hay que definir estas funciones antes de exportarlas
  const sum = function(a, b) {
    return a + b;
  };
  
  const fromEuroToDollar = function(amountInEuro) {
    const rate = oneEuroIs["USD"];
    const amountInDollar = amountInEuro * rate;
    return amountInDollar;
  };
  
  // Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
  module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }; // hay que incluir todas las funciones que se exportan
  