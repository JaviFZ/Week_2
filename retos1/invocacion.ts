// // Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si es
// // par o impar la suma de los caracteres de cada uno de los siguientes arrays:
// // • [“Casa”, “Coche”, “Ciudad”, “Cesta”]
// // • [“Barco”, “Baca”, “Bicicleta”, “Balon”, “Bisiesto”, “Brasil”]
// // • [“Venezuela”, “Veneno”, “Voltaje”]
// // Para ello tendrás que exportar dichas funciones en los ficheros correspondientes.
// // También tendrás que importar dichos ficheros en el fichero actual.

import { isEven } from "./condicionales.js";

import { add } from "./buclesFor.js";


let arr1 = ["Casa", "Coche", "Ciudad", "Cesta"];
let arr2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let arr3 = ["Venezuela", "Veneno", "Voltaje"];


isEven(add(arr1));
isEven(add(arr2));
isEven(add(arr3));