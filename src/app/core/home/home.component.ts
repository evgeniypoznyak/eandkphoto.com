import {Component, OnDestroy, OnInit} from '@angular/core';
import {ConnectService} from "../services/http/connect.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  eventsSubscription: Subscription;
  news;
  fetched: boolean = false;
  firstRow;
  secondRow;
  thirdRow;

  constructor(private _connect: ConnectService) {
  }

  ngOnInit() {
    this.eventsSubscription = this._connect.getEvents().subscribe((events) => {

      if (events.news) {
        this.news = events.news;
        this.fetched = true;

        this.firstRow = this.news.map((element, index) => {
          if (index < 3) {
            return element
          }
        });

        this.secondRow = this.news.map((element, index) => {
          if (index > 2 && index < 6) {
            return element
          }
        });

        this.thirdRow = this.news.map((element, index) => {
          if (index > 5 && index < 9) {
            return element
          }
        });
      }

    });

    window.onscroll = () => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 200) {
        document.getElementById("menu-holder").className = "menu-holder";
      } else {
        document.getElementById("menu-holder").className = "";
      }
    }
  }

  ngOnDestroy () {
    window.onscroll = null;
  }





}
