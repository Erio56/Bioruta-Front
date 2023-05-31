import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/mock/user';
import { userMock } from '../models/mock/userMockLogin'
import { Token } from '../models/mock/token'


@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private http: HttpClient) {
  }

  private user:User = {};
  private TOKEN: Token = {};


  login(): boolean {
    this.loginRequest('felipe@felipe.com', 'epaepaepa').subscribe((data)=>{
      localStorage.setItem('access', (data as any).refresh);
      }
    );

    if(this.TOKEN !== null){
      return true
    }else{
      return false;
    }
  }

  loginRequest(email:string, password:string){
    let url = 'http://localhost:8000/api/v1/user/token/';
    let header = new HttpHeaders();
    let body = {
      email: email,
      password: password
    };

    header.append('Content-Type','aplication/json');

    return this.http.post<Token>(url,body);
  }


  get token():string{
    return this.token
  }


}
