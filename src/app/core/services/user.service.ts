import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseUrlList = environment.domain + '/api/v1/users/';
  private baseUserAdd = environment.domain + '/api/v1/user/';

  constructor(
    private http: HttpClient,
    private message: MessageService
  ) { }

  public createUser(user): Observable<any> {
    const data = {
      'username': user.username,
      'full_name': user.username,
      'sex': user.sex,
      'phone': user.phone,
      'password': user.password
    };
    return this.http.post(this.baseUserAdd, data).pipe(
      tap(_ => this.message.info('Create user successfully!')),
      catchError(err => {
        this.message.error('Create user failed: '  + err.error.detail);
        throw err;
      })
    );
  }

  public getUsers(page: number = 1, page_size: number = 10): Observable<any> {
    return this.http.get(this.baseUrlList + '?page=' + page + '&page_size=' + page_size);
  }

  public getUser(userId: string): Observable<any> {
    return this.http.get(this.baseUrlList + userId + '/');
  }

  public updatUser(data: any): Observable<any> {
    return this.http.put(this.baseUrlList + data.id + '/', data).pipe(
      tap(_ => this.message.info('Update user successfully!')),
      catchError(err => {
        this.message.error('Update user failed: ' + err.error.detail);
        throw err;
      })
    );
  }

  public deleteUser(userId: string): Observable<any> {
    return this.http.delete(this.baseUrlList + userId + '/').pipe(
      tap(_ => this.message.info('Delete user successfully!')),
      catchError(err => {
        this.message.error('Delete user failed: ' + err.error.detail);
        throw err;
      })
    );
  }
}
