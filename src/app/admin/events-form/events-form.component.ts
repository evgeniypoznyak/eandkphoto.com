import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Upload } from '../../core/shared/Upload';
import { UploadService } from '../../core/services/upload.service';
import { ConnectService } from '../../core/services/http/connect.service';
import { MessengerService } from '../../core/services/messenger.service';

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.css']
})
export class EventsFormComponent implements OnInit {

  eventForm: FormGroup;
  selectedFiles: FileList;
  currentUpload: Upload;
  date: Date;
  year: number;
  month: any;
  sql: string;


  constructor(private upSvc: UploadService, private _connect: ConnectService, private _msg: MessengerService) { }

  ngOnInit() {

    this.eventForm = new FormGroup({
      // 'name': new FormControl(null),
      'date': new FormControl(null),
      'eventName': new FormControl(null),
      'zip': new FormControl(null),
      'location': new FormControl(null),
      'description': new FormControl(null),
      'archiveLink': new FormControl(null),
    });

  }

  onSubmit() {
    let file = this.selectedFiles.item(0)

    this.parseDate(this.eventForm.value.date);
    this.currentUpload = new Upload(file);

    // console.log(this.currentUpload);
    this.upSvc.pushUpload(this.currentUpload)


    let body = {
      htmlDate: this.date,
      year: this.year,
      month: this.month,
      file: file,
      name: this.eventForm.value.name,
      location: this.eventForm.value.location,
      description: this.eventForm.value.description,
      eventName: this.eventForm.value.eventName,
      archiveLink: this.eventForm.value.archiveLink,
      sqlTime: this.date.toISOString().slice(0, 19).replace('T', ' '),
    };

    // console.log(body);
    this._connect.addEvent(body)
    /*.subscribe((data)=>{
          console.log(data);
        })*/
    this.eventForm.reset();

    let messages = [
      {type: 'danger', message: 'danger'},
      {type: 'success', message: 'success'},
      {type: 'info', message: 'info'},
      {type: 'warning', message: 'warning'},
    ]
    this._connect.worker.messageSub.next({type: 'success', message: 'New Event Was Submitted'})

  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  parseDate(htmlDate) {
    this.date = new Date(htmlDate);
   // this.sql = new Date().toISOString().slice(0, 19).replace('T', ' ');
    this.year = this.date.getFullYear()
    this.month = this.date.getMonth()
    let monthString = this.date.toLocaleString("en-us", { month: "long" }).toLowerCase();

    this.month = this.date.getMonth() + 1;
    if (this.month < 10) {
      this.month = '0' + this.month.toString();
    }
    this.month = this.month + '-' + monthString;

    +1 + '-' + this.date.toLocaleString('en-us', { month: 'long' }).toLowerCase();
  }


}
