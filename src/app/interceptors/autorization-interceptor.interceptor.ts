import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor(private nav: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    let token: string| null = localStorage.getItem('access');
    console.log("REQUEST INTERCEPTED", request);


    if(token){
      let req = request.clone({
        setHeaders: { Authorization: `Bearer ${token}`}
      })
      console.log("intercepted with token ", token);
      console.log(req);
      return next.handle(req);
    }
    return next.handle(request);
  }
}
