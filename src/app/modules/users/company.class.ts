export class Company {
  name: string;
  catchPhrase: string;
  bs: string;
  constructor(company: CompanyInterface){
    this.name = company.name;
    this.catchPhrase = company.catchPhrase;
    this.bs = company.bs;
  }
}

export interface CompanyInterface {
  bs: string;
  catchPhrase: string;
  name: string;
}
