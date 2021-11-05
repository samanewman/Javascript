let edad = prompt("Ingrese su edad");


if (parseInt(edad) < 18 ||  isNaN(parseInt(edad))){
    alert("Debe tener más de 18 años para poder ingresar");
}

else{

    alert("Acceso habilitado");
}


