
const PrecioProductosusd = {bomba: 510, kitbateria: 340, panelsolar: 260};

const CotizacionDolar = {blue: 200, oficial: 106, Bolsa: 184, liqui: 184, solidario: 174};

/*let contenedorbomba = document.getElementById("contenedorbombausd");
contenedorbomba.innerHTML = `<div>Precio en USD: $ ${PrecioProductosusd.bomba}`;

let contenedorkit = document.getElementById("contenedorkitusd");
contenedorkit.innerHTML = `<div>Precio en USD: $ ${PrecioProductosusd.kitbateria}`;

let contenedorpanel = document.getElementById("contenedorpanelusd");
contenedorpanel.innerHTML = `<div>Precio en USD: $ ${PrecioProductosusd.panelsolar}`;



let botonbomba = document.getElementById("calcularpreciobomba");
botonbomba.addEventListener("click", calcularpreciobomba);

let botonkit = document.getElementById("calcularpreciokit");
botonkit.addEventListener("click", calcularpreciokit);

let botonpanel = document.getElementById("calcularpreciopanel");
botonpanel.addEventListener("click", calcularpreciopanel);

function calcularpreciobomba(){
    
    PrecioenBlueBomba = PrecioProductosusd.bomba*CotizacionDolar.blue
  

    let contenedorbomba = document.getElementById("contenedorbomba");
    contenedorbomba.innerHTML = `Precio en Pesos: $ ${PrecioenBlueBomba}</div>`;

}

function calcularpreciokit(){
    
    PrecioenBlueKit = PrecioProductosusd.kitbateria*CotizacionDolar.blue

    let contenedorkit = document.getElementById("contenedorkit");
    contenedorkit.innerHTML = `Precio en Pesos: $ ${PrecioenBlueKit}</div>`;
}



function calcularpreciopanel(){
    
    PrecioenBluePanel = PrecioProductosusd.panelsolar*CotizacionDolar.blue
    
    let contenedorpanel = document.getElementById("contenedorpanel");
    contenedorpanel.innerHTML = `Precio en Pesos: $ ${PrecioenBluePanel}</div>`;

}

*/

$("#contenedorbombausd").append(`<div>Precio en USD: $ ${PrecioProductosusd.bomba}`);

$("#contenedorkitusd").append(`<div>Precio en USD: $ ${PrecioProductosusd.kitbateria}`);

$("#contenedorpanelusd").append(`<div>Precio en USD: $ ${PrecioProductosusd.panelsolar}`);





$("#calcularpreciobomba").click(function(){
    
    PrecioenBlueBomba = PrecioProductosusd.bomba*CotizacionDolar.blue
  

    $("#contenedorbomba").append(`Precio en Pesos: $ ${PrecioenBlueBomba}</div>`);

})

$("#calcularpreciokit").click(function(){
    
    PrecioenBlueKit = PrecioProductosusd.kitbateria*CotizacionDolar.blue

    $("#contenedorkit").append(`Precio en Pesos: $ ${PrecioenBlueKit}</div>`);
})



$("#calcularpreciopanel").click(function(){
    
    PrecioenBluePanel = PrecioProductosusd.panelsolar*CotizacionDolar.blue
    
     $("#contenedorpanel").append(`Precio en Pesos: $ ${PrecioenBluePanel}</div>`);

})



