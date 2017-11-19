import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const mainRoutes: Routes = [
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppMainRoutesModule {

}
