import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Upload} from "../../core/shared/Upload";
import {ConnectService} from "../../core/services/http/connect.service";

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.css']
})
export class PortfolioFormComponent implements OnInit {
  portfolioForm: FormGroup;
  selectedFiles: FileList;
  currentUpload: Upload;
  constructor( private _connect: ConnectService) { }

  ngOnInit() {
    this.portfolioForm = new FormGroup({
      'portfolio': new FormControl(null, []),
      'zip': new FormControl(null),
    });
  }

  onSubmit() {
    let file = this.selectedFiles.item(0)

    this.currentUpload = new Upload(file);
   // console.log(this.currentUpload);

    let body = {
      file: file,
      portfolio: this.portfolioForm.value.portfolio,
    };
    console.log(body);

    this._connect.addPortfolio(body)
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }




}
