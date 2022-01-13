let contadorproductos = 0;

$("#SolicitarBomba").click(function(){
    
    /*let nombreproducto = "Bomba de agua";
    let cantidad = $("#cantidadbomba").value;
    let precioproductousd = $("#PrecioBombaUSD");root --> inde
    let precioproductoar = $("#PrecioBombaAR");

    let cantidadbomba = $("#cantidadbomba").val;

    console.log(cantidadbomba);*/

    contadorproductos = contadorproductos + 1;
    alert("Hemos Agregado el producto al carrito de compras");
    $("#cantidadproductoscarrito").html(`(${contadorproductos})`);

})

$("#SolicitarKit").click(function(){
    
    /*let nombreproducto = "Bomba de agua";
    let cantidad = $("#cantidadbomba").value;
    let precioproductousd = $("#PrecioBombaUSD");
    let precioproductoar = $("#PrecioBombaAR");*/
    let cantidadkit = $("#cantidadkit").val;

    contadorproductos = contadorproductos + 1;
    alert("Hemos Agregado el producto al carrito de compras");
    $("#cantidadproductoscarrito").html(`(${contadorproductos})`);



})

$("#SolicitarPanel").click(function(){
    
    /*let nombreproducto = "Bomba de agua";
    let cantidad = $("#cantidadbomba").value;
    let precioproductousd = $("#PrecioBombaUSD");
    let precioproductoar = $("#PrecioBombaAR");
    let cantidadpaneles = $("#cantidadpaneles").val;*/

    contadorproductos = contadorproductos + 1;
    alert("Hemos Agregado el producto al carrito de compras");
    $("#cantidadproductoscarrito").html(`(${contadorproductos})`);



})

$("#SolicitarPiscina").click(function(){
    
    /*let nombreproducto = "Bomba de agua";
    let cantidad = $("#cantidadbomba").value;
    let precioproductousd = $("#PrecioBombaUSD");
    let precioproductoar = $("#PrecioBombaAR");*/

    contadorproductos = contadorproductos +1;
    alert("Hemos Agregado el producto al carrito de compras");
    $("#cantidadproductoscarrito").html(`(${contadorproductos})`);



})