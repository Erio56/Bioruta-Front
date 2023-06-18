import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Token } from "../models/token";


@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor  {

  constructor(private auth: AuthService){}

  token$:Observable<Token> = this.auth.tokenObservable;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if(this.token$){
        req = req.clone({
          setHeaders:{
            Authorization: `Bearer ${this.token$}`
          }
        });
      }
      return next.handle(req);
  }
}



