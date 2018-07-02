import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductManagementComponent } from './product-management.component';
import { SharedModule } from '../../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [{
  path: '',
  component: ProductManagementComponent,
  children: [
    {
      path: 'list', component: ProductListComponent
    },     {
      path: '', redirectTo: 'list'
    }, {
      path: 'detail/:id', component: ProductDetailComponent
    }
  ]
}]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(route)
  ],
  declarations: [ProductListComponent, ProductDetailComponent, ProductManagementComponent]
})
export class ProductManagementModule { }
