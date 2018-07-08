import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html'
})
export class UserManagementComponent implements OnInit {

  public selectedUser: User;

  constructor(private userService: UserService, private router: Router) {}

  addUser(): void {
    this.router.navigate(['admin/shop-management/user-management/add']);
  }

  ngOnInit() {
  }

}
