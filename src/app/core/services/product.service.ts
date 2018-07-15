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

  private getUrl(id?) {
    if (id) {
      return this.baseUrl + id + '/';
    } else {
      return this.baseUrl;
    }
  }

  public createProduct(product: Product): Observable<any> {
    return this.http.post(this.getUrl(), JSON.stringify(product));
  }

  public getProducts(page: number = 1, page_size: number = 10): Observable<any> {
    return this.http.get(this.getUrl() + '?page=' + page + '&page_size=' + page_size);
  }

  public getProduct(product_id: string): Observable<any> {
    return this.http.get(this.getUrl(product_id));
  }

  public updateProduct(product: Product): Observable<any> {
    const _url = this.getUrl(product.id);
    return this.http.put(_url, JSON.stringify(product));
  }

  public deleteProduct(productId: number | string): Observable<any> {
    const _url = this.getUrl(productId);
    return this.http.delete(_url);
  }
}
