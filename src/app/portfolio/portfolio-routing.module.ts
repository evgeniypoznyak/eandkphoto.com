import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { CategoryComponent} from './category/category.component';
import {PortfolioResolverService} from "./portfolio-resolver.service";

const routes: Routes = [
  {
    path: '', component: PortfolioComponent,  resolve: { portfoliosFromServer: PortfolioResolverService},
    children: [
      { path: ':category', component: CategoryComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {}
