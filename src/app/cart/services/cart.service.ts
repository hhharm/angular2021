import { Injectable } from '@angular/core';
import { ProductCategories, ProductModel } from 'src/app/products/models/product.model';
import { CartItemModel } from '../models/cart-item.model';

const defaultCartItems: Map<string, CartItemModel> = new Map([[
  '1', { id: '1', count: 1, sum: 200, name: 'White tea', price: 200, category: ProductCategories.White, isAvailable: true }],
  ['2', { id: '2', count: 3, sum: 300, name: 'Black tea', price: 100, category: ProductCategories.Black, isAvailable: true },
]]);

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items = defaultCartItems;
  
  getCartItems(): CartItemModel[] {
    return [...this.items.values()];
  }

  addItemToCart(item: ProductModel): void {
    const cartItem = this.items.has(item.id) ? this.items.get(item.id) : null;
    const count = (cartItem?.count ?? 0) + 1;
    this.items.set(item.id, {
      ...item,
      count,
      sum: count * item.price
    });
  }

  increaseItemCount(item: CartItemModel): void {
    this.items.set(item.id, { ...item, count: item.count + 1 });
  }

  decreaseItemCount(item: CartItemModel): void {
    if (item.count > 1) {
      this.items.set(item.id, { ...item, count: item.count - 1 });
    } else {
      this.removeItem(item);
    }    
  }

  removeItem(item: CartItemModel): void {
    this.items.delete(item.id);
  }
}
