import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UserDetail } from '../../../../shared/models/user-detail';

const MOCK_DATA = [{
  "id": "653678611405322",
  "username": "Phuong NM",
  "fullname": "Phuong Nguyen Minh",
  "sex": "male",
  "email": "phuongnm@bkav.com",
  "phone": "0191512355",
  "birth_day": "2018-06-01",
  "role": "ADMIN",
  "created_at": 1529913941,
  "updated_at": 1529913941
}];

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user_detail: UserDetail = MOCK_DATA[0];
  
  settings = {
    hideSubHeader: true,
    mode: 'external',
    actions: null,
    edit: {
      editButtonContent: '<i class="fa fa-edit"></i>',
      saveButtonContent: '<i class="fa fa-checkmark"></i>',
      cancelButtonContent: '<i class="fa fa-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash"></i>',
      confirmDelete: true,
    },
    attr: {
        class: 'table table-bordered'
      },
    columns: {
      id: {
        title: 'Id',
        type: '$index'
      },
      username: {
        title: 'Tên tài khoản',
        type: 'string'
      },
      fullname: {
        title: 'Tên đầy đủ',
        type: 'string'
      },
      sex: {
        title: 'Giới tính',
        type: 'string'
      },
      email: {
        title: 'Email',
        type: 'string'
      },
      phone: {
        title: 'Số điện thoại',
        type: 'string'
      },
      birth_day: {
        title: 'Năm sinh',
        type: 'string'
      },
      role: {
        title: 'Role',
        type: 'string'
      },
      created_at: {
        title: 'Tạo',
        type: 'number'
      },
      updated_at: {
        title: 'Cập nhật',
        type: 'number'
      }
    }
  };

  source: LocalDataSource;
  constructor() {
    this.source = new LocalDataSource();
    this.source.load(MOCK_DATA);
  }

  ngOnInit() {
  }

}
