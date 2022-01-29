     function productos (nombre, preciousd, preciosubtotal, cantidad){
        this.nombre = nombre;
        this.preciousd = preciousd;
        this.preciosubtotal = preciosubtotal;
        this.cantidad = cantidad;
    }
    

    function piscina (nombre, cotizacion){
        this.nombre = nombre;
        this.cotizacion = cotizacion;
    }


    function carrito (productocarrito){
        this.productocarrito = productocarrito;
    }


contadorproductos = 0;
contadorbombas = 0;

$("#SolicitarBomba").click(function(){
    cantidadbomba = document.getElementById("cantidadbomba").value;
    contadorproductos = contadorproductos + parseInt(cantidadbomba);
    contadorbombas = contadorbombas + parseInt(cantidadbomba);
    preciosubtotalbomba = PrecioProductosusd.bomba * contadorbombas;
    $("#cantidadproductoscarrito").html(`(${contadorproductos})`);
    let bomba = new productos("Bomba de Agua", PrecioProductosusd.bomba, preciosubtotalbomba, contadorbombas);
    $("#modal-body-bomba").html(`<div><ul><li>${bomba.nombre}</li><li>${bomba.preciousd}</li><li>${bomba.preciosubtotal}</li><li>${bomba.cantidad}</li></ul></div>`);   
    
})

contadorkits= 0;

$("#SolicitarKit").click(function(){
    cantidadkit = document.getElementById("cantidadkit").value;
    contadorproductos = contadorproductos + parseInt(cantidadkit);
    contadorkits = contadorkits + parseInt(cantidadkit);
    preciosubtotalkit = PrecioProductosusd.kitbateria * contadorkits;
    $("#cantidadproductoscarrito").html(`(${contadorproductos})`);
    let kit = new productos("Kit de baterías", PrecioProductosusd.kitbateria, preciosubtotalkit, contadorkits);
    $("#modal-body-kit").html(`<div><ul><li>${kit.nombre}</li><li>${kit.preciousd}</li><li>${kit.preciosubtotal}</li><li>${kit.cantidad}</li></ul></div>`);   
})

contadorpaneles= 0;


$("#SolicitarPanel").click(function(){
    
    cantidadpaneles = document.getElementById("cantidadpaneles").value;
    contadorproductos = contadorproductos + parseInt(cantidadkit);
    contadorpaneles = contadorpaneles + parseInt(cantidadpaneles);
    preciosubtotalpaneles = PrecioProductosusd.panelsolar * contadorpaneles;
    $("#cantidadproductoscarrito").html(`(${contadorproductos})`);
    let panel = new productos("Panel solar", PrecioProductosusd.panelsolar, preciosubtotalpaneles, contadorpaneles);
    $("#modal-body-panel").html(`<div><ul><li>${panel.nombre}</li><li>${panel.preciousd}</li><li>${panel.preciosubtotal}</li><li>${panel.cantidad}</li></ul></div>`);   
})

$("#SolicitarPiscina").click(function(){
    
    cotizarclimatizacion();
    let pileta = new piscina ("Climatización", arraycotizacion.PrecioClimatizacion)
    $("#modal-body-piscina").html(`<div><ul><li>${pileta.nombre}</li><li>${pileta.cotizacion}</li><li>${pileta.cotizacion}</li><li> 1 </li></ul></div>`);   


})

$("#FinalizarCompra").click(function(){
    
   $("#modal-body-pago").html(`<div>             
    <div><br><br> <h2>REALIZAR PAGO</h2><br><br>
    <label>Número de tarjeta:</label>
    <input type="text" id="NumeroTarjeta" name="NumeroTarjeta" class="CajaTextoPago" value = "XXXX-XXXX-XXXX-XXXX">
  </div>
  <div>
  <label>Nombre completo:</label>
  <input type="text" id="Nombrecompleto" name="NombreCompleto" class="CajaTextoPago">
    </div>
    <div>
    <label>Vencimiento:</label>
    <input type="text" id="VencimientoTarjeta" name="VencimientoTarjeta" class="CajaTexto" value = "MM/AA" >
    </div>
    <div>
    <label>CVV</label>
    <input type="text" id="cvv" name="cvv" class="CajaTexto">
    </div>
    <button type="button" class="btn btn-default">Pagar</button>
    </div>`);   



})

