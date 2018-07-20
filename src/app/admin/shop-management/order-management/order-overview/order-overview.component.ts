import { Component, OnInit, Input } from '@angular/core';
import { OrderDetail } from '../../../../core/models/order-detail';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.scss']
})
export class OrderOverviewComponent {

  @Input()
  public orderDetail: OrderDetail;

  displayedColumns = ['image', 'description', 'price', 'quantity'];

  constructor() {
  }

}
