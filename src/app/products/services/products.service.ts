import { Injectable } from '@angular/core';
import { ProductCategories, ProductModel } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): ProductModel[] {
    return [
      { id: '1', name: 'White tea', price: 200, category: ProductCategories.White, isAvailable: true},
      { id: '2', name: 'Black tea', price: 100, category: ProductCategories.Black, isAvailable: true },
      { id: '3', name: 'Green tea', price: 150, category: ProductCategories.Green, isAvailable: false },
    ]
  }
}
