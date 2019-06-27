import { Asset } from '../asset/asset';

export class Equipment {
  Id: number;
  AssetId: number;
  Asset: Asset;
  Description: string;
  SerialNumber: string;
  Active: boolean;
  DateCreated: string;

  constructor(
    Id: number, 
    AssetId: number, 
    Asset: Asset, 
    Description: string, 
    SerialNumber: string, 
    Active: boolean, 
    DateCreated: string = new Date().toISOString()
  ) {
    this.Id = Id;
    this.AssetId = AssetId;
    this.Asset = Asset;
    this.Description = Description;
    this.SerialNumber = SerialNumber;
    this.Active = Active;
    this.DateCreated = DateCreated;
  }
}