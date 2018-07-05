import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headersConfig = {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Token ' + environment.token
        };
        const request = req.clone({ setHeaders: headersConfig });
        return next.handle(request);
      }
}
