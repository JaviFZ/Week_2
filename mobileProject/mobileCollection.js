"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var mobile_1 = require("./mobile");
var mobile = new mobile_1.Mobile("Javi", "Apple", "IPhone", "Green", 1234);
var MobileCollection = /** @class */ (function () {
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        // this.totalPrice = totalPriceCalculation
    }
    // // GETTERS Y SETTERS
    MobileCollection.prototype.setMobiles = function (mobiles) {
        this.mobiles = mobiles;
        return mobiles;
    };
    MobileCollection.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileCollection.prototype.setTotalPrice = function (totalPrice) {
        this.totalPrice = totalPrice;
        return totalPrice;
    };
    MobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    // // METODOS
    MobileCollection.prototype.totalPriceCalculation = function () {
        var res = 0;
        for (var i = 0; i < MobileCollection.length; i++) {
            res += this.totalPrice;
        }
        return res;
    };
    MobileCollection.prototype.printCollection = function () {
        var res = "";
        for (var _i = 0, _a = this.mobiles; _i < _a.length; _i++) {
            var characts = _a[_i];
            res += characts.toString();
        }
        return res;
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
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
