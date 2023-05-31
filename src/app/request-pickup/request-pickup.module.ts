import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestPickupPageComponent } from './request-pickup-page/request-pickup-page.component';
import { HomeModule } from '../home/home.module';
import { PickUpFormComponent } from './components/pick-up-form/pick-up-form.component';
import { RecycleSelectorComponent } from './components/recycle-selector/recycle-selector.component';
import { AddressSelectorComponent } from './components/address-selector/address-selector.component';
import { AddressRegisterComponent } from './components/address-register/address-register.component';
import { NewMaterialComponent } from './components/modals/new-material/new-material.component';
import { FormsModule } from '@angular/forms';
import { MaterialComponent } from './components/material/material.component';



@NgModule({
  declarations: [
    RequestPickupPageComponent,
    PickUpFormComponent,
    RecycleSelectorComponent,
    AddressSelectorComponent,
    AddressRegisterComponent,
    NewMaterialComponent,
    MaterialComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    FormsModule
  ],
  exports:[
    RequestPickupPageComponent
  ]
})
export class RequestPickupModule { }
