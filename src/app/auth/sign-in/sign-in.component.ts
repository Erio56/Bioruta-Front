import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    password1: new FormControl('', Validators.required),
    password2: new FormControl('', Validators.required),

  });

  constructor( private formBuilder: FormBuilder, private auth: AuthService, private nav: Router) {
    if(!this.auth.IsLoggedIn){
      this.nav.navigate(['login']);
    }
  }

  // ngOnInit(): void {
    // this.form = this.formBuilder.group({
    //   name: '',
    //   lastName: '',
    //   email: '',
    //   address: '',
    //   password: ''
    // })

    
    

}
