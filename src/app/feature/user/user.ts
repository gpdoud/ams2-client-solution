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

  constructor() {
    this.Id = 0;
    this.DepartmentId = null;
    this.Active = true;
  }
}