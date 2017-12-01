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

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    // this.menu = this.menuService.menu;
  //   console.log(this.menu);

  }

  openCloseModal() {
    this.modalOpen = !this.modalOpen;
  }


}
