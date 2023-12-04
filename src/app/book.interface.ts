// Name: Justin Barlowe
// File:  book.interface.ts
// Description: Interface for book object
// Date: 11/23/2023
// Angular version: 16.2.10

export interface IBook {
    isbn: string;
    title: string;
    description: string;
    numOfPages: number;
    authors: Array<string>;
}
