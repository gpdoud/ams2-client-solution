export class Asset {

  Id: number;
  Code: string;
  Name: string;
  Description: string;
  AcquiredDate: Date;
  DisposedDate: Date;
  PONumber: string;
  Cost: number;
  OutForRepairDate: Date;
  ReturnFromRepairDate: Date;
  RetiredDate: Date;
  SurplusDate: Date;
  ResidualValue: number;

  constructor(
    Id: number,
    Code: string,
    Name: string,
    Description: string,
    AcquiredDate: Date,
    DisposedDate: Date,
    PONumber: string,
    Cost: number,
    OutForRepairDate: Date,
    ReturnFromRepairDate: Date,
    RetiredDate: Date,
    SurplusDate: Date,
    ResidualValue: number
  ) {
    this.Id = Id;
    this.Code = Code;
    this.Name = Name;
    this.Description = Description;
    this.AcquiredDate = AcquiredDate;
    this.DisposedDate = DisposedDate;
    this.PONumber = PONumber;
    this.Cost = Cost;
    this.OutForRepairDate = OutForRepairDate;
    this.ReturnFromRepairDate = ReturnFromRepairDate;
    this.RetiredDate = RetiredDate;
    this.SurplusDate = SurplusDate;
    this.ResidualValue = ResidualValue;
  }
}