import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManagementComponent } from './product-management.component';
import { SharedModule } from '../../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';

const route: Routes = [{
  path: '',
  component: ProductManagementComponent,
}];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(route)
  ],
  declarations: [ProductListComponent, ProductManagementComponent, ProductFormComponent, ProductFilterComponent]
})
export class ProductManagementModule { }
