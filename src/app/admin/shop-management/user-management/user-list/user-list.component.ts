import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { switchMap, map, catchError, startWith, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from '../../../../core/models/user';
import { UserService } from '../../../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {

  @ViewChild(MatPaginator)
  public paginator: MatPaginator;
  public data: User[] = [];
  public displayedColumns: string[]
    = ['username', 'full_name', 'sex', 'email', 'phone', 'birth_day', 'role', 'action'];

  @Output()
  public selectUser = new EventEmitter<User>();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.paginator.pageIndex = 0;
    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        return this.userService.getUsers(this.paginator.pageIndex + 1, this.paginator.pageSize);
      }),
      map(resp => {
        // console.log(resp);
        this.paginator.pageIndex = resp.paging.page - 1;
        this.paginator.pageSize = resp.paging.page_size;
        this.paginator.length = resp.paging.total;
        return resp.data;
      }),
      catchError(() => {
        return of([]);
      }),
    ).subscribe(data => this.data = data);
  }

  public onSelectedRow(user: User) {
    this.selectUser.emit(user);
  }

  deleteUser(user: User): void {
    const r = confirm('Are you want to delete user: ' + user.username);
    if (r === true) {
      this.userService.deleteUser(user.id).subscribe(data => {
      });
    }
  }

}
