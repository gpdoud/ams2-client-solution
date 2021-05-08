import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SystemService } from '@system/system.service';
import { DepartmentService } from '@feat/department/department.service';
import { Department } from '@feat/department/department';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {

  pagetitle: string = "Department Edit";

  department: Department;

  save(): void {
    console.log("DepartmentEdit preupdate:", this.department);
    this.departmentsvc.change(this.department)
      .subscribe(rc => {
        console.log("DepartmentEdit rc:", rc);
        this.router.navigateByUrl("/departments/list");
      });
  }

  constructor(
    private departmentsvc: DepartmentService,
    private syssvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.syssvc.checkLogin();
    let id = this.route.snapshot.params.id;
    console.log("DepartmentGet id:", id);
    this.departmentsvc.get(+id)
      .subscribe(resp => {
        this.department = resp.data;
        console.log("DepartmentGet:", this.department);
      });
  }

}
