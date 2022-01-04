
const PrecioProductosusd = {bomba: 510, kitbateria: 340, panelsolar: 260};

const CotizacionDolar = {blue: 200, oficial: 106, Bolsa: 184, liqui: 184, solidario: 174};


$("#contenedorbombausd").append(`Precio en USD: $<div id = "PrecioBombaUSD"> ${PrecioProductosusd.bomba}</div>`);

$("#contenedorkitusd").append(`Precio en USD: $ ${PrecioProductosusd.kitbateria}`);

$("#contenedorpanelusd").append(`Precio en USD: $ ${PrecioProductosusd.panelsolar}`);


PrecioenBlueBomba = PrecioProductosusd.bomba*CotizacionDolar.blue
$("#contenedorbomba").append(`Precio en Pesos: $<div id = "PrecioBombaAR">${PrecioenBlueBomba}</div>`);

PrecioenBlueKit = PrecioProductosusd.kitbateria*CotizacionDolar.blue
$("#contenedorkit").append(`Precio en Pesos: $ ${PrecioenBlueKit}`);

PrecioenBluePanel = PrecioProductosusd.panelsolar*CotizacionDolar.blue
$("#contenedorpanel").append(`Precio en Pesos: $ ${PrecioenBluePanel}`);


$("#calcularpreciobomba").click(function(){
        $("#contenedorbomba").toggle(2000)
                            .css("color", "blue")
                            .delay(2000);

    

})

$("#calcularpreciokit").click(function(){
    
    $("#contenedorkit").toggle(1000)
                        .css("color", "blue")
                        .delay(2000);

})


$("#calcularpreciopanel").click(function(){
    
    $("#contenedorpanel").toggle(1000)
                        .css("color", "blue")
                        .delay(2000);

})



/*--------Cotización Dólar - API BCRA --------------*/

let urlDolar = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

$("#boxAPIDolar").hide();



$("#BotonAPIDolar").click(function(){

    $("#boxBotonAPIDolar").hide();
    $("#boxAPIDolar").show();

    $.get(urlDolar, function(datos){
        
        let compra = datos[1].casa.compra;
        let venta = datos[1].casa.venta;

        $("#boxAPIDolar").append(`Dólar Blue<br>Compra:${compra}<br>Venta:${venta}`);
    })

    
    
})

