import { Component, OnInit } from '@angular/core';

import { DepartmentService } from '@department/department.service';
import { Department } from '@department/department';
import { SystemService } from '@system/system.service';

import { Property } from '@property/property';

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
    this.departmentsvc.list().subscribe(depart => {
      this.departmentsvc.listProperty().subscribe( propty =>{
           let departInfo: Department[] = depart.Data;
           let propertyInfo: Property[] = propty.Data;
          for( var i in departInfo) {
            for (var j in propertyInfo) {
              if(departInfo[i].Code == propertyInfo[j].Code) {
                departInfo[i].BuildingCost += propertyInfo[j].BuildingCost;
                departInfo[i].PersonalPropertyCost += propertyInfo[j].PersonalPropertyCost;
              }
            }
          }
          this.departments = departInfo;
      });
    });
  }
}
