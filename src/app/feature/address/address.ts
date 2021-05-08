export class Address {
  id: number;
  code: string;
  name: string;
  address1: string;
  address2: string;
  address3: string;
  city: string;
  state: string;
  zipCode: string;
  active: boolean;
  dateCreated: string;

  constructor(
    Id: number,
    Code: string,
    Name: string,
    Address1: string,
    Address2: string,
    Address3: string,
    City: string,
    State: string,
    ZipCode: string,
    Active: boolean = true,
    DateCreated: string = new Date().toISOString()
  ) {
    this.id = Id;
    this.code = Code;
    this.name = Name;
    this.address1 = Address1;
    this.address2 = Address2;
    this.address3 = Address3;
    this.city = City;
    this.state = State;
    this.zipCode = ZipCode;
    this.active = Active;
    this.dateCreated = DateCreated;
  }
}