export class Book {
    constructor(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    // // METODOS
    toString() {
        return "Title " + "- " + this.title + "\n" +
            "Number of pages " + "- " + this.nPages + "\n" +
            "ISBN " + "- " + this.isbn + "\n" +
            "Autor " + "- " + this.author + "\n" +
            "Editorial " + "- " + this.author;
    }
    // // getters y setters
    setTitle(title) {
        this.title = title;
        return title;
    }
    getTitle() {
        return this.title;
    }
    setNPages(nPages) {
        this.nPages = nPages;
        return this.nPages;
    }
    getNPages() {
        return this.nPages;
    }
    setIsb(isbn) {
        this.isbn = isbn;
        return this.isbn;
    }
    getIsbn() {
        return this.isbn;
    }
    setAuthor(author) {
        this.author = author;
        return this.author;
    }
    getAuthor() {
        return this.author;
    }
    setEditorial(editorial) {
        this.editorial = editorial;
        return this.editorial;
    }
    getEditorial() {
        return this.editorial;
    }
}
// let book = new Book("El Quijote", 1734, "12314-BC123144", "Miguel de Cervantes", "Santillana");
// console.log(book);
// book.printAll();
