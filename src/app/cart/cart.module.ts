import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [
    BrowserModule,
    SharedModule
    ],
  exports: [CartListComponent],
  providers: [],
})
export class CartModule { }
