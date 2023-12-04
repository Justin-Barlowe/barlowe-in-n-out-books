// Name: Justin Barlowe
// File: app-routing.module.ts
// Description: Routing module for the in-n-out books application.
// Date: 11/16/2023

// Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WishlistComponent } from './wishlist/wishlist.component';


// Define routes
const routes: Routes = [
  {
    path:'',
    component: BookListComponent
  },
  {
    path:'book-list',
    component: BookListComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'wishlist',
    component: WishlistComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
