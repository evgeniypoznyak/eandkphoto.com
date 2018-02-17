import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {ConnectService} from "../../../core/services/http/connect.service";
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-admin-slider-new',
  templateUrl: './admin-slider-new.component.html',
  styleUrls: ['./admin-slider-new.component.css']
})
export class AdminSliderNewComponent implements OnInit {

  pictureForm: FormGroup;
  selectedFiles: any;
  parseForm: boolean = false;
  fileParsed: boolean = false;
  fileResult: string = '';

  sliderEditOpen: boolean = false;
  loadedData: any = false;

  formValid: boolean = false;
  pictureBase64: any = false;

  constructor(private _route: ActivatedRoute, private _conn: ConnectService) {
  }

  ngOnInit() {
    this.pictureForm = new FormGroup({
      'picture': new FormControl(null),
    });

    this.fileResult = '';
    this.fileParsed = false;
    this.parseForm = !this.parseForm;

    this._route.data.subscribe((data: any) => {
      this.loadedData = data.picturesFromServer;
    })


  }

  onDeleteSlier(slider) {
    let data = {slider}
    this._conn.onDeleteSlier(data)
  }

  onAddNewSlider() {
    this._conn.onAddNewSlider()
  }

  onOpenForm() {
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
    this.formValid = true;
  }

  returnBase64() {
      if (this.formValid) {
      let file = this.selectedFiles.item(0)
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.pictureBase64 = true;
        this.pictureForm.reset();
        this.formValid = false;
        console.log(reader.result);
      }
    }
  }

  onOpenSliders() {
    this.sliderEditOpen = !this.sliderEditOpen;
  }


}
