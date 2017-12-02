import { Injectable } from '@angular/core';
import { ConnectService } from './http/connect.service';
import { OptionsService } from './options.service';

@Injectable()
export class MenuService {

  menu = this._options.menu;
  fetched: boolean = false;

  constructor(private _connect: ConnectService, private _options: OptionsService) {

    this._connect.getEvents().subscribe((data)=>{
      this.menu.events = data;
      this.fetched = true;
      console.log(this.menu.events);
    })

  }

}
