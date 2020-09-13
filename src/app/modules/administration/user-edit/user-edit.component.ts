import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';
import {UserModel} from '../../../models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  public userId: number;

  public userGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private cdRef: ChangeDetectorRef,
              @Inject(MAT_DIALOG_DATA) public data: UserModel
  ) { }

  ngOnInit() {
    this.init();
  }

  private init(): void {
    this.userId = +this.data.id;
    this.userGroup = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(5)]],
      firstName: ['', [Validators.required]],
      secondName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      phone: ['', []],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.cdRef.markForCheck();
  }

  saveUser(){

  }

}
