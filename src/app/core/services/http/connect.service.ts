import {Injectable, OnInit} from '@angular/core';
import {OptionsService} from '../options.service';
import {LaravelService} from './laravel.service';
import {FirebaseService} from './firebase.service';
import {LoginService} from '../login.service';
import {Subscription} from 'rxjs/Subscription';
import {Subject} from "rxjs/Subject";

@Injectable()
export class ConnectService implements OnInit {

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

  ngOnInit() {

  }




  getOneSliderItem(id: number) {
    return this.worker.getOneSliderItem(id)
  }

  getEvents() {
    return this.worker.getEvents();
  }

  getPictures(){
    return this.worker.getPictures();
  }

  addEvent(body) {
    return this.worker.addEvent(body);
  }

  deleteEvent(id) {
    return this.worker.deleteEvent(id);
  }


  message(){
    return this.worker.message;
  }


  editSlider(body){
    return this.worker.editSlider(body);
  }
  pictureAddToSlider(body){
    return this.worker.pictureAddToSlider(body);
  }
  deletePictureFromSlider(body){
    return this.worker.deletePictureFromSlider(body);
  }


  onDeleteSlier(data){
    return this.worker.onDeleteSlier(data);
  }

  onAddNewSlider(){
    return this.worker.onAddNewSlider();
  }


  addPortfolio(body) {
    return this.worker.addPortfolio(body);
  }

  getAllPortfolios() {
    return this.worker.getAllPortfolios();
  }

  getOneEvent(data) {
    return this.worker.getOneEvent(data);
  }

  updateEvent(data) {
    return this.worker.updateEvent(data);
  }


  onCreateUser(username, email, password) {
    return this.worker.onCreateUser(username, email, password);
  }

  isAuth() {
    return this.worker.isAuth();
  }

  // разобраться когда будет время
  canActivatePromise() {
    const promise = new Promise((resolve, reject) => {
      this.subscription = this.isAuth().subscribe((result) => {
        console.log('checking5');
        this.worker.subAuth.next(true);
        resolve(true);
      }, (error) => {
        console.log('checking6');
        this.worker.subAuth.next(false);
        this.onLogOut();
        console.error(error);
        localStorage.removeItem('token');
        reject(false)
      })
    })
    console.log('checking7');
    return promise;
  }


  subAuth() {
    return this.worker.subAuth;
  }

  refreshToken() {
    return this.worker.refreshToken();
  }

  isTokenExpired(){
   return this.worker.isTokenExpired();
  }

  onLoginUser(email: string, password: string) {
    return this.worker.onLoginUser(email, password);
  }

  onLogOut() {
    this.worker.onLogOut();
  }

  onSendContact(data) {
    return this.worker.onSendContact(data);
  }

}
