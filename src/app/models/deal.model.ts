
export class DealModel {
    idRow: any;
    id: any;
    inn: any;
    kpp: any;
    organizationName: any;
    go: any;
    bikBang: any;
    bankName: any;
    comment: any;
    valuteCode1: any;
    balance: any;
    typeContract: any;
    dateContract: any;
    dataStartContract: any;
    dateEndContract: any;
    calculatedRate: any;
    valuteCode2: any;
    sum: any;


    constructor(row: any = {}) {
        this.idRow              = row.idRow;
        this.id                 = row.id;
        this.inn                = row.inn;
        this.kpp                = row.kpp;
        this.organizationName   = row.organizationName;
        this.go                 = row.go;
        this.bikBang            = row.bikBang;
        this.bankName           = row.bankName;
        this.comment            = row.comment;
        this.valuteCode1        = row.valuteCode1;
        this.balance            = row.balance;
        this.typeContract       = row.typeContract;
        this.dateContract       = row.dateContract;
        this.dataStartContract  = row.dataStartContract;
        this.dateEndContract    = row.dateEndContract;
        this.calculatedRate     = row.calculatedRate;
        this.valuteCode2        = row.valuteCode2;
        this.sum                = row.sum;
    }

    public static fromXLSXObject(row: any): DealModel {
        const values = Object.values(row);
        const deal = new DealModel(...values);
        deal.idRow              = values[0];
        deal.id                 = values[1];
        deal.inn                = values[2];
        deal.kpp                = values[3];
        deal.organizationName   = values[4];
        deal.go                 = values[5];
        deal.bikBang            = values[6];
        deal.bankName           = values[7];
        deal.comment            = values[8];
        deal.valuteCode1        = values[9];
        deal.balance            = values[10];
        deal.typeContract       = values[11];
        deal.dateContract       = values[12];
        deal.dataStartContract  = values[13];
        deal.dateEndContract    = values[14];
        deal.calculatedRate     = values[15];
        deal.valuteCode2        = values[16];
        deal.sum                = values[17];

        return deal;
    }
}
