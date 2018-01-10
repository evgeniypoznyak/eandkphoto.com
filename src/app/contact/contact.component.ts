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

  constructor(private _con: ConnectService, private router: Router) { }

  ngOnInit() {

    this.contactForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'date': new FormControl(null,[Validators.required] ),
      'message': new FormControl(null, [Validators.required]),
      'location': new FormControl(null),
    });

  }


  onSubmit(){

    if (this.contactForm.valid) {
      this.formStatus = 'sending';
      //
      // console.log('form submitted');
      // console.log(this.contactForm.value.name);
      // console.log(this.contactForm.value.email);
      // console.log(this.contactForm.value.date);
      // console.log(this.contactForm.value.message);
      // console.log(this.contactForm.value.location);
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
       // this.router.navigate(['/']);
      })
    }


  }

}
