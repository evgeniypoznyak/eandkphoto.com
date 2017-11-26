import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  menu = {
    home: {
      name: 'Home',
      path: '/',
      animation: ''
    },
    about: {
      name: 'About',
      path: '/about',
      animation: ''
    },
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
    events: {
      2016: {
        january: [{name: '', path: ''}],
        february: [{name: '', path: ''}],
        march: [{name: '', path: ''}],
        april: [{name: '', path: ''}],
        may: [{name: '', path: ''}],
        june: [{name: '', path: ''}],
        july: [{name: '', path: ''}],
        august: [{name: '', path: ''}],
        september: [{name: '', path: ''}],
        october: [{name: '', path: ''}],
        november: [{name: '', path: ''}],
        december: [{name: '', path: ''}]
      },
      2017: {
        january: [{name: '', path: ''}],
        february: [{name: '', path: ''}],
        march: [{name: '', path: ''}],
        april: [{name: '', path: ''}],
        may: [{name: '', path: ''}],
        june: [{name: '', path: ''}],
        july: [{name: '', path: ''}],
        august: [{name: '', path: ''}],
        september: [{name: '', path: ''}],
        october: [{name: '', path: ''}],
        november: [{name: '', path: ''}],
        december: [{name: '', path: ''}]
      },
      2018: {
        january: [{name: '', path: ''}],
        february: [{name: '', path: ''}],
        march: [{name: '', path: ''}],
        april: [{name: '', path: ''}],
        may: [{name: '', path: ''}],
        june: [{name: '', path: ''}],
        july: [{name: '', path: ''}],
        august: [{name: '', path: ''}],
        september: [{name: '', path: ''}],
        october: [{name: '', path: ''}],
        november: [{name: '', path: ''}],
        december: [{name: '', path: ''}]
      },
      animation: '',
      path: 'events'
    },
  }

  constructor() { }

}
