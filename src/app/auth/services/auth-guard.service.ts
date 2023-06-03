import { inject } from "@angular/core";
import { AuthService } from "./auth-service.service";
import { Router } from "@angular/router";

export const authGuard = () => {

  const securityService = inject(AuthService)
  const router  = inject(Router)

  if(securityService.IsAuth){
    return true;
  }else{
    router.navigate(["/login"]);
  }
  return false;



}