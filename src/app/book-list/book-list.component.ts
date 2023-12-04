// Name: Justin Barlowe
// File: book-list.component.ts
// Description: Book list component for the in-n-out books application.
// Date: 11/16/2023
// Angular version: 16.2.10

// Imports
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

// Component
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

// Book list component
export class BookListComponent {

  // Books array
  books: IBook[] = [];

  // Undefined had to be added to the book variable as it was throwing an error.
  book: IBook | null | undefined;

  // Constructor
  constructor(private booksService: BooksService, private dialog: MatDialog) {

    // Get books
    this.booksService.getBooks().subscribe((res: any) => {
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            // Map through the authors array and return the name, had to specify the author type as it was throwing an error.
            authors = res[key].details.authors.map(function(author: { name: string; }) {
              return author.name;
            })
          }

          // Push to books array with the following properties
          this.books.push({
            isbn: res[key].details.isbn_13,
            title: res[key].details.title,
            description: res[key].details.description ? res[key].details.subtitle : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors
          })
        }
      }
    });
  }

  // Event prevent default added as the dialog wasn't opening, this fixed it, may be due to angular version.
  showBookDetails(event: Event, isbn: string) {
    event.preventDefault();
    this.book = this.books.find(book => book.isbn === isbn);
    this.dialog.open(BookDetailsDialogComponent, {
      data: { book: this.book }
  });
}
}
