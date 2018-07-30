import { Department } from '@department/department';

export class User {
  Id: number;
  Username: string;
  Password: string;
  Firstname: string;
  Lastname: string;
  Phone: string;
  Email: string;
  DepartmentId: number;
  Department: Department;
  Active: boolean;
  DepartmentName:string;

  constructor(
    Id: number,
    Username: string,
    Password: string,
    Firstname: string,
    Lastname: string,
    Phone: string,
    Email: string,
    DepartmentId: number,
    Active: boolean
  ) {
    this.Id = Id;
    this.Username = Username;
    this.Password = Password;
    this.Firstname = Firstname;
    this.Lastname = Lastname;
    this.Phone = Phone;
    this.Email = Email;
    this.DepartmentId = DepartmentId;
    this.Active = Active;
  }
}