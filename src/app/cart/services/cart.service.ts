import { Injectable } from '@angular/core';
import { ProductCategories } from 'src/app/products/models/product.model';
import { CartItemModel } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  getCartItems(): CartItemModel[] {
    return [
      { id: '1', count: 1, name: 'White tea', price: 200, category: ProductCategories.White, isAvailable: true},
      { id: '2', count: 3, name: 'Black tea', price: 100, category: ProductCategories.Black, isAvailable: true },
    ]
  }
}
