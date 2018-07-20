import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { OrderDetail } from '../models/order-detail';
import { MessageService } from './message.service';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = environment.domain + '/api/v1/orders/';

  constructor(
    private http: HttpClient,
    private message: MessageService
  ) { }

  private getUrl(id?) {
    if (id) {
      return this.baseUrl + id + '/';
    } else {
      return this.baseUrl;
    }
  }

  public createOrder(order: OrderDetail) {
    // hardcode user_backend_id here, change it if neccessery
    order.user_backend_id = 'a62fe6e4-f98b-43ba-81cd-91fa58dd267e';

    const _url = this.getUrl();
    return this.http.post(_url, JSON.stringify(order)).pipe(
      tap(_ => this.message.info('Create order successfully')),
      catchError((err) => {
        this.message.error('Create order fail!');
        throw err;
      })
    );
  }

  public getOrders(page: number = 1, page_size: number = 10): Observable<any> {
    return this.http.get(this.baseUrl + '?page=' + page + '&page_size=' + page_size);
  }

  public getOrder(order_id: string): Observable<any> {
    return this.http.get(this.baseUrl + order_id + '/');
  }

  public updateOrder(order: OrderDetail) {
    const _url = this.getUrl(order.id);
    return this.http.put(_url, JSON.stringify(order)).pipe(
      tap(_ => this.message.info('Update order successfully')),
      catchError((err) => {
        this.message.error('Update order fail!');
        throw err;
      })
    );
  }
}
