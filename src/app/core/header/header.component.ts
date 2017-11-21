import { Component, OnInit } from '@angular/core';
import { IEvents } from '../shared/IEvents';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  events: IEvents[] = [];


  constructor() {

    let a = {
      year: 2016,
      month: '05.May',
      event: ['Event1']
    }

    this.events.push(a);

  }

  ngOnInit() {
  }

}
