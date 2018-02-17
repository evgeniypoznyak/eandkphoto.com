import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PortfolioService} from "./portfolio.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  portfolios = false;
  isSmall = false;
  isSmallSub: Subscription;

  constructor( private _route: ActivatedRoute, private portfolioService: PortfolioService) {
  }

  ngOnInit() {

    this._route.data.subscribe((data: any) => {


      this.portfolios = data.portfoliosFromServer.portfolios;
      //    console.log(this.portfolios);
      this.portfolioService.portfolio = this.portfolios;

    })
   this.isSmallSub = this.portfolioService.isSmall.subscribe((res: boolean) => {
      this.isSmall = res;
    })



  }

  ngOnDestroy() {
    this.isSmallSub.unsubscribe();
  }

  onPortfolio() {
    this.portfolioService.isSmall.next(true);
  }

}
