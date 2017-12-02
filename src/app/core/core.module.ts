import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';
import { EventsService } from './services/events.service';
import { PortfolioService } from './services/portfolio.service';
import { ModalService } from './modal/modal.service';
import { MenuService } from './services/menu.service';
import { ConnectService } from './services/http/connect.service';
import { FirebaseService } from './services/http/firebase.service';
import { LaravelService } from './services/http/laravel.service';
import { SliderService } from './slider/slider.service';
import { OptionsService } from './services/options.service';

import { CleanMonthPipe } from './pipes/clean-month.pipe';
import { ObjectKeysPipe } from './pipes/object.keys.pipe';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { MultiItemsComponent } from './header/multi-items/multi-items.component';
import { ModalComponent } from './modal/modal.component';
import { MultiItemsModalComponent } from './modal/multi-items-modal/multi-items-modal.component';


@NgModule({

  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    MultiItemsComponent,
    ModalComponent,
    CleanMonthPipe,
    ObjectKeysPipe,
    MultiItemsModalComponent,
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
  ],
  providers: [
    EventsService,
    PortfolioService,
    SliderService,
    ModalService,
    MenuService,
    OptionsService,
    ConnectService,
    FirebaseService,
    LaravelService,
  ],

})
export class CoreModule {}
