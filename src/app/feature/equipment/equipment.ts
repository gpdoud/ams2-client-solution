import { Asset } from '../asset/asset';

export class Equipment {
  id: number;
  assetId: number;
  asset: Asset;
  description: string;
  serialNumber: string;
  active: boolean;
  dateCreated: string;
  
  constructor(
    id: number, 
    assetId: number, 
    asset: Asset, 
    description: string, 
    serialNumber: string, 
    active: boolean, 
    dateCreated: string = new Date().toISOString()
  ) {
    this.id = id;
    this.assetId = assetId;
    this.asset = asset;
    this.description = description;
    this.serialNumber = serialNumber;
    this.active = active;
    this.dateCreated = dateCreated;
  }
}