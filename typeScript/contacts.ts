import {Person} from "./person.js";

let person1 = new Person ("Javi", 32, "Paz" );
let person2 = new Person ("Ana", 30, "Her" );
let person3 = new Person ("Paco", 15, "Gran Via" );

let people = [person1, person2, person3];


export class Contacts {
    
    public people : Person[]
    
    constructor(){
        this.people = people;
    }

    // // METODO

    public printCalendar() : void {
        // for (let i=0; i<people.length; i++) {
            console.log(this.people);  
        // }  
    }
}

// let contacts = new Contacts(people);

// console.log(contacts);

// contacts.printCalendar();


