import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';


const MOCK_DATA = {
    "paging": {
      "page": 1,
      "total": 200,
      "page_size": 2
    },
    "data": [
      {
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
      },
      {
        "id": "653678611405322",
        "username": "KhiemDH",
        "fullname": "Doan Hoa Khiem",
        "sex": "male",
        "email": "khiemdh@bkav.com",
        "phone": "0191512355",
        "birth_day": "2018-06-01",
        "role": "STAFF",
        "created_at": 1529913941,
        "updated_at": 1529913941
      }
    ]
};

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})


export class UserListComponent implements OnInit {

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
      fullname: {
        title: 'Tên tài khoản',
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
        type: 'number'
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
        title: 'Cập nhật',
        type: 'number'
      },
      updated_at: {
        title: 'Tạo',
        type: 'number'
      },
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private router: Router) { }

  ngOnInit() {
    this.source.load(MOCK_DATA.data);
  }

  onDeleteConfirm(event): void {
    console.log("clicked delete event");
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onView(event): void {
    // console.log("This is clicked!");
    this.router.navigate(['admin/shop-management/user-management', event.data.id]);
  }

}
