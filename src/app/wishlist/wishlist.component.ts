// Name: Justin Barlowe
// File: wishlist.component.ts
// Description: Component for the wishlist page.
// Date: 11/23/2023

import { Component } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

  // wishlistItems array of type IWishlistItem
  items: Array<IWishlistItem> = [];

  // updateItemsHandler() function
  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }
}
