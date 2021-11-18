const CotizacionDolar = {blue: 200, oficial: 106, Bolsa: 184, liqui: 184, solidario: 174};

var PrecioenUSD = prompt("Ingresá el precio de tu producto en dólares");

let PrecioenBlue= PrecioenUSD*CotizacionDolar.blue;
let PrecioenOficial= PrecioenUSD*CotizacionDolar.oficial;

alert("Tu precio en pesos argentinos es: " + PrecioenBlue);
alert("Tu precio con cotización al dólar oficial en pesos argentinos es: " + PrecioenOficial);