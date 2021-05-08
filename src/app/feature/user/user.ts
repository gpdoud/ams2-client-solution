import { Department } from '@department/department';

export class User {
  id: number;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  departmentId: number;
  department: Department;
  active: boolean;
  departmentName:string;

  constructor() {
    this.id = 0;
    this.departmentId = null;
    this.active = true;
  }
}