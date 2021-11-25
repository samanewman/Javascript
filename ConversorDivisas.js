/*const CotizacionDolar = {blue: 200, oficial: 106, Bolsa: 184, liqui: 184, solidario: 174};

var PrecioenUSD = prompt("Ingresá el precio de tu producto en dólares");

let PrecioenBlue= PrecioenUSD*CotizacionDolar.blue;
let PrecioenOficial= PrecioenUSD*CotizacionDolar.oficial;

alert("Tu precio en pesos argentinos es: " + PrecioenBlue);
alert("Tu precio con cotización al dólar oficial en pesos argentinos es: " + PrecioenOficial);*/


const PrecioProductos = {bomba: 510, kitbateria: 340, panelsolar: 260};

const CotizacionDolar = {blue: 200, oficial: 106, Bolsa: 184, liqui: 184, solidario: 174};

let div = document.createElement("div");
div.innerHTML = `<div>Precio en USD: $ ${PrecioProductos.bomba}`;
let contenedorbombausd = document.getElementById("contenedorbombausd");
contenedorbombausd.appendChild(div);

function calcularprecio(){

    let PrecioenBlueBomba= PrecioProductos.bomba*CotizacionDolar.blue;
    let PrecioenOficialBomba= PrecioProductos.bomba*CotizacionDolar.oficial;

    let contenedorbomba = document.getElementById("contenedorbomba");
    contenedorbomba.innerHTML = `Precio en Pesos: $ ${PrecioenBlueBomba}</div>`;

}


