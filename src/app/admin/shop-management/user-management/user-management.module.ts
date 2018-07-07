import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserManagementComponent } from './user-management.component';
import { SharedModule } from '../../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: UserManagementComponent,
  children: [{
      path: '', component: UserListComponent,
  }, {
      path: ':id', component: UserDetailComponent
  }]
}];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserListComponent, UserDetailComponent, UserManagementComponent]
})
export class UserManagementModule { }
