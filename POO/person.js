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

  

    printHobbies(){
        return this.hobbies;
    }
}


module.exports = {Person}


// printAll(){
//     for(clases of this){
//         return this[i] + clases;
//     }
// }