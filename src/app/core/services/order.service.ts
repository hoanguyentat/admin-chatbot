import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = environment.domain + '/api/v1/orders/';

  constructor(private http: HttpClient) { }

  public createOrder(order: Order) {
    // TO DO: put order to server
  }

  public getOrders(page: number = 1, page_size: number = 10): Observable<any> {
    return this.http.get(this.baseUrl + '?page=' + page + '&page_size=' + page_size);
  }

  public getOrder(order_id: string): Observable<any> {
    return this.http.get(this.baseUrl + order_id + '/');
  }
}
