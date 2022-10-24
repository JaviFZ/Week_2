export class Vector {
    constructor(n, k) {
        this.elements = [];
        // let elements : number[] = [];
        for (let i = 0; i < n; i++) {
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
    print() {
        console.log(this);
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
    add(v1) {
        let vector = new Vector(0, 0);
        for (let i = 0; i < this.elements.length; i++) {
            vector.elements.push(this.elements[i] + v1.elements[i]);
        }
        return vector;
    }
    // // Realiza la resta de elements con v1:
    subs(v1) {
        let vector = new Vector(0, 0);
        for (let i = 0; i < this.elements.length; i++) {
            vector.elements.push(this.elements[i] - v1.elements[i]);
        }
        return vector;
    }
    // // Realiza el producto de elements con v1:
    mult(v1) {
        let vector = new Vector(0, 0);
        for (let i = 0; i < this.elements.length; i++) {
            vector.elements.push(this.elements[i] * v1.elements[i]);
        }
        return vector;
    }
    // // Realiza el producto entre elements y el número n:
    multNumber(n) {
        let vector = new Vector(0, 0);
        for (let i = 0; i < this.elements.length; i++) {
            vector.elements.push(this.elements[i] * n);
        }
        return vector;
    }
}
// let vector = new Vector(8, 10)
