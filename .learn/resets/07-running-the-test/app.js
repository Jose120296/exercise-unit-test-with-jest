// one euro is:
const oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87, // libra esterlina
  };
  
  const fromDollarToYen = function(amountInDollars) {
    const rate = oneEuroIs["JPY"] / oneEuroIs["USD"];
    const amountInYen = amountInDollars * rate;
    return amountInYen;
  };
  
  const fromYenToPound = function(amountInYen) {
    const rate = oneEuroIs["GBP"] / oneEuroIs["JPY"];
    const amountInPound = amountInYen * rate;
  };