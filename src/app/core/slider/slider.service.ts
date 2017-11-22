import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/Rx';
import { Router } from '@angular/router';


@Injectable()
export class SliderService{

  constructor(private http: Http, private router: Router) {}


  getSliderById(id: number) {
    return this.http.get('http://data.eandkphoto.loc/api/slider/' + id,
      {
        headers: new Headers(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          }
        )
      }).map(response => {
      return response.json()
    }).do(
      (data) => {
      //  console.log(data);
      });
  }

}
