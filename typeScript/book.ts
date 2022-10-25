

export class Book {

    private title : string;
    private nPages : number;
    private isbn : string;
    private author : string;
    private editorial : string;


    constructor(title : string, nPages : number, isbn : string, author : string, editorial : string){
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    // // METODOS
    public toString() : string {
       return "Title " + "- " + this.title + "\n" +
       "Number of pages " + "- " + this.nPages + "\n" +
       "ISBN " + "- " + this.isbn + "\n" +
       "Autor " + "- " + this.author + "\n" +
       "Editorial " + "- " + this.author;
    }


    // // getters y setters

    public setTitle ( title : string){
        this.title = title;
        return title;
    }
    public getTitle () : string{
        return this.title;
    }

    public setNPages ( nPages : number){
        this.nPages = nPages;
        return this.nPages;
    }
    public getNPages () : number{
        return this.nPages;
    }

    public setIsb ( isbn : string){
        this.isbn = isbn;
        return this.isbn;
    }
    public getIsbn () : string{
        return this.isbn;
    }

    public setAuthor ( author : string){
        this.author = author;
        return this.author;
    }
    public getAuthor () : string{
        return this.author;
    }

    public setEditorial ( editorial : string){
        this.editorial = editorial;
        return this.editorial;
    }
    public getEditorial () : string{
        return this.editorial;
    }






}

// let book = new Book("El Quijote", 1734, "12314-BC123144", "Miguel de Cervantes", "Santillana");

// console.log(book);

// book.printAll();
