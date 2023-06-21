
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';


export const authGuard = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
    const auth = inject(AuthService);
    const nav = inject(Router);

    auth.IsLoggedIn.subscribe(
      (isLoggedIn:boolean)=>{
        if(isLoggedIn){
          return true;
        }else{
          nav.navigate(['login']);
          return false;
        }
      }
    )
  };

