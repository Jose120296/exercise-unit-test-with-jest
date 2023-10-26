const oneEuroIs = {
  "JPY": 156.5, 
  "USD": 1.07, 
  "GBP": 0.87, 
}; 
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require("./app.js");

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
