
class Person {

    constructor(altura, peso, yearOfBirth){      
        this.alura = altura;
        this.peso = peso;
        this.nombre = "Pepe";
        this.colorPelo = "Castaño";
        this.colorOjos = "verdes";
        this.yearOfBirth = yearOfBirth;
        this.hobbies = ["futbol", "baloncesto", "nadar"]
    }

    // // METODOS
    imc(){ 
        return this.peso / this.alura * this.alura ;
    }

    edad(){
        return  2022 - this.yearOfBirth;
    }

   

    printAll(){
        for (let p in this){
            console.log(p + "-" + this[p]);
        }
    }
    

    printHobbies() {
        return this.hobbies;
    }
}


let persona = new Person(180, 70, 1990);

// console.log(persona.printHobbies());

console.log(persona.printAll());




// // RETO 7

let pers1 = new Person(180, 70, 1990);
let pers2 = new Person(190, 80, 1986);
let pers3 = new Person(170, 60, 1997);
let pers4 = new Person(180, 100, 1990);

let agenda = [pers1, pers2, pers3, pers4];

class Contacts {
    
    constructor(){
        this.agenda = agenda;
    }

    printPersons(){
        return agenda;
    }
}


let contacs = new Contacts();

console.log(contacs);