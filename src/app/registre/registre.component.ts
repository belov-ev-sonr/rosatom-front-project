import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';


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

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

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
    {value: 'pizza-1', viewValue: 'Приговор'}
  ];
  goFl: GOFL[] = [
    {value: 'steak-0', viewValue: 'ГО'},
    {value: 'pizza-1', viewValue: 'ФЛ'}
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumn = {Weight: 'weight', Symbol: 'symbol'};
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  fields = Object.keys(this.displayedColumn);
  // constructor() { }
  dataRegistry = [{inn: '1234567890',
                  kpp: '12345679',
                  name: 'АО Организация Росатома',
                  is_filial: 'го',
                  type_of_contract: 'Депозит',
                  date_of_signing: '2020-01-01',
                  date_start: '2020-01-02',
                  date_end: '2020-02-02',
                  interest_rate: '5.65',
                  currency: 'RUR',
                  amount: '10000',
                  bic_of_bank: '42202837',
                  name_of_bank: 'Банк ВТБ  (ПАО)',
                  comment: null,
                  balance: '20000'},
                 {inn: '1857248',
                  kpp: '17499236',
                  name: 'АО Организация Росатома',
                  is_filial: 'го',
                  type_of_contract: 'Депозит',
                  date_of_signing: '2020-01-01',
                  date_start: '2020-01-02',
                  date_end: '2020-02-02',
                  interest_rate: '3.65',
                  currency: 'RUR',
                  amount: '20000',
                  bic_of_bank: '2135013',
                  name_of_bank: 'Сбербанк  (ПАО)',
                  comment: null,
                  balance: '1000'}];

  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
