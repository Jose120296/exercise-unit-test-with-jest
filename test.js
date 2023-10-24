const oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87, // libra esterlina
  };
  
  // hay que definir estas funciones antes de usarlas en los tests
  const fromDollarToYen = function(amountInDollars) {
    const rate = oneEuroIs["JPY"] / oneEuroIs["USD"];
    const amountInYen = amountInDollars * rate;
    return amountInYen;
  };
  
  const fromYenToPound = function(amountInYen) {
    const rate = oneEuroIs["GBP"] / oneEuroIs["JPY"];
    const amountInPound = amountInYen * rate;
    return amountInPound;
  };
  
  // hay que importar estas funciones desde el archivo donde se definen
  const { fromEuroToDollar, sum } = require("./app.js");
  
  test("Converting from dollar to yen", function() {
    const dollars = 10;
    const expectedYen = dollars * (oneEuroIs["JPY"] / oneEuroIs["USD"]);
    expect(fromDollarToYen(dollars)).toBe(expectedYen);
  });
  
  test("Converting from yen to pound", function() {
    const yen = 10000;
    const expectedPound = yen * (oneEuroIs["GBP"] / oneEuroIs["JPY"]);
    expect(fromYenToPound(yen)).toBe(expectedPound);
  }); // faltaba un punto y coma
  