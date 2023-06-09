import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserLogin } from '../interfaces/userLogin';
import { Token } from '../interfaces/token';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private access_token$: BehaviorSubject<Token> = new BehaviorSubject<Token>({});
  private isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private user:User | null = {
    first_name: '',
    last_name: '',
    email: ''
  };

  constructor(private http: HttpClient, private nav:Router) { }

  
  loginRequest(userLogin:UserLogin):Observable<boolean> {
      let url: string = 'http://127.0.0.1:8000/api/v1/user/token/';
      this.http.post<Token>(url, userLogin).subscribe(
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


  logOut(){
    this.user = null;
    localStorage.clear();
    this.access_token$.next({});
    this.isLoggedIn$.next(false);
    this.nav.navigate(['login']);
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

  getUserRequest(){
    let url: string = 'http://127.0.0.1:8000/api/v1/user/me/';
    this.http.get<User>(url).subscribe(
      (data:User) => {
        if (data) {
          this.user = data;
        }
      }
    )
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

  get userInSession(){
    return this.user;
  }


} 
