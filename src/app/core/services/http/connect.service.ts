import { Injectable } from '@angular/core';
import { OptionsService } from '../options.service';
import { LaravelService } from './laravel.service';
import { FirebaseService } from './firebase.service';

@Injectable()
export class ConnectService {

  base = this._optionsService.base;

  constructor(private _optionsService: OptionsService,
              private laravelService: LaravelService,
              private firebaseService: FirebaseService) { }


  getOneSliderItem(id: number) {

    if (this.base === 'laravel') {
      return this.laravelService.getOneSliderItem(id)
    }
    else if (this.base === 'firebase') {
      //return this.firebaseService.getOneSliderItem(id)
    }

    //else return false;

    // switch (this.base) {
    //   case 'laravel':
    //     return this.laravelService.getOneSliderItem(id)
    //     break;
    //   case 'firebase':
    //     break;
    // }

  }

}
