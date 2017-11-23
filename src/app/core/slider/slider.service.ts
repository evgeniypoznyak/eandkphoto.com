import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/Rx';
import { Router } from '@angular/router';


@Injectable()
export class SliderService {

  private _adiAddress: string = 'http://data.eandkphoto.loc/api/slider/';

  constructor(private _http: HttpClient, private router: Router) {}

  getSliderById(id: number) {

    const httpOptions = {
      headers: new HttpHeaders(
        {'Content-Type': 'application/json','X-Requested-With': ['XMLHttpRequest']}
          // можно массив передавать, только надо настроить Cors.php
        )
    };

    return this._http.get<any[]>(this._adiAddress + id, httpOptions).map(response => {
      return response
    }).do(
      (data) => {
        //  console.log(data);
      });
  }

}
