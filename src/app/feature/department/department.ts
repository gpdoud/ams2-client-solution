export class Department {

  Id: number;
  Code: string;
  Name: string;
  Active: boolean;

  constructor(Code: string, Name: string, Active: boolean) {
    this.Code = Code;
    this.Name = Name;
    this.Active = Active;
  }

}