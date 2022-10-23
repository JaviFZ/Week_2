// let libro1 = new Book ("Batman", 145, "345346-CB33252", "Bob Kane", "Planeta");
// let libro2 = new Book ("Spiderman", 465, "345346-CB33252", "Stan Lee", "Santillana");
// let libro3 = new Book ("Elden Ring", 966, "235464-AN33252", "R. R. Martin", "From");
// let books = [libro1, libro2, libro3];
export class Library {
    constructor(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    // // GETTERS Y SETTERS
    setAddress(address) {
        this.address = address;
        return address;
    }
    getAddress() {
        return this.address;
    }
    setManager(manager) {
        this.manager = manager;
        return manager;
    }
    getManager() {
        return this.manager;
    }
    // // METODOS
    toString() {
        let res = "";
        for (let book of this.books) {
            res += book.toString();
        }
        return res;
    }
    getNumberOfBooks() {
        return this.books.length;
    }
    findByAuthor(author) {
        let rest = [];
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() == author) {
                rest.push(this.books[i]);
            }
        }
        return rest;
    }
}
// let library = new Library (Books[], "address", "Javier");
