import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent implements OnInit {

  constructor(
      private auth: AuthService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/login']);

    // this.auth.logout().subscribe(() => {
    // });
  }

}
