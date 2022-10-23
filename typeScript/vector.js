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
    setElements(elements) {
        this.elements = elements;
        return elements;
    }
    getElements() {
        return this.elements;
    }
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
        let vectorSumado = [];
        let recogeElements = v1.getElements();
        for (let i = 0; i < this.elements.length; i++) {
            let result = this.elements[i] + recogeElements[i];
            vectorSumado.push(result);
        }
        let vector = new Vector(0, 0);
        vector.setElements(vectorSumado);
        return vector;
    }
    // // Realiza la resta de elements con v1:
    subs(v1) {
        let vectorRestado = [];
        for (let i = 0; i < this.elements.length; i++) {
            let result = this.elements[i] - v1.getElements()[i];
            vectorRestado.push(result);
        }
        let vector = new Vector(0, 0);
        vector.setElements(vectorRestado);
        return vector;
    }
    // // Realiza el producto de elements con v1:
    mult(v1) {
        let vectorMult = [];
        for (let i = 0; i < this.elements.length; i++) {
            let result = this.elements[i] * v1.getElements()[i];
            vectorMult.push(result);
        }
        let vector = new Vector(0, 0);
        vector.setElements(vectorMult);
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
    multNumber(n) {
        let vectorProd = [];
        for (let i = 0; i < this.elements.length; i++) {
            let result = this.elements[i] * n;
            vectorProd.push(result);
        }
        let vector = new Vector(0, 0);
        vector.setElements(vectorProd);
        return vector;
    }
}
// let vector = new Vector(8, 10)
