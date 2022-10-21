// // 2. Realizar una función que imprima los números impares existentes hasta el número
// // indicado como parámetro de entrada.
// // La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)
function evenNumbers(num) {
    var cuenta = 0;
    for (var i = 0; i <= num; i++) {
        if ((i % 2) !== 0) {
            cuenta += i;
        }
    }
    return cuenta;
}
console.log(evenNumbers(10));
// // 3. Realizar una función que como parámetro de entrada reciba un array y como salida
// // devuelva el array revertido. No se puede utilizar el método revert de la clase array
// // La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)
var array = [1, 2, 3, 4];
function myRevert(array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var n = array_1[_i];
        n[0] = n[3];
    }
    return array;
}
console.log(myRevert(array));
// // 4. Realizar una función que reciba como parámetro un array de strings que contenga
// // nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// // La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)
var rainbow = ["rojo", "naranja", "amarillo", "verde", "cian", "azul", "violeta"];
// function isRainbow (rainbow : string[]) {
//     for (colores of rainbow){
//         if (colores == )
//     }
// }
// // 5. Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// // almacenadas en un array.
// // La cabecera de la función tendrá el siguiente aspecto: function add(myWords)
