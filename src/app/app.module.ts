import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { Error404Module } from './error404/error404.module';
import { AppRoutingModule } from './app-routing.module';
import {AuthGuardService} from "./core/services/auth-guard.service";
import {LaravelService} from "./core/services/http/laravel.service";
import {LoginService} from "./core/services/login.service";
import {EventResolverService} from "./events/event-resolver.service";
import {SliderService} from "./core/slider/slider.service";
import {ModalService} from "./shared/modal/modal.service";
import {OptionsService} from "./core/services/options.service";
import {UploadService} from "./core/services/upload.service";
import {ConnectService} from "./core/services/http/connect.service";
import {EventsService} from "./core/services/events.service";
import {FirebaseService} from "./core/services/http/firebase.service";
import {PortfolioResolverService} from "./portfolio/portfolio-resolver.service";
import {PortfolioService} from "./portfolio/portfolio.service";
import {AdminSliderListResolverService} from "./admin/admin-slider/admin-slider-list/admin-slider-list-resolver.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    Error404Module,
  ],
  providers: [
    EventsService,
    SliderService,
    ModalService,
    OptionsService,
    ConnectService,
    FirebaseService,
    LaravelService,
    UploadService,
    LoginService,
    EventResolverService,
    AuthGuardService,
    PortfolioResolverService,
    PortfolioService,
    AdminSliderListResolverService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
