import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-items-lvl-one',
  templateUrl: './multi-items-lvl-one.component.html',
  styleUrls: ['./multi-items-lvl-one.component.css']
})
export class MultiItemsLvlOneComponent implements OnInit {


  @Input() routerLinkFromHeader: { link: string, name: string};
  @Input() itemsCollection: { items: {} };
  hidden: boolean = true;

  constructor() { }

  ngOnInit() {

   // console.log(this.routerLinkFromHeader);
   // console.log(this.itemsCollection);

  }

}
