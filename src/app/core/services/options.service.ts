import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class OptionsService {

  base = 'laravel';

  laravel = {
    generalApi: '',
    sliderApi: 'http://data.eandkphoto.loc/api/slider/',
    optHeaders: {
      get: {
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

  api;

  firebase = {
    generalApi: '',
    sliderApi: '',
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


  checkBase() {
    return this.base;
  }

}
