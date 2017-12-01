import { Injectable } from '@angular/core';
import { OptionsService } from '../options.service';
import { LaravelService } from './laravel.service';
import { FirebaseService } from './firebase.service';

@Injectable()
export class ConnectService {

  base = this._optionsService.base;

  worker: any;

  constructor(private _optionsService: OptionsService,
              private _laravelService: LaravelService,
              private _firebaseService: FirebaseService) {

    switch (this._optionsService.base) {
      case 'laravel':
        this.worker = _laravelService;
        break;
      case 'firebase':
        this.worker = _firebaseService;
        break;
    }
  }

  getOneSliderItem(id: number) {
    return this.worker.getOneSliderItem(id)
  }

  getEvents() {
    return this.worker.getEvents();
  }

}
