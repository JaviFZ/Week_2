import {Person} from "./person";

let person = new Person ("Javi", 32, "Paz" );

let people = [person, person, person];


export class Contacts {

    public people : Person[]
    
    constructor(people : Person[]){
        this.people = people;
    }

    // // METODO

    public printCalendar() : void {
        for (let person in this.people) {
            console.log(person);  
        }  
    }
}

let contacts = new Contacts(people);

console.log(contacts);

contacts.printCalendar();


