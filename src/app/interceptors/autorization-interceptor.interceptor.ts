import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AutorizationInterceptorInterceptor implements HttpInterceptor {

  static accessToken = '';

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(AutorizationInterceptorInterceptor.accessToken){
      request = request.clone({
        setHeaders:{
          Authorization: `Bearer ${AutorizationInterceptorInterceptor.accessToken}`
        }
      });
    }
    return next.handle(request);
  }
}
