import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ConnectService } from '../services/http/connect.service';
import { OptionsService } from '../services/options.service';
import { Subscription } from 'rxjs/Subscription';
import {ModalService} from "./modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

 // modalOpen: boolean = this.modalService.open;
  modalOpen: boolean = false;
  modalChoice: string = '';
  menu = this._options.menu;
  openEvents: boolean = false;
  hidden: boolean = true;
  eventsSubscription: Subscription;
  modalServiceOpenSub: Subscription;

  constructor(
    private _connect: ConnectService,
    private _options: OptionsService,
    private modalService: ModalService) { }

  ngOnInit() {
    // То что я загружаю через фолдер
   this.eventsSubscription = this._connect.getEvents().subscribe((data)=>{
      this.menu.events = data;
  //    console.log(this.menu.events);
    })

   this.modalServiceOpenSub = this.modalService.open.subscribe((res: {choice: string, isOpen: boolean}) => {
     this.modalChoice = res.choice;
     this.modalOpen = res.isOpen;
    })


  }

  ngOnDestroy(){
    this.eventsSubscription.unsubscribe();
    this.modalServiceOpenSub.unsubscribe();
  }

  openCloseModal() {
    this.modalOpen = !this.modalOpen;
  }

  showEvents() {
    this.openEvents = true;
  }

}
