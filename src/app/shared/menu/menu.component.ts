import { Component, HostListener, OnInit } from '@angular/core';
import { menuTrigger } from './animations';
import { OptionsService } from '../../core/services/options.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [menuTrigger],
})
export class MenuComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event) {
    this.renderMenuOnScroll(this.getScrollTop());
  }

  menuItems = this.options.animatedMenu;

  menuInfo = 'default'

  interval;

  constructor(private options: OptionsService) { }


  ngOnInit() {

    setTimeout(() => {
      if (!this.menuItems.social.active) {
        this.menuItems.portfolio.active = true;
        this.menuItems.contact.active = true;
        this.menuItems.about.active = true;
        this.menuItems.social.active = true;
      }
    }, 15000)


  }




  getScrollTop() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body).scrollTop;
  }


  renderMenuOnScroll(scroll) {

    if (scroll > this.menuItems.portfolio.scrollFromTop && !this.menuItems.portfolio.active) {

      this.menuItems.portfolio.active = true;
    }
    if (scroll > this.menuItems.contact.scrollFromTop && !this.menuItems.contact.active) {

      this.menuItems.contact.active = true;
    }

    if (scroll > this.menuItems.about.scrollFromTop && !this.menuItems.about.active) {

      this.menuItems.about.active = true;
    }

    if (scroll > this.menuItems.social.scrollFromTop && !this.menuItems.social.active) {
      this.menuItems.social.active = true;
    }


  }


}
