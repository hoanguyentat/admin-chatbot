import { NgModule } from '@angular/core';
import { ShopManagementComponent } from './shop-management.component';
import { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [ShopManagementComponent]
})
export class ShopManagementModule { }
