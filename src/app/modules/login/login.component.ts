import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth/service/auth.service';
import {Router} from '@angular/router';
import {LoginModel} from './models/login.model';
import {AuthHttpService} from '../../services/auth-http.service';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginData: FormGroup;

  public loadData = false;

  constructor(private formBuilder: FormBuilder,
              private cdRef: ChangeDetectorRef,
              private auth: AuthService,
              private snack: MatSnackBar,
              private authHttp: AuthHttpService,
              private router: Router
  ) { }

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
    this.auth.login(this.loginData.value).subscribe(() => {
      this.loadData = false;
      this.router.navigate(['/registre']);
    }, (error: HttpErrorResponse) => {
      this.loadData = false;
      this.snack.open(error.error.message, '', {duration: 3000});
    });
  }

}
