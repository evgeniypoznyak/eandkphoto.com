import { Injectable, OnInit } from '@angular/core';
import { OptionsService } from '../options.service';
import { LaravelService } from './laravel.service';
import { FirebaseService } from './firebase.service';
import { LoginService } from '../login.service';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class ConnectService implements OnInit{

  base = this._optionsService.base;

  worker: any;

  subscription: Subscription;

  constructor(private _optionsService: OptionsService,
              private _laravelService: LaravelService,
              private _firebaseService: FirebaseService,
              private _loginService: LoginService) {

    switch (this._optionsService.base) {
      case 'laravel':
        this.worker = _laravelService;
        break;
      case 'firebase':
        this.worker = _firebaseService;
        break;
    }
  }

  ngOnInit(){

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

  getOneEvent(data) {
    return this.worker.getOneEvent(data);
  }

  onCreateUser(username, email, password) {
    return this.worker.onCreateUser(username, email, password);
  }

  isAuth(){
  return this.worker.isAuth();
  }


  // разобраться когда будет время
  canActivatePromise() {
      const promise = new Promise((resolve, reject)=>{
        this.subscription = this.isAuth().subscribe((result)=>{
          this.worker.subAuth.next(true);
          resolve(true);
        }, (error) => {
          console.error(error);
          reject(false)
        })
      })
    return promise;
  }

  subAuth(){
    return this.worker.subAuth;
  }

  refreshToken(){
    return this.worker.refreshToken();
  }

  checkPromise(){
    const promise = new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve(true);
      },2000)
    })
    return promise;
  }

  onLoginUser(email: string, password: string){
    return this.worker.onLoginUser(email, password);
  }

  onLogOut(){
    this.worker.onLogOut();
  }

}
