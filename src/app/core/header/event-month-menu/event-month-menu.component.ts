import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-month-menu',
  templateUrl: './event-month-menu.component.html',
  styleUrls: ['./event-month-menu.component.css']
})
export class EventMonthMenuComponent implements OnInit {

  @Input() yearStr: any;
  @Input() events: any;
  @Input() yearArr: any;
  constructor() { }

  ngOnInit() {
    console.log(this.events);
    console.log(this.yearStr);
    console.log(this.yearArr);
  }

}
