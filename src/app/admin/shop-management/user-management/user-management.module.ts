import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserManagementComponent } from './user-management.component';
import { SharedModule } from '../../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: UserManagementComponent},
  {path: 'add', component: UserAddComponent},
  {path: 'detail/:id', component: UserDetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [UserListComponent, UserDetailComponent, UserManagementComponent, UserAddComponent]
})
export class UserManagementModule { 

}
