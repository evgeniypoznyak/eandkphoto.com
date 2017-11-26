import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';
import { Error404Module } from '../error404/error404.module';

import { EventsService } from './services/events.service';
import { PortfolioService } from './services/portfolio.service';
import { ModalService } from './modal/modal.service';
import { MenuService } from './services/menu.service';
import { ConnectService } from './services/http/connect.service';
import { FirebaseService } from './services/http/firebase.service';
import { LaravelService } from './services/http/laravel.service';
import { SliderService } from './slider/slider.service';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { MultiItemsComponent } from './header/multi-items/multi-items.component';
import { ModalComponent } from './modal/modal.component';
import { OptionsService } from './services/options.service';


@NgModule({

  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    MultiItemsComponent,
    ModalComponent,
  ],

  imports: [
    CommonModule,
    CoreRoutingModule,
  ],
  exports: [
    CoreRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Error404Module
  ],
  providers: [
    EventsService,
    PortfolioService,
    SliderService,
    ModalService,
    MenuService,
    ConnectService,
    FirebaseService,
    LaravelService,
    OptionsService,
  ],

})
export class CoreModule {}
