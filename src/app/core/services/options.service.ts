import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class OptionsService {

  base = 'laravel';

  api;

  menu = {
    home: {
      name: 'Home',
      path: '/',
      animation: ''
    },
    // about: {
    //   name: 'About',
    //   path: '/about',
    //   animation: ''
    // },
    contact: {
      name: 'Contact',
      path: '/contact',
      animation: ''
    },
    portfolio: {
      portraits: { name: 'Portraits', path: '/portfolio/portraits' },
      family: { name: 'Family', path: '/portfolio/family' },
      name: 'Portfolio',
      path: '/portfolio',
      animation: ''
    },
    events: {}
  }


  laravel = {
    generalApi: '',
    sliderApi: 'http://data.eandkphoto.loc/api/slider/',
    eventsApi: 'http://data.eandkphoto.loc/api/events/',
    optHeaders: {
      optGet: {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': ['XMLHttpRequest']
          }
          // можно массив передавать, только надо настроить Cors.php
        )
      }
    }
  }


  firebase = {
    generalApi: '',
    sliderApi: '',
    eventsApi: '',
  }


  constructor() {
    switch (this.base) {
      case 'laravel':
        this.api = this.laravel;
        break;
      case 'firebase':
        this.api = this.firebase;
        break;
      default:
        this.api = false;
    }

  }

}
