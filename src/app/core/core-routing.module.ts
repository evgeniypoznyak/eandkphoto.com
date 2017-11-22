import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'events', loadChildren: '../events/events.module#EventsModule'}, // lazyload
  {path: 'portfolio', loadChildren: '../portfolio/portfolio.module#PortfolioModule'}, // lazyload
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
