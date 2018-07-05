import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopManagementComponent } from './shop-management.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: ShopManagementComponent,
  children: [{
      path: 'user-management',
      loadChildren: './user-management/user-management.module#UserManagementModule',
  }, {
      path: 'order-management',
      loadChildren: './order-management/order-management.module#OrderManagementModule',
  }, {
      path: 'product-management',
      loadChildren: './product-management/product-management.module#ProductManagementModule',
  }]
}];

@NgModule({
  imports: [
    SharedModule,
    Ng2SmartTableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShopManagementComponent]
})
export class ShopManagementModule { }
