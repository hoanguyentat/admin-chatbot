import { NgModule } from '@angular/core';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderManagementComponent } from './order-management.component';
import { SharedModule } from '../../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { OrderAddComponent } from './order-add/order-add.component';
import { OrderEditComponent } from './order-edit/order-edit.component';

const routes: Routes = [
  {path: '', component: OrderManagementComponent},
  {path: 'add', component: OrderAddComponent},
  {path: 'detail/:id', component: OrderDetailComponent}, 
  {path: 'edit/:id', component: OrderEditComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderListComponent, OrderDetailComponent, OrderManagementComponent, OrderAddComponent, OrderEditComponent]
})
export class OrderManagementModule { }
