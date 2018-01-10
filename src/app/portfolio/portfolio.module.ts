import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { CategoryComponent } from './category/category.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule,
  ],
  declarations: [PortfolioComponent, CategoryComponent]
})
export class PortfolioModule { }
