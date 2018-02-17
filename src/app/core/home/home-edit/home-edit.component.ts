import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.component.html',
  styleUrls: ['./home-edit.component.css']
})
export class HomeEditComponent implements OnInit {

  @Input() record: any;

  constructor() { }

  ngOnInit() {
  }

}
