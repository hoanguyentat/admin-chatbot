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

  settings = {
    hideSubHeader: true,
    mode: 'external',
    edit: {
      editButtonContent: '<i class="fa fa-edit"></i>',
      saveButtonContent: '<i class="fa fa-checkmark"></i>',
      cancelButtonContent: '<i class="fa fa-close"></i>',
    },
    attr: {
      class: 'table table-bordered'
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      customer_name: {
        title: 'Tên khách hàng',
        type: 'string'
      },
      customer_address: {
        title: 'Địa chỉ',
        type: 'string'
      },
      total_products: {
        title: 'Số sản phẩm',
        type: 'number'
      },
      total_price: {
        title: 'Tổng giá',
        type: 'number'
      },
      price_unit: {
        title: 'Mệnh giá',
        type: 'string'
      },
      updated_at: {
        title: 'Cập nhật',
        type: 'number'
      },
      created_at: {
        title: 'Tạo',
        type: 'number'
      },
    }
  };

  response: any;

  source: ServerDataSource;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    // this.source = new ServerDataSource(this.http, {
    //   endPoint: environment.domain + '/api/v1/orders/',
    //   pagerPageKey: 'page',
    //   pagerLimitKey: 'page_size',
    //   totalKey: 'total'
    // });
  }

  onDeleteConfirm(event): void {
    console.log('clicked delete event');
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onView(event): void {
    // console.log("This is clicked!");
    this.router.navigate(['admin/shop-management/order-management', event.data.id]);
  }

}
