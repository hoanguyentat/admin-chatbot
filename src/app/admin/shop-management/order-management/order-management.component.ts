import { Component } from '@angular/core';
import { OrderService } from '../../../core/services/order.service';
import { Order } from '../../../core/models/order';
import { Router } from '@angular/router';

@Component({
    selector: 'app-order-management',
    templateUrl: './order-management.component.html'
})
export class OrderManagementComponent {
    public selectedOrder: Order;

    constructor(private orderService: OrderService, private router: Router) {}

    addOrder(): void {
        console.log("add new order");
        this.router.navigate(['admin/shop-management/order-management/add']);
    }

    editOrder(userId): void {
        console.log("edit order");
        this.router.navigate(['admin/shop-management/order-management/edit', userId]);
    }

}
