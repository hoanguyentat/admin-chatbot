import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { OrderDetail } from '../../../../core/models/order-detail';

const MOCK_DATA = {
  'id': '653678611405322',
  'user_backend_id': '653678611405324',
  'customer_name': 'Phuong TH',
  'customer_address': 'Phương Mai, Hà Nội',
  'total_products': 2,
  'total_price': 1000000,
  'price_unit': 'VND',
  'updated_at': 1529912852,
  'created_at': 1529912852,
  'user_backend_name': 'Quang LH',
  'products': [
    {
      'colors': [
        'xanh'
      ],
      'quantity': 1,
      'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
      'id': '1529909453',
      'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
      'price': 200000,
      'price_unit': 'VND',
      'sizes': [
        40
      ]
    },
    {
      'colors': [
        'đỏ'
      ],
      'quantity': 1,
      'description': 'description : Hang vn: Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
      'id': '1529909454',
      'name': 'Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
      'price': 250000,
      'price_unit': 'VND',
      'sizes': [
        40
      ]
    }
  ]
};

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  order_detail: OrderDetail = MOCK_DATA;

  constructor() {
  }

  ngOnInit() {
  }

}
