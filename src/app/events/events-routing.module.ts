import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {
    path: '', component: EventsComponent,
    children: [
      { path: ':year/:month/:event', component: EventComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {}
