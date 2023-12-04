// Name: Justin Barlowe
// File: book-details-dialog.component.ts
// Description: Book details dialog component for the in-n-out books application.
// Date: 11/16/2023
// Angular version: 16.2.10

// Imports
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent {
  book!: IBook;

  // Constructor
  constructor(
    // Inject the dialog reference and the data
    private dialogRef: MatDialogRef<BookDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.book = data.book;
  }

}
