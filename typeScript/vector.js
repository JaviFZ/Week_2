"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        var elements = [];
        for (var i = 0; i < n; i++) {
            elements.push(Math.floor(Math.random() * k));
        }
        switch (this.elements) {
            case elements:
                break;
        }
        this.elements = elements;
        this.n = n;
        this.k = k;
    }
    // // GETTERS Y SETTERS
    Vector.prototype.setElements = function (elements) {
        this.elements = elements;
        return elements;
    };
    Vector.prototype.getElements = function () {
        return this.elements;
    };
    // // METODOS
    Vector.prototype.print = function () {
        return this;
    };
    Vector.prototype.add = function (v1) {
        var vectorSumado = [];
        for (var i = 0; i < this.elements.length; i++) {
            // if (this.elements.length == v1.getElements.length){
            var result = this.elements[i] + v1.getElements()[i];
            vectorSumado.push(result);
            // }
        }
        this.elements = vectorSumado;
    };
    Vector.prototype.subs = function (v1) {
        var vectorRestado = [];
        for (var i = 0; i < this.elements.length; i++) {
            // if (this.elements.length == v1.getElements.length){
            var result = this.elements[i] - v1.getElements()[i];
            vectorRestado.push(result);
            // }
        }
        this.elements = vectorRestado;
    };
    Vector.prototype.mult = function (v1) {
        var vectorMulti = [];
        for (var i = 0; i < this.elements.length; i++) {
            // if (this.elements.length == v1.getElements.length){
            var result = this.elements[i] * v1.getElements()[i];
            vectorMulti.push(result);
            // }
        }
        this.elements = vectorMulti;
    };
    Vector.prototype.multNumber = function (n) {
        var vectorProd = [];
        for (var i = 0; i < this.elements.length; i++) {
            var result = this.elements[i] * n;
            vectorProd.push(result);
        }
        this.elements = vectorProd;
    };
    return Vector;
}());
exports.Vector = Vector;
// let vector = new Vector(8, 10)
