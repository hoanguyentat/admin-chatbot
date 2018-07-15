import { Component, OnInit } from '@angular/core';
import { Order } from '../../../../core/models/order';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.scss']
})
export class OrderAddComponent implements OnInit {

  private order: Order;

  constructor() { }

  ngOnInit() {
  }

}
