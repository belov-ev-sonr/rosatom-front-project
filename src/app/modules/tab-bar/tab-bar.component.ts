import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/service/auth.service';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent implements OnInit {

  public user: UserModel;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.user = this.auth.getUser();
  }

  private init(): void {
    let user = this.auth.getUser();
    if (!user) {
      user = new UserModel();
    }
    this.user = new UserModel();
  }

  logout() {
    this.auth.logout();
  }

}
