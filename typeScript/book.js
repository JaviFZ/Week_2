"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    // // METODOS
    Book.prototype.toString = function () {
        return "Title " + "- " + this.title + "\n" +
            "Number of pages " + "- " + this.nPages + "\n" +
            "ISBN " + "- " + this.isbn + "\n" +
            "Autor " + "- " + this.author + "\n" +
            "Editorial " + "- " + this.author;
    };
    // // getters y setters
    Book.prototype.setTitle = function (title) {
        this.title = title;
        return title;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setNPages = function (nPages) {
        this.nPages = nPages;
        return this.nPages;
    };
    Book.prototype.getNPages = function () {
        return this.nPages;
    };
    Book.prototype.setIsb = function (isbn) {
        this.isbn = isbn;
        return this.isbn;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
        return this.author;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
        return this.editorial;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    return Book;
}());
exports.Book = Book;
// let book = new Book("El Quijote", 1734, "12314-BC123144", "Miguel de Cervantes", "Santillana");
// console.log(book);
// book.printAll();
