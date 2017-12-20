import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';
import { EventsService } from './services/events.service';
import { PortfolioService } from './services/portfolio.service';
import { ModalService } from './modal/modal.service';
import { ConnectService } from './services/http/connect.service';
import { FirebaseService } from './services/http/firebase.service';
import { LaravelService } from './services/http/laravel.service';
import { SliderService } from './slider/slider.service';
import { OptionsService } from './services/options.service';
import { LoginService } from './services/login.service';
import { EventResolverService } from '../events/event-resolver.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UploadService } from './services/upload.service';

import { CleanMonthPipe } from './pipes/clean-month.pipe';
import { ObjectKeysPipe } from './pipes/object.keys.pipe';
import { MakeNamePrettyPipe } from './pipes/make-name-pretty.pipe';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { MultiItemsLvlOneComponent} from './header/multi-items-lvl-one/multi-items-lvl-one.component';
import { ModalComponent } from './modal/modal.component';
import { MultiItemsMonthsComponent } from './modal/multi-items-months/multi-items-months.component';
import { MultiItemsEventsComponent } from './modal/multi-items-events/multi-items-events.component';
import { MultiItemsYearsComponent } from './modal/multi-items-years/multi-items-years.component';
import { LoginComponent } from './login/login.component';
import { EventYearMenuComponent } from './header/event-year-menu/event-year-menu.component';
import { EventMonthMenuComponent } from './header/event-month-menu/event-month-menu.component';
import { EventMenuComponent } from './header/event-menu/event-menu.component';


@NgModule({

  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    MultiItemsLvlOneComponent,
    ModalComponent,
    CleanMonthPipe,
    ObjectKeysPipe,
    MakeNamePrettyPipe,
    MultiItemsMonthsComponent,
    MultiItemsEventsComponent,
    MultiItemsYearsComponent,
    LoginComponent,
    EventYearMenuComponent,
    EventMonthMenuComponent,
    EventMenuComponent,
  ],

  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    CoreRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  providers: [
    EventsService,
    PortfolioService,
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
  ],

})
export class CoreModule {}
