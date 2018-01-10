import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { EventsFormComponent } from './events-form/events-form.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { PortfolioFormComponent } from './portfolio-form/portfolio-form.component';
import { AdminComponent } from './admin/admin.component';
import {SharedModule} from "../shared/shared.module";
import { AdminSliderNewComponent } from './admin-slider/admin-slider-new/admin-slider-new.component';
import { AdminSliderListComponent } from './admin-slider/admin-slider-list/admin-slider-list.component';
import { AdminSliderIdComponent } from './admin-slider/admin-slider-list/admin-slider-id/admin-slider-id.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    EventsFormComponent,
    CreateUserComponent,
    PortfolioFormComponent,
    AdminComponent,
    AdminSliderNewComponent,
    AdminSliderListComponent,
    AdminSliderIdComponent,
  ]
})
export class AdminModule { }
