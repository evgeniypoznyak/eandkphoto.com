import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Data} from "@angular/router";
import {ConnectService} from "../../../core/services/http/connect.service";

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

  constructor(private _route: ActivatedRoute, private _conn: ConnectService) {
  }

  ngOnInit() {
    this._route.data.subscribe((data: Data) => {
      this.loadedData = data.picturesFromServer;
   //   console.log(this.loadedData);
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
    this.pictureForm = new FormGroup({
      'picture': new FormControl(null),
    });
    this.fileResult = '';
    this.fileParsed = false;
    this.parseForm = !this.parseForm;
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  returnBase64() {
    this.fileResult = '';
    this.fileParsed = false;
    let file = this.selectedFiles.item(0)
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.fileResult = reader.result;
      this.fileParsed = true;
    }
  }

  onOpenSliders() {
    this.sliderEditOpen = !this.sliderEditOpen;
  }


}
