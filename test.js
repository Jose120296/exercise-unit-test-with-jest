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

// exportamos las funciones para usarlas en otros archivos 
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };

// aquí podemos escribir los tests
const { sum } = require("./app.js");

test("Converting from euro to dollar", function() {
  const euros = 3.5;
  const expectedDollars = euros * oneEuroIs["USD"];
  expect(fromEuroToDollar(euros)).toBe(expectedDollars);
});

test("Converting from dollar to yen", function() {
  const dollars = 10;
  const expectedYen = dollars * (oneEuroIs["JPY"] / oneEuroIs["USD"]);
  expect(fromDollarToYen(dollars)).toBe(expectedYen);
});

test("Converting from yen to pound", function() {
  const yen = 10000;
  const expectedPound = yen * (oneEuroIs["GBP"] / oneEuroIs["JPY"]);
  expect(fromYenToPound(yen)).toBe(expectedPound);
});
