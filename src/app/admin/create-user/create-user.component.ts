import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConnectService } from '../../core/services/http/connect.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  createForm: FormGroup;
  check = false;

  constructor(private _connect: ConnectService) { }

  ngOnInit() {
    this.createForm = new FormGroup({
      'name': new FormControl(null),
      'email': new FormControl(null),
      'password': new FormControl(null),
    });
  }

  onCreateUser() {
    this._connect.onCreateUser(
      this.createForm.value.name, this.createForm.value.email, this.createForm.value.password
    ).subscribe((response) => {
         console.log(response);
      }
    )


    // todo is auth полностью работает, надо его где-то применять
    // this._connect.isAuth().subscribe((res)=>{
    //   this.check = res
    //   console.log(res);
    // }, (err) => {
    //   this.check = err
    //   console.log(err);
    // })


  }



}
