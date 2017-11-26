import { Injectable } from '@angular/core';

import 'rxjs/Rx';
import { ConnectService } from '../services/http/connect.service';


@Injectable()
export class SliderService {

  constructor( private _connect: ConnectService) {}

  getSliderById(id: number) {
    return this._connect.getOneSliderItem(+id);
  }

}
