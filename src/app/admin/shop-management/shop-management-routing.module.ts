import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShopManagementComponent } from "./shop-management.component";

const route: Routes = [{
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
}]


@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class ShopManagementRoutingModule { }