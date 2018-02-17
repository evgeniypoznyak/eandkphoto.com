import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';
import {SharedModule} from "../shared/shared.module";
import { HomeEditComponent } from './home/home-edit/home-edit.component';
import { MessengerComponent } from './messenger/messenger.component';


@NgModule({

  declarations: [
    HomeComponent,
    FooterComponent,
    SliderComponent,
    LoginComponent,
    HomeEditComponent,
    MessengerComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    CoreRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FooterComponent,
    HomeComponent,
    SharedModule,
    MessengerComponent,
  ],
  providers: [

  ],

})
export class CoreModule {}
