import { Component, OnInit } from '@angular/core';

import { DepartmentService } from '@department/department.service';
import { Department } from '@department/department';
import { SystemService } from '@system/system.service';
import { PropertyService } from '@property/property.service';

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
    private syssvc: SystemService,
    private propertysvc: PropertyService
  ) { }

  ngOnInit() {
    this.syssvc.checkLogin();
    this.propertysvc.list().subscribe(propty => {
      this.departmentsvc.list().subscribe( depart =>{
           let departInfo: Department[] = depart.Data;
           let propertyInfo: Property[] = propty.Data;
           for(var i in departInfo) {
            departInfo[i].BuildingCost = 0;
            departInfo[i].PersonalPropertyCost = 0;
           }
            for( var i in departInfo) {
              for (var j in propertyInfo) {
                if(departInfo[i].Code == propertyInfo[j].Code) {
                  departInfo[i].BuildingCost += propertyInfo[j].BuildingCost;
                  departInfo[i].PersonalPropertyCost += propertyInfo[j].PersonalPropertyCost;
                }
            }
            this.departmentsvc.change(departInfo[i])
              .subscribe(resp =>{ console.log("Updated Department Building cost & Personal Property cost", resp)})
          }
          this.departments = departInfo;
          console.log("DepartmentList + Build Cost + Personal Property Cost:", this.departments);
          this.errormessage = `${this.departments.length} departments`;
      });
    });
  }
}
