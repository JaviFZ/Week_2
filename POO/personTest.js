let {Person} = require ("./Person")




let persona = new Person(180, 70, 1990);

console.log(persona);

console.log(persona.imc());

console.log(persona.edad());

console.log(persona.printHobbies());

console.log(persona.printAll());
