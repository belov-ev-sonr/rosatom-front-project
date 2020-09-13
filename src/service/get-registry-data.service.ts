import { Injectable } from '@angular/core';
import {AuthHttpService} from '../app/services/auth-http.service';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetRegistryDataService {

  constructor(private authHttp: AuthHttpService) { }

  public getData() {
   return this.authHttp.get('http://localhost:80/finreport/')
     .pipe(
       map(registry => Object.values(registry))
     );
  }

  public updateRegistry(data) {
   return this.authHttp.post('http://localhost:80/finreport/', data);
  }

  public deleteRegistry(id) {
    console.log(id);
   return this.authHttp.delete('http://localhost:80/finreport/id', id);
  }

  private saveRegistry(registry: any): void {
    localStorage.setItem('registry', JSON.stringify(registry));
  }

}
