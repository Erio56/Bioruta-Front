import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickUpHistoryPageComponent } from './pick-up-history-page/pick-up-history-page.component';
import { TrackingModule } from '../tracking/tracking.module';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    PickUpHistoryPageComponent
  ],
  imports: [
    CommonModule,
    TrackingModule,
    HomeModule
  ],
  exports: [
    PickUpHistoryPageComponent
  ]
})
export class PickupHistoryModule { }
