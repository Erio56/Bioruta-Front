import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit{

  public isAuthenticated:boolean = false;
  public epa:any;

  constructor(private auth:AuthService) {
    
  }

  getToken():void{
    this.isAuthenticated = this.auth.login();
  }

  ngOnInit(): void {
    this.getToken();
  }
}
