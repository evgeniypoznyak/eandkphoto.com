import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OptionsService } from '../options.service';
import 'rxjs/add/operator/do';
import { Subject } from 'rxjs/Subject';

//import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class LaravelService {
  api = this._options.api;
  getHeaders = this._options.laravel.optHeaders.optGet;
  putHeaders = this._options.laravel.optHeaders.optPut;
  postHeaders = this._options.laravel.optHeaders.optPost;
  isAdmin: boolean = false;
  subAuth = new Subject();

  // authSubscriber: Subscription;

  constructor(private _http: HttpClient, private _options: OptionsService) { }

  getOneSliderItem(id: number) {
    return this._http.get<any[]>(this.api.sliderApi + id, this.getHeaders)
  }

  getEvents() {
    return this._http.get<any[]>(this.api.eventsApi, this.getHeaders)
  }


  addEvent(body) {
    let reader = new FileReader();
    let formData: FormData = new FormData();
    reader.readAsDataURL(body.file);
    let con = this._http;
    let api = this.api;

    reader.onload = function () {
      body.file = reader.result;
      console.log(body.sql);
      const token = localStorage.getItem('token');
      formData.append('token', token);
      formData.append('name', body.name);
      formData.append('binary', body.file);
      formData.append('htmlDate', body.htmlDate);
      formData.append('year', body.year);
      formData.append('month', body.month);
      formData.append('description', body.description);
      formData.append('location', body.location);
      formData.append('sql', body.sql);

      let status = con.post<any[]>(api.eventsApi, formData)
      status.subscribe((data) => {
        console.log(data);
      })
    }

    //return this._http.post<any[]>(this.api.eventsApi, formData)
  }

  onCreateUser(username: string, email: string, password: string) {
    return this._http.post<any>(this.api.createUserApi, {
      name: username,
      email: email,
      password: password
    }, this.postHeaders)
      .do(
        (data) => {
       //   console.log(data.token);
          localStorage.setItem('token', data.token);
        //  this.isAuth();
        });
  }


  isAuth() {
    // не дожидаться ответа, надо проверить локальный сторадж и дать доступ
    // а в подписке, если fail - то редирект.
    return this.refreshToken().subscribe(
      (data) => {
        this.isAdmin = true;
        this.subAuth.next(true);
        localStorage.setItem('token', data.token);
        console.log(data.token);
      },
      (err) => {
        this.subAuth.next(false);
      });
  }

  refreshToken() {
    const token = localStorage.getItem('token');
    return this._http.post<any>(this.api.refreshTokenApi, {
      token: token,
    }, this.postHeaders).do(
      (data) => {
        localStorage.setItem('token', data.token);
      });
  }


  logOut(){
    localStorage.removeItem('token');
    this.isAdmin = false;
    this.subAuth.next(false);
    // this.router.navigate(['/'])
  }


}
