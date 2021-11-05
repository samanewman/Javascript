alert("A continuación deberá ingresar las 3 notas del alumno para conocer su promedio");


for(let i = 0; i < 3; i++ ){

    if (i == 0){
        var nota1 = prompt("Ingresá la nota del primer trimestre");
    }

    if (i == 1){
        var nota2 = prompt("Ingresá la nota del segundo trimestre");
    }

    if (i == 2){
        var nota3 = prompt("Ingresá la nota del tercer trimestre");
    }
    
}

let promedio = ((parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / (3));
alert("El promedio de notas es: "+ promedio);