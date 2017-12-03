import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-items-months',
  templateUrl: './multi-items-months.component.html',
  styleUrls: ['./multi-items-months.component.css']
})
export class MultiItemsMonthsComponent implements OnInit {

  @Input() monthStr: string;
  @Input() yearStr: string;
  @Input() monthArr: any;
  @Input() events: any;

  constructor() { }

  ngOnInit() {
  }

}
