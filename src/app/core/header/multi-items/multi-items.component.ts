import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-items',
  templateUrl: './multi-items.component.html',
  styleUrls: ['./multi-items.component.css']
})
export class MultiItemsComponent implements OnInit {


  @Input() routerLinkFromHeader: { link: string, name: string};
  @Input() itemsCollection: { items: {} };
  hidden: boolean = true;

  constructor() { }

  ngOnInit() {

  }

}
