export class Asset {

  id: number;
  code: string;
  name: string;
  description: string;
  acquiredDate: Date;
  disposedDate: Date;
  PONumber: string;
  cost: number;
  outForRepairDate: Date;
  returnFromRepairDate: Date;
  retiredDate: Date;
  surplusDate: Date;
  residualValue: number;

  constructor(
    id: number,
    code: string,
    name: string,
    description: string,
    acquiredDate: Date,
    disposedDate: Date,
    PONumber: string,
    cost: number,
    outForRepairDate: Date,
    returnFromRepairDate: Date,
    retiredDate: Date,
    surplusDate: Date,
    residualValue: number
  ) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.description = description;
    this.acquiredDate = acquiredDate;
    this.disposedDate = disposedDate;
    this.PONumber = PONumber;
    this.cost = cost;
    this.outForRepairDate = outForRepairDate;
    this.returnFromRepairDate = returnFromRepairDate;
    this.retiredDate = retiredDate;
    this.surplusDate = surplusDate;
    this.residualValue = residualValue;
  }
}