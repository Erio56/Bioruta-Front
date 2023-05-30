import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackingPageComponent } from './tracking-page/tracking-page.component';
import { NavbarComponent } from '../home/components/navbar/navbar.component';
import { HomeModule } from '../home/home.module';
import { TrackingProgressComponent } from './components/tracking-progress/tracking-progress.component';
import { TrackingHistorysComponent } from './components/tracking-history/tracking-history.component';


@NgModule({
    declarations: [
        TrackingPageComponent,
        TrackingProgressComponent,
        TrackingHistorysComponent
    ],
    exports: [ 
      TrackingPageComponent,
    ],
    imports: [
        CommonModule,
        HomeModule
    ]
})
export class TrackingModule { }
