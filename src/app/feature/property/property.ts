import { Asset } from '../asset/asset';
import { Address } from '../address/address';

export class Property {
  id: number;
  code: string;
  description: string;
  address1: string;
  address2: string;
  address3: string;
  city: string;
  state: string;
  zipCode: string;
  assetId: number;
  asset: Asset;
  active: boolean;
  dateCreated: string;
  dateUpdated: string;

  constructor(
    id: number,
    code: string,
    description: string,
    address1: string,
    address2: string,
    address3: string,
    city: string,
    state: string,
    zipCode: string,
    assetId: number,
    asset: Asset,
    active: boolean
  ) {
    this.id = id;
    this.code = code;
    this.description = description;
    this.address1 = address1;
    this.address2 = address2;
    this.address3 = address3;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.assetId = assetId;
    this.asset = asset;
    this.active = active;
  }
}
