import { Injectable } from '@angular/core';
import * as XLSX from 'XLSX';
import {DealModel} from '../../../models/deal.model';

@Injectable({
  providedIn: 'root'
})
export class XlsxParserService {

  public lastParsedData: DealModel[];

  private readonly START_ROWS_TABLE = 10;
  constructor() { }

  public readReport(sheet: XLSX.WorkSheet): DealModel[] {
    const jsonSheet = XLSX.utils.sheet_to_json(sheet, {rawNumbers: true, blankrows: true, defval: ''});
    const tableData = this.readTable(jsonSheet);
    this.lastParsedData = tableData;
    return tableData;
  }

  private readTable(rows: Array<object>): DealModel[] {
    const dealsList = [];
    for (let indexRow = 0; indexRow < rows.length; indexRow++) {
      if (this.isStartTable(indexRow)) {
        continue;
      }
      if (this.isEndTable(rows[indexRow])) {
        break;
      }
      dealsList.push(DealModel.fromXLSXObject(rows[indexRow]));
    }

    return dealsList;
  }

  private isStartTable(indexRow: number): boolean {
    return indexRow < this.START_ROWS_TABLE;
  }

  private isEndTable(row: any): boolean {
    const values = Object.values(row);
    const result =  values.every(el => !el);
    return result;
  }
}
