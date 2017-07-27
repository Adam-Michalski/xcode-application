import { LatLng, LatLngInterface } from './lat-lng.class';

export class Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: LatLng;
  constructor(address: AddressInterface){
    this.street = address.street;
    this.suite = address.suite;
    this.city = address.city;
    this.zipcode = address.zipcode;
    this.geo = new LatLng(address.geo)
  }
}

export interface AddressInterface {
  city: string
  geo: LatLngInterface;
  street: string
  suite: string
  zipcode: string
}
