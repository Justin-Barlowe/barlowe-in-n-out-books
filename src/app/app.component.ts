// Name: Justin Barlowe
// File: app.component.ts
// Description: Component for the application.
// Date: 12/4/2023

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  assignment: string
  title: string

  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books'
    this.title = 'In-N-Out-Books'
  }

}
