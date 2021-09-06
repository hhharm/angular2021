import { Component } from '@angular/core';
import { ProductId } from 'src/app/products/models/product.model';
import { CartItemModel } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {

  constructor(public cartService: CartService) {
  }

  trackById(_index: number, obj: CartItemModel): ProductId {
    return obj.id;
  }

}
