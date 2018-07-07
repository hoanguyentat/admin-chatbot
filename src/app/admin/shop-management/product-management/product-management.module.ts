import { NgModule } from '@angular/core';
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
      path: '', component: ProductListComponent
    }, {
      path: ':id', component: ProductDetailComponent
    }
  ]
}];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(route)
  ],
  declarations: [ProductListComponent, ProductDetailComponent, ProductManagementComponent]
})
export class ProductManagementModule { }
