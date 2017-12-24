import { Component, Input, OnInit } from '@angular/core';
import {ModalService} from "../modal.service";

@Component({
  selector: 'app-multi-items-months',
  templateUrl: './multi-items-months.component.html',
  styleUrls: ['./multi-items-months.component.css']
})
export class MultiItemsMonthsComponent implements OnInit {

  @Input() monthStr: string;
  @Input() yearStr: string;
  @Input() monthArr: any;
  @Input() events: any;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  openCloseModal(){
    this.modalService.open.next({choice: '', isOpen: false})
  }

}
