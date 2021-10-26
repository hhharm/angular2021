import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ProductCategories, ProductModel } from '../models/product.model';

const defaultValue = [
  {
    id: '1',
    name: 'White tea',
    price: 200,
    category: ProductCategories.White,
    isAvailable: true,
  },
  {
    id: '2',
    name: 'Black tea',
    price: 100,
    category: ProductCategories.Black,
    isAvailable: true,
  },
  {
    id: '3',
    name: 'Green tea',
    price: 150,
    category: ProductCategories.Green,
    isAvailable: false,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productList$ = new BehaviorSubject<ProductModel[]>(defaultValue);

  getProducts(): Observable<ProductModel[]> {
    return this.productList$.asObservable();
  }

  getProduct(id: string): Observable<ProductModel | undefined> {
    return of(this.productList$.value.find((p) => p.id === id));
  }
}
