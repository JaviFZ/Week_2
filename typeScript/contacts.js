"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
var person_1 = require("./person");
var person = new person_1.Person("Javi", 32, "Paz");
var people = [person, person, person];
var Contacts = /** @class */ (function () {
    function Contacts(people) {
        this.people = people;
    }
    // // METODO
    Contacts.prototype.printCalendar = function () {
        for (var person_2 in this.people) {
            console.log(person_2);
        }
    };
    return Contacts;
}());
exports.Contacts = Contacts;
var contacts = new Contacts(people);
console.log(contacts);
contacts.printCalendar();
