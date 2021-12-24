
const PrecioProductosusd = {bomba: 510, kitbateria: 340, panelsolar: 260};

const CotizacionDolar = {blue: 200, oficial: 106, Bolsa: 184, liqui: 184, solidario: 174};


$("#contenedorbombausd").append(`Precio en USD: $ ${PrecioProductosusd.bomba}`);

$("#contenedorkitusd").append(`Precio en USD: $ ${PrecioProductosusd.kitbateria}`);

$("#contenedorpanelusd").append(`Precio en USD: $ ${PrecioProductosusd.panelsolar}`);


PrecioenBlueBomba = PrecioProductosusd.bomba*CotizacionDolar.blue
$("#contenedorbomba").append(`Precio en Pesos: $ ${PrecioenBlueBomba}`);

PrecioenBlueKit = PrecioProductosusd.kitbateria*CotizacionDolar.blue
$("#contenedorkit").append(`Precio en Pesos: $ ${PrecioenBlueKit}`);

PrecioenBluePanel = PrecioProductosusd.panelsolar*CotizacionDolar.blue
$("#contenedorpanel").append(`Precio en Pesos: $ ${PrecioenBluePanel}`);


$("#calcularpreciobomba").click(function(){
    
    $("#contenedorbomba").toggle(1000);

})

$("#calcularpreciokit").click(function(){
    
    $("#contenedorkit").toggle(1000);

})


$("#calcularpreciopanel").click(function(){
    
    $("#contenedorpanel").toggle(1000);

})



