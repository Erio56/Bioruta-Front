import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html'
})
export class AccountPageComponent {


  constructor(private auth: AuthService){

  }


  logOut() {
    this.auth.logOut();
  }

}
