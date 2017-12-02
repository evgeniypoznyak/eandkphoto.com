import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  declarations: [PortfolioComponent, PortfolioItemComponent]
})
export class PortfolioModule { }
