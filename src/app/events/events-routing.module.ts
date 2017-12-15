import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventComponent } from './event/event.component';
import { YearComponent } from './year/year.component';
import { MonthComponent } from './month/month.component';
import { EventResolverService } from './event-resolver.service';

const routes: Routes = [
  {
    path: '', component: EventsComponent,
    children: [
      { path: ':year', component: YearComponent },
      { path: ':year/:month', component: MonthComponent },
      { path: ':year/:month/:event', component: EventComponent, resolve: {eventResolved: EventResolverService} }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {}
