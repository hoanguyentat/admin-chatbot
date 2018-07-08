import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../../../core/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnChanges {

  @Input()
  public product: Product;

  constructor() {
    this.setDefaulProductIfNotProvide();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setDefaulProductIfNotProvide();
  }

  private setDefaulProductIfNotProvide() {
    if (!this.product) {
      this.product = {
        attributes: {}
      } as Product;
    }
  }

}
