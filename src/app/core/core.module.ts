import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
//import { Error404Module } from '../error404/error404.module';

@NgModule({
imports: [
    CommonModule,
    HttpModule,
    BrowserAnimationsModule,
    CoreRoutingModule,
    //Error404Module
  ],
  declarations: [HomeComponent, HeaderComponent, FooterComponent, SliderComponent]
})
export class CoreModule { }
