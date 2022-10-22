import {Contacts} from "./Contacts";
import {Person} from "./person";


let person = new Person ("Javi", 32, "Paz" );
let people = [person, person, person];

let contacts = new Contacts();


// console.log(contacts);

contacts.printCalendar();