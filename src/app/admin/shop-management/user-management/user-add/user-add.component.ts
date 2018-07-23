import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NewUser } from '../../../../core/models/new-user';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {

  user: NewUser = <NewUser>{};
  password: string;
  confirmPassword: string;

  constructor(
    private userService: UserService,
    private location: Location,
  ) { }

  addUser() {
  }

  goBack() {
    this.location.back();
  }

}
