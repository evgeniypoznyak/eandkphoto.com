import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsFormComponent } from './events-form/events-form.component';

const routes: Routes = [
  {path: '', children: [
      {path: 'form-events', component: EventsFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
