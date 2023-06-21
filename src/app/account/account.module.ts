import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountPageComponent } from './account-page/account-page.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    AccountPageComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports: [
    AccountPageComponent
  ]
})
export class AccountModule { }
