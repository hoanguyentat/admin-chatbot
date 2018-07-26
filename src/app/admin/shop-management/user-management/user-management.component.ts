import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/models/user';
import { Router } from '@angular/router';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html'
})
export class UserManagementComponent {

  @ViewChild(UserEditorComponent)
  userEditorComponent: UserEditorComponent;
  @ViewChild(UserListComponent)
  userListComponent: UserListComponent;
  public selectedUser: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  addUser(): void {
    this.router.navigate(['admin/shop-management/user-management/add']);
  }

  editUser(userId): void {
    if (confirm('Are you want to update this user?')) {
      this.userService.updatUser(this.userEditorComponent.getUser()).subscribe(data => {
        this.selectedUser = null;
        this.userListComponent.reload();
      });
    }
  }

  clearSelectedUser() {
    this.selectedUser = null;
    this.userListComponent.selectedUser = null;
  }
}
