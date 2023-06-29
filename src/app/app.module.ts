import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { TrackingModule } from './tracking/tracking.module';
import { RequestPickupModule } from './request-pickup/request-pickup.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JWTInterceptor } from './interceptors/autorization-interceptor.interceptor';
import { AccountModule } from './account/account.module';
import { PickupHistoryModule } from './pickup-history/pickup-history.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    TrackingModule,
    RequestPickupModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AccountModule,
    PickupHistoryModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
