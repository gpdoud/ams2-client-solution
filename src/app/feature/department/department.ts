export class Department {

  Id: number;
  Code: string;
  Name: string;
  BuildingCost: number;
  PersonalPropertyCost: number;
  Active: boolean;

  constructor(Code: string, Name: string, Active: boolean, BuildingCost: number, PersonalPropertyCost: number) {
    this.Code = Code;
    this.Name = Name;
    this.BuildingCost = BuildingCost;
    this.PersonalPropertyCost = PersonalPropertyCost;
    this.Active = Active;
  }

}