let botoncotizar = document.getElementById("cotizarpiscina");
botoncotizar.addEventListener("click", cotizarclimatizacion);

function cotizarclimatizacion(){
    
    let LargoPileta = document.getElementById("largopileta").value;
    let AnchoPileta = document.getElementById("anchopileta").value;
    let ProfundidadMinima = document.getElementById("Minpileta").value;
    let ProfundidadMaxima= document.getElementById("Maxpileta").value;


    let Profundidad = (parseInt(ProfundidadMinima) + parseInt(ProfundidadMaxima))/2;

    let TamanioDePileta = [LargoPileta, AnchoPileta, Profundidad];

    let MetrosCubicos = (parseInt(TamanioDePileta[0]) * parseInt(TamanioDePileta[1])* parseInt(TamanioDePileta[2]));

    let CantidadPaneles = MetrosCubicos * 2
    let PrecioClimatizacion = (CantidadPaneles * 50) + 400

    let resultadocotizacion = document.getElementById("resultadocotizacion");
    resultadocotizacion.innerHTML = `Su pileta es de ${MetrosCubicos} metros cúbicos. Deberá utilizar ${CantidadPaneles} paneles para climatizar su pileta. El precio total es: ${PrecioClimatizacion} dólares</div>`;

}





