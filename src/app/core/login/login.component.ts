import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConnectService } from '../services/http/connect.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _connect: ConnectService, private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null),
    });
  }

  onLoginUser() {
    this._connect.onLoginUser(this.loginForm.value.email, this.loginForm.value.password).subscribe((res) => {
      this.loginService.isAuth.next(true);
    })
  }
}
