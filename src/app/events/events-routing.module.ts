import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { YearComponent } from './year/year.component';
import { MonthComponent } from './month/month.component';
import { EventResolverService } from './event-resolver.service';
import {GridEventComponent} from "./grid-event/grid-event.component";

const routes: Routes = [
  {
    path: '', component: EventsComponent,
    children: [
      { path: ':year', component: YearComponent },
      { path: ':year/:month', component: MonthComponent },
      { path: ':year/:month/:event', component: GridEventComponent,
        resolve: { eventsFromServer: EventResolverService }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {}
