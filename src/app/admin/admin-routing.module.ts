import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EventsFormComponent} from './events-form/events-form.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {AuthGuardService} from '../core/services/auth-guard.service';
import {PortfolioFormComponent} from "./portfolio-form/portfolio-form.component";
import {AdminComponent} from "./admin/admin.component";
import {AdminSliderNewComponent} from "./admin-slider/admin-slider-new/admin-slider-new.component";
import {AdminSliderListComponent} from "./admin-slider/admin-slider-list/admin-slider-list.component";
import {AdminSliderIdComponent} from "./admin-slider/admin-slider-list/admin-slider-id/admin-slider-id.component";
import {AdminSliderListResolverService} from "./admin-slider/admin-slider-list/admin-slider-list-resolver.service";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      {path: 'create-event', component: EventsFormComponent},
      {path: 'create-user', component: CreateUserComponent},
      {path: 'add-portfolio', component: PortfolioFormComponent},
      {
        path: 'slider', resolve: {picturesFromServer: AdminSliderListResolverService},
        children: [
          { path: 'new', component: AdminSliderNewComponent},
          {
            path: 'list',
            component: AdminSliderListComponent,
            children: [
              {path: ':id', component: AdminSliderIdComponent}
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
