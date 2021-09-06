import { Component } from '@angular/core';
import { ProductCategories, ProductId } from '../products/models/product.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  name: string = "Cool name";
  description: string = "Best description";
  price: number = 100;
  category: ProductCategories = ProductCategories.White;
  isAvailable: boolean = false;
  ids: ProductId[] = ['1', '2', '3'];
}
