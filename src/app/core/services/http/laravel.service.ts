import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OptionsService } from '../options.service';

@Injectable()
export class LaravelService {
  api = this._options.api;
  httpOptions = this._options.laravel.optHeaders.optGet;

  constructor(private _http: HttpClient, private _options: OptionsService) { }

  getOneSliderItem(id: number) {
    return this._http.get<any[]>(this.api.sliderApi + id, this.httpOptions)
  }

  getEvents() {
    return this._http.get<any[]>(this.api.eventsApi, this.httpOptions)
  }

}
