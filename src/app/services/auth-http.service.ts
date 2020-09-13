import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {RequestHelper} from './request.helper';
import {AuthService} from '../modules/auth/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {
  isLoggedIn = false;

  constructor(
      private http: HttpClient,
      private router: Router
  ) {
  }

  get(endpoint: string, options?: any) {
    options = RequestHelper.constructRequestOptions(options);
    // this.prepare(options);

    return this.http
        .get(endpoint, options);
        // .pipe(map(response => this.checkToken(response)));
  }

  post(endpoint: string, body: any, options?: any): Observable<any> {
    options = RequestHelper.constructRequestOptions(options);
    // this.prepare(options);

    return this.http.post(endpoint, body, options);
        // .pipe(map(response => this.checkToken(response)));
  }

  put(endpoint: string, body: any, options?: any): Observable<any> {
    options = RequestHelper.constructRequestOptions(options);
    // this.prepare(options);

    return this.http
        .put(endpoint, body, options);
        // .pipe(map(response => this.checkToken(response)));
  }

  delete(endpoint: string, options?: any): Observable<any> {
    options = RequestHelper.constructRequestOptions(options);
    // this.prepare(options);

    return this.http
        .delete(endpoint, options);
        // .pipe(map(response => this.checkToken(response)));
  }

  checkToken(response) {
    try {
      // if response is JSON
      const result = response.json();

      if (result && result.code && result.code === 403) {
        this.router.navigate(['/login']);
      }

      return response;
    } catch (error) {
      // if response is HTTP
      if (response && response.status && response.status === 403) {
        this.router.navigate(['/auth/login']);
      }

      return response;
    }
  }
  //
  // private prepare(options: any) {
  //   if (this.authService.expired) {
  //     this.authService.logout();
  //     this.router.navigate(['/auth/login']);
  //
  //     return EMPTY;
  //   }
  //
  //   const token = TokenHelper.get();
  //   (options.headers as HttpHeaders) = options.headers.append('Authorization', `Bearer ${(token as Token).accessToken}`);
  // }
}
