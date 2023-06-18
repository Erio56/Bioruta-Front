import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { Token } from '../models/token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private access_token$: BehaviorSubject<Token> = new BehaviorSubject<Token>({});

  constructor(private http: HttpClient) { }

  private isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  loginRequest(user:User):Observable<boolean> {
      let url: string = 'http://127.0.0.1:8000/api/v1/user/token/';
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/x-www-form-urlencoded',
          Authorization: 'my-auth-token'
        })
      };
      this.http.post<Token>(url, user).subscribe(
      (data) => {
        if (data?.access && data?.refresh) {
          this.access_token$.next(data);
          this.saveTokenToLocalStorage(data);
          this.isLoggedIn$.next(true);
        }
      }
    )
      return this.isLoggedIn$.asObservable();
    }

  get tokenObservable() : Observable<Token> {
    return this.access_token$.asObservable();
  }

  set tokenData(token:Token){
    this.access_token$.next(token);
  }


  saveTokenToLocalStorage(token: Token){
    if(token.access && token.refresh){
      localStorage.setItem('access', token.access);
      localStorage.setItem('refresh', token.refresh);
    }
  }

  get token():any{
    return {
      access: localStorage.getItem('access'),
      refresh: localStorage.getItem('refresh')
    }
  }

  get IsLoggedIn(){
    return this.isLoggedIn$.asObservable();
  }

} 
