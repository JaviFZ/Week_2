"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
// let libro1 = new Book ("Batman", 145, "345346-CB33252", "Bob Kane", "Planeta");
// let libro2 = new Book ("Spiderman", 465, "345346-CB33252", "Stan Lee", "Santillana");
// let libro3 = new Book ("Elden Ring", 966, "235464-AN33252", "R. R. Martin", "From");
// let books = [libro1, libro2, libro3];
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    // // GETTERS Y SETTERS
    Library.prototype.setAddress = function (address) {
        this.address = address;
        return address;
    };
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
        return manager;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    // // METODOS
    Library.prototype.toString = function () {
        var res = "";
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            res += book.toString();
        }
        return res;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var rest = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() == author) {
                rest.push(this.books[i]);
            }
        }
        return rest;
    };
    return Library;
}());
exports.Library = Library;
// let library = new Library (Books[], "address", "Javier");
