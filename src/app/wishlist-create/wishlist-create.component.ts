// Name: Justin Barlowe
// File: wishlist-create.component.ts
// Description: Component for the wishlist-create page.
// Date: 11/23/2023


// Import statements
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
export class WishlistCreateComponent implements OnInit {

  // @Output() addItemEmitter
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  // Item variable of type IWishlistItem
  item!: IWishlistItem

  // constructor() function
  constructor() {
    this.item = {} as IWishlistItem;
  }

  // ngOnInit() function void
  ngOnInit(): void {
  }
  // addItem() function
  addItem() {
    console.log('Inside wishlist-create.component.ts (addItem())');
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })
  }

}
