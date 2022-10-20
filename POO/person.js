


class Person {
    constructor(altura, peso, yearOfBirth){      
        this.alura = altura;
        this.peso = peso;
        this.colorPelo = "Castaño";
        this.colorOjos = "verdes";
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
        for (let p in this){
            console.log(p + "-" + this[p]);
        }
    }

    printHobbies(){
        return this.hobbies;
    }
}


module.exports = {Person}


