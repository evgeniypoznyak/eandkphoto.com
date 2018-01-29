import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {OptionsService} from "../../core/services/options.service";
import {LoginService} from "../../core/services/login.service";
import {ConnectService} from "../../core/services/http/connect.service";
import {ModalService} from "../modal/modal.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./style.scss', './header.component.css'],

})
export class HeaderComponent implements OnInit, OnDestroy {

  menu = this._options.menu;
  adminMenu = this._options.menu.admin;
  isAuth = this._loginService.staticLogin;
  fetched: boolean = false;
  eventsSubscription: Subscription;
  subAuthSubscription: Subscription;
  hidden: boolean = true;
  removeCheck = false;


  constructor(private _options: OptionsService,
              private _loginService: LoginService,
              private _connect: ConnectService,
              private modalService: ModalService) {
  }

  ngOnInit() {



    // console.log(this._loginService.staticLogin);
    // this._loginService.isAuth.subscribe((data) => {
    //   console.log(data);
    // })

    // отдельным потоком, потому что идет авторизация токена
    // setTimeout(() => {
    //   this.subAuthSubscription = this._connect.isAuth().subscribe((res) => {
    //     if (res.token.length > 10) {
    //       this.isAuth = true;
    //     } else {
    //       this.isAuth = false;
    //     }
    //   }, (err) => {
    //     console.log(err);
    //   });
    // }, 2000);
    //
    // this._connect.subAuth().subscribe((bol) => {
    //   this.isAuth = bol;
    // });


    // То что я загружаю через фолдер
    this.eventsSubscription = this._connect.getEvents().subscribe((events) => {
      this.menu.events = events.menu;
      //    console.log(data);
      this.fetched = true;
    //  console.log(this.menu.events);
    });
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
   // this.subAuthSubscription.unsubscribe();
  }

  onLogOut() {
    this.isAuth = false;
    this._connect.onLogOut();
  }


  openModal(choice) {
    const res = { choice: choice, isOpen: true }
    this.modalService.open.next(res);
  }

  unCheck(){
    this.removeCheck = !this.removeCheck;
  }

}
