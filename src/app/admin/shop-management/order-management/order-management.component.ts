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
        this.router.navigate(['admin/shop-management/order-management/add']);
    }

    editOrder(): void {
        if (this.selectedOrder) {
            this.router.navigate(['admin/shop-management/order-management/edit', this.selectedOrder.id]);
        } else {
            console.log('No order is selected');
        }
    }

}
