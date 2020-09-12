import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LoginModel} from './models/login.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginData: FormGroup;

  public loadData = false;

  constructor(private formBuilder: FormBuilder,
              private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.init();
  }

  private init() {
    this.loginData = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.cdRef.markForCheck();
  }

  public login() {
    if (!this.loginData.valid) {
      return;
    }

    this.loadData = true;

  }

}
