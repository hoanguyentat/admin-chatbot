import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { OrderDetail } from '../../../../core/models/order-detail';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnChanges {

  @Input()
  public orderDetail: OrderDetail;

  displayedColumns = ['image', 'description', 'attributes', 'count', 'price'];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // TODO
  }

}
