import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ConnectService } from '../services/http/connect.service';
import { Subscription } from 'rxjs/Subscription';
import { HomeService } from './home.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessengerService } from '../services/messenger.service';

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

  isSessionExpired: boolean = this._connect.isTokenExpired();
  editorOpen: boolean = false;
  newsToEdit: any = 'poop';
  newsForm: FormGroup;

  subscriptionAuth: Subscription;


  showButtonScrollToTop: boolean = false;


  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event) {
    this.renderNews();
    this.addRemoveClassOnScroll(this.getScrollTop())
    //this.renderMenuOnScroll(this.getScrollTop());
  }


  constructor(private _connect: ConnectService,
              private _home: HomeService,
              private _msg: MessengerService) {
  }


  ngOnInit() {
    this.eventsSubscription = this._connect.getEvents().subscribe((events) => {
      if (events.news) {
        this.news = events.news;
        if (this.news) {
          this.pushToNews(3);
          this.fetched = true;
        }
      }
    });

    this.subscriptionAuth = this._connect.subAuth().subscribe((bol: boolean) => {
      this.isSessionExpired = !bol;
    })


  }


  getDocumentHeight() {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(
      body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight
    );
  };


  onNewsItemEdit(index) {
    this.newsForm = new FormGroup({
      'eventName': new FormControl(this.news[index].event.eventName, [Validators.required]),
      'description': new FormControl(this.news[index].event.description, [Validators.required]),
      'location': new FormControl(this.news[index].event.location, [Validators.required]),
    });

    this.newsToEdit = index;
  }

  onNewsSave(index) {

    if (this.newsForm.valid) {
      let data = {
        'id': this.news[index].event.id,
        'eventName': this.newsForm.value.eventName,
        'description': this.newsForm.value.description,
        'location': this.newsForm.value.location,
      }

      this._connect.updateEvent(data).subscribe((response) => {
        this.news[index].event.description = response.event.description
        this.news[index].event.eventName = response.event.eventName
        this.newsToEdit = 'poop';
        this.newsForm.reset();
        this._msg.message.next({ type: 'success', message: 'Event Updated!' })
      }, (err) => {
        this._msg.message.next({ type: 'danger', message: 'Error during event updating' })
        console.log('error! ', err);
      })


    }


  }


  onNewsDelete(index) {
    this._connect.deleteEvent(this.news[index].event.id);
    this.newsArray.splice(index, 1);
    this.newsToEdit = 'poop';
  }

  onNewsCancel() {
    this.newsToEdit = 'poop';
  }

  getScrollTop() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body).scrollTop;
    // window.pageYOffset || document.documentElement.showButtonScrollToTop || document.body.showButtonScrollToTop || 0;
  }


  pushToNews(iter) {
    for (let i = 0; i < iter; i++) {
      if (this.news.length > this.newsArray.length) {
        this.newsArray.push(this.news[this.newsIndex]);
        this.newsIndex++;
      }

    }

  }

  renderNews() {
    if (this.news) {
      if (this.getScrollTop() < this.getDocumentHeight() - window.innerHeight - 200) {
        return
      }
      else {
        this.pushToNews(3);
      }
      ;
    }
  }

  scrollToTop() {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(this.scrollToTop.bind(this));
      window.scrollTo(0, currentScroll - (currentScroll / 5));
    }
    this.showButtonScrollToTop = false;
  }




  addRemoveClassOnScroll(scroll) {
    if (scroll > 200) {
      document.getElementById('menu-holder').className = 'menu-holder';
      this.showButtonScrollToTop = true;
    } else {
      document.getElementById('menu-holder').className = '';
      this.showButtonScrollToTop = false;
    }
  }


  ngOnDestroy() {
    window.onscroll = null;
    this.subscriptionAuth.unsubscribe();
  }


}
