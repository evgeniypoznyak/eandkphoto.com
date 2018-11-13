import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class OptionsService {

  base = 'laravel';
 // homeURL = 'http://data.eandkphoto.loc/api';
 homeURL = 'https://data.eandkphoto.com/api';

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
    },
    admin: [
      {name: 'Create Event', path: '/admin/create-event'},
      {name: 'Add Portfolio', path: '/admin/add-portfolio'},
      {name: 'Create User', path: '/admin/create-user'},
      {name: 'Create Slider', path: '/admin/slider/new'},
      {name: 'List Sliders', path: '/admin/slider/list'},
      {name: 'Edit Slider', path: '/admin/slider/list/1'},
    ],
    events: {},
  }

  laravel = {
    generalApi: '',
    sliderApi: this.homeURL + '/slider',
    picturesApi: this.homeURL + '/pictures',
    eventsApi: this.homeURL + '/events',
    portfolioApi: this.homeURL + '/portfolio',
    loginUserApi: this.homeURL + '/login',
    createUserApi: this.homeURL + '/create-user',
    refreshTokenApi: this.homeURL + '/refresh-token',
    contactApi: this.homeURL + '/contact',
    downloadImageApi: this.homeURL + '/download',
    optHeaders: {
      optGet: {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': ['XMLHttpRequest']
          }
        )
      },
      optPut: {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': ['XMLHttpRequest']
          }
        )
      },
      optPost: {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': ['XMLHttpRequest']
          }
        )
      },
    }
  }


  firebase = {
    generalApi: '',
    sliderApi: '',
    eventsApi: '',
  }


 animatedMenu = {
    portfolio: {
      active: false,
      scrollFromTop: 300,
      cssClass: 'animate-menu-item'
    },
    contact: {
      active: false,
      scrollFromTop: 600,
      cssClass: 'animate-menu-item'
    },
    about: {
      active: false,
      scrollFromTop: 900,
      cssClass: 'animate-menu-item'
    },
    social: {
      active: false,
      scrollFromTop: 1200,
      cssClass: 'animate-menu-item'
    }
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
