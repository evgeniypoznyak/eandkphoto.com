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

  addEvent(body){
    return this.worker.addEvent(body);
  }

  onCreateUser(username, email, password) {
    return this.worker.onCreateUser(username, email, password);
  }

  isAuth(){
    this.worker.isAuth();

    // true or false
    return this.worker.subAuth;
  }

  refreshToken(){
    return this.worker.refreshToken();
  }

}
