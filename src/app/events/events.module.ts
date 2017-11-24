import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventComponent } from './event/event.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
  ],
  declarations: [EventsComponent, EventComponent]
})
export class EventsModule { }
