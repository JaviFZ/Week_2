// // 2. Realizar una función que imprima los números impares existentes hasta el número
// // indicado como parámetro de entrada.
// // La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)



// function evenNumbers (num : number) {
//     let cuenta : number[] = []
//     for (let i = 0; i <= num; i++){
//         if ((i % 2) !== 0){
//             cuenta.push(i);
//         } 
//     } return cuenta;
// }


// console.log(evenNumbers(10));






// // 3. Realizar una función que como parámetro de entrada reciba un array y como salida
// // devuelva el array revertido. No se puede utilizar el método revert de la clase array
// // La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)


// let numeros = [4, 27, 7, 100];




// function myRevert(elements : any[]) {
//     let salida : any[] = []
//     for (let i = elements.length - 1; i >= 0; i--) {
//       salida.push(elements[i]);
//     }
//     return salida;
// }

// console.log(myRevert(numeros));






// // 4. Realizar una función que reciba como parámetro un array de strings que contenga
// // nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// // La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)


// let rainbow : string[] = ["rojo", "naranja", "amarillo", "verde", "azul", "violeta"];

// let colors : string[] = ["blanco", "rojo", "negro"];



// function isRainbow(colors: string[]): void {
//     console.log("rainbow", rainbow)
//     for (let i = 0; i <= colors.length; i++) {
//         if (rainbow.includes(colors[i])) {
//             console.log(`El color ${colors[i]} está en el arcoiris`)
//         } else {
//             console.log(`El color ${colors[i]} no está en el arcoiris`)
//         }
//     }
// }

// isRainbow(colors)





// // 5. Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// // almacenadas en un array.
// // La cabecera de la función tendrá el siguiente aspecto: function add(myWords)

let myWorlds : string[] = ["Coche", "moto", "patin"];



export function add( myWorlds:string[]) : number {
    let coleccion : number = 0
    for (let i=0 ; i<myWorlds.length; i++){
        coleccion += myWorlds[i].length;
    }
    
    return coleccion;
}



// console.log(add(myWorlds));
