import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { CategoryComponent} from './category/category.component';

const routes: Routes = [
  {
    path: '', component: PortfolioComponent,
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
