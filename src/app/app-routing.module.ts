import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { authGuard } from './auth/guards/auth-guard';
import { TrackingPageComponent } from './tracking/tracking-page/tracking-page.component';
import { RequestPickupPageComponent } from './request-pickup/request-pickup-page/request-pickup-page.component';
import { AccountPageComponent } from './account/account-page/account-page.component';
import { PickUpHistoryPageComponent } from './pickup-history/pick-up-history-page/pick-up-history-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignInComponent, pathMatch:'full' },
  { path: '', redirectTo: '/home', pathMatch:'full'},
  { path: 'home', component: HomePageComponent, canActivate:[authGuard] },
  { path: 'tracking', component: TrackingPageComponent, canActivate:[authGuard] },
  { path: 'request-pickup', component: RequestPickupPageComponent, canActivate:[authGuard] },
  { path: 'pickup-history', component: PickUpHistoryPageComponent, canActivate:[authGuard] },
  { path: 'account', component: AccountPageComponent, canActivate:[authGuard] },
  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
