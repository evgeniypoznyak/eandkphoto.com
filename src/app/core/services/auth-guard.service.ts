import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ConnectService } from './http/connect.service';
// import { Subscription } from 'rxjs/Subscription';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _connect: ConnectService, private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<boolean> | boolean {

    return this._connect.canActivatePromise()
      .then(value => {
      //console.log(value);
      if (value != false) {
        this._connect.subcription.unsubscribe();
        return true;
      } else {
        this._connect.subcription.unsubscribe();
        this._router.navigate(['/']);
        return false
      }
    }, reason => {
      this._connect.subcription.unsubscribe();
      this._router.navigate(['/']);
      return false;
    });

  }

}
