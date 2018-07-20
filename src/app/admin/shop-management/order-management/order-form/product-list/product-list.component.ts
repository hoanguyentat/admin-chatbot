import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { merge, Subject, of } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { ProductService } from '../../../../../core/services/product.service';
import { MatPaginator } from '@angular/material';
import { Product } from '../../../../../core/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @ViewChild(MatPaginator)
  public paginator: MatPaginator;
  public data: Product[] = [];
  @Output()
  public chooseProduct = new EventEmitter<Product>();
  public selectedProduct: Product;
  private reloadSubject = new Subject<any>();
  private filters: Object = {};

  displayedColumns = ['id', 'name', 'price', 'count', 'color', 'size', 'image', 'action'];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.paginator.pageIndex = 0;
    merge(this.reloadSubject, this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        return this.productService.getProducts(this.paginator.pageIndex + 1, this.paginator.pageSize, this.filters);
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

  // public onSelectedRow(product: Product) {
  //   this.selectedProduct = product;
  //   this.selectProduct.emit(JSON.parse(JSON.stringify(product)));
  // }

  public reload() {
    this.reloadSubject.next();
  }

  public applyFilters(filters: Object) {
    this.filters = filters;
    this.reload();
  }

  emitProduct(product: Product) {
    this.selectedProduct = product;
    this.chooseProduct.emit(JSON.parse(JSON.stringify(product)));
  }

}
