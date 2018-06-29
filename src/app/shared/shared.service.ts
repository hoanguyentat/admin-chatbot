
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class SharedService {

  protected BASE_URL = environment.apiBase;

  constructor(private http: HttpClient) { }

  protected get(url: string, params?: HttpParams): Observable<any> {
    const httpOptions = { params: params };
    return this.http.get(url, httpOptions)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError((e) => this.handleError(e)) // then handle the error
      );
  }

  protected post(url: string, body: any, params?: HttpParams): Observable<any> {
    const httpOptions = { params: params };
    return this.http.post(url, body, httpOptions)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError((e) => this.handleError(e)) // then handle the error
      );
  }

  /**
   * Bắt lỗi BE trả về lỗi
   * @param error
   */
  private handleError(error: HttpErrorResponse) {
    return observableThrowError(error);
  }

  doLogout() {
  }
}
