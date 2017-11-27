import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { OptionsService } from '../options.service';

@Injectable()
export class LaravelService {

  api = this._options.api;
  private headerGetOptions = this.api.optHeaders.headersForGet;

  constructor(private _http: HttpClient, private _options: OptionsService) { }

  getOneSlider(id: number) {
    return this._http.get<any[]>(this.api.sliderApi + id, this.headerGetOptions)
      .map(response => {
      return response
      })
      .do(data => {
      return data
      });
  }

}
