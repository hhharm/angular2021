import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product!: ProductModel;
  @Output() add = new EventEmitter<ProductModel>();
  
  onAddToCart(): void {
    this.add.emit(this.product);
    console.log("Item has been added!");
  }
}
