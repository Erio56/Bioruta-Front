import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit{

  form!: FormGroup;

  constructor(private auth:AuthService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      lastName: '',
      email: '',
      address: '',
      password: ''
    })

    
  }

}
