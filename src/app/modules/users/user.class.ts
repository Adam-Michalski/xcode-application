import { Address, AddressInterface } from './address.class';
import { Company, CompanyInterface } from './company.class';

export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  constructor(user: UserInterface){
    this.id = user.id;
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;
    this.address = new Address(user.address);
    this.phone = user.phone;
    this.website = user.website;
    this.company = new Company(user.company);
  }
}

export interface UserInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressInterface;
  phone: string;
  website: string;
  company: CompanyInterface;
}







