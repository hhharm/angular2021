import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [BrowserModule, SharedModule, RouterModule],
  exports: [CartListComponent],
  providers: [],
})
export class CartModule {}
