import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';

const routes: Routes = [
  {
    path: '', component: PortfolioComponent,
    children: [
      { path: ':category', component: PortfolioItemComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {}
