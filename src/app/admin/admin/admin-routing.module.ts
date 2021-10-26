import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAdminSavedGuard } from '../guards/is-admin-saved.guard';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: AdminComponent },
  { path: 'product/add', component: AdminComponent },
  {
    path: 'product/edit/:productId',
    canDeactivate: [IsAdminSavedGuard],
    component: AdminComponent,
  },
  { path: 'orders', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
