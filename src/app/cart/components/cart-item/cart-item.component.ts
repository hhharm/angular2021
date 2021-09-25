import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItemModel } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  @Input() item!: CartItemModel;
  @Output() decrease = new EventEmitter<void>();
  @Output() increase = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();

  onMinus(): void {
    this.decrease.emit();
  }

  onPlus(): void {
    this.increase.emit();
  }

  onRemove(): void {
    this.remove.emit();
  }
}
