
// // Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal.
// // La fecha de nacimiento vendrá indicada por dos números: dia y mes.
// // La cabecera de la función tendrá el siguiente aspecto: function zodiac(day, month)


function zodiac(day : number, month : string)  {
    let result : string = ""
    if ((day >= 21 && day <=31 && month =="marzo") || (day <=20 && month == "abril")){
        result = "Aries";
    } else if ((day >= 21 && day <=31 && month =="abril") || (day <=21 && month == "mayo")){
        result = "Tauro";
    } else if ((day >= 22 && day <=31 && month =="mayo") || (day <=21 && month == "junio")){
        result = "Géminis";
    } else if ((day >= 22 && day <=31 && month =="junio") || (day <=22 && month == "julio")){
        result = "Cáncer";
    } else if ((day >= 23 && day <=31 && month =="julio") || (day <=23 && month == "agosto")){
        result = "Leo";
    } else if ((day >= 24 && day <=31 && month =="agosto") || (day <=23 && month == "septiembre")){
        result = "Virgo";
    } else if ((day >= 24 && day <=31 && month =="septiembre") || (day <=23 && month == "octubre")){
        result = "Libra";
    } else if ((day >= 24 && day <=31 && month =="octubre") || (day <=22 && month == "noviembre")){
        result = "Escorpio";
    } else if ((day >= 23 && day <=31 && month =="noviembre") || (day <=21 && month == "diciembre")){
        result = "Sagitario";
    } else if ((day >= 22 && day <=31 && month =="diciembre") || (day <=20 && month == "enero")){
        result = "Capricornio";
    } else if ((day >= 21 && day <=31 && month =="enero") || (day <=18 && month == "febrero")){
        result = "Acuario";
    } else if ((day >= 19 && day <=31 && month =="febrero") || (day <=20 && month == "marzo")){
        result = "Piscis";
    } 
    return result;
}


console.log(zodiac(25, "febrero"));




// // Realizar un procedimiento que dado el nombre de un país te imprima en que continente
// // estás. (Max 5 países por continente).
// //La cabecera del procedimiento tendrá el siguiente aspecto: function continent(country)




function continent(country : string) {
    if (country == "Argentina" || country == "Chile" || country == "Brasil" || country == "Mexico" || country == "Colombia"){
        console.log("America");   
    } else if (country == "Marruecos" || country == "Egipto" || country == "Mozambique" || country == "Guinea" || country == "Sudafrica"){
        console.log("Africa");
    } else if (country == "Japon" || country == "China" || country == "Rusia" || country == "Vietnam" || country == "Mongolia"){
        console.log("Asia");
    } else if (country == "España" || country == "Italia" || country == "Francia" || country == "Alemania" || country == "Suiza"){
        console.log("Europa");
    }
}

// continent("China");



// // Realizar una función que te imprima por consola el siguiente mensaje:
// // - “El numero es par”, si el numero introducido como parámetro de entrada es par
// // - “El numero es impar”, si el numero introducido como parámetro de entrada es impar
// // La cabecera de la función tendrá el siguiente aspecto: function isEven(number)


 export function isEven ( n : number) {
    
    if (n % 2 == 0){
    console.log("El número es par");
    } else {
    console.log("El número es impar");
    }   
    
    
}


// isEven(3);