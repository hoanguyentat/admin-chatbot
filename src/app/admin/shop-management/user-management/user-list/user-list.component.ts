import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { switchMap, map, catchError, startWith, tap } from 'rxjs/operators';
import { Observable, of, Subject, merge } from 'rxjs';
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
  paginator: MatPaginator;
  data: User[] = [];
  displayedColumns: string[]
    = ['username', 'full_name', 'sex', 'email', 'phone', 'birth_day', 'role', 'action'];
  selectedUser: User;

  @Output()
  public selectUser = new EventEmitter<User>();

  private reloadSubject = new Subject();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.paginator.pageIndex = 0;
    merge(this.paginator.page, this.reloadSubject).pipe(
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
    this.selectedUser = user;
    this.selectUser.emit(JSON.parse(JSON.stringify(user)));
  }

  deleteUser(user: User): void {
    const r = confirm('Are you want to delete user: ' + user.username);
    if (r === true) {
      this.userService.deleteUser(user.id).subscribe(data => {
        this.reload();
      });
    }
  }

  public reload() {
    this.reloadSubject.next();
  }

}
