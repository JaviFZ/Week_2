
 export class Person {

    public name: string;
    public age: number;
    private address :string;

    constructor(name: string, age: number, address:string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    setAddress ( address: string){
        this.address = address;
        return address;
    }

    getAddress ():string{
        return this.address;
    }

    public printName() : string {
        return this.name;
    }

    public yearOfBirth(año : number) : number {
      return año - this.age;  
    }

    


}

// let person = new Person ("Javi", 32, "Paz" );



// console.log(person.printName());

// console.log(person.yearOfBirth(2022));

