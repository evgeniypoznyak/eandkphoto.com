import {Component, OnDestroy, OnInit} from '@angular/core';
import {OptionsService} from '../services/options.service';
import {LoginService} from '../services/login.service';
import {ConnectService} from '../services/http/connect.service';
import {Subscription} from 'rxjs/Subscription';
import {ModalService} from "../modal/modal.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./style.scss', './header.component.css'],

})
export class HeaderComponent implements OnInit, OnDestroy {

  menu = this._options.menu;
  admin = this._options.menu.admin;
  isAuth = false;
  fetched: boolean = false;
  eventsSubscription: Subscription;
  subAuthSubscription: Subscription;
  hidden: boolean = true;


  constructor(private _options: OptionsService,
              private _loginService: LoginService,
              private _connect: ConnectService,
              private modalService: ModalService) {
  }

  ngOnInit() {

    // отдельным потоком, потому что идет авторизация токена
    setTimeout(() => {
      this._connect.isAuth().subscribe((res) => {
        if (res.token.length > 10) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }, (err) => {
        console.log(err);
      });
    }, 2000);

    this._connect.subAuth().subscribe((bol) => {
      this.isAuth = bol;
    });


    // То что я загружаю через фолдер
    this.eventsSubscription = this._connect.getEvents().subscribe((data) => {
      this.menu.events = data;
      //    console.log(data);
      this.fetched = true;
    //  console.log(this.menu.events);
    });
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  onLogOut() {
    this.isAuth = false;
    this._connect.onLogOut();
  }


  openModal(choice) {
    const res = { choice: choice, isOpen: true }
    this.modalService.open.next(res);
  }

}
