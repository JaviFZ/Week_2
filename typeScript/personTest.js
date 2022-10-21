"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var person = new person_1.Person("Javi", 32, "Paz");
console.log(person.printName());
console.log(person.yearOfBirth(2022));
console.log(person.setAddress("Calle"));
console.log(person.getAddress());
