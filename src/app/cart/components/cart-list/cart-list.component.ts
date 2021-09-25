import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductId } from 'src/app/products/models/product.model';
import { CartItemModel } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  items: CartItemModel[] = [];

  constructor(public cartService: CartService,
  private cdr: ChangeDetectorRef) {
  }
  ngOnInit(): void {
    this.refresh();
}

  trackById(_index: number, obj: CartItemModel): ProductId {
    return obj.id;
  }

  decrease(item: CartItemModel): void {
    this.cartService.decreaseItemCount(item);
  }

  increase(item: CartItemModel): void {
    this.cartService.increaseItemCount(item);
  }

  remove(item: CartItemModel): void {
    this.cartService.removeItem(item);
  }

  refresh(): void {
    this.items = [...this.cartService.getCartItems()];
    this.cdr.markForCheck();
  }
}
