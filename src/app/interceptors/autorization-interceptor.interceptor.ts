import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { AuthService } from '../auth/services/auth.service';
import { Token } from '../auth/interfaces/token';

@Injectable()
export class AutorizationInterceptorInterceptor implements HttpInterceptor {

  accessToken: string = '';

  constructor(private auth: AuthService) {
    this.auth.tokenObservable.subscribe(
      (token:Token)=>{
        if(token.refresh){
          this.accessToken = token.refresh;
        }
      }
    )
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.accessToken){
      request = request.clone({
        setHeaders:{
          Authorization: `Bearer ${this.accessToken}`
        }
      });
    }
    return next.handle(request);
  }
}
