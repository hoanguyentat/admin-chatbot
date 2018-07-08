import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environment.domain + '/api/v1/products/';

  constructor(private http: HttpClient) { }

  public createProduct(product: Product): Observable<any> {
    return this.http.post(this.baseUrl, JSON.stringify(product));
  }

  public getProducts(page: number = 1, page_size: number = 10): Observable<any> {
    return this.http.get(this.baseUrl + '?page=' + page + '&page_size=' + page_size);
  }

  public getProduct(product_id: string): Observable<any> {
    return this.http.get(this.baseUrl + product_id + '/');
  }
}
