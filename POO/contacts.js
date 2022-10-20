let {Person} = require ("./Person")


let pers1 = new Person(180, 70, 1990);
let pers2 = new Person(190, 80, 1986);
let pers3 = new Person(170, 60, 1997);
let pers4 = new Person(180, 100, 1990);

let agenda = [pers1, pers2, pers3, pers4];


class Contacts {
    
    constructor(){
        this.agenda = agenda;
    }

    printPersons(){
        return agenda;
    }
}


module.exports = {Contacts}