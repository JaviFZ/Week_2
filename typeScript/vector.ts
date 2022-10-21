

class Vector {

    private elements : number[];
    public n : number;
    public k : number;


    constructor(n : number, k : number){
        this.elements;
        this.n = n;
        this.k = k;

        for (let i=0; i < n ;i++){   
            let elements =  Math.floor(Math.random() * k ;
            this.elements.push(elements);  
        } 
        
    }

    // // GETTERS Y SETTERS

    public setElements ( elements : number[]){
        this.elements = elements;
        return elements;
    }
    public getElements () : number[]{
        return this.elements;
    }

    // // METODOS

    print(){
        return Vector;
    }

    // add(v1:Vector) : Vector {
    //     return this.elements + v1;
    // }

    // subs(v1:Vector) : Vector {

    // }

    // mult(v1:Vector) : Vector {

    // }

    // multNumber(n : number) : Vector {

    // }
}      


let vector = new Vector(8, 10)