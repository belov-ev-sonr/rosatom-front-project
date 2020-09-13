
export class RegistryModel {
  id: string;
  inn: string;
  kpp: string;
  name: string;
  is_filial: string;
  type_of_contract: string;
  date_of_signing: string;
  date_start: string;
  date_end: string;
  interest_rate: string;
  currency: string;
  amount: string;
  bic_of_bank: string;
  AccountBalanceCurrency: string;
  name_of_bank: string;
  id_bank_account: string;
  comment: string;
  balance: string;

  constructor(registry: any = {}) {
    this.id = registry.id ? registry.id : '';
    this.inn = registry.inn ? registry.inn : '';
    this.kpp = registry.kpp ? registry.kpp : '';
    this.name = registry.name ? registry.name : '';
    this.is_filial = registry.is_filial ? registry.is_filial : '';
    this.type_of_contract = registry.type_of_contract ? registry.type_of_contract : '';
    this.date_of_signing = registry.date_of_signing ? registry.date_of_signing : '';
    this.date_start = registry.date_start ? registry.date_start : '';
    this.date_end = registry.date_end ? registry.date_end : '';
    this.interest_rate = registry.interest_rate ? registry.interest_rate : '';
    this.currency = registry.currency ? registry.currency : '';
    this.amount = registry.amount ? registry.amount : '';
    this.bic_of_bank = registry.bic_of_bank ? registry.bic_of_bank : '';
    this.AccountBalanceCurrency = registry.AccountBalanceCurrency ? registry.AccountBalanceCurrency : '';
    this.name_of_bank = registry.name_of_bank ? registry.name_of_bank : '';
    this.id_bank_account = registry.id_bank_account ? registry.id_bank_account : '';
    this.comment = registry.comment ? registry.comment : null;
    this.balance = registry.balance ? registry.balance : '';
  }
}
