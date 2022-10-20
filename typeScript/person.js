"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.setAddress = function (address) {
        this.address = address;
        return address;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.printName = function () {
        return this.name;
    };
    Person.prototype.yearOfBirth = function (año) {
        return año - this.age;
    };
    return Person;
}());
exports.Person = Person;
// let person = new Person ("Javi", 32, "Paz" );
// console.log(person.printName());
// console.log(person.yearOfBirth(2022));
