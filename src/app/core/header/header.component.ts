import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../services/options.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./style.scss', './header.component.css'],

})
export class HeaderComponent implements OnInit {

  menu = this._options.menu;
  admin = this._options.menu.admin;

  constructor(private _options: OptionsService) { }

  ngOnInit() {

  }


}
