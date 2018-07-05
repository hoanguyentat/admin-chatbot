import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headersConfig = {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Token 1a8e7c71678bd846f80afb9cbe7a79b6f2755baa'
        };
        const request = req.clone({ setHeaders: headersConfig });
        return next.handle(request);
      }
}
