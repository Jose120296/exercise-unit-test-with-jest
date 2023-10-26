// one euro is:
const oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87, // libra esterlina
  }; // faltaba una llave de cierre
  
  
  const fromEuroToDollar = function(amountInEuro) {
    const rate = oneEuroIs["USD"];
    const amountInDollar = amountInEuro * rate;
    return amountInDollar;
  };
  
  
  module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
  