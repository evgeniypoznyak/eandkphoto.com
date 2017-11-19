import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';
import { Error404Module } from '../error404/error404.module';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    CoreRoutingModule,
  ],
  exports: [
    CoreRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Error404Module
  ],
  declarations: [HomeComponent, HeaderComponent, FooterComponent, SliderComponent]
})
export class CoreModule { }
