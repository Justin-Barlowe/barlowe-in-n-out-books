// Name: Justin Barlowe
// File: books.service.ts
// Description: Service file for the in-n-out books application.
// Date: 12/4/2023
// Angular version: 16.2.10


// Imports
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


// Injectable
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  // ISBNs
  isbns: string[] = ['0345339681', '0261103571', '9780593099322', '9780261102361', '9780261102378', '9780590302715', '9780316769532', '9780743273565', '9780590405959'];

  // Constructor for the books service.
  constructor(private http: HttpClient) {

  }


  // Get books function to get books from the API.
  getBooks() {
    let params = new HttpParams();
    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');

    return this.http.get('https://openlibrary.org/api/books', { params });
  }
}
