import {Mobile} from "./mobile"

let mobile = new Mobile("Javi", "Apple", "IPhone", "Green", 1234);


export class MobileCollection {
    private mobiles : Mobile[];
    private totalPrice : number;

    constructor(mobiles : Mobile[]){
        this.mobiles = mobiles;
        // this.totalPrice = totalPriceCalculation
    }

    // // GETTERS Y SETTERS

    public setMobiles (mobiles : Mobile[]){
        this.mobiles = mobiles;
        return mobiles;
    }
    public getMobiles (){
        return this.mobiles;
    }


    public setTotalPrice (totalPrice : number){
        this.totalPrice = totalPrice;
        return totalPrice;
    }
    public getTotalPrice (){
        return this.totalPrice;
    }


    // // METODOS


        private totalPriceCalculation(){
            let res: number = 0
        for (let i= 0; i < MobileCollection.length; i++){
            res += this.totalPrice
        
           }    return res;

        }

        public printCollection(): string {
        let res: string = "";
        for (let characts of this.mobiles){
            res += characts.toString()
        } 
        return res;

    } 





}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Reto 1: Creación de la Clase con Typescript
// 1. Trabajar en la rama repaso2 dentro de la carpeta creada en el reto anterior crear el fichero mobileCollection.ts
// 2. Dicho fichero debe contener la clase MobileCollection con los siguientes atributos privados:
// • mobiles: Mobile[]
// • totalPrice: number
// 3. El constructor debe tener como parámetro de entrada el array de objetos de la clase Mobile.
// 4. Crear los métodos setters y getters para todos los atributos de la clase.
// 5. En otro fichero denominado mobileCollectionTest.ts importar la clase MobileCollection.
// 6. En dicho fichero crear 4 objetos de la clase Mobile y un array que los contenga.
// 7. Crear un objeto myCollection de la clase MobileCollection, asignarle el array que habéis
// creado previamente y comprobar todos sus métodos.
// 8. Subir los cambios a GitHub.


// Reto 2: Añadir un Método Privado
// 1. Crear un método privado denominado totalPriceCalculation sin parámetros de entrada,
// que te calcule el precio total de la colección.
// NOTA: Debe realizar la suma de los precios de todos los objetos almacenados en el
// atributo mobiles.
// 2. En el constructor llamar totalPriceCalculation y guardarlo en su atributo correspondiente.
// 3. Probar de nuevo el método getPrice de la clase en el fichero mobileCollectionTest.ts
// 4. Subir los cambios a GitHub.


// Reto 3: Añadir un Método Público
// 1. Crear un nuevo método denominado printCollection que recorra todos los objetos del
// atributo mobile y los muestre por consola de la siguiente manera :
// This is all my mobiles:
// The characteristics of the mobile name are:
// • Name: name
// • Trademark: tradeMark
// • model: model
// • Color: color
// • Price: price
// The characteristics of the mobile name are:
// • Name: name
// • Trademark: tradeMark
// • model: model
// • Color: color
// • Price: price
// ......
// Price overall: totalPrice“
// 2. Probar el nuevo método printCollection de la clase en el fichero mobileCollectionTest.ts
// 3. Subir los cambios a GitHub. Y hacer merge con la rama principal.