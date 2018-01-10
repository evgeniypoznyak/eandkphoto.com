import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LoginService {
  isAuth = new Subject();
  staticLogin = false;

  constructor() {
    this.isAuth.subscribe((data: boolean) => {
      this.staticLogin = data;
    })


    if (localStorage.getItem('token')) {
      this.staticLogin = true;
    }



  }

}
