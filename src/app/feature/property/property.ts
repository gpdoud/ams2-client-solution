import { Asset } from '@feat/asset/asset';
import { Address } from '@feat/address/address';

export class Property {
  Id: number;
  Code: string;
  Description: string;
  Address1: string;
  Address2: string;
  Address3: string;
  City: string;
  State: string;
  ZipCode: string;
  AssetId: number;
  Asset: Asset;
  Active: boolean;
  DateCreated: string;
  DateUpdated: string;
  BuildingCost: number;
  PersonalPropertyCost: number;

  constructor(
    Id: number,
    Code: string,
    Description: string,
    Address1: string,
    Address2: string,
    Address3: string,
    City: string,
    State: string,
    ZipCode: string,
    AssetId: number,
    Asset: Asset,
    Active: boolean,
    BuildingCost: number,
    PersonalPropertyCost: number
  ) {
    this.Id = Id;
    this.Code = Code;
    this.Description = Description;
    this.Address1 = Address1;
    this.Address2 = Address2;
    this.Address3 = Address3;
    this.City = City;
    this.State = State;
    this.ZipCode = ZipCode;
    this.AssetId = AssetId;
    this.Asset = Asset;
    this.Active = Active;
    this.BuildingCost = BuildingCost;
    this.PersonalPropertyCost = PersonalPropertyCost;
  }
}
