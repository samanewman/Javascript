let LargoPileta = prompt ("Ingrese metros de largo de la pileta a climatizar: ");
let AnchoPileta = prompt ("Ingrese metros de ancho de la pileta: ");
let ProfundidadMinima = prompt ("Ingrese metros de profundidad minima de la pileta: ");
let ProfundidadMaxima= prompt ("Ingrese  metros de profundidad máxima de la pileta: ");

let Profundidad = (parseInt(ProfundidadMinima) + parseInt(ProfundidadMaxima))/2;

let TamanioDePileta = [LargoPileta, AnchoPileta, Profundidad];

let MetrosCubicos = (parseInt(TamanioDePileta[0]) * parseInt(TamanioDePileta[1])* parseInt(TamanioDePileta[2]));

let CantidadPaneles = MetrosCubicos * 2
let PrecioClimatizacion = (CantidadPaneles * 50) + 400

alert("Su pileta es de "+ MetrosCubicos + " metros cubicos. Deberá utilizar " + CantidadPaneles + "paneles para climatizar su pileta. El precio total es: " + PrecioClimatizacion + "USD.");





