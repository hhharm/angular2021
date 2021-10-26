import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { IsAdminGuard } from './core/guards/is-admin.guard';
import { IsCartEmptyGuard } from './core/guards/is-cart-empty.guard';
import { OrderComponent } from './orders/order/order.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProductComponent } from './products/components/product/product.component';
import { ProductImageResolver } from './products/resolvers/product-image.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products-list',
    pathMatch: 'full',
  },
  {
    path: 'product/:productID',
    component: ProductComponent,
    resolve: [ProductImageResolver],
  },
  { path: 'cart', component: CartListComponent },
  { path: 'products-list', component: ProductListComponent },
  { path: 'order', canActivate: [IsCartEmptyGuard], component: OrderComponent },
  {
    path: 'admin',
    canActivate: [IsAdminGuard],
    loadChildren: () =>
      import('./admin/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./error/error/error.module').then((m) => m.ErrorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
