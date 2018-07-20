import { NgModule } from '@angular/core';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderManagementComponent } from './order-management.component';
import { SharedModule } from '../../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { OrderOverviewComponent } from './order-overview/order-overview.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { ProductListComponent } from './order-form/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: OrderManagementComponent },
  { path: 'add', component: OrderFormComponent },
  { path: 'edit/:id', component: OrderFormComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderListComponent, OrderManagementComponent, OrderOverviewComponent, OrderFormComponent, ProductListComponent]
})
export class OrderManagementModule { }
