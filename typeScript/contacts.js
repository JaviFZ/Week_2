"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
var person_1 = require("./person");
var person = new person_1.Person("Javi", 32, "Paz");
var agenda = [person, person, person];
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.agenda = agenda;
    }
    Contacts.prototype.printCalendar = function () {
        for (var p in this) {
            console.log(this[p]);
        }
    };
    return Contacts;
}());
exports.Contacts = Contacts;
var contacts = new Contacts();
// console.log(contacts);
contacts.printCalendar();
