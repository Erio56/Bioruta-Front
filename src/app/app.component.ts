import { Component, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // IsAuth = false;
  title = 'BioRuta';
  // private subsAuth$: Subscription;

  // constructor(private securityService: SecurityService){
  //   this.IsAuth = this.securityService.IsAuth;
  //   this.subsAuth$ = this.securityService.authChange$.subscribe((isAuth) => {
  //     this.IsAuth = isAuth;
  //   });
  // }

  // ngOnDestroy(): void {
  //     if(this.subsAuth$){
  //       this.subsAuth$.unsubscribe();
  //     }
  // }
}