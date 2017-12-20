import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-year-menu',
  templateUrl: './event-year-menu.component.html',
  styleUrls: ['./event-year-menu.component.css']
})
export class EventYearMenuComponent implements OnInit {
  @Input() events: any;
  @Input() isHidden: any;
  hidden: boolean = true;
  constructor() { }

  ngOnInit() {

    console.log(this.events);
  }

}
