import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html'
})
export class ProductManagementComponent implements OnInit {

  private selectedProduct: Product;
  private openForm = false;
  constructor() { }

  ngOnInit() {
  }

}
