import { Component } from '@angular/core';
import { OrderService } from '../../../core/services/order.service';
import { Order } from '../../../core/models/order';

@Component({
    selector: 'app-order-management',
    templateUrl: './order-management.component.html'
})
export class OrderManagementComponent {
    public selectedOrder: Order;

    constructor(private orderService: OrderService) {}


}
