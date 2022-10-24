

export class Vector {

    private elements : number[] = [];
    public n : number;
    public k : number;


    constructor(n : number, k : number){
        // let elements : number[] = [];
        for (let i=0; i < n ;i++){   
            this.elements.push(Math.floor(Math.random() * k));  
        } 
      
        this.n = n;
        this.k = k;

        
    }

    // // GETTERS Y SETTERS

    // public setElements ( elements : number[]){
    //     this.elements = elements;
    //     return elements;
    // }
    // public getElements () : number[]{
    //     return this.elements;
    // // }

    // // METODOS

    // // imprimir por consola el vector:

    public print(): void{
        console.log(this)
    }


    // // realizar la suma de elements con v1:

    // public add(v1:Vector) : Vector {
    //     let vectorSumado : number[] = [];
    //     for (let i = 0; i < this.elements.length; i++){
    //         // if (this.elements.length == v1.getElements.length){
    //         let result = this.elements[i] + v1.getElements()[i];
    //         vectorSumado.push(result);
    //         // }
    //     }
    //     return new Vector(0,0);
    // }

    public add(v1:Vector) : Vector {
        let vector : Vector = new Vector(0,0);
        for (let i = 0; i < this.elements.length; i++){
            vector.elements.push(this.elements[i] + v1.elements[i]);
        }
        return vector;
    }




// // Realiza la resta de elements con v1:

    public subs(v1:Vector) : Vector {
        let vectorRestado : number[] = [];
        for (let i = 0; i < this.elements.length; i++){
            let result = this.elements[i] - v1.getElements()[i];
            vectorRestado.push(result);
        }
        let vector = new Vector(0,0);
        vector.setElements(vectorRestado)
        return vector;
    }


// // Realiza el producto de elements con v1:

    public mult(v1:Vector) : Vector {
        let vectorMult : number[] = [];
        for (let i = 0; i < this.elements.length; i++){
            let result = this.elements[i] *  v1.getElements()[i];
            vectorMult.push(result);
            
        }
        let vector = new Vector(0,0);
        vector.setElements(vectorMult)
        return vector;
    }

    // public multa(v1:Vector) : void {
    //     let vectorMulti : number[] = [];
    //     for (let i = 0; i < this.elements.length; i++){
    //         // if (this.elements.length == v1.getElements.length){
    //         let result = this.elements[i] * v1.getElements()[i];
    //         vectorMulti.push(result);
    //         // }
    //     }
    //     this.elements = vectorMulti;
    // }




    // // Realiza el producto entre elements y el número n:

    public multNumber(n : number) : Vector {
        let vectorProd : number[] = [];
        for (let i = 0; i < this.elements.length; i++){
            let result = this.elements[i] * n;
            vectorProd.push(result);
        }
        let vector = new Vector(0,0)
        vector.setElements(vectorProd)
        return vector
    }
}      


// let vector = new Vector(8, 10)