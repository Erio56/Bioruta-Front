import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthService } from '../auth/services/auth-service.service'


@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    SignInComponent
  ],
  providers:[
    AuthService,
  ]
})
export class AuthModule { }
