import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-items-years',
  templateUrl: './multi-items-years.component.html',
  styleUrls: ['./multi-items-years.component.css']
})
export class MultiItemsYearsComponent implements OnInit {

  @Input() yearStr: string;
  @Input() yearArr: any;
  @Input() events: any;

  constructor() { }

  ngOnInit() {
  }

}
