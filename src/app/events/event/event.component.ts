import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { ConnectService } from '../../core/services/http/connect.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  check = false;
  events;

  // For small slider values
  picturesCount;
  picturesStart = 0;
  picturesEnd = 4;
  pictureCycle = 5;

  // For big image
  bigImage: any = false;
  bigImagesArray = [];

  constructor(private _route: ActivatedRoute, private _connect: ConnectService) { }

  ngOnInit() {
    this._route.data.subscribe((data: Data) => {
      this.check = true;
      this.events = data.eventsFromServer;
     console.log(this.events);
      this.picturesCount = this.events.dir.small.length
      this.setEndAndStartPictures(this.picturesCount)
      if (this.events.dir.large.length > 0) {
        this.onShowBigImage(0);
      }
    })
    this.getImagesAccordingIndex();
  }

  onBack(){
    this.picturesStart = this.picturesStart - this.pictureCycle;
    this.picturesEnd = this.picturesEnd - this.pictureCycle;
    if (this.picturesStart < 0) {
      this.picturesStart = this.picturesCount - this.pictureCycle + 1;
      this.picturesEnd = this.picturesStart + this.pictureCycle - 1;
    }
    this.getImagesAccordingIndex();
  }

  onForward(){
    if (this.picturesEnd < this.picturesCount) {
      this.picturesStart = this.picturesStart + this.pictureCycle;
      this.picturesEnd = this.picturesEnd + this.pictureCycle;
    } else {
      this.picturesStart = 0;
      this.picturesEnd = 4;
    }
    this.getImagesAccordingIndex();
  }

  getImagesAccordingIndex(){
    let tempArr = this.events.dir.large;
    this.bigImagesArray = tempArr.slice(this.picturesStart, this.picturesEnd);
  }

  onShowBigImage(i){
   this.bigImage = this.events.dir.large[i]
  }


  setEndAndStartPictures(length) {
    let half = length / 2;
    let end = length - 4;
    if (end < half) {}
  }


}
