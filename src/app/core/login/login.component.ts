import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ConnectService } from '../services/http/connect.service';
import { LoginService } from '../services/login.service';
import {HttpClient} from "@angular/common/http";
import {LaravelService} from "../services/http/laravel.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _connect: ConnectService,
              private loginService: LoginService,
              private _http: HttpClient,
              private _laravel: LaravelService
              ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
    });
  }

  onLoginUser() {

    if (this.loginForm.valid) {
      this._connect.onLoginUser(this.loginForm.value.email, this.loginForm.value.password).subscribe(() => {
        this.loginService.isAuth.next(true);
      })
    }
  }

}
