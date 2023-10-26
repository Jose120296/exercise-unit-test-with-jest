// one euro is:
const oneEuroIs = {
  "JPY": 156.5, // yen japonés
  "USD": 1.07, // dólar estadounidense
  "GBP": 0.87, // libra esterlina
};

const fromEuroToDollar = function(amountInEuro) {
  const rate = oneEuroIs["USD"];
  const amountInDollar = amountInEuro * rate;
  return amountInDollar;
};

const fromDollarToYen = function(amountInDollar) {
  const rate = oneEuroIs["JPY"] / oneEuroIs["USD"];
  const amountInYen = amountInDollar * rate;
  return amountInYen;
};

const fromYenToPound = function(amountInYen) {
  const rate = oneEuroIs["GBP"] / oneEuroIs["JPY"];
  const amountInPound = amountInYen * rate;
  return amountInPound;
};

// Define the sum function here if needed

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
