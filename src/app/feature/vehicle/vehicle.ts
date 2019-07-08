import { Asset } from '@feat/asset/asset';

export class Vehicle {

  Id: number;
  Code: string;
  AssetId: number;
  Asset: Asset;
  Make: string;
  Model: string;
  Year: number;
  LicensePlate: string;
  VIN: string;
  TitleNo: string;
  Active: boolean;
  AssetName:string;

  constructor(
    Id: number,
    Code: string,
    AssetId: number,
    Asset: Asset,
    Make: string,
    Model: string,
    Year: number,
    LicensePlate: string,
    VIN: string,
    TitleNo: string,
    Active: boolean = true
  ) {
    this.Id = Id;
    this.Code = Code,
    this.AssetId = AssetId;
    this.Asset = Asset;
    this.Make = Make;
    this.Model = Model;
    this.Year = Year;
    this.LicensePlate = LicensePlate;
    this.VIN = VIN;
    this.TitleNo = TitleNo;
    this.Active = Active;
  }
}