import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatSort, MatTableDataSource} from '@angular/material';
import {XlsxReaderService} from '../modules/excel-parser/service/xlsx-reader.service';
import {XlsxParserService} from '../modules/excel-parser/service/xlsx-parser.service';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {GetRegistryDataService} from '../../service/get-registry-data.service';
import {map} from 'rxjs/operators';
import {RegistreModule} from '../../registre/registre.module';
import {RegistryModel} from '../models/registry.model';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

interface Food {
  value: string;
  viewValue: string;
}
interface TypeContract {
  value: string;
  viewValue: string;
}
interface GOFL {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.scss']
})
export class RegistreComponent implements OnInit, AfterViewInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'RUR'},
    {value: 'pizza-1', viewValue: 'EUR'},
    {value: 'tacos-2', viewValue: 'BEL'}
  ];
  typeContract: TypeContract[] = [
    {value: 'steak-0', viewValue: 'Договор'},
    {value: 'pizza-1', viewValue: 'Приговор'},
    {value: 'steak-0', viewValue: 'Депозит'},
    {value: 'steak-0', viewValue: 'Паразит'}
  ];
  goFl: GOFL[] = [
    {value: 'steak-0', viewValue: 'ГО'},
    {value: 'pizza-1', viewValue: 'ФЛ'}
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumn = {Weight: 'weight', Symbol: 'symbol'};
  fields = Object.keys(this.displayedColumn);


  constructor(
      private xlsxReader: XlsxReaderService,
      private xlsxParser: XlsxParserService,
      private regisrtyService: GetRegistryDataService,
      private router: Router
  ) { }
  // constructor() { }
  dataRegistry = [];
    // [{inn: '1234567890',
    //               kpp: '12345679',
    //               id: '',
    //               name: 'АО Организация Росатома',
    //               is_filial: 'ФЛ',
    //               type_of_contract: 'Депозит',
    //               date_of_signing: '2020-01-01',
    //               date_start: '2020-01-02',
    //               date_end: '2020-02-02',
    //               interest_rate: '5.65',
    //               currency: 'RUR',
    //               amount: '10000',
    //               bic_of_bank: '42202837',
    //               AccountBalanceCurrency: 'BEL',
    //               name_of_bank: 'Банк ВТБ  (ПАО)',
    //               id_bank_account: '1234567890',
    //               comment: null,
    //               balance: '20000'},
    //
    //              {inn: '1857248',
    //               kpp: '17499236',
    //               name: 'АО Организация Росатома',
    //               is_filial: 'ГО',
    //               id: '',
    //               type_of_contract: 'Договор',
    //               date_of_signing: '2020-01-01',
    //               date_start: '2020-01-02',
    //               date_end: '2020-02-02',
    //               interest_rate: '3.65',
    //               currency: 'EUR',
    //               amount: '20000',
    //               bic_of_bank: '2135013',
    //               AccountBalanceCurrency: 'RUR',
    //               name_of_bank: 'Сбербанк  (ПАО)',
    //               id_bank_account: '1234567890',
    //               comment: null,
    //               balance: '1000'}];

  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.getDataRegistry();
  }
  ngAfterViewInit() {
  }

  public getDataRegistry() {
    this.regisrtyService.getData().subscribe((data ) => {
      data.forEach(arr => {
        this.dataRegistry.push(arr);
      });
    });
  }

  public saveData() {
    this.regisrtyService.updateRegistry(this.dataRegistry).subscribe();
  }

  public addRow() {
    this.dataRegistry.push(new RegistryModel());
  }

  public deleteRow(id) {
    this.regisrtyService.deleteRegistry(id).subscribe();
  }

  public importXlsx(event): void {
    const fileName = event.srcElement.value;
    if (!fileName) {
      return;
    }
    this.xlsxReader.getDataOfExelFile(event).subscribe((workBook) => {
      if (!Object.values(workBook.Sheets).length) {
          console.log('more list!!');
      }
      const parsedData = this.xlsxParser.readReport(Object.values(workBook.Sheets)[0]);
      if (parsedData.length) {
          this.router.navigate(['/buffer-deal']);
      }
    });
  }

  startInputChange() {
    document.getElementById('upload_file').click();
  }

}
