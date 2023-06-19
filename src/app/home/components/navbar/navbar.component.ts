import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  username: string = 'Nombre de usuario';

  points: string = '0';

  profilePicture: string = '../../../../assets/placeholder.png';

  constructor(private auth:AuthService){
    

  }

}
