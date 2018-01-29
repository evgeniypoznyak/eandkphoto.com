import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";
import {PortfolioService} from "../portfolio.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {
  portfolio: any = false;
  category: any;
  active: number = 0;
  total = 20;
  interval: any;

  constructor(private _route: ActivatedRoute, private portfolioService: PortfolioService) {

  }

  ngOnInit() {
    this._route.params.subscribe((data: Data) => {
      this.smoothscroll();
      this.portfolio = this.cutPortfolio(this.portfolioService.portfolio, data.category);
      if (this.portfolio != false) {
        this.category = data.category;
        this.total = this.portfolio[data.category].large.length
        this.portfolioService.category = data.category;
        this.active = 0;
        clearInterval(this.interval);
        this.sliderRun();
      }

    })


  }


  sliderRun() {
    this.interval = setInterval(() => {
      this.onNext();
    }, 3000)
  }


  onNext() {
    clearInterval(this.interval);
    if (this.active + 1 > this.total - 1) {
      this.active = 0
    } else {
      this.active++;
    }

  }

  onPrev() {
    clearInterval(this.interval);
    if (this.active - 1 < 0) {
      this.active = this.total - 1;
    } else {
      this.active--
    }
  }


  cutPortfolio(portfolios, category) {
    if (Object.keys(portfolios).filter(key => category == key).length == 0) {
      return false;
    }
    const filtered = Object.keys(portfolios)
      .filter(key => category == key)
      .reduce((obj, key) => {
        obj[key] = portfolios[category];
        return obj;
      }, {});
    return filtered;
  }


  smoothscroll(){
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(this.smoothscroll.bind(this));
      window.scrollTo (0,currentScroll - (currentScroll/5));
    }
  }


  ngOnDestroy() {
    this.portfolioService.isSmall.next(false);
    clearInterval(this.interval);
  }

}
