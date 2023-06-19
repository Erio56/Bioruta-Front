import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { authGuard } from './auth/guards/auth-guard';
import { TrackingPageComponent } from './tracking/tracking-page/tracking-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch:'full'},
  { path: 'home', component: HomePageComponent, canActivate:[authGuard] },
  { path: 'register', component: SignInComponent },
  { path: 'tracking', component: TrackingPageComponent, canActivate:[authGuard] },
  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
