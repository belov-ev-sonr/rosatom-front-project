import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginModel} from '../../login/models/login.model';
import {AuthHttpService} from '../../../services/auth-http.service';
import {map, mergeMap, tap} from 'rxjs/operators';
import {UserModel} from '../../../models/user.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly HOST = 'http://localhost:80';

  public isLogin = false;

  constructor(
      private http: HttpClient,
      private authHttp: AuthHttpService,
      private router: Router
  ) {
      this.setIsLogged();
  }

  private setIsLogged() {
      this.isLogin = !!this.getToken();
  }

  public login(loginData: LoginModel) {
    return this.authHttp.post(this.HOST + '/auth/login', loginData)
        .pipe(
            tap(tokenData => this.saveToken(tokenData)),
            mergeMap(this.getUserData.bind(this))
            );
  }

  private getUserData() {
    return this.authHttp.get(this.HOST + '/auth/getUser')
        .pipe(
            map(user => new UserModel(user)),
            tap((user) => this.saveUser(user))
        );
  }

  private saveUser(user: UserModel): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.isLogin = true;
  }

  private saveToken(data: any): void {
    localStorage.setItem('token', JSON.stringify(data));
  }

  public logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.isLogin = false;
    this.router.navigate(['/login']);
  }

  public getToken(): any|null {
    return JSON.parse(localStorage.getItem('token'));
  }

  public getUser(): any|null {
    return JSON.parse(localStorage.getItem('user'));
  }
}
