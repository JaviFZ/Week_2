// // Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal.
// // La fecha de nacimiento vendrá indicada por dos números: dia y mes.
// // La cabecera de la función tendrá el siguiente aspecto: function zodiac(day, month)
function zodiac(day, month) {
    if ((day >= 21 && day <= 31 && month == "marzo") || (day <= 20 && month == "abril")) {
        return "Aries";
    }
    else if ((day >= 21 && day <= 31 && month == "abril") || (day <= 21 && month == "mayo")) {
        return "Tauro";
    }
    else if ((day >= 22 && day <= 31 && month == "mayo") || (day <= 21 && month == "junio")) {
        return "Géminis";
    }
    else if ((day >= 22 && day <= 31 && month == "junio") || (day <= 22 && month == "julio")) {
        return "Cáncer";
    }
    else if ((day >= 23 && day <= 31 && month == "julio") || (day <= 23 && month == "agosto")) {
        return "Leo";
    }
    else if ((day >= 24 && day <= 31 && month == "agosto") || (day <= 23 && month == "septiembre")) {
        return "Virgo";
    }
    else if ((day >= 24 && day <= 31 && month == "septiembre") || (day <= 23 && month == "octubre")) {
        return "Libra";
    }
    else if ((day >= 24 && day <= 31 && month == "octubre") || (day <= 22 && month == "noviembre")) {
        return "Escorpio";
    }
    else if ((day >= 23 && day <= 31 && month == "noviembre") || (day <= 21 && month == "diciembre")) {
        return "Sagitario";
    }
    else if ((day >= 22 && day <= 31 && month == "diciembre") || (day <= 20 && month == "enero")) {
        return "Capricornio";
    }
    else if ((day >= 21 && day <= 31 && month == "enero") || (day <= 18 && month == "febrero")) {
        return "Acuario";
    }
    else if ((day >= 19 && day <= 31 && month == "febrero") || (day <= 20 && month == "marzo")) {
        return "Piscis";
    }
}
console.log(zodiac(13, "marzo"));
// // Realizar un procedimiento que dado el nombre de un país te imprima en que continente
// // estás. (Max 5 países por continente).
// //La cabecera del procedimiento tendrá el siguiente aspecto: function continent(country)
function continent(country) {
    if (country == "Argentina" || country == "Chile" || country == "Brasil" || country == "Mexico" || country == "Colombia") {
        console.log("America");
    }
    else if (country == "Marruecos" || country == "Egipto" || country == "Mozambique" || country == "Guinea" || country == "Sudafrica") {
        console.log("Africa");
    }
    else if (country == "Japon" || country == "China" || country == "Rusia" || country == "Vietnam" || country == "Mongolia") {
        console.log("Asia");
    }
    else if (country == "España" || country == "Italia" || country == "Francia" || country == "Alemania" || country == "Suiza") {
        console.log("Europa");
    }
}
continent("Egipto");
// // Realizar una función que te imprima por consola el siguiente mensaje:
// // - “El numero es par”, si el numero introducido como parámetro de entrada es par
// // - “El numero es impar”, si el numero introducido como parámetro de entrada es impar
// // La cabecera de la función tendrá el siguiente aspecto: function isEven(number)
function isEven(n) {
    if (n % 2 == 0) {
        return "El número es par";
    }
    else {
        return "El número es impar";
    }
}
console.log(isEven(4));
