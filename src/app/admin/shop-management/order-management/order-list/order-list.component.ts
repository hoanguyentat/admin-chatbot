import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { MatPaginator } from '@angular/material';
import { Order } from '../../../../core/models/order';
import { OrderService } from '../../../../core/services/order.service';
import { switchMap, map, catchError, startWith, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  @ViewChild(MatPaginator)
  public paginator: MatPaginator;
  public data: Order[] = [];
  public displayedColumns: string[]
    = ['id', 'customer_name', 'customer_address', 'total_product', 'total_price', 'price_unit', 'updated_at', 'created_at'];
  @Output()
  public selectOrder = new EventEmitter<Order>();

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.paginator.pageIndex = 0;
    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        return this.orderService.getOrders(this.paginator.pageIndex + 1, this.paginator.pageSize);
      }),
      map(resp => {
        console.log(resp);
        this.paginator.pageIndex = resp.paging.page - 1;
        this.paginator.pageSize = resp.paging.page_size;
        this.paginator.length = resp.paging.total;
        return resp.data;
      }),
      catchError(() => {
        return of([]);
      }),
    ).subscribe(data => this.data = data);
  }

  public onSelectedRow(order: Order) {
    this.selectOrder.emit(order);
  }

}
