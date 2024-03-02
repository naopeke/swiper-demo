import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Swiper2Component } from './pages/swiper2/swiper2.component';

@NgModule({
  declarations: [
    AppComponent,
    Swiper2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
