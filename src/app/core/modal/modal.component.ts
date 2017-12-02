import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  // @Input() modal: any;
  modalOpen: boolean = false;
  menu = this.menuService.menu;
  menuIsReady: boolean = this.menuService.fetched;
  openEvents: boolean = false;
  hidden: boolean = true;
  constructor(private menuService: MenuService,) { }

  ngOnInit() {

  }

  openCloseModal() {
    if (!this.menuIsReady) {
      this.menuIsReady = this.menuService.fetched;
    }
    this.modalOpen = !this.modalOpen;
  }

  showEvents() {
    this.openEvents = true;
  }

}
