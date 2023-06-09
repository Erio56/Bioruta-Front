import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuOptionsComponent } from './components/menu-options/menu-options.component';
import { MenuOptionComponent } from './components/menu-option/menu-option.component';
import { MenuTrackingComponent } from './components/menu-tracking/menu-tracking.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePageComponent,
    NavbarComponent,
    MenuOptionsComponent,
    MenuOptionComponent,
    MenuTrackingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomePageComponent,
    NavbarComponent,
    MenuOptionsComponent
  ]
})
export class HomeModule { }
