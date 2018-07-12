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

  departments: Department[];

  constructor(
    private departmentsvc: DepartmentService,
    private syssvc: SystemService
  ) { }

  ngOnInit() {
    this.departmentsvc.list()
      .subscribe(resp => {
        this.departments = resp.Data;
        console.log("DepartmentList:", this.departments);
      });
  }

}
