import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductCardComponent],
  imports: [BrowserModule, SharedModule, RouterModule],
  exports: [ProductListComponent],
  providers: [],
})
export class ProductsModule {}
