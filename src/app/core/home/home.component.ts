import {Component, OnDestroy, OnInit} from '@angular/core';
import {ConnectService} from "../services/http/connect.service";
import {Subscription} from "rxjs/Subscription";
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  eventsSubscription: Subscription;
  news;
  fetched: boolean = false;
  base64Images = this._home.image;

  newsArray = [];
  newsIndex = 0;

  scrollTop: boolean = false;

  constructor(private _connect: ConnectService, private _home: HomeService) {
  }

  ngOnInit() {
    this.eventsSubscription = this._connect.getEvents().subscribe((events) => {

      if (events.news) {
        this.news = events.news;
        this.pushToNews(3);
        this.fetched = true;
      }

    });

    window.onscroll = () => {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("menu-holder").className = "menu-holder";
        this.scrollTop = true;
      } else {
        document.getElementById("menu-holder").className = "";
      }
      this.renderNews();
    }
  }

  getDocumentHeight() {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(
      body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight
    );
  };

  getScrollTop() {
    return (window.pageYOffset !== undefined)
      ? window.pageYOffset
      : (document.documentElement  || document.body).scrollTop;
  }


  pushToNews(iter){
    for (let i = 0; i < iter; i++) {
      if (this.news.length > this.newsArray.length) {
        this.newsArray.push(this.news[this.newsIndex]);
        this.newsIndex++;
      }

    }

  }

  renderNews() {
    if (this.getScrollTop() < this.getDocumentHeight() - window.innerHeight - 200) {
      return
    }
    else {
      this.pushToNews(3);
    };

  }

  scrollToTop(){
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(this.scrollToTop.bind(this));
      window.scrollTo (0,currentScroll - (currentScroll/5));
    }
    this.scrollTop = false;
  }


  ngOnDestroy() {
    window.onscroll = null;
  }


}
