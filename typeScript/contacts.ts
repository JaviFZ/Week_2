import {Person} from "./person";

let person = new Person ("Javi", 32, "Paz" );

let people = [person, person, person];


export class Contacts {

    public people;
    
    constructor(){
        this.people = people;
    }

    public printCalendar() : void {
        for (let p in this) {
            console.log(this[p]);
        }
    }

}

let contacts = new Contacts();

// console.log(contacts);

contacts.printCalendar();


