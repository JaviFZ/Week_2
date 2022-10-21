// // 1. Realizar una función que te devuelva si existe un numero par en el array de números que
// // introduces como parámetro de entrada.
// // La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)
var numbers = [1, 1, 1, 1];
function hasEven(numbers) {
    var i = 0;
    while (i < numbers.length) {
        if (i % 2 == 0) {
            return true;
        }
    }
    i++;
}
console.log(hasEven(numbers));
// //  2. Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
// // todos los nombres empiezan por M.
// // La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)
var nombres = ["Mario", "Paria", "Maite"];
function startWithM(nombres) {
    var i = 0;
    while (i < nombres.length) {
        if (nombres[i][0] == "M") {
            return true;
        }
        else {
            return false;
        }
    }
    i++;
}
console.log(startWithM(nombres));
