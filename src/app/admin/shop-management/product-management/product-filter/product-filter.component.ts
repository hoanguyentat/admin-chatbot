import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {

  brand = '';
  price: number;
  name = '';
  color = '';
  size = '';

  constructor() { }

  public getFilters(): Object {
    const filters = {};
    if (this.brand !== '') {
      filters['brand'] = this.brand;
    }
    if (this.price) {
      filters['price'] = this.price;
    }
    if (this.name !== '') {
      filters['name'] = this.name;
    }
    if (this.color !== '') {
      filters['attributes.color'] = this.color;
    }
    if (this.size !== '') {
      filters['attributes.size'] = this.size;
    }
    return filters;
  }
}
