
export class CurrencyModel {
    id: number;
    nameRu: string;
    nameEn: string;


    constructor(id: number, nameRu: string, nameEn: string) {
        this.id = id;
        this.nameRu = nameRu;
        this.nameEn = nameEn;
    }
}
