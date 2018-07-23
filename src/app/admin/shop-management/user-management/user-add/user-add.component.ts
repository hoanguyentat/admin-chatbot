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

  username: string;
  full_name: string;
  sex: string;
  email: string;
  phone: string;
  birth_day: Date;
  password: string;
  confirmPassword: string;

  err: any;

  constructor(
    private userService: UserService,
    private location: Location,
  ) { }

  private verify() {
    if (!this.username || this.username.trim() === '') {
      throw new Error('User name is required!');
    }
    if (!this.password || this.password.trim() === '') {
      throw new Error('Password does not blank');
    }
    if (this.confirmPassword !== this.password) {
      throw new Error('Confirm password does not match!');
    }
  }

  addUser() {
    try {
      this.verify();
    } catch (err) {
      alert(err);
      return;
    }

    // console.log(this.birth_day);

    this.userService.createUser({
      username: this.username,
      full_name: this.full_name,
      sex: this.sex,
      email: this.email,
      phone: this.phone,
      birth_day: this.birth_day ? `${this.birth_day.getFullYear()}-${this.birth_day.getMonth() + 1}-${this.birth_day.getDay()}` : null,
      password: this.password
    }).subscribe(data => {
      this.goBack();
    }, (res) => {
      this.err = res.error;
      console.log(this.err);
    });
  }

  goBack() {
    this.location.back();
  }

}
