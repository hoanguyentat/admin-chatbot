import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../core/models/product';
import { MatPaginator } from '@angular/material';
import { ProductService } from '../../../../core/services/product.service';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

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
  public selectProduct = new EventEmitter<Product>();
  public selectedProduct: Product;

  displayedColumns = ['id', 'name', 'brand', 'price', 'count', 'color', 'size', 'image', 'updated_at', 'created_at'];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.paginator.pageIndex = 0;
    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        return this.productService.getProducts(this.paginator.pageIndex + 1, this.paginator.pageSize);
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

  public onSelectedRow(product: Product) {
    this.selectedProduct = product;
    this.selectProduct.emit(product);
  }
}
