import { Asset } from '../asset/asset';

export class Vehicle {

  id: number;
  code: string;
  assetId: number;
  asset: Asset;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  VIN: string;
  titleNo: string;
  active: boolean;
  assetName:string;

  constructor(
    id: number,
    code: string,
    assetId: number,
    asset: Asset,
    make: string,
    model: string,
    year: number,
    licensePlate: string,
    VIN: string,
    titleNo: string,
    active: boolean = true
  ) {
    this.id = id;
    this.code = code,
    this.assetId = assetId;
    this.asset = asset;
    this.make = make;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;
    this.VIN = VIN;
    this.titleNo = titleNo;
    this.active = active;
  }
}