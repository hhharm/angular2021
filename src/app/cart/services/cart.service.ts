import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  ProductCategories,
  ProductModel,
} from 'src/app/products/models/product.model';
import { CartItemModel } from '../models/cart-item.model';

const defaultCartItems: Map<string, CartItemModel> = new Map([
  [
    '1',
    {
      id: '1',
      count: 1,
      sum: 200,
      name: 'White tea',
      price: 200,
      category: ProductCategories.White,
      isAvailable: true,
    },
  ],
  [
    '2',
    {
      id: '2',
      count: 3,
      sum: 300,
      name: 'Black tea',
      price: 100,
      category: ProductCategories.Black,
      isAvailable: true,
    },
  ],
]);

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts = defaultCartItems;
  private cartProducts$ = new BehaviorSubject<CartItemModel[]>([
    ...this.cartProducts.values(),
  ]);
  private totalQuantity: number = this.getTotalQuantity();
  private totalSum: number = this.getTotalSum();

  getProducts(): Observable<CartItemModel[]> {
    return this.cartProducts$.asObservable();
  }

  addProduct(item: ProductModel): void {
    const cartItem = this.cartProducts.has(item.id)
      ? this.cartProducts.get(item.id)
      : null;
    const count = (cartItem?.count ?? 0) + 1;
    this.cartProducts.set(item.id, {
      ...item,
      count,
      sum: count * item.price,
    });
    this.updateCartData();
  }

  increaseQuantity(item: CartItemModel): void {
    this.changeQuantity(item, 1);
    this.updateCartData();
  }

  decreaseQuantity(item: CartItemModel): void {
    if (item.count > 1) {
      this.changeQuantity(item, -1);
    } else {
      this.removeProduct(item);
    }
    this.updateCartData();
  }

  removeProduct(item: CartItemModel): void {
    this.cartProducts.delete(item.id);
    this.updateCartData();
  }

  removeAllProducts(): void {
    this.cartProducts = new Map();
    this.updateCartData();
  }

  private changeQuantity(item: CartItemModel, change: number): void {
    this.cartProducts.set(item.id, { ...item, count: item.count + change });
  }

  private updateCartData(): void {
    this.cartProducts$.next([...this.cartProducts.values()]);
    this.totalQuantity = this.getTotalQuantity();
    this.totalSum = this.getTotalSum();
  }

  public isEmptyCart(): Observable<boolean> {
    return this.cartProducts$.pipe(map((cart) => cart.length === 0));
  }

  private getTotalQuantity(): number {
    return Array.from(this.cartProducts.values()).reduce(
      (acc, item) => acc + item.count,
      0
    );
  }

  private getTotalSum(): number {
    return Array.from(this.cartProducts.values()).reduce(
      (acc, item) => acc + item.count * item.price,
      0
    );
  }
}
