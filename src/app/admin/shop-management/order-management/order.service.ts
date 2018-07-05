import { Injectable } from '@angular/core';
import { Order } from '../../../shared/models/order';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  public createOrder(order: Order) {
    // TO DO: put order to server
  }

  public getOrders(page: number = 1, page_size: number = 10): Observable<Order[]> {
    // TO DO: method get order list from server
    return of([]);
  }

  public getOrder(order_id: string): Observable<Order> {
    return null; // TO DO: get order by order id
  }
}
