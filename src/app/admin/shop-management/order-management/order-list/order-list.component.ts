import { Component, OnInit } from '@angular/core';
import { LocalDataSource, ServerDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

const MOCK_DATA = {
  'paging': {
    'page': 1,
    'total': 200,
    'page_size': 2
  },
  'data': [
    {
      'id': '653678611405325',
      'user_backend_id': '653678611405322',
      'customer_name': 'Phuong TH',
      'customer_address': 'Phương Mai, Hà Nội',
      'total_products': 2,
      'total_price': 1000000,
      'price_unit': 'VND',
      'updated_at': 1529912852,
      'created_at': 1529912852,
      'user_backend_name': 'Quang LH'
    },
    {
      'id': '653678611405321',
      'user_backend_id': '653678611405324',
      'customer_name': 'Phuong TH',
      'customer_address': 'Phương Mai, Hà Nội',
      'total_products': 2,
      'total_price': 1000000,
      'price_unit': 'VND',
      'updated_at': 1529912852,
      'created_at': 1529912852,
      'user_backend_name': 'Quang LH'
    },
    {
      'id': '653678611405321',
      'user_backend_id': '653678611405324',
      'customer_name': 'Phuong TH',
      'customer_address': 'Phương Mai, Hà Nội',
      'total_products': 2,
      'total_price': 1000000,
      'price_unit': 'VND',
      'updated_at': 1529912852,
      'created_at': 1529912852,
      'user_backend_name': 'Quang LH'
    },
    {
      'id': '653678611405321',
      'user_backend_id': '653678611405324',
      'customer_name': 'Phuong TH',
      'customer_address': 'Phương Mai, Hà Nội',
      'total_products': 2,
      'total_price': 1000000,
      'price_unit': 'VND',
      'updated_at': 1529912852,
      'created_at': 1529912852,
      'user_backend_name': 'Quang LH'
    },
    {
      'id': '653678611405321',
      'user_backend_id': '653678611405324',
      'customer_name': 'Phuong TH',
      'customer_address': 'Phương Mai, Hà Nội',
      'total_products': 2,
      'total_price': 1000000,
      'price_unit': 'VND',
      'updated_at': 1529912852,
      'created_at': 1529912852,
      'user_backend_name': 'Quang LH'
    },
    {
      'id': '653678611405321',
      'user_backend_id': '653678611405324',
      'customer_name': 'Phuong TH',
      'customer_address': 'Phương Mai, Hà Nội',
      'total_products': 2,
      'total_price': 1000000,
      'price_unit': 'VND',
      'updated_at': 1529912852,
      'created_at': 1529912852,
      'user_backend_name': 'Quang LH'
    }
  ]
};

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

}
