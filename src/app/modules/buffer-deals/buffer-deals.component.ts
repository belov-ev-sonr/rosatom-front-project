import { Component, OnInit } from '@angular/core';
import {DealModel} from '../../models/deal.model';
import {CurrencyModel} from '../../models/currency.model';
import {XlsxParserService} from '../excel-parser/service/xlsx-parser.service';
import {XlsxReaderService} from '../excel-parser/service/xlsx-reader.service';

@Component({
  selector: 'app-buffer-deals',
  templateUrl: './buffer-deals.component.html',
  styleUrls: ['./buffer-deals.component.scss']
})
export class BufferDealsComponent implements OnInit {

  public dealRows: DealModel[] = [];

  public currenciesList: CurrencyModel[] = [
      new CurrencyModel(1, 'Руб', 'RUR'),
      new CurrencyModel(1, 'Доллар', 'Dollar')
  ];

  constructor(
      public xlsxParser: XlsxParserService,
      public xlsxReader: XlsxReaderService
  ) {
    this.dealRows.push(new DealModel());
    this.dealRows.push(new DealModel());
    this.dealRows.push(new DealModel());
    this.dealRows.push(new DealModel());
    this.dealRows.push(new DealModel());
    this.dealRows.push(new DealModel());
  }

  ngOnInit() {
    this.init();
  }

  private init() {
    if (this.xlsxParser.lastParsedData) {
      this.dealRows = this.xlsxParser.lastParsedData;
    }
  }

  startInputChange() {
    document.getElementById('upload_file').click();
  }

  importXlsx(event): void {
    const fileName = event.srcElement.value;
    if (!fileName) {
      return;
    }
    this.xlsxReader.getDataOfExelFile(event).subscribe((workBook) => {
      if (!Object.values(workBook.Sheets).length) {
        console.log('more list!!');
      }
      this.dealRows = this.xlsxParser.readReport(Object.values(workBook.Sheets)[0]);
    });
  }

  saveBuffer(event){

  }

}
