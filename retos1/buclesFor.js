// // 2. Realizar una función que imprima los números impares existentes hasta el número
// // indicado como parámetro de entrada.
// // La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)
function evenNumbers(num) {
    var cuenta = [];
    for (var i = 0; i <= num; i++) {
        if ((i % 2) !== 0) {
            cuenta.push(i);
        }
    }
    return cuenta;
}
console.log(evenNumbers(10));
// // 3. Realizar una función que como parámetro de entrada reciba un array y como salida
// // devuelva el array revertido. No se puede utilizar el método revert de la clase array
// // La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)
var numeros = [4, 27, 7, 100];
function myRevert(numeros) {
    var salida = [];
    for (var i = numeros.length - 1; i >= 0; i--) {
        salida.push(numeros[i]);
    }
    return salida;
}
console.log(myRevert(numeros));
// // 4. Realizar una función que reciba como parámetro un array de strings que contenga
// // nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// // La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)
var rainbow = ["rojo", "naranja", "amarillo", "verde", "azul", "violeta"];
var arrayColors = ["rojo", "rojo", "rojo"];
function isRainbow(arrayColors) {
    for (var i = 0; i <= arrayColors.length; i++) {
        if (arrayColors[i] == "rojo" || arrayColors[i] == "naranja" || arrayColors[i] == "amarillo" || arrayColors[i] == "verde" || arrayColors[i] == "azul" || arrayColors[i] == "violeta") {
            return true;
        }
        else {
            return false;
        }
    }
}
// function isRainbow2 (arrayColors : string[]) {
//     for (colors of rainbow){
//         if ("rojo" == colors || arrayColors[i] == "naranja" || arrayColors[i] == "amarillo" || arrayColors[i] == "verde" || arrayColors[i] == "azul" || arrayColors[i] == "violeta"){
//             return true;
//         } else {
//             return false;
//         }
//     }
// }
console.log(isRainbow(arrayColors));
// // 5. Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// // almacenadas en un array.
// // La cabecera de la función tendrá el siguiente aspecto: function add(myWords)
var myWorlds = ["Coche", "moto", "patin"];
function add(myWorlds) {
    var coleccion = [];
    for (var i = 0; i <= myWorlds.length; i++) {
        coleccion.push(myWorlds[i].length[i] += myWorlds[i].length[i]);
    }
    return coleccion;
}
console.log(add(myWorlds));
