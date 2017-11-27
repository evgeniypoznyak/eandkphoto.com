import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class OptionsService {

  base = 'laravel';

  laravel = {
    generalApi: '',
    sliderApi: 'http://data.eandkphoto.loc/api/slider/',
    optHeaders: {
      headersForGet: {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': ['XMLHttpRequest'],
          }
          // можно массив передавать, только надо настроить Cors.php
        )
      },
      headersForPost: {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': ['XMLHttpRequest']
          }
          // можно массив передавать, только надо настроить Cors.php
        )
      },
      headersForPut: {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': ['XMLHttpRequest']
          }
          // можно массив передавать, только надо настроить Cors.php
        )
      },
      headersForDelete: {
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
    optHeaders: {
      headersForGet: {
        headers: new HttpHeaders(
          {
            // 'Content-Type': 'application/json',
            // 'X-Requested-With': ['XMLHttpRequest'],
          }
          // можно массив передавать, только надо настроить Cors.php
        )
      },
      headersForPost: {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': ['XMLHttpRequest']
          }
          // можно массив передавать, только надо настроить Cors.php
        )
      },
      headersForPut: {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': ['XMLHttpRequest']
          }
          // можно массив передавать, только надо настроить Cors.php
        )
      },
      headersForDelete: {
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
