import { Component, Input, OnInit } from '@angular/core';
import {ModalService} from "../modal.service";

@Component({
  selector: 'app-multi-items-years',
  templateUrl: './multi-items-years.component.html',
  styleUrls: ['./multi-items-years.component.css']
})
export class MultiItemsYearsComponent implements OnInit {

  @Input() yearStr: string;
  @Input() yearArr: any;
  @Input() events: any;

  hidden: boolean = true;
  hiddenEvents: string = '';

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }



  onYear(){
    this.hidden = !this.hidden;
  }

  onMonth(str: string){
    if (this.hiddenEvents == str) {
      this.hiddenEvents = '';
    } else {
      this.hiddenEvents = str;
    }

  }

  openCloseModal(){
    this.modalService.open.next({choice: '', isOpen: false})
  }

}
