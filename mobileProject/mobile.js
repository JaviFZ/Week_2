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
    return Mobile;
}());
exports.Mobile = Mobile;
