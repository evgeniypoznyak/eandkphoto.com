import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ConnectService} from "../core/services/http/connect.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formStatus: string  = 'ready';
  contactForm: FormGroup;
  date : string;

  constructor(private _con: ConnectService, private router: Router) { }

  ngOnInit() {
    this.date = this.setupDate();

    this.contactForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'date': new FormControl(this.date,[Validators.required] ),
      'message': new FormControl(null, [Validators.required]),
      'location': new FormControl(null),
    });

  }


  onSubmit(){
    if (this.contactForm.valid) {
      this.formStatus = 'sending';
      const body = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        date: this.contactForm.value.date,
        message: this.contactForm.value.message,
        location: this.contactForm.value.location
      }
      this._con.onSendContact(body).subscribe((data: boolean) => {
        if (data) {
          // todo feedback sent
          this.formStatus = 'sent';
          setTimeout(() => {
            this.formStatus = 'ready';
            this.router.navigate(['/']);
          }, 2000)

        }
      }, (err)=>{
        // todo feedback error
        console.log(err);
        this.formStatus = 'error';
        setTimeout(() => {
          this.formStatus = 'ready';
          this.router.navigate(['/']);
        }, 2000)


       // this.router.navigate(['/']);
      })
    }


  }


  setupDate() {
    let month: any;
    let day: any;
    let dateObj = new Date();
    month = dateObj.getUTCMonth() + 1; //months from 1-12

    if (month < 10) {
      month = '0' + month.toString();
    }
    day = dateObj.getUTCDate();
    if (day < 10) {
      day = '0' + day.toString();
    }
    let year = dateObj.getUTCFullYear();
    return year + "-" + month + "-" + day;

  }


}
