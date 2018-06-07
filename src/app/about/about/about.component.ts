import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  picture1 = this.aboutPicture.picture1;
  picture2 = this.aboutPicture.picture2;

  constructor(private aboutPicture: AboutService) { }

  ngOnInit() {

  }

}
