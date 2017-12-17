import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ConnectService } from '../services/http/connect.service';
import { OptionsService } from '../services/options.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  modalOpen: boolean = false;
  menu = this._options.menu;
  openEvents: boolean = false;
  hidden: boolean = true;
  eventsSubscription: Subscription;

  constructor(private _connect: ConnectService, private _options: OptionsService) { }

  ngOnInit() {
    // То что я загружаю через фолдер
   this.eventsSubscription = this._connect.getEvents().subscribe((data)=>{
      this.menu.events = data;
      console.log(this.menu.events);
    })
  }

  ngOnDestroy(){
    this.eventsSubscription.unsubscribe();
  }

  openCloseModal() {
    this.modalOpen = !this.modalOpen;
  }

  showEvents() {
    this.openEvents = true;
  }

}
