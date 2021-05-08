import { Component, OnInit } from '@angular/core';

import { DepartmentService } from '@department/department.service';
import { Department } from '@department/department';
import { SystemService } from '@system/system.service'

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  pagetitle: string = "Department List";
  createlink: string = "/departments/create";
  createlinkname: string = "Create New";
  errormessage: string = "";

  departments: Department[];

  searchfor: string = "";

  sortProperty: string = "Name";
  sortOrder: string = "asc";
  sort(sortBy: string): void {
    if(sortBy === this.sortProperty)
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    else {
      this.sortProperty = sortBy;
      this.sortOrder = 'asc';
    }
  }

  constructor(
    private departmentsvc: DepartmentService,
    private syssvc: SystemService
  ) { }

  ngOnInit() {
    this.syssvc.checkLogin();
    this.departmentsvc.list()
      .subscribe(resp => {
        this.departments = resp.data;
        console.log("DepartmentList:", this.departments);
        this.errormessage = `${this.departments.length} departments`;
      });
  }

}
