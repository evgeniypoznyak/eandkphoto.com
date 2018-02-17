import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialRoutingModule } from './social-routing.module';
import { SocialComponent } from './social/social.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SocialRoutingModule,
    SharedModule,
  ],
  declarations: [SocialComponent]
})
export class SocialModule { }
