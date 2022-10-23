export class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    setAddress(address) {
        this.address = address;
        return address;
    }
    getAddress() {
        return this.address;
    }
    printName() {
        return this.name;
    }
    yearOfBirth(año) {
        return año - this.age;
    }
}
// let person = new Person ("Javi", 32, "Paz" );
// console.log(person.printName());
// console.log(person.yearOfBirth(2022));
