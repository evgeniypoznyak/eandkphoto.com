import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../services/messenger.service';
import { StatusMessage } from '../shared/StatusMessage';
import { ConnectService } from '../services/http/connect.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {
  messageActive: boolean = false;
  notification = [];

  constructor(private _msg: MessengerService, private _con: ConnectService) { }

  ngOnInit() {

    this._msg.message.subscribe((notification) => {
      if(Array.isArray(notification)){
        this.notification.push(...notification);
      }
      else {
        if (this.isObject(notification)) {
          this.notification.push(notification)
        }
      }
      this.messageActive = true;
    })



    this._con.worker.messageSub.subscribe((notification) => {
      if(Array.isArray(notification)){
        this.notification.push(...notification);
      }
      else {
        if (this.isObject(notification)) {
          this.notification.push(notification)
        }
      }
      this.messageActive = true;
    })




  }

  isObject (item) {
    return (typeof item === "object" && !Array.isArray(item) && item !== null);
  }

  onDelete(key){
    if (this.notification.length < 2) {
      this.notification.splice(key, 1);
      this.messageActive = false;
    }
    this.notification.splice(key, 1);

  }

}
