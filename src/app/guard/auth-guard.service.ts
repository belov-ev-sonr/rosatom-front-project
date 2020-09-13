import { Injectable } from '@angular/core';
import {CanActivate, CanLoad} from '@angular/router';
import {AuthService} from '../modules/auth/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(
      private auth: AuthService
  ) { }

  canActivate(): boolean {
    if (!this.auth.getToken()) {
      this.auth.logout();
      return false;
    }
    return true;
  }

  canLoad(): boolean {
    if (!this.auth.getToken()) {
      this.auth.logout();
      return false;
    }
    return true;
  }
}
