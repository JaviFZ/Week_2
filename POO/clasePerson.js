
class Person {
    constructor(altura, peso, yearOfBirth){      
        this.alura = altura;
        this.peso = peso;
        this.colorPelo;
        this.colorOjos;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = ["futbol", "baloncesto", "nadar"];
    }

    // // METODOS
    imc(){ 
        return this.peso / this.alura * this.alura ;
    }

    edad(){
        return  2022 - this.yearOfBirth;
    }

    printAll(){
        for(clases of this){
            return this[i] + clases;
        }
    }

    printHobbies(){
        return this.hobbies;
    }
}


let persona = new Person(180, 70, 1990);

console.log(persona);

console.log(persona.printAll());

