import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/do';

import { OptionsService } from '../options.service';

@Injectable()
export class LaravelService {
  api = this._options.api;
  getHeaders = this._options.laravel.optHeaders.optGet;
  putHeaders = this._options.laravel.optHeaders.optPut;
  postHeaders = this._options.laravel.optHeaders.optPost;
  isAdmin: boolean = false;
  subAuth = new Subject();

  constructor(private _http: HttpClient, private _options: OptionsService, private _router: Router) { }

  getOneSliderItem(id: number) {
    return this._http.get<any[]>(this.api.sliderApi + id, this.getHeaders)
  }

  getEvents() {
    return this._http.get<any[]>(this.api.eventsApi, this.getHeaders)
  }

  getOneEvent(data) {
    let dynamicUrl = data.year + '/' + data.month + '/' + data.event;
    return this._http.get<any[]>(this.api.eventsApi + dynamicUrl, this.getHeaders)
  }


  addEvent(body) {
    let reader = new FileReader();
    let formData: FormData = new FormData();
    reader.readAsDataURL(body.file);
    let con = this._http;
    let api = this.api;

    reader.onload = function () {
      body.file = reader.result;
      console.log(body.sqlTime);
      const token = localStorage.getItem('token');
      formData.append('token', token);
      formData.append('name', body.name);
      formData.append('binary', body.file);
      formData.append('htmlDate', body.htmlDate);
      formData.append('year', body.year);
      formData.append('month', body.month);
      formData.append('description', body.description);
      formData.append('location', body.location);
      formData.append('sqlTime', body.sql);

      con.post<any[]>(api.eventsApi, formData).subscribe((data) => {
        console.log(data);
      })
    }

  }

  onCreateUser(username: string, email: string, password: string) {
    return this._http.post<any>(this.api.createUserApi, {
      name: username,
      email: email,
      password: password
    }, this.postHeaders)
      .do(
        (data) => {
          console.log(data.token);
          localStorage.setItem('token', data.token);
        });
  }


  isAuth() {
    const token = localStorage.getItem('token');
    if (token) {
      return this._http.post<any>(this.api.refreshTokenApi, {
        token: token,
      }, this.postHeaders)
        .do(
          (data) => {
            localStorage.setItem('token', data.token);
          });
    }
    return new Subject();

  }





  refreshToken() {
    const token = localStorage.getItem('token');
    return this._http.post<any>(this.api.refreshTokenApi, {
      token: token,
    }, this.postHeaders)
      .do(
      (data) => {
        localStorage.setItem('token', data.token);
      });
  }


  onLogOut() {
    localStorage.removeItem('token');
    this.isAdmin = false;
    this.subAuth.next(false);
    this._router.navigate(['/'])
  }

  onLoginUser(email: string, password: string) {
    return this._http.post<any>(this.api.loginUserApi, {
      email: email,
      password: password,
    }, this.postHeaders).do(
      (data) => {
        this.subAuth.next(true);
        localStorage.setItem('token', data.token);
        this._router.navigate(['/'])
      });
  }


}
