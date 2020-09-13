import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthHttpService} from '../app/services/auth-http.service';

@Injectable({
  providedIn: 'root'
})
export class GetRegistryDataService {

  constructor(private authHttp: AuthHttpService) { }
    public getData() {
     return this.authHttp.get('http://localhost:80/finreport/');
    }

}
