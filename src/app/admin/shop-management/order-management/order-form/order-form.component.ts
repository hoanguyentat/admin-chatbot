import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../../core/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../../../core/models/order';
import { OrderDetail } from '../../../../core/models/order-detail';
import { ProductInOrderDetail } from '../../../../core/models/product-in-order-detail';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  orderId: string;
  order: OrderDetail;
  displayedColumns = ['image', 'description', 'price', 'quantity', 'action'];

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {
    this.orderId = route.snapshot.params.id;
    this.order = <OrderDetail>{
      products: []
    };
    if (this.orderId) {
      this.orderService.getOrder(this.orderId).subscribe(order => this.order = order);
    }
  }

  ngOnInit() {

  }

  deleteProduct(product: ProductInOrderDetail) {
    this.order.products = this.order.products.filter((ele) => ele.id !== product.id);
  }

}
