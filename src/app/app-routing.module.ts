import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }, // lazyload
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' }, // lazyload
  { path: 'events', loadChildren: './events/events.module#EventsModule' }, // lazyload
  { path: 'portfolio', loadChildren: './portfolio/portfolio.module#PortfolioModule' }, // lazyload
  { path: 'about', loadChildren: './about/about.module#AboutModule' }, // lazyload
  { path: 'social', loadChildren: './social/social.module#SocialModule' } // lazyload
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
