import { Component, OnInit, ViewChild, Output, EventEmitter  } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { switchMap, map, catchError, startWith, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from '../../../../core/models/User';
import { UserService } from '../../../../core/services/user.service';

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
    = ['id', 'username', 'full_name', 'sex', 'email', 'phone', 'birth_day', 'role', 'created_at', 'updated_at'];

  @Output()
  public selectUser = new EventEmitter<User>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.paginator.pageIndex = 0;
    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        return this.userService.getUsers(this.paginator.pageIndex + 1, this.paginator.pageSize);
      }),
      map(resp => {
        console.log(resp);
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

}
