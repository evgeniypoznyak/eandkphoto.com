import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsFormComponent } from './events-form/events-form.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AuthGuardService } from '../core/services/auth-guard.service';

const routes: Routes = [
  {path: '',
    canActivate: [AuthGuardService],
    children: [
      {path: 'create-event', component: EventsFormComponent},
      {path: 'create-user', component: CreateUserComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }