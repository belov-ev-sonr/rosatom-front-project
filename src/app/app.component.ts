import { Component } from '@angular/core';
import {AuthService} from './modules/auth/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hackaTon';
  activeToolBar = true;


  constructor(public auth: AuthService) {
  }
}
