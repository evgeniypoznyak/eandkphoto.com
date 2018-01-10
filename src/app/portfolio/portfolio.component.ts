import {Component, OnDestroy, OnInit} from '@angular/core';
import {OptionsService} from "../core/services/options.service";
import {ConnectService} from "../core/services/http/connect.service";
import {ActivatedRoute, Data} from "@angular/router";
import {PortfolioService} from "./portfolio.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  //menu = this._opt.menu;
  portfolios = false;
  isSmall = false;
  isSmallSub: Subscription;

  constructor(private _opt: OptionsService,
              private _con: ConnectService,
              private _route: ActivatedRoute,
              private portfolioService: PortfolioService) {
  }

  ngOnInit() {

    this._route.data.subscribe((data: Data) => {

      //  console.log(data);

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
