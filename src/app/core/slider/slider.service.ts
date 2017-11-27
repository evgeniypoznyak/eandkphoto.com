import { Injectable } from '@angular/core';

import 'rxjs/Rx';
import { ConnectService } from '../services/http/connect.service';


@Injectable()
export class SliderService {

  constructor(private connectService: ConnectService) {}

  getSliderById(id: number) {
    return this.connectService.getOneSliderItem(+id);
  }

}
