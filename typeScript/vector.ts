

export class Vector {

    private elements : number[];
    public n : number;
    public k : number;


    constructor(n : number, k : number){
        let elements : number[] = [];
        for (let i=0; i < n ;i++){   
            elements.push(Math.floor(Math.random() * k));  
        } 
        switch(this.elements){
            case  elements:
            break;

        }
        this.elements = elements;
        this.n = n;
        this.k = k;

        
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

    public print(): Vector{
        return this
    }



    public add(v1:Vector) : void {
        let vectorSumado : number[] = [];
        for (let i = 0; i < this.elements.length; i++){
            // if (this.elements.length == v1.getElements.length){
            let result = this.elements[i] + v1.getElements()[i];
            vectorSumado.push(result);
            // }
        }
        this.elements = vectorSumado;
    }



    public subs(v1:Vector) : void {
        let vectorRestado : number[] = [];
        for (let i = 0; i < this.elements.length; i++){
            // if (this.elements.length == v1.getElements.length){
            let result = this.elements[i] - v1.getElements()[i];
            vectorRestado.push(result);
            // }
        }
        this.elements = vectorRestado;
    }



    public mult(v1:Vector) : void {
        let vectorMulti : number[] = [];
        for (let i = 0; i < this.elements.length; i++){
            // if (this.elements.length == v1.getElements.length){
            let result = this.elements[i] * v1.getElements()[i];
            vectorMulti.push(result);
            // }
        }
        this.elements = vectorMulti;
    }




    public multNumber(n : number) : void {
        let vectorProd : number[] = [];
        for (let i = 0; i < this.elements.length; i++){
            let result = this.elements[i] * n;
            vectorProd.push(result);
        }
        this.elements = vectorProd;
    }
}      


// let vector = new Vector(8, 10)