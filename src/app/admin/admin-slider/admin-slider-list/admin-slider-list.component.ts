import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Upload} from "../../../core/shared/Upload";
import {ConnectService} from "../../../core/services/http/connect.service";

@Component({
  selector: 'app-admin-slider-list',
  templateUrl: './admin-slider-list.component.html',
  styleUrls: ['./admin-slider-list.component.css']
})
export class AdminSliderListComponent implements OnInit {

  loadedData: any = false;
  sliderForm: FormGroup;
  sliderEmpty: any = false;
  sliderFormOpen: any = false;
  addPictureFormOpen: any = false;
  sliderFormData = {
    sliderId: '',
    pictureId: '',
    picture: '',
    src: {}
  };
  selectedFiles: FileList;
  currentUpload: Upload;
  private dialog: any;

  constructor(private _route: ActivatedRoute, private _connect: ConnectService) { }

  ngOnInit() {
    this._route.data.subscribe((data: Data) => {
     this.loadedData = data.picturesFromServer;
     // console.log(this.loadedData);
    })
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }


  onEditSlider(sliderId, picture){
   this.sliderFormData = {
     sliderId: sliderId,
     pictureId: picture.id,
     src: picture.src,
     picture: '',
   }
    this.sliderForm = new FormGroup({
      'picture': new FormControl(this.sliderFormData.picture),
    });
  //  console.log(this.sliderFormData);
   this.sliderFormOpen = !this.sliderFormOpen;
  }

  onSliderSent(){

    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    console.log(this.currentUpload);

    let body = {
      sliderId: this.sliderFormData.sliderId,
      pictureId: this.sliderFormData.pictureId,
      file: file
    };
    this._connect.editSlider(body)
  }

  onAddPictureStart(sliderId){


      this.sliderFormData = {
        sliderId: sliderId,
        pictureId: '',
        src: '',
        picture: '',
      }
      this.sliderForm = new FormGroup({
        'picture': new FormControl(null),
      });
      //  console.log(this.sliderFormData);
      this.addPictureFormOpen = !this.addPictureFormOpen;



  }

onDeletePicture(sliderId, picture) {
  this.sliderFormData = {
    sliderId: sliderId,
    pictureId: picture.id,
    src: picture.src,
    picture: '',
  }
  let body = {
    sliderId: this.sliderFormData.sliderId,
    pictureId: this.sliderFormData.pictureId,
  };
  this._connect.deletePictureFromSlider(body)


}

  onPictureAdd(){

    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    console.log(this.currentUpload);

    let body = {
      sliderId: this.sliderFormData.sliderId,
      pictureId: this.sliderFormData.pictureId,
      file: file
    };
    this._connect.pictureAddToSlider(body)
  }







}
