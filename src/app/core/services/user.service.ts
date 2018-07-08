import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseUrl = environment.domain + '/api/v1/users/';

  constructor(private http: HttpClient) { }

  public createUser(user): Observable<any> {
    let data = {
      "username": user.username,
      "full_name": user.username,
      "sex": user.sex,
      "phone": user.phone,
      "password": user.password
    }
    return this.http.post(this.baseUrl, data);
  }

  public getUsers(page: number = 1, page_size: number = 10): Observable<any> {
    return this.http.get(this.baseUrl + '?page=' + page + '&page_size=' + page_size);
  }

  public getUser(userId: string): Observable<any> {
    return this.http.get(this.baseUrl + userId + '/');
  }
}
