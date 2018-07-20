import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../../../../core/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { OrderDetail } from '../../../../core/models/order-detail';
import { ProductInOrderDetail } from '../../../../core/models/product-in-order-detail';
import { ProductFilterComponent } from '../../../../shared/components/product-filter/product-filter.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from '../../../../core/models/product';
import { MatTable } from '@angular/material';
import { Location } from '@angular/common';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  orderId: string;
  order: OrderDetail;
  displayedColumns = ['image', 'description', 'price', 'quantity', 'action'];

  @ViewChild(ProductFilterComponent)
  private productFilterComponent: ProductFilterComponent;
  @ViewChild(ProductListComponent)
  private productListComponent: ProductListComponent;
  @ViewChild(MatTable) productInOrderTable: MatTable<any>;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.orderId = this.route.snapshot.params.id;
    // init product to avoid undefined
    this.order = <OrderDetail>{
      products: []
    };
    if (this.orderId) {
      this.orderService.getOrder(this.orderId).subscribe(order => this.order = order);
    }
  }

  ngOnInit() {

  }

  deleteProductInOrder(product: ProductInOrderDetail) {
    this.order.products = this.order.products.filter((ele) => ele.id !== product.id);
  }

  applyFilters() {
    this.productListComponent.applyFilters(this.productFilterComponent.getFilters());
  }

  onChooseProduct(product: Product) {
    let duplicateProduct = false;
    for (const _product of this.order.products) {
      if (_product.id === product.id) {
        duplicateProduct = true;
        _product.quantity += 1;
        break;
      }
    }
    if (!duplicateProduct) {
      const newProduct = Object.assign({
        quantity: 1
      }, product);
      this.order.products.push(newProduct);
    }
    // console.log(this.order.products);
    this.productInOrderTable.renderRows();
    this.updateTotalProductAndTotalPrice();
  }

  updateTotalProductAndTotalPrice() {
    this.order.total_product = this.order.products.map(item => item.quantity).reduce((sum, val) => sum + val);
    this.order.total_price = this.order.products.map(item => item.quantity * item.price).reduce((sum, val) => sum + val);
  }

  addOrder() {
    this.orderService.createOrder(this.order).pipe(
      tap(_ => this.goBack()),
    ).subscribe(data => { });
  }

  updateOrder() {
    this.orderService.updateOrder(this.order).pipe(
      tap(_ => this.goBack()),
    ).subscribe(data => { });
  }

  goBack() {
    this.location.back();
  }

}
