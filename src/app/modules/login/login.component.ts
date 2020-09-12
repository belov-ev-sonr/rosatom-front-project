import { Component, OnInit } from '@angular/core';
import {LoginModel} from './models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginData: LoginModel;
  public email: string;
  public password: string;

  constructor() { }

  ngOnInit() {
    this.loginData = new LoginModel();
  }

}
