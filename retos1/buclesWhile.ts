// // 1. Realizar una función que te devuelva si existe un numero par en el array de números que
// // introduces como parámetro de entrada.
// // La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)

let numbers = [1, 1, 3, 1];

function hasEven(numbers : number[]) {
    let i = 0;
    while (i < numbers.length){
        if( numbers[i] % 2 == 0){
            return true;
        }
        i++;
    } 
    return false;
}

// console.log(hasEven(numbers));






// //  2. Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
// // todos los nombres empiezan por M.
// // La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)

let nombres = ["Mario", "Pedro", "Maite"];

function startWithM (nombres : string[]) {
    // let contador = true;
    let i = 0;
    while (i < nombres.length){
        if (nombres[i][0] !== "M"){
            return false;
        }
        i++;
    } 
    return true;
}

// console.log(startWithM(nombres));

