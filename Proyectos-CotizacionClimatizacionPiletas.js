let botoncotizar = document.getElementById("cotizarpiscina");
botoncotizar.addEventListener("click", mostrarcotizacion);

function cotizarclimatizacion(){
    
    LargoPileta = document.getElementById("largopileta").value;
    AnchoPileta = document.getElementById("anchopileta").value;
    ProfundidadMinima = document.getElementById("Minpileta").value;
    ProfundidadMaxima= document.getElementById("Maxpileta").value;


    Profundidad = (parseInt(ProfundidadMinima) + parseInt(ProfundidadMaxima))/2;

    TamanioDePileta = [LargoPileta, AnchoPileta, Profundidad];

    MetrosCubicos = (parseInt(TamanioDePileta[0]) * parseInt(TamanioDePileta[1])* parseInt(TamanioDePileta[2]));

    CantidadPaneles = MetrosCubicos * 2
    PrecioClimatizacion = (CantidadPaneles * 50) + 400
    arraycotizacion = {MetrosCubicos, CantidadPaneles, PrecioClimatizacion}

    return arraycotizacion;
}


function mostrarcotizacion(){
    
    cotizarclimatizacion();
    let resultadocotizacion = document.getElementById("resultadocotizacion");
    resultadocotizacion.innerHTML = `Su pileta es de ${arraycotizacion.MetrosCubicos} metros cúbicos. Deberá utilizar ${arraycotizacion.CantidadPaneles} paneles para climatizar su pileta. El precio total es: ${arraycotizacion.PrecioClimatizacion} dólares</div>`;
}




