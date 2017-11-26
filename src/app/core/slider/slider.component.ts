import { Component, OnInit } from '@angular/core';
import { sliderTrigger, textSliderTrigger } from './animations';
import { ISlider } from './ISlider';
import { SliderService } from './slider.service';
import {slider1} from './slider-content.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [sliderTrigger, textSliderTrigger]
})
export class SliderComponent implements OnInit {

  randomNumber: number;
  sliderRun: any;
  markedIndex = 0;

  sliderPictures: ISlider[] = [
    {
      id: 1,
      src: slider1,
      header: 'Your Header Text Goes Here',
      headerAnimation: 'default',
      paragraph: '',
      paragraphAnimation: 'default',
      button: '',
      buttonAnimation: 'default',
      pictureAnimation: 'default',
    },
  ];


  constructor(private sliderService: SliderService) {
  }

  ngOnInit() {

    this.runSlider(this.getRandomNumber());
    this.sliderService.getSliderById(1).subscribe((data) => {
     console.log(data);
      this.sliderPictures.push(...data);
    });



  }

  onPrev() {
    clearInterval(this.sliderRun);
    this.markedIndex--;
    if (this.markedIndex < 0) {
      this.markedIndex = this.sliderPictures.length - 1;
    }
  }

  onNext() {
    clearInterval(this.sliderRun);
    this.markedIndex++;
    if (this.markedIndex >= this.sliderPictures.length) {
      this.markedIndex = 0;
    }
  }

  runSlider(speed = 1000) {
    this.sliderRun = setInterval(() => {
      this.markedIndex++;
      if (this.markedIndex >= this.sliderPictures.length) {
        this.markedIndex = 0;
      }
    }, speed)
  }

  onPlay() {
    clearInterval(this.sliderRun);
    this.runSlider(this.getRandomNumber());
  }

  getRandomNumber(){
    let number =  Math.floor((Math.random() * 2000) + 1800);
    if (number < 1000) {
      number = number + 2500;
    }
    this.randomNumber = number;
    return number;
  }


}
