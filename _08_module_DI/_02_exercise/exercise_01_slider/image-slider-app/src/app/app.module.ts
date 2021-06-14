import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageSliderModule } from './image-slider/image-slider.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
