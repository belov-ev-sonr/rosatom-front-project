import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
      private http: HttpClient,
  ) { }

  public login() {
    const body = {};
    return this.http.post('', body);
  }

  public logout() {
    const body = {};
    return this.http.post('', body);
  }
}
