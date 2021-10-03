import { ChangeDetectorRef, Component } from '@angular/core';
import { ProductId } from 'src/app/products/models/product.model';
import { CartItemModel } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

interface SortOptions {
  key: "name" | "price" | "count";
  isAsc: boolean;
}

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {

  items: CartItemModel[] = [];

  constructor(public cartService: CartService,
    private cdr: ChangeDetectorRef) {
  }

  trackById(_index: number, obj: CartItemModel): ProductId {
    return obj.id;
  }

  decrease(item: CartItemModel): void {
    this.cartService.decreaseQuantity(item);
  }

  increase(item: CartItemModel): void {
    this.cartService.increaseQuantity(item);
  }

  remove(item: CartItemModel): void {
    this.cartService.removeProduct(item);
  }

  refresh(): void {
    // this.items = [...this.cartService.getProducts()];
    this.cdr.markForCheck();
  }

  onCheckboxChange(): void {
    this.cdr.markForCheck();
  }
}
