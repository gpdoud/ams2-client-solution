import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SystemService } from '@system/system.service';
import { DepartmentService } from '@feat/department/department.service';
import { Department } from '@feat/department/department';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})
export class DepartmentCreateComponent implements OnInit {

  pagetitle: string = "Department Create";

  department: Department = new Department('', '', true);

  save(): void {
    console.log("DepartmentCreate preupdate:", this.department);
    this.departmentsvc.create(this.department)
      .subscribe(resp => {
        console.log("DepartmentCreate resp:", resp);
        this.router.navigateByUrl("/departments/list");
      });
  }

  constructor(
    private departmentsvc: DepartmentService,
    private syssvc: SystemService,
    private router: Router
  ) { }

  ngOnInit() {
    this.syssvc.checkLogin();
  }

}
