import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OptionsService } from '../options.service';

@Injectable()
export class LaravelService {
  api = this._options.api;
  private httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'X-Requested-With': ['XMLHttpRequest']
      }
      // можно массив передавать, только надо настроить Cors.php
    )
  }

  constructor(private _http: HttpClient, private _options: OptionsService) { }

  getOneSlider(id: number) {
    return this._http.get<any[]>(this.api.sliderApi + id, this.httpOptions)
      .map(response => {
      return response
      })
      .do(data => {
      return data
      });
  }

}
