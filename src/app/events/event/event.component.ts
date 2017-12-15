import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { ConnectService } from '../../core/services/http/connect.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _connect: ConnectService) { }

  ngOnInit() {
    this._route.data.subscribe((data: Data) => {
      console.log(data);
    })

  }
}
