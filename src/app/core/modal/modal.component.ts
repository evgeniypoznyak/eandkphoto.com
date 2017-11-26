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
    // console.log(this.menu);

  }

  openCloseModal() {
    this.modalOpen = !this.modalOpen;
  }

  /*
    // Get the modal
    var modal = document.getElementById('myModal');

  // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }

  // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

  // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  */

}
