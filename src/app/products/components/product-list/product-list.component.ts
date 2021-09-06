import { Component } from '@angular/core';
import { ProductModel, ProductId } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  constructor(public products: ProductsService) { }

  trackById(_index: number, obj: ProductModel): ProductId {
    return obj.id;
  }
}
