import { Injectable } from '@angular/core';
import { ConnectService } from './http/connect.service';
import { OptionsService } from './options.service';

@Injectable()
export class MenuService {

  menu = this._options.menu;

  constructor(private _connectService: ConnectService, private _options: OptionsService) {

    this._connectService.getEvents().subscribe((data)=>{
      this.menu.events = data;
      console.log(this.menu);
    })

  }

}
