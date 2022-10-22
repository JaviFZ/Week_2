"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, trademark, model, color, price) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    // // GETTERS Y SETTERS
    Mobile.prototype.setName = function (name) {
        this.name = name;
        return name;
    };
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.setTrademark = function (trademark) {
        this.trademark = trademark;
        return trademark;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.setModel = function (model) {
        this.model = model;
        return model;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setColor = function (color) {
        this.color = color;
        return color;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.setPrice = function (price) {
        this.price = price;
        return price;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    // // METODOS
    Mobile.prototype.characString = function () {
        return "The characteristics of the mobile " + this.name + " are" + "\n" +
            "Name: " + this.name + "\n" +
            "Trademark: " + this.trademark + "\n" +
            "Model: " + this.model + "\n" +
            "Color: " + this.model + "\n" +
            "Price: " + this.price;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
//////////////////////////////////////////////////////////////////////////////////////////////////
// Reto 1: Creación de la Clase con Typescript
// 1. Trabajar en la rama repaso2, crear una nueva carpeta denominada mobileProject y
// crear el fichero mobile.ts. Dicho fichero debe contener la clase Mobile con los siguientes
// atributos privados:
// • name: string
// • trademark: string
// • model: string
// • color: string
// • price: number
// 3. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.
// 4. Crear los métodos setters y getters para todos los atributos de la clase.
// 5. En otro fichero denominado mobileTest.ts importar la clase Mobile.
// 6. Crear un nuevo objeto myMobile de la clase Mobile, en el fichero mobileTest.ts, y probar
// todos sus métodos.
// 7. Subir los cambios a GitHub.
// Reto 2: Añadir Nuevo Método
// 1. Crear un nuevo método que imprima por consola todas las características de la clase
// siguiendo el siguiente patrón:
// “The characteristics of the mobile name are:”
// • Name: name
// • Trademark: tradeMark
// • model: model
// • Color: color
// • Price: price
// 2. Crear tres objetos de la clase Mobile en el fichero mobileTest.ts.
// 3. Crear un array denominado myMobiles en el fichero mobileTest.ts que tendrá los tres
// objetos creados en el punto 2.
// 4. Mostrar los datos de myMobiles invocando al método del punto 1.
// 5. Subir los cambios a GitHub. Y hacer merge con la rama principal.
