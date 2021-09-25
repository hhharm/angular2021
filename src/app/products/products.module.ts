import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  exports:[
    ProductListComponent,
  ],
  providers: [],
})
export class ProductsModule { }
