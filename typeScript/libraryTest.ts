import {Book} from "./book.js";

import {Library} from "./library.js";

let libro1 = new Book ("Batman", 145, "345346-CB33252", "Bob Kane", "Planeta");
let libro2 = new Book ("Spiderman", 465, "345346-CB33252", "Stan Lee", "Santillana");
let libro3 = new Book ("Elden Ring", 966, "235464-AN33252", "R. R. Martin", "From");

let books = [libro1, libro2, libro3];



let library = new Library (books, "address", "Javier");

// console.log(library.findByAuthor("Stan Lee"));

console.log(library.getNumberOfBooks());

console.log(library.toString());

console.log(library.findByAuthor("Stan Lee"));



