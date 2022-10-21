

import {Book} from "./book";

// let libro1 = new Book ("Batman", 145, "345346-CB33252", "Bob Kane", "Planeta");
// let libro2 = new Book ("Spiderman", 465, "345346-CB33252", "Stan Lee", "Santillana");
// let libro3 = new Book ("Elden Ring", 966, "235464-AN33252", "R. R. Martin", "From");

// let books = [libro1, libro2, libro3];



export class Library {
    private books : Book[];
    private address : string;
    private manager : string;

    constructor ( books : Book[], address : string, manager : string ){
        this.books = books;
        this.address = address;
        this.manager = manager;
    }

    // // GETTERS Y SETTERS

    public setAddress ( address : string){
        this.address = address;
        return address;
    }
    public getAddress () : string{
        return this.address;
    }

    public setManager ( manager : string){
        this.manager = manager;
        return manager;
    }
    public getManager () : string{
        return this.manager;
    }

    // // METODOS

    public toString(): string {
        let res: string = "";
        for (let book of this.books){
            res += book.toString()
        } 
        return res;

    }   


    public getNumberOfBooks () : number {
        return this.books.length;

    }

    public findByAuthor (author : string): Book[] {
        let rest : Book[] = []
        for (let i = 0; i < this.books.length; i++){
            if (this.books[i].getAuthor() == author){
                rest.push(this.books[i]);
            } 
        } return rest;
    } 
}


// let library = new Library (Books[], "address", "Javier");




