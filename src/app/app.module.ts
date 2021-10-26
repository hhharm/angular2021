import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { CoreModule } from './core/core.module';
import { FirstComponent } from './first/first.component';
import { ProductsModule } from './products/products.module';
import { ForbiddenComponent } from './error/forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ForbiddenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    CartModule
  ],
  providers: [CoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
