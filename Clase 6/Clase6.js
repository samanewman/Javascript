let Numeros = [10, 8, 4, 9, 27, 12, 82, 94, 75, 14, 22, 63, 52, 25];


for (let i = 0; i < Numeros.length; i++){

    for (let j = 0; j < Numeros.length-1 ; j++){

        if (Numeros[j] < Numeros[j+1]){

            let Aux = Numeros[j];
            Numeros[j] = Numeros[j+1];
            Numeros[j+1] = Aux;

        }
    }
}

console.log(Numeros);

let NumerosMin = [10, 8, 4, 9, 27, 12, 82, 94, 75, 14, 22, 63, 52, 25];

for (let i = 0; i < NumerosMin.length; i++){

    for (let j = 0; j < NumerosMin.length-1 ; j++){

        if (NumerosMin[j] > NumerosMin[j+1]){

            let Aux = NumerosMin[j+1];
            NumerosMin[j+1] = NumerosMin[j];
            NumerosMin[j] = Aux;

        }
    }
}

console.log(NumerosMin);


