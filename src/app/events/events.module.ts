import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventComponent } from './event/event.component';
//import { CoreModule } from '../core/core.module';
import { YearComponent } from './year/year.component';
import { MonthComponent } from './month/month.component';
import {SharedModule} from "../shared/shared.module";
import {CoreModule} from "../core/core.module";

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    //SharedModule,
   // CoreModule
  ],
  declarations: [EventsComponent, EventComponent, YearComponent, MonthComponent]
})
export class EventsModule { }
