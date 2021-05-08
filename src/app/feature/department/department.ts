export class Department {

  id: number;
  code: string;
  name: string;
  active: boolean;

  constructor(code: string, name: string, active: boolean) {
    this.code = code;
    this.name = name;
    this.active = active;
  }

}