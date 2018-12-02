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

  messageSub = new Subject();

// {type: 'danger', message: 'danger'},
// {type: 'success', message: 'success'},
// {type: 'info', message: 'info'},
// {type: 'warning', message: 'warning'},
//this.messageSub.next({type: 'danger', message: 'Token is expired'})


  constructor(private _http: HttpClient, private _options: OptionsService, private _router: Router) {
  }

  getOneSliderItem(id: number) {
    return this._http.get<any[]>(this.api.sliderApi + '/' + id, this.getHeaders)
  }

  getEvents() {
    return this._http.get<any[]>(this.api.eventsApi, this.getHeaders)
  }

  getPictures() {
    return this._http.get<any[]>(this.api.picturesApi, this.getHeaders)
  }

  onSendContact(body) {
    return this._http.post<any>(this.api.contactApi, body, this.postHeaders)
  }


  getOneEvent(data) {
    let dynamicUrl = data.year + '/' + data.month + '/' + data.event;
    return this._http.get<any[]>(this.api.eventsApi + '/' + dynamicUrl, this.getHeaders)
  }

  updateEvent(data) {
    const token = localStorage.getItem('token');
    let formData: FormData = new FormData();


    formData.append('token', token);
    formData.append('description', data.description);
    formData.append('eventName', data.eventName);
    formData.append('location', data.location);
    formData.append('archiveLink', data.archiveLink);
    formData.append('id', data.id);

    return this._http.post<any[]>(this.api.eventsApi + '/update/' + data.id, formData)
  }


  addEvent(body) {
    let reader = new FileReader();
    let formData: FormData = new FormData();
    reader.readAsDataURL(body.file);
    let con = this._http;
    let api = this.api;
    let laravel = this;
    reader.onload = function () {

      let binary = reader.result;
      const token = localStorage.getItem('token');
      formData.append('token', token);
      formData.append('name', body.file.name);
      // formData.append('filename', body.name);
      formData.append('binary', binary);
      formData.append('htmlDate', body.htmlDate);
      formData.append('year', body.year);
      formData.append('eventName', body.eventName);
      formData.append('month', body.month);
      formData.append('description', body.description);
      formData.append('location', body.location);
      formData.append('archiveLink', body.archiveLink);
      formData.append('sqlTime', body.sqlTime);

      con.post<any[]>(api.eventsApi, formData).subscribe((data) => {
        laravel.messageSub.next({ type: 'success', message: 'Event was added' })
     //   console.log(data);
      }, (error) => {
        laravel.messageSub.next({ type: 'danger', message: 'Error. Event not added.' })

      })
    }

  }

  deleteEvent(id) {
    const token = localStorage.getItem('token');
    let formData: FormData = new FormData();
    formData.append('token', token);
    this._http.post<any[]>(this.api.eventsApi + '/delete/' + id, formData).subscribe((data) => {

      // if (data['folderDeleted'] == true) {
      //   this.messageSub.next({ type: 'success', message: 'Event folder deleted' })
      // }
      // if (data['recordDeleted'] == true) {
      //   this.messageSub.next({ type: 'success', message: 'Event record deleted' })
      // }
      //

      if (data['message']) {
        this.messageSub.next({ type: 'success', message: data['message'] })
      }

    }, (error) => {
      this.messageSub.next({ type: 'danger', message: 'Error. Event not deleted.' })
    })
  }


  editSlider(body) {

    let reader = new FileReader();
    let formData: FormData = new FormData();
    reader.readAsDataURL(body.file);
    let con = this._http;
    let api = this.api;
    let laravel = this;
    reader.onload = function () {
      body.file = reader.result;
      const token = localStorage.getItem('token');
      formData.append('token', token);
      formData.append('picture_id', body.pictureId);
      formData.append('binary', body.file);
      con.post<any[]>(api.sliderApi + '/' + body.sliderId, formData).subscribe((data) => {
        laravel.messageSub.next({ type: 'success', message: 'Slider was edited' })
     //   console.log(data);
      }, (error) => {
        laravel.messageSub.next({ type: 'danger', message: 'Error during edit slider' })
      })
    }
  }

  pictureAddToSlider(body) {

    let reader = new FileReader();
    let formData: FormData = new FormData();
    reader.readAsDataURL(body.file);
    let con = this._http;
    let api = this.api;
    let laravel = this;
    reader.onload = function () {
      body.file = reader.result;
      const token = localStorage.getItem('token');
      formData.append('token', token);
      formData.append('picture_id', body.pictureId);
      formData.append('binary', body.file);
      con.post<any[]>(api.sliderApi + '/add/' + body.sliderId, formData).subscribe((data) => {
        laravel.messageSub.next({ type: 'success', message: 'Picture was added to slider successfully' })
     //   console.log(data);
      }, (error) => {
        laravel.messageSub.next({ type: 'danger', message: 'Error! Picture not added to slider.' })
      })
    }
  }

  deletePictureFromSlider(body) {
    let formData: FormData = new FormData();
    const token = localStorage.getItem('token');
    formData.append('token', token);
    formData.append('picture_id', body.pictureId);
    this._http.post<any[]>(this.api.sliderApi + '/delete/' + body.sliderId, formData).subscribe((data) => {
      this.messageSub.next({ type: 'success', message: 'Picture was successfully deleted from slier' })
   //   console.log(data);
    }, (error) => {
      this.messageSub.next({ type: 'danger', message: 'Error! Deleting picture from slider return error' })
    })
  }


  addPortfolio(body) {
    let reader = new FileReader();
    let formData: FormData = new FormData();
    reader.readAsDataURL(body.file);
    let con = this._http;
    let api = this.api;
    let laravel = this;
    reader.onload = function () {
      body.file = reader.result;
      const token = localStorage.getItem('token');
      formData.append('token', token);
      formData.append('portfolio', body.portfolio);
      formData.append('binary', body.file);
      con.post<any[]>(api.portfolioApi, formData).subscribe((data) => {
        laravel.messageSub.next({ type: 'success', message: 'Portfolio was added successfully' })
     //   console.log(data);
      }, (error) => {
        laravel.messageSub.next({ type: 'danger', message: 'Error! Add portfolio return error' })
      })
    }
  }


  onDeleteSlier(data) {
    let formData: FormData = new FormData();
    const token = localStorage.getItem('token');
    formData.append('token', token);

    this._http.post<any[]>(this.api.sliderApi + '/delete-slider/' + data.slider, formData).subscribe((data) => {
      this.messageSub.next({ type: 'success', message: 'Slider deleted' })
   //   console.log(data);
    }, (error) => {
      this.messageSub.next({ type: 'danger', message: 'Error! Deleting slider returned error' })
    })

  }

  onAddNewSlider() {
    let formData: FormData = new FormData();
    const token = localStorage.getItem('token');
    formData.append('token', token);

    this._http.post<any[]>(this.api.sliderApi + '/create', formData).subscribe((data) => {
      this.messageSub.next({ type: 'success', message: 'Slider was created' })
     // console.log(data);
    }, (error) => {
      this.messageSub.next({ type: 'success', message: 'Error! Slider not created' })
    })
  }


  getAllPortfolios() {
    return this._http.get<any[]>(this.api.portfolioApi, this.getHeaders)
  }

  onCreateUser(username: string, email: string, password: string) {
    return this._http.post<any>(this.api.createUserApi, {
      name: username,
      email: email,
      password: password
    }, this.postHeaders)
      .do(
        (data) => {
        //  console.log(data.token);
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
    this.messageSub.next({ type: 'info', message: 'Bye!' })
    localStorage.removeItem('token');
    this.isAdmin = false;
    this.subAuth.next(false);
    this._router.navigate(['/'])
  }

  onLoginUser(email: string, password: string) {

  //  console.log(this.api.loginUserApi);

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


  isTokenExpired() {
    const token = localStorage.getItem('token');
    if (token) {
      let dateNow = new Date();
      let timeNow = Math.floor(dateNow.getTime() / 1000);
      const base64URL = token.split('.')[1];
      const base64 = base64URL.replace('-', '+').replace('_', '/');
      const decodedToken = JSON.parse(window.atob(base64));
      return decodedToken.exp < timeNow
    }
    return true;
  }


  getImageFromServerByUrl(url) {
    return this._http.get(this.api.downloadImageApi + '?url=' + url, { responseType: 'blob' });
   // return this._http.get<any>(this.api.downloadImageApi + '?url=' + url,  { responseType: 'blob' })
  }

}
