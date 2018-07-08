import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UserDetail } from '../../../../shared/models/user-detail';

const MOCK_DATA = [{
  'id': '653678611405322',
  'username': 'Phuong NM',
  'fullname': 'Phuong Nguyen Minh',
  'sex': 'male',
  'email': 'phuongnm@bkav.com',
  'phone': '0191512355',
  'birth_day': '2018-06-01',
  'role': 'ADMIN',
  'created_at': 1529913941,
  'updated_at': 1529913941
}];

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user_detail: UserDetail = MOCK_DATA[0];

  ngOnInit() {
  }

}
