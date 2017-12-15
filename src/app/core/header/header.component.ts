import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../services/options.service';
import { LoginService } from '../services/login.service';
import { ConnectService } from '../services/http/connect.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./style.scss', './header.component.css'],

})
export class HeaderComponent implements OnInit {

  menu = this._options.menu;
  admin = this._options.menu.admin;
  isAuth = false;

  constructor(private _options: OptionsService, private _loginService: LoginService, private _connect: ConnectService) { }

  ngOnInit() {
    this._connect.worker.subAuth.subscribe((res) => {
      this.isAuth = res;
    }, (err) =>{
      console.log(err);
    })

    this._connect.worker.subAuth.subscribe((res)=>{
      this.isAuth = res;
    }, (err) => {
      console.log(err);
    })

  }


  onLogOut(){
    this.isAuth = false;
    this._connect.onLogOut();
  }


}
