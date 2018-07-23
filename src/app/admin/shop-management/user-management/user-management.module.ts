import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserManagementComponent } from './user-management.component';
import { SharedModule } from '../../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { FormsModule } from '@angular/forms';
import { UserEditorComponent } from './user-editor/user-editor.component';

const routes: Routes = [
  { path: '', component: UserManagementComponent },
  { path: 'add', component: UserAddComponent },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [UserListComponent, UserManagementComponent, UserAddComponent, UserEditorComponent]
})
export class UserManagementModule {

}
