import { Component } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductModel, ProductId } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  constructor(public products: ProductsService, public cart: CartService) { }

  trackById(_index: number, obj: ProductModel): ProductId {
    return obj.id;
  }

  addToCart(item: ProductModel): void {
    this.cart.addProduct(item);
  }
}
