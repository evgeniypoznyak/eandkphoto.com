import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { EventsFormComponent } from './events-form/events-form.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    EventsFormComponent,
    CreateUserComponent,
  ]
})
export class AdminModule { }
