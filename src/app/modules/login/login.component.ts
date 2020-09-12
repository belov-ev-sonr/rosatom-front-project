import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth/service/auth.service';
import {Router} from '@angular/router';

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
    this.router.navigate(['/registre']);
    // this.auth.login().subscribe(() => {
    //
    // })
  }

}
