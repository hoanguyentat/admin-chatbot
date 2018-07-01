import { NgModule } from '@angular/core';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderManagementComponent } from './order-management.component';
import { OrderManagementRoutingModule } from './order-management-routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    OrderManagementRoutingModule,
    SharedModule
  ],
  declarations: [OrderListComponent, OrderDetailComponent, OrderManagementComponent]
})
export class OrderManagementModule { }
