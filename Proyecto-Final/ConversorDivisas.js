/*const CotizacionDolar = {blue: 200, oficial: 106, Bolsa: 184, liqui: 184, solidario: 174};

var PrecioenUSD = prompt("Ingresá el precio de tu producto en dólares");

let PrecioenBlue= PrecioenUSD*CotizacionDolar.blue;
let PrecioenOficial= PrecioenUSD*CotizacionDolar.oficial;

alert("Tu precio en pesos argentinos es: " + PrecioenBlue);
alert("Tu precio con cotización al dólar oficial en pesos argentinos es: " + PrecioenOficial);*/


const PrecioProductos = {bomba: 510, kitbateria: 340, panelsolar: 260};

const CotizacionDolar = {blue: 200, oficial: 106, Bolsa: 184, liqui: 184, solidario: 174};

let PrecioenBlueBomba= PrecioProductos.bomba*CotizacionDolar.blue;
let PrecioenOficialBomba= PrecioProductos.bomba*CotizacionDolar.oficial;

console.log(PrecioProductos.bomba);
console.log(PrecioenBlueBomba);

let div = document.createElement("div");
div.innerHTML = "<div>Precio en USD: {$PrecioProductos.bomba}<br>Precio en Pesos: {$PrecioBlueBomba}</div>";
let contenedorbomba = document.getElementById("contenedorbomba");
contenedorbomba.appendChild(div);


