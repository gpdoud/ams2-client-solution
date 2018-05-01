export class Address {
  Id: number;
  Code: string;
  Name: string;
  Address1: string;
  Address2: string;
  Address3: string;
  City: string;
  State: string;
  ZipCode: string;
  Active: boolean;

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
    Active: boolean = true
  ) {
    this.Id = Id;
    this.Code = Code;
    this.Name = Name;
    this.Address1 = Address1;
    this.Address2 = Address2;
    this.Address3 = Address3;
    this.City = City;
    this.State = State;
    this.ZipCode = ZipCode;
    this.Active = Active;
  }
}