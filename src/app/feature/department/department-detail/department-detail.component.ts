import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DepartmentService } from '@feat/department/department.service';
import { Department } from '@feat/department/department';
import { JsonResponse } from '@feat/utility/json-response';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  resp: JsonResponse; // = new JsonResponse(-200, "MessageValue", "DataValue", "ErrorValue");

  pagetitle: string = "Department Detail";

  department: Department;

  showVerifyDelete: boolean = false;

  edit(): void {
    this.router.navigateByUrl("/departments/edit/"+this.department.Id);
  }
  remove(): void {
    this.showVerifyDelete = !this.showVerifyDelete;
  }
  verify(): void {
    this.departmentsvc.remove(this.department)
      .subscribe(res => {
        console.log("DepartmentRemove:", res);
        this.router.navigateByUrl("/departments/list");
      });
  }

  constructor(
    private departmentsvc: DepartmentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.departmentsvc.get(+id)
      .subscribe(resp => {
        this.department = resp.Data;
        console.log("DepartmentGet:", this.department);
      });
  }

}
