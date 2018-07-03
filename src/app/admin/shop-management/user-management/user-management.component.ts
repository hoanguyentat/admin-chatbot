import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-management',
  template: '<router-outlet></router-outlet>'
})
export class UserManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
