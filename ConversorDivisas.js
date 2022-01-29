/*--------Cotización Dólar - API BCRA --------------*/

const urlDolar = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

$("#boxAPIDolar").hide();


$("#BotonAPIDolar").click(function(){

    $("#boxBotonAPIDolar").hide();
    $("#boxAPIDolar").show();

    $.get(urlDolar, function(datos){
    
        compra = datos[1].casa.compra;
        venta = datos[1].casa.venta;

        $("#boxAPIDolar").html(`Dólar Blue<br>Compra:${compra}<br>Venta:${venta}`);
    
    })    
})


/*--------Calculo precios --------------*/

const PrecioProductosusd = {bomba: 510, kitbateria: 340, panelsolar: 260};


$("#contenedorbombausd").append(`Precio en USD: $ ${PrecioProductosusd.bomba}`);

$("#contenedorkitusd").append(`Precio en USD: $ ${PrecioProductosusd.kitbateria}`);

$("#contenedorpanelusd").append(`Precio en USD: $ ${PrecioProductosusd.panelsolar}`);


$.get(urlDolar, function(datos){

    compra = datos[1].casa.compra;
    venta = datos[1].casa.venta;

    PrecioenBlueBomba = PrecioProductosusd.bomba*(parseInt(venta));
    $("#contenedorbomba").append(`Precio en Pesos: $<div id = "PrecioBombaAR">${PrecioenBlueBomba}</div>`);

    PrecioenBlueKit = PrecioProductosusd.kitbateria*(parseInt(venta));
    $("#contenedorkit").append(`Precio en Pesos: $ ${PrecioenBlueKit}`);

    PrecioenBluePanel = PrecioProductosusd.panelsolar*(parseInt(venta));
    $("#contenedorpanel").append(`Precio en Pesos: $ ${PrecioenBluePanel}`);

})    


$("#calcularpreciobomba").click(function(){

    $("#contenedorbomba").toggle(1000)
})

$("#calcularpreciokit").click(function(){
    
    $("#contenedorkit").toggle(1000)

})


$("#calcularpreciopanel").click(function(){
    
    $("#contenedorpanel").toggle(1000)

})




