import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {ConnectService} from "../../../core/services/http/connect.service";

@Injectable()
export class AdminSliderListResolverService implements Resolve<any> {

  constructor(private _connect: ConnectService, private _route: ActivatedRoute){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | boolean {
    return this._connect.getPictures();
  }

}
