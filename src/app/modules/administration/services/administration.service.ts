import { Injectable } from '@angular/core';
import {AuthHttpService} from '../../../services/auth-http.service';
import {Observable} from 'rxjs';
import {UserModel} from '../../../models/user.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  private readonly HOST = 'http://localhost:80';

  constructor(private authHttp: AuthHttpService) { }

  public getUsersList(): Observable<UserModel[]> {
    return this.authHttp.post(this.HOST + '/user/list', {})
        .pipe(
            map(this.getUserListByArray.bind(this))
        );
  }

  public getUserById(userId: number): Observable<UserModel> {
    return this.authHttp.get(this.HOST + `/user/${userId}`)
        .pipe(
            map((user) => new UserModel(user))
        );
  }

  private getUserListByArray(usersList: any[]): UserModel[] {
    return usersList.map(user => new UserModel(user));
  }
}
