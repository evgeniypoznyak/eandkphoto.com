import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.css']
})
export class EventsFormComponent implements OnInit {

  eventForm: FormGroup;
  constructor() { }

  ngOnInit() {

    this.eventForm = new FormGroup({
      'name': new FormControl(null),
      'date': new FormControl(null),
      'zip': new FormControl(null),
      'location': new FormControl(null),
      'description': new FormControl(null),
    });

  }

}
