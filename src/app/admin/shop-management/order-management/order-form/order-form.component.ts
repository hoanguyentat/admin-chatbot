import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../../core/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../../../core/models/order';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  private orderId: string;
  order: Order;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {
    this.orderId = route.snapshot.params.id;
    if (this.orderId) {
      this.orderService.getOrder(this.orderId).subscribe(order => this.order = order);
    }

  }

  ngOnInit() {

  }

}
