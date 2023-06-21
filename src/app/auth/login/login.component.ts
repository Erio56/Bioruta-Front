import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

import { UserLogin } from '../interfaces/userLogin'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent{

  user: UserLogin = {};


  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private auth: AuthService, private nav: Router){}

  ngOnInit(): void {
    if(!this.auth.IsLoggedIn){
      this.nav.navigate(['login']);
    }
  }

  login(){
    if (this.loginForm.valid) {
      this.user = {
        email: this.loginForm.get('email')?.value || '',
        password: this.loginForm.get('password')?.value || ''
      }
    }

    this.auth.loginRequest(this.user).subscribe(
      (response:boolean)=>{
        if(response){
          this.nav.navigate(['home']);
        }
      }
    )

  }

}