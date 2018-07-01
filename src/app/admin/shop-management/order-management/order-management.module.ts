import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderManagementComponent } from './order-management.component';
import { OrderManagementRoutingModule } from './order-management-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OrderManagementRoutingModule
  ],
  declarations: [OrderListComponent, OrderDetailComponent, OrderManagementComponent]
})
export class OrderManagementModule { }
