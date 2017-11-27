import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OptionsService } from '../options.service';

@Injectable()
export class LaravelService {
  api = this._options.api;


  constructor(private _http: HttpClient, private _options: OptionsService) { }

  getOneSlider(id: number) {
  }

}
