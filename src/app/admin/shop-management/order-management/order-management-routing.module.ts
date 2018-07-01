import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrderManagementComponent } from "./order-management.component";
import { OrderListComponent } from "./order-list/order-list.component";
import { OrderDetailComponent } from "./order-detail/order-detail.component";

const route: Routes = [{
    path: '',
    component: OrderManagementComponent,
    children: [{
        path: '', redirectTo: 'list',
    }, {
        path: 'list', component: OrderListComponent,
    }, {
        path: 'detail/:id', component: OrderDetailComponent
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class OrderManagementRoutingModule { }