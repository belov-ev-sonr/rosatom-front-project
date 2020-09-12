import { Injectable } from '@angular/core';
import * as XLSX from 'XLSX';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XlsxReaderService {

  private workBook: XLSX.WorkBook;
  reader: FileReader = new FileReader();

  public getDataOfExelFile(evt: any): Observable<XLSX.WorkBook> {
    return new Observable(observer => {
      if (typeof this.reader === 'undefined') {
        this.reader = new FileReader();
      }

      const target: DataTransfer = evt.target as DataTransfer;
      if (target.files.length !== 1) {
        throw new Error('Cannot use multiple files');
      }

      this.reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        this.workBook = XLSX.read(bstr, {type: 'binary', cellFormula: false, cellHTML: false, cellText: false});
        observer.next(this.workBook);
      };

      this.reader.readAsBinaryString(target.files[0]);
    });

  }
}
