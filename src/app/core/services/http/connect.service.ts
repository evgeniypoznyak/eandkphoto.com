import { Injectable } from '@angular/core';
import { OptionsService } from '../options.service';
import { LaravelService } from './laravel.service';
import { FirebaseService } from './firebase.service';

@Injectable()
export class ConnectService {

  constructor(private optionsService: OptionsService,
              private laravelService: LaravelService,
              private firebaseService: FirebaseService) { }


  getOneSliderItem(id: number) {
    switch (this.optionsService.base) {
      case 'laravel':
        return this.laravelService.getOneSlider(+id);
        break;
      case 'firebase':
        // return this.firebaseService.getOneSlider(+id);
        break;
    }
  }

}
