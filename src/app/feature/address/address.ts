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

  constructor(
    Id: number,
    Code: string,
    Name: string,
    Address1: string,
    Address2: string,
    Address3: string,
    City: string,
    State: string,
    ZipCode: string
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
  }
}